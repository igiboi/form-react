import React, { useRef, useState } from 'react';


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredNameTouch, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouch, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;
  
  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid(true);
    } 

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const EmailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const EmailInputBlurHandler = event => {
    setEnteredEmailTouched(true);

  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');

    console.log(enteredName);
    // after hitting submit button it will be brand new form and wont receive errors on
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);

  };

  // if input is valid put form-control else add className= form-control invalid
  const nameInputClasses = nameInputIsInvalid && emailInputIsInvalid
   ? 'form-control invalid' 
   : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className={nameInputClasses}>
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
