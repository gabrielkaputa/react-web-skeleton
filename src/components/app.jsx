import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from '../components/views/home';

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
                <div>
                    <Route path='/' component={Home} />
                </div>
            </div>
        );
    }
}