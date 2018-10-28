import React, { Component } from 'react'
import CardList from '../components/CardList'
import { vajjgang } from './vajjgang';
import SearchBox from '../components/SearchBox';
import './App.scss'
import Scroll from '../components/Scroll';
import ErrroBoundary from "../components/ErrorBoundary";
import {setSearchField} from '../actions'
import { connect } from "react-redux";
 

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            vajjgang: [],
        }
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

        const { vajjgang} = this.state;

        const {searchField, onSearchChange} = this.props;

        const filteredVajjGang = vajjgang.filter(vajj => {
            return vajj.name.toLowerCase().includes(searchField.toLowerCase())
                || vajj.alias.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="app-box">
                <h1>Vajj Gang</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrroBoundary>
                        <CardList vajjgang={filteredVajjGang} />
                    </ErrroBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);