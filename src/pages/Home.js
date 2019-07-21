import React, { Component } from 'react';

class Home extends Component {
    render() {
        const { posts } = this.props;
        const postsList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="posts" key={post.id} style={postStyle}>
                        <h1 className="post-header">{ post.title }</h1>
                        <p>{ post.body }</p>
                    </div>
                )
            })
        ) : (
            <div>NO POSTS</div>
        )

        return (
            <div className="container">
                <div className="posts-list">
                    { postsList }
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

export default Home;
