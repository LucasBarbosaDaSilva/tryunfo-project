import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <div className="name">
          <h2 data-testid="name-card" id="card-name">
            {cardName}
          </h2>

        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          id="card-image"
        />
        <p data-testid="description-card" id="card-description">
          {cardDescription}
        </p>
        <h3 data-testid="attr1-card" className="card-att" id="att-one">
          Attr1:
          {cardAttr1}
        </h3>
        <h3 data-testid="attr2-card" className="card-att">
          Attr2:
          {cardAttr2}
        </h3>
        <h3 data-testid="attr3-card" className="card-att">
          Attr3:
          {cardAttr3}
        </h3>
        <p data-testid="rare-card" className="rare-trunfo">{cardRare}</p>
        {cardTrunfo
        && <p data-testid="trunfo-card" className="rare-trunfo">Super Trunfo</p>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
