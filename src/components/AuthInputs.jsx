import { useState } from 'react';
import { styled } from 'styled-components';
// import Button from './Button.jsx';
import CustomInput from './CustomInput.jsx';
import TailwindButton from './TailwindComponents/TailwindButton.jsx';
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  `


  const TextButton = styled.button`
    color: #f0b322;
    border: none;

    &:hover {
    color: #f0920e;
}
  `;
  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='mx-auto w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      {/* <ControlDiv> */}
      <div className='flex flex-col gap-2 mb-6'>


        {/* <div className="controls"> */}
        {/* <label>Email</label> */}
        {/* <p>
          <Label
            $invalid={emailNotValid}
          // className={`label ${emailNotValid ? 'invalid' : ''}`}
          >Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p> */}
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange('email', event.target.value)} />
        {/* <label>Password</label> */}
        <CustomInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
        {/* <p>
          <Label
            $invalid={passwordNotValid}
          // className={`label ${emailNotValid ? 'invalid' : ''}`}
          >Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
        {/* </div> */}
        {/* </ControlDiv> */}
      </div>
      <div className="flex justify-end gap-4">
        {/* <TextButton
        //  type="button" 
        // className="text-button"
        >
          Create a new account
        </TextButton> */}
        <button
          type="button"
          className="text-amber-400 hover:text-amber-500"
        >
          Create a new account
        </button>
        {/* <Button className='button' onClick={handleLogin}>Sign In</Button> */}
        <TailwindButton onClick={handleLogin}>Sign In</TailwindButton>
      </div>
    </div>
  );
}
