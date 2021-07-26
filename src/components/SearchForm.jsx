import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: []
        }

    }

    _fetchUser = async (user) => {
        const response = await fetch(
            `https://api.github.com/users/${user}`
        ).then(response => response.json());
        this.setState({
            users: [...this.state.users, response]
        })
        console.log('API RESPONSE: ', response);
    }

    _handleChange(field, val) {
        this.setState({
            [field]: val
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._fetchUser(this.state.userName);
    }



    render() {
        return (
            <>
                <Router>
                    <Route exact path="/">
                        <form onSubmit={this._handleSubmit}>
                            <input type="text" placeholder="Enter a username" value={this.state.userName} onChange={(event) => {
                                this._handleChange('userName', event.target.value)
                            }}></input>
                            <button type="submit">Search</button>
                        </form>
                        <UserCardList users={this.state.users} />
                    </Route>
                    <Route path='/user/:username'>
                        <UserProfile users={this.state.users} />
                    </Route>
                </Router>
            </>
        )
    }
}

export default SearchForm;