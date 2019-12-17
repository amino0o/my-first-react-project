import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
class  App extends React.Component{
  constructor(){
    super();
    this.state = {
        monsters : [],
        searchField : ''
    }
  }

  componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(Response => Response.json())
          .then(users => this.setState({monsters : users}))
  }
    handleChange = e =>{
        this.setState({ searchField : e.target.value })

    }
  render(){
        const {monsters , searchField} = this.state;
        const filterCard = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='search box'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filterCard} />
            </div>
        );
  }
}

export default App;
