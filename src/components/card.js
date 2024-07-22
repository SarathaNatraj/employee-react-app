import React from 'react';

const Card = ({ title, content, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
};

export default Card;
