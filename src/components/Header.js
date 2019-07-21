import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FilterForm from './FilterForm';

class Header extends Component {
    render() {
        return(
            <header style={ headerStyle }>
                <nav>
                    <div className="container">
                        <ul>
                            <li style={ liStyle }><NavLink to="/"><strong>Home</strong></NavLink></li>
                            <li style={ liStyle }><NavLink to="/about"><strong>Albums</strong></NavLink></li>
                        </ul>
                        <FilterForm/>
                    </div>
                </nav>
            </header>
        )
    }
}

const headerStyle = {
    textAlign: 'left',
    backgroundColor: '#17141d',
    boxShadow: '-1em 0 3em #000',
}

const liStyle = {
    display: 'inline-block',
    padding: '15px',
    fontSize: '20px'
}

export default Header;