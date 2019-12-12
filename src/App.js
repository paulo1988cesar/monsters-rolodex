import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './componentes/card-list/card-list.component';
import { SearchBox } from './componentes/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters : users }));
  }

  handleKeyUp = e => {
    this.setState({ searchField: e.target.value })
  }
  
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return ( 
      <div className = "App"> 
        <h1>Monsters Holodex</h1>
        <SearchBox  placeholder='Type the name of the monster' handleKeyUp={this.handleKeyUp} />
        <CardList monsters={filteredMonsters}/>
      </div>
      );
    }
  }

  export default App;