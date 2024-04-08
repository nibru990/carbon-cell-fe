import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { BarCharts } from './charts/BarCharts';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Trades from './pages/Trades';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/organizations' component={Organizations}/>
          <Route path='/trades' component={Trades}/>
          <Route path='/wallet' component={Wallet}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
