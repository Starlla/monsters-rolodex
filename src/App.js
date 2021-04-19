import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SerachBox } from './components/serach-box/serach-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serachField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const {monsters, serachField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(serachField.toLowerCase()));
    return (
      <div className="App">
        <SerachBox onSearchChange={e=>this.setState({serachField: e.target.value})}/>
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }

}

export default App;
