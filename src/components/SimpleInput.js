
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

    const {
      value: enteredEmail, 
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError, 
      valueChangeHandler: emailChangedHandler, 
      InputBlurHandler: emailBlurHandler,
      reset: resetEmailInput
    } 
      = useInput(value => value.includes('@'));

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid(true);
    } 


  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    // after hitting submit button it will be brand new form and wont receive errors on
    resetNameInput();
    resetEmailInput();

  };

  // if input is valid put form-control else add className= form-control invalid
  const nameInputClasses = nameInputHasError
   ? 'form-control invalid' 
   : 'form-control '

   const emailInputClasses = emailInputHasError
   ? 'form-control invalid' 
   : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
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
          type='text' id='name' 
          onChange={emailChangedHandler} 
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError  && (<p className='error-text'>Email must not be empty and have a @</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
