import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    updateSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value.substr(0,20)
        })
    }
    
    render() {
        const { users } = this.props;
        const { search } = this.state;

        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        })

        const usersList = filteredUsers.length ? (
            filteredUsers.map(user => {
                return(
                    <div className="userDetails" style={userDetails} key={user.id}>
                        <span>Name :</span>
                        <p style={dataRows}>{user.name}</p>

                        <span>Email :</span>
                        <p style={dataRows}>{user.email}</p>

                        <span>Phone :</span>
                        <p style={dataRows}>{user.phone}</p>

                        <span>Website :</span>
                        <p style={dataRows}>{user.website}</p>

                        <div style={linkFonts}>
                            <Link to={`/users/${user.id}/posts`}>Posts</Link> | <Link to={`/users/${user.id}/albums`}>Albums</Link>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="container" style={noUser}>User not found</div>
        )

        return (
            <div className="container">
                <div className="users-list">
                    <input type="text" style={textInput} value={search} onChange={this.updateSearch.bind(this)} placeholder="Search user name"/>
                    <div className="userList" style={userList}>
                        { usersList }
                    </div>
                </div>
            </div>
        )
        
    }
}

const textInput = {
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid #fff',
    outline: 'none',
    color: '#fff',
    fontSize: '18px',
    padding: '10px',
    marginTop: '20px'
}

const linkFonts = {
    fontSize: '20px'
}

const noUser = {
    textAlign: 'center',
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '30px 0',
}

const userDetails = {
    padding: '30px 0',
    backgroundColor: '#17141d',
    boxShadow: '-1em 0 3em #000',
    padding: '30px 30px',
    // margin: '30px 0',
    borderRadius: '16px',
} 

const userList = {
    // padding: '30px 0'
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '5px',
    margin: '40px 0',
    transition: 'all 450ms ease-out'
}
const dataRows = {
    paddingBottom: '20px'
}

export default Users;
