import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className='mainPage__wrapper'>
      <div className="header">
        <div className="container">
          <NavLink to='/new-channel'>
            <button>Create a channel</button>
          </NavLink>
          <NavLink to='/'>
            <span>Stark</span>
          </NavLink>
        </div>
      </div>
      <div className="body">
        <WelcomeComponent />
      </div>
      <NewChannel />
    </div>
  )
};

const WelcomeComponent = (props) => {
  return (
    <h1>Welcome to test chat</h1>
  )
};

const NewChannel = (props) => {
  return (
    <div className='newChannel'>
      <h2>New Channel</h2>
      <form action="">
        <input type="text" placeholder='Channel Title..' required/>
        <input type="text" placeholder='Channel Description' required/>
        <input type="submit" value='Create' />
      </form>
    </div>
  )
};

export default MainPage;