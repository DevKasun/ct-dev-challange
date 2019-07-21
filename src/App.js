import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "eum et est occaecati",
                    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                },
            ],
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                        "street": "Douglas Extension",
                        "suite": "Suite 847",
                        "city": "McKenziehaven",
                        "zipcode": "59590-4157",
                        "geo": {
                        "lat": "-68.6102",
                        "lng": "-47.0653"
                        }
                    },
                    "phone": "1-463-123-4447",
                    "website": "ramiro.info",
                    "company": {
                        "name": "Romaguera-Jacobson",
                        "catchPhrase": "Face to face bifurcated interface",
                        "bs": "e-enable strategic applications"
                    }
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "address": {
                        "street": "Hoeger Mall",
                        "suite": "Apt. 692",
                        "city": "South Elvis",
                        "zipcode": "53919-4257",
                        "geo": {
                        "lat": "29.4572",
                        "lng": "-164.2990"
                        }
                    },
                    "phone": "493-170-9623 x156",
                    "website": "kale.biz",
                    "company": {
                        "name": "Robel-Corkery",
                        "catchPhrase": "Multi-tiered zero tolerance productivity",
                        "bs": "transition cutting-edge web services"
                    }
                },
            ],
            comments: [
                {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                    "postId": 1,
                    "id": 2,
                    "name": "quo vero reiciendis velit similique earum",
                    "email": "Jayne_Kuhic@sydney.com",
                    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                },
                {
                    "postId": 1,
                    "id": 3,
                    "name": "odio adipisci rerum aut animi",
                    "email": "Nikita@garfield.biz",
                    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
                },
                {
                    "postId": 1,
                    "id": 4,
                    "name": "alias odio sit",
                    "email": "Lew@alysha.tv",
                    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
                },
                {
                    "postId": 1,
                    "id": 5,
                    "name": "vero eaque aliquid doloribus et culpa",
                    "email": "Hayden@althea.biz",
                    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
                },
                {
                    "postId": 2,
                    "id": 6,
                    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
                    "email": "Presley.Mueller@myrl.com",
                    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
                },
            ]
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then( res => {
        //     console.log(res);
        //     this.setState({
        //         posts: res.data
        //     })
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    render() {
        const { posts } = this.state; 
        console.log(posts)
        return(
            <Router>
                <div id="App">
                    <main>
                        <Header />
                        <Route exact path="/" render={ props => (
                            <React.Fragment>
                                <Home posts={posts}/>
                            </React.Fragment>
                        ) } />
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;