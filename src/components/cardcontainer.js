import React from 'react';
import Card from './card';

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content}>
          {card.children}
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
