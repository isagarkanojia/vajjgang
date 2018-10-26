import React, { Component } from 'react'
import CardList from './CardList'
import { vajjgang } from './vajjgang';
import SearchBox from './SearchBox';
import './App.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            vajjgang: vajjgang,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredVajjGang = vajjgang.filter(vajj => {
            return vajj.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                || vajj.alias.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="app-box">
                <h1>$$Vajj Gang$$</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList vajjgang={filteredVajjGang} />
            </div>
        );
    }
}

export default App;