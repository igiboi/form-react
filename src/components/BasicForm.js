import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName, 
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError, 
    valueChangeHandler: firstNameChangedHandler, 
    InputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } 
    = useInput(isNotEmpty);

  const {
     value: enteredLastName, 
     isValid: enteredLastNameIsValid,
     hasError: lastNameInputHasError, 
     valueChangeHandler: lastNameChangedHandler, 
     InputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
   } 
     = useInput(isNotEmpty);

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangedHandler, 
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } 
      = useInput(isEmail);

  let formIsValid = false;

    if (enteredFirstNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
      formIsValid = true;
    } 


  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted');
    console.log(enteredFirstName, enteredLastName, enteredEmail)
    // after hitting submit button it will be brand new form and wont receive errors on
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();

  };

  // if input is valid put form-control else add className= form-control invalid
  const firstNameInputClasses = firstNameInputHasError
   ? 'form-control invalid' 
   : 'form-control '

   const lastNameInputClasses = lastNameInputHasError
   ? 'form-control invalid' 
   : 'form-control '

   const emailInputClasses = emailInputHasError
   ? 'form-control invalid' 
   : 'form-control '


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' id='name' 
            onChange={firstNameChangedHandler} 
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
             {firstNameInputHasError && (<p className='error-text'>First Name must not be empty</p>)}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' id='name' 
            onChange={lastNameChangedHandler} 
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
             {lastNameInputHasError && (<p className='error-text'>Last Name must not be empty</p>)}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input    
         type='text' id='name' 
          onChange={emailChangedHandler} 
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError  && (<p className='error-text'>Email must not be empty and have a @</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
