import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {

    state = {
        posts: null,
        comments: [],
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                posts: res.data
            })
            return axios.get('https://jsonplaceholder.typicode.com/comments')
        }).then(res => {
            //console.log(res);
            this.setState({
                comments: res.data.slice(0,20)
            })
        }).catch(err => {
            console.log(err);
        })
        
    }

    render() {
        const { posts, comments } = this.state;

        let postsCmnts = comments.filter(comment => {
            return comment.postId == posts.id
        })

        const post = posts ? (
            <div className="post" style={postStyle}>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
            </div>
        ) : (
            <div>Post loading...</div>
        )
            
        const cmntsList = postsCmnts.length ? (
            postsCmnts.map(cmnt => {
                return(
                    <div className="comment" style={comment} key={cmnt.id}>
                        <p style={commentUserName}>{cmnt.name}</p>
                        <span style={commentUserEmail}>{cmnt.email}</span>
                        <p style={commentBody}>{cmnt.body}</p>
                    </div>
                )
            })
        ) : (
            <div className="container">No comments</div>
        )

        return(
            <div className="container">
                {post}
                <div className="comment-area" style={commentSection}>
                    <h3>Comments</h3>
                    { cmntsList }
                </div>
            </div>
        )
    }
}


const postStyle = {
    padding: '30px 0'
}
const commentSection = {
    padding: '20px 10px'
}
const comment = {
    padding: '20px 0'
}
const commentUserName = {
    fontWeight: '700'
}
const commentUserEmail = {
    fontSize: '14px'
}
const commentBody = {
    fontSize: '18px',
    color: '#da1b5f',
    paddingTop: '10px'
}

export default Post;
