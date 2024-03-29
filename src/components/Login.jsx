import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from '../features/userSlice';

function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='submit__btn'>Submit</button>
      </form>
    </div>
  )
}

export default Login;