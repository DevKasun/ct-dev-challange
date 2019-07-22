import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {

    state = {
        posts: null
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log(err);
        })
        
    }

    render() {
        const { posts } = this.state;
        const post = posts ? (
            <div className="post">
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
            </div>
        ) : (
            <div>Post loading...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post;
