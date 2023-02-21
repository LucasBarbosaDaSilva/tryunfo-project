import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCard: [],
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, cardImage, cardDescription,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const maxNumber = 90;
      const minNumber = 0;
      const somaNumber = 210;
      const allNumber = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const newButtonEnable = cardName.length < 1
      || cardImage.length < 1 || cardDescription.length < 1
      || Number(cardAttr1) > maxNumber
      || Number(cardAttr1) < minNumber
      || Number(cardAttr2) > maxNumber
      || Number(cardAttr2) < minNumber
      || Number(cardAttr3) > maxNumber
      || Number(cardAttr3) < minNumber
      || allNumber > somaNumber;

      this.setState({
        isSaveButtonDisabled: newButtonEnable,
      });
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardDescription, cardRare, cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }
    ), () => this.handleTrunfo());
  };

  handleTrunfo = () => {
    const { savedCard } = this.state;
    if (savedCard.some((obj) => obj.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  buttonDelete = (actualNameCard) => {
    this.setState((prevState) => ({ savedCard: prevState.savedCard
      .filter((card) => card.cardName !== actualNameCard) }), () => this.handleTrunfo());
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, hasTrunfo, cardTrunfo, isSaveButtonDisabled, savedCard } = this.state;
    return (
      <div id="main">
        <h1 className="title">Tryunfo</h1>
        <section id="section-one">
          <form id="form">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }

            />
            <section id="card">

              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </section>
          </form>
        </section>
        <h2 id="title-cards">Todas as Cartas</h2>
        <section id="cards">

          {
            savedCard.map((card, index) => (
              <div id="all-cards" key={ index }>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  id="button-delete"
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.buttonDelete(card.cardName) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
