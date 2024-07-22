import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef(); //useRef - creating the references , nameRef, emailRef are referring email, name input DOM elements
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log(`Name: ${name}, Email: ${email}`);

   
  };

  return (
    <div>
      <h2>UncontrolledForm Example</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default UncontrolledForm;
