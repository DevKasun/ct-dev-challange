import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Albums extends Component {

    state = {
        albums:[],
        users:[],
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
            return axios.get(`https://jsonplaceholder.typicode.com/albums`)
        }).then(res => {
            //console.log(res)
            this.setState({
                albums: res.data.slice(0, 12)
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { albums, users, photos } = this.state;

        const userAlbums = albums.filter(album => {
            return album.userId == users.id
        })

        const albumsList = userAlbums.length ? (
            userAlbums.map(album => {
                return(
                    <div className="album" key={album.id}>
                        <Link to={`/users/${users.id}/albums/${album.id}`}>
                            <h3>{album.title}</h3>
                        </Link>
                    </div>
                )
            })
        ) : (
            <div className="container" style={noPost}>Loading...</div>
        )

        console.log(userAlbums)

        return (
            <div className="container">
                <h2 className="page-header">Albums</h2>
                <div className="album-list">
                    {albumsList}
                </div>
            </div>
        )
    }
}

const noPost = {
    textAlign: 'center',
    padding: '40px 0'
}

export default Albums;
