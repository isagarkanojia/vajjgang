import React, { Component } from 'react'
import CardList from './CardList'
import { vajjgang } from './vajjgang';
import SearchBox from './SearchBox';
import './App.scss'
import Scroll from'./Scroll';


class App extends Component {
    constructor() {
        super();
        this.state = {
            vajjgang: [],
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }


    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users =>  {
        //         this.setState({ vajjgang: users });
        //     })

        this.setState({ vajjgang: vajjgang });
    }

    render() {
        const filteredVajjGang = this.state.vajjgang.filter(vajj => {
            return vajj.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                || vajj.alias.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="app-box">
                <h1>Vajj Gang</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList vajjgang={filteredVajjGang} />
                </Scroll>
            </div>
        );
    }
}

export default App;