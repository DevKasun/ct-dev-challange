import React, { Component } from 'react';
import axios from 'axios';

class Galary extends Component {
    
    state = {
        albums:[],
        photos:[]
    }
    
    componentDidMount() {
        //console.log(this.props)
        let id = this.props.match.params.album_id
        //console.log(id)
        axios.get("https://jsonplaceholder.typicode.com/albums/" + id)
        .then(res => {
            //console.log(res);
            this.setState({
                albums: res.data
            })
            return axios.get(`https://jsonplaceholder.typicode.com/photos`)
        }).then(res => {
            //console.log(res)
            this.setState({
                photos: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        const { albums, photos } = this.state;
        
        const albumPhotos = photos.filter(photo => {
            return albums.id == photo.albumId
        })

        console.log(albumPhotos)

        const photoList = albumPhotos.length ? (
            albumPhotos.map(photo => {
                return(
                    <div className="img-wrap" key={photo.id}>
                        <img src={photo.url} alt="photos"/>
                    </div>
                )
            })
        ) : (
            <div style={noPost}>No photos...</div>
        )
    
        return (
            
            <div className="container">
                <h2 className="page-header">Photos</h2>
                <div className="img-grid">
                    { photoList }
                </div>
            </div>
        )
    }
}

const noPost = {
    textAlign: 'center',
    padding: '40px 0'
}

export default Galary;