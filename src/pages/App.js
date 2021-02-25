import React from 'react'
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from "./Welcome";
import Login from './Login'
import NavBar from '../components/NavBarComponents/NavBar'

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <NavBar />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
