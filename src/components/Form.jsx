import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <section className="section">
        <form className="form">
          <h3 className="add-card">Adicione Nova Carta</h3>
          <label className="label" htmlFor="nameText">
            Name:
            <input
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              id="nameText"
            />
          </label>
          <div>
            <label className="label" htmlFor="description">
              Descrição:
              <textarea
                data-testid="description-input"
                id="description"
                name="cardDescription"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label className="label" htmlFor="number1">
              Attr01
              <input
                type="number"
                name="cardAttr1"
                id="number1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <label className="label" htmlFor="number2">
              Attr02
              <input
                type="number"
                name="cardAttr2"
                id="number2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <label className="label" htmlFor="number3">
              Attr03
              <input
                type="number"
                name="cardAttr3"
                id="number3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label className="label" htmlFor="image">
              Imagem
              <input
                type="text"
                name="cardImage"
                id="image"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <label className="label" htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              id="rare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>NORMAL</option>
              <option>RARO</option>
              <option>MUITO RARO</option>
            </select>
          </label>
          <div className="save-trunfo">

            {!hasTrunfo
              ? (
                <label className="label-trunfo" htmlFor="trunfo">
                  <h4 id="super-trunfo"> Super Trybe Trunfo </h4>
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="trunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>) : 'Você já tem um Super Trunfo em seu baralho'}
            <button
              id="button-save"
              type="button"
              data-testid="save-button"
              name="isSaveButtonDisabled"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>

        </form>
      </section>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
