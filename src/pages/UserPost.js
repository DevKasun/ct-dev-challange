import React, { Component } from 'react';
import axios from 'axios';

class UserPost extends Component {

    state = {
        users: [],
        posts: []
    }

    componentDidMount() {
        //console.log(this.props)
        let id = this.props.match.params.user_id
        //console.log(id)
        axios.get("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => {
            //console.log(res);
            this.setState({
                users: res.data
            })
            return axios.get(`https://jsonplaceholder.typicode.com/posts`)
        }).then(res => {
            //console.log(res)
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {posts, users} = this.state;

        const userPosts = posts.filter(post => {
            return post.userId == users.id
        })
        //console.log(userPosts)

        const postsList = userPosts.length ? (
            userPosts.map(post => {
                return(
                    <div className="posts" key={post.id} style={postStyle}>
                        <h1 className="post-header" style={postHeader}>{ post.title }</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ) : (
            <div className="container" style={noPost}>Loading...</div>
        )

        return (
            <div className="container">
                <div className="postSection"> 
                    <h2 className="page-header">Posts</h2>
                    {postsList}
                </div>
            </div>
        )
    }
}

const postStyle = {
    backgroundColor: '#17141d',
    boxShadow: '-1em 0 3em #000',
    padding: '30px 30px',
    margin: '30px 0',
    borderRadius: '16px',
}
const postHeader = {
    paddingBottom: '15px'
}
const noPost = {
    textAlign: 'center',
    padding: '40px 0'
}

export default UserPost;
