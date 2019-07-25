import React, { Component } from 'react';
import axios from 'axios';

class Galary extends Component {
    
    state = {
        albums:[],
        users:[],
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
                    <div key={photo.id} style={imgWrap}>
                        <img src={photo.url} alt="photos"/>
                    </div>
                )
            })
        ) : (
            <div style={noPost}>No photos...</div>
        )
    
        return (
            
            <div className="container">
                <h2 className="page-header">Posts</h2>
                <div className="gridstyle" style={gridstyle}>
                    { photoList }
                </div>
            </div>
        )
    }
}

const gridstyle = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '5px',
    margin: '40px 0',
    transition: 'all 450ms ease-out'
}

const imgWrap = {
    backgroundColor: '#17141d',
    boxShadow: '-1em 0 3em #000',
}

const noPost = {
    textAlign: 'center',
    padding: '40px 0'
}

export default Galary;