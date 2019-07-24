import React, { Component } from 'react';
import axios from 'axios';

class UserPost extends Component {

    state = {
        users: [],
        posts: []
    }



    componentDidMount() {
        console.log(this.props)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res);
            this.setState({
                users: res.data
            })
            return axios.get(`https://jsonplaceholder.typicode.com/posts`)
        }).then(res => {
            console.log(res)
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {posts, users} = this.state;
        
        return (
            <div>
                wrefef
            </div>
        )
    }
}

export default UserPost;
