import React, { useState, useEffect } from 'react';
import './Form.css'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loginStatus, SetLoginStatus] = useState(false)

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required.");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (!emailError && !passwordError && !confirmPasswordError) {
      console.log('Form submitted:', { email, password, confirmPassword });
       SetLoginStatus(true);
    }
  };

  useEffect(() => {
    console.log({ email, password, confirmPassword });
  }, [email, password, confirmPassword]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input 
            type='email' 
            placeholder='Email' 
            required 
            value={email} 
            onChange={handleEmailChange}
          />
        </label>
        {emailError && <p>{emailError}</p>}
        <br/>
        <label>
          Password
          <input 
            type='password' 
            placeholder='Password' 
            required 
            value={password} 
            onChange={handlePasswordChange}
          />
        </label>
        {passwordError && <p>{passwordError}</p>}
        <br/>
        <label>
          Confirm Password
          <input 
            type='password' 
            placeholder='Confirm Password' 
            required 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange}
          />
        </label>
        {confirmPasswordError && <p>{confirmPasswordError}</p>}
        <button type='submit' name='submit'>Submit</button>
      </form>
      {loginStatus  && <h1>Login Completed</h1>}
    </div>
  );
};

export default Form;
