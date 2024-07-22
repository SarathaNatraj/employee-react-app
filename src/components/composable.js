import React, { useState } from 'react';
import Button from './button';
import CardContainer from './cardcontainer';
import DialogBox from './dialogbox';
import UncontrolledForm from './uncontrolled';

const Composable = () => {

  const[message,setMessage]=useState('');

  const fetchMessage =(data) =>{
    setMessage([data]);


  }

  const [cards, setCards] = useState([
    { title: 'Card 1', content: 'This is the first card' },
    { title: 'Card 2', content: 'This is the second card' },
  ]);

  const addCard = () => {
    setCards([...cards, { title: `Card ${cards.length + 1}`, content: `This is card ${cards.length + 1}` }]);
  };

  return (
    <div>
      <Button onClick={addCard}>Add Card</Button>
      <CardContainer cards={cards} />
      <p>{message}</p>
      <DialogBox onCloseMessage={fetchMessage}/>
      <UncontrolledForm/>
    </div>
  );
};

export default Composable;
