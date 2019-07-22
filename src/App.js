import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                // {
                //     "userId": 1,
                //     "id": 1,
                //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                // },
                // {
                //     "userId": 1,
                //     "id": 2,
                //     "title": "qui est esse",
                //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                // },
                // {
                //     "userId": 1,
                //     "id": 3,
                //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                // },
                // {
                //     "userId": 1,
                //     "id": 4,
                //     "title": "eum et est occaecati",
                //     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                // },
                // {
                //     "userId": 1,
                //     "id": 5,
                //     "title": "nesciunt quas odio",
                //     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
                // },
            ],
            users: [
                // {
                //     "id": 1,
                //     "name": "Leanne Graham",
                //     "username": "Bret",
                //     "email": "Sincere@april.biz",
                //     "address": {
                //         "street": "Kulas Light",
                //         "suite": "Apt. 556",
                //         "city": "Gwenborough",
                //         "zipcode": "92998-3874",
                //         "geo": {
                //         "lat": "-37.3159",
                //         "lng": "81.1496"
                //         }
                //     },
                //     "phone": "1-770-736-8031 x56442",
                //     "website": "hildegard.org",
                //     "company": {
                //         "name": "Romaguera-Crona",
                //         "catchPhrase": "Multi-layered client-server neural-net",
                //         "bs": "harness real-time e-markets"
                //     }
                // },
                // {
                //     "id": 2,
                //     "name": "Ervin Howell",
                //     "username": "Antonette",
                //     "email": "Shanna@melissa.tv",
                //     "address": {
                //         "street": "Victor Plains",
                //         "suite": "Suite 879",
                //         "city": "Wisokyburgh",
                //         "zipcode": "90566-7771",
                //         "geo": {
                //         "lat": "-43.9509",
                //         "lng": "-34.4618"
                //         }
                //     },
                //     "phone": "010-692-6593 x09125",
                //     "website": "anastasia.net",
                //     "company": {
                //         "name": "Deckow-Crist",
                //         "catchPhrase": "Proactive didactic contingency",
                //         "bs": "synergize scalable supply-chains"
                //     }
                // },
                // {
                //     "id": 3,
                //     "name": "Clementine Bauch",
                //     "username": "Samantha",
                //     "email": "Nathan@yesenia.net",
                //     "address": {
                //         "street": "Douglas Extension",
                //         "suite": "Suite 847",
                //         "city": "McKenziehaven",
                //         "zipcode": "59590-4157",
                //         "geo": {
                //         "lat": "-68.6102",
                //         "lng": "-47.0653"
                //         }
                //     },
                //     "phone": "1-463-123-4447",
                //     "website": "ramiro.info",
                //     "company": {
                //         "name": "Romaguera-Jacobson",
                //         "catchPhrase": "Face to face bifurcated interface",
                //         "bs": "e-enable strategic applications"
                //     }
                // }
            ],
            albums: [],
            photos: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            this.setState({
                posts: res.data
            })
            return axios.get('https://jsonplaceholder.typicode.com/users')
        }).then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { posts, users, value } = this.state; 
        return(
            <Router>
                <div id="App">
                    <main>
                        <Header/>
                        <Switch>
                            <Route exact path="/" render={ props => (
                                <React.Fragment>
                                    <Home posts={posts}  />
                                </React.Fragment>
                            ) } />
                            <Route path="/albums" />
                            <Route path="/:post_id" component={Post} />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;