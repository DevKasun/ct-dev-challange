import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    } 
    
    render() {

        const { posts } = this.props;
        const { search } = this.state;

        //console.log(search);

        let filteredPost = posts.filter(post => {
            return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        });
         
        const postsList = filteredPost.length ? (
            filteredPost.map(post => {
                return(
                    <div className="posts" key={post.id}>
                        <Link to={"/posts/" + post.id}>
                            <h1 className="post-header">{ post.title }</h1>
                        </Link>
                    </div>
                )
            })
        ) : (
            <div className="container" style={noPost}>NO POSTS</div>
        )

        return (
            <div className="container">
                <input type="text" style={textInput} value={search} onChange={this.updateSearch.bind(this)} placeholder="Search posts"/>
                <div className="posts-list" style={postWrap}>
                    { postsList }
                </div>
            </div>
        )
    }
}

const noPost = {
    textAlign: 'center',
    padding: '40px 0'
}

const postWrap= {
    margin: '30px 0'
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
export default Home;
