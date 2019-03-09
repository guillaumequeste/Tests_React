import React, { Component } from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import AppRouter from './AppRouter';
import CurrentDate from './components/CurrentDate';
import List from './components/List';
import SetState from './components/SetState';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import IncDecRes from './components/IncDecRes';
import ControlledInput from './components/ControlledInput';
import ControlledForm from './components/ControlledForm';
import MyApp from './components/MyApp';
import DidMount from './components/DidMount';
import AddEventListeners from './components/AddEventListeners';
import Controller from './components/Controller';
import ChangeCSSCondition from './components/ChangeCSSCondition';
import EightBall from './components/EightBall';
import RenderToggle from './components/RenderToggle';
import CheckUserAge from './components/CheckUserAge';
import GameOfChance from './components/GameOfChance';
import MyToDoList from './components/MyToDoList';
import ArrayFilter from './components/ArrayFilter';
import AppRouter2 from './AppRouter2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateToProp: 'Je suis une state de App et une prop de setState'
    };
  }
  render() {
      return (
        <div className="App">
          <AppRouter />
          <h3 style={{color:"blue"}}>Hello</h3>
          <Alert color="primary">
              This is a primary alert — check it out!
          </Alert>
          <CurrentDate date={Date()} />
          <List tasks={["manger", "boire", "dormir"]} />
          <SetState stateToProp={this.state.stateToProp}/>
          <Counter />
          <Toggle />
          <IncDecRes />
          <ControlledInput />
          <ControlledForm />
          <MyApp />
          <h3 style={{color:"white", backgroundColor:"black"}}>AddEventListeners :</h3>
          <AddEventListeners />
          <DidMount />
          <Controller />
          <ChangeCSSCondition />
          <EightBall />
          <RenderToggle />
          <CheckUserAge />
          <GameOfChance />
          <MyToDoList />
          <ArrayFilter />
          <AppRouter2 />
        </div >
      );
  }
}

export default App;