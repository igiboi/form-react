import React, { useRef, useState } from 'react';

import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } 
    = useInput(value => value.trim() !== '');

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouch, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;
  
  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid(true);
    } 

  const EmailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const EmailInputBlurHandler = event => {
    setEnteredEmailTouched(true);

  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    // after hitting submit button it will be brand new form and wont receive errors on
    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);

  };

  // if input is valid put form-control else add className= form-control invalid
  const nameInputClasses = nameInputHasError
   ? 'form-control invalid' 
   : 'form-control '

   const emailInputClasses = nameInputHasError
   ? 'form-control invalid' 
   : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' id='name' 
          onChange={nameChangedHandler} 
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          ref={emailInputRef} 
          type='text' id='name' 
          onChange={EmailInputChangeHandler} 
          onBlur={EmailInputBlurHandler }
          value={enteredEmail}
        />
        {emailInputIsInvalid  && (<p className='error-text'>Email must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
