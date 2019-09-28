import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.components';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
