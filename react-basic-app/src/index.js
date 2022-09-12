import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './hooks/Login';
import SignUp from './hooks/SignUp';
import History from './hooks/History';
import Sell from './hooks/Sell';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
      <Route exact path='/' element={<App /> }/>
      <Route exact path='/login' element={<Login /> }/>
      <Route exact path='/signUp' element={<SignUp /> }/>
      <Route exact path='/history' element={<History /> }/>
      <Route exact path='/sell' element={<Sell />} />
      </Routes>
    </Router>
  </StrictMode>
);

