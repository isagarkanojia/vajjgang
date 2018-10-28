import React, { Component } from 'react'
import CardList from '../components/CardList'
import { vajjgang } from './vajjgang';
import SearchBox from '../components/SearchBox';
import './App.scss'
import Scroll from '../components/Scroll';
import ErrroBoundary from "../components/ErrorBoundary";


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

        const { vajjgang, searchField } = this.state;

        const filteredVajjGang = vajjgang.filter(vajj => {
            return vajj.name.toLowerCase().includes(searchField.toLowerCase())
                || vajj.alias.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="app-box">
                <h1>Vajj Gang</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrroBoundary>
                        <CardList vajjgang={filteredVajjGang} />
                    </ErrroBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;