import { useEffect, useState } from 'react'
import {Link} from 'react-router';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
            <Link to="profile/james">Profile</Link>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;