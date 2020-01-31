import React, { Component } from 'react';
import './App.module.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Toolbar></Toolbar>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}


export default App;
