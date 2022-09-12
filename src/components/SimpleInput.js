import React, { useRef, useState } from 'react';


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouch, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return; 
    } 

    setEnteredNameIsValid(true)

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;

    console.log(enteredValue);
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  // if input is valid put form-control else add className= form-control invalid
  const nameInputClasses = nameInputIsInvalid
   ? 'form-control' 
   : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' id='name' 
          onChange={nameInputChangeHandler} 
          value={enteredName}
        />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
