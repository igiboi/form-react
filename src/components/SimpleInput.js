import React, { useEffect, useRef, useState } from 'react';


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false)
    }

  }, [enteredNameIsValid]);


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');

    console.log(enteredName);
    // after hitting submit button it will be brand new form and wont receive errors on
    setEnteredNameTouched(false);

  };

  // if input is valid put form-control else add className= form-control invalid
  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
