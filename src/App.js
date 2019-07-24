import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import Users from './pages/Users';
import UserPost from './pages/UserPost';
import Albums from './pages/Albums';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            this.setState({
                posts: res.data.slice(0,20)
            })
            return axios.get('https://jsonplaceholder.typicode.com/users')
        }).then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
            return axios.get('https://jsonplaceholder.typicode.com/')
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { posts, users } = this.state; 
        return(
            <Router>
                <div id="App">
                    <main>
                        <Header/>
                        <Switch>
                            <Route exact path="/" render={ props => (
                                <React.Fragment>
                                    <Home posts={posts}/>
                                </React.Fragment>
                            ) } />
                            <Route path="/users" render={ props =>(
                                <React.Fragment>
                                    <Users users={users}/>
                                </React.Fragment>
                            )}/>
                            <Route path="/posts/:post_id" component={Post}/>
                            <Route path="/users/:user_id" component={UserPost}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;