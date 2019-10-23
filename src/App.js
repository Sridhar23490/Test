
import { Provider } from 'react-redux'
import './App.css';
import Root from './Components/root/root.js'
import store from './Redux/store';
import Addtocart from './Components/Header/AddtoCart/addtocart'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'


import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/addtocart" component={Addtocart} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
