import React, { useRef, useState } from 'react';

const BasicForm = (props) => {
  const nameInputRef = useRef();
  
  const [enteredName, setEnteredName] = useState('');
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);

  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
