import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom'

import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component'
import SignPage from './pages/sign/signpage.component';

import {connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {
  
  render() {  
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/* <Route path='/signin' component={SignPage} /> */}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(App);
