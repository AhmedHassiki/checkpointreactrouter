import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';


// **************************************** WELCOME PAGE *******************************************

const Accueil = () => {
  return (
    <>
        <h1>Welcome to the checkpoint of React Router 6</h1>
        <Login />
        <Link to='/navbarSearchAdd'>Click to continue to our Selection</Link>
    </>
  )
}

export default Accueil;