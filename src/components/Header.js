import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import FilterForm from './FilterForm';

class Header extends Component {
    render() {
        const {value} = this.props;
        return(
            <header style={ headerStyle }>
                <nav>
                    <div className="container">
                        <ul>
                            <li style={ liStyle }><Link to="/"><strong>Home</strong></Link></li>
                            <li style={ liStyle }><Link to="/users"><strong>Users</strong></Link></li>
                        </ul>
                        {/* <FilterForm  value={value}/> */}
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
    paddingLeft: '0',
    fontSize: '20px'
}

export default Header;