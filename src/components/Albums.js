import { Component } from "react";
import { Link } from 'react-router-dom';
import Photo from '../models/Photo';
import Album from '../models/Album';
import Carousel from "./Carousel";


class Albums extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = async () => {
    const url = 'https://jsonplaceholder.typicode.com';
    const albumsRequest = fetch(url.concat('/albums'));
    const photosRequest = fetch(url.concat('/photos'));
  
    const [albumsResponse, photosResponse] = await Promise.all([albumsRequest, photosRequest]);

    const albumsJson = await albumsResponse.json();
    const photoJson = await photosResponse.json();
  
    const albumsObj = albumsJson.map((obj) => new Album(obj));
    const photosObj = photoJson.map((obj) => new Photo(obj));

    const photosGroup = photosObj.reduce((result, photo) => this.groupPhotos(result, photo), {});
    const albumsGroup = albumsObj.map((album) => {return {id: album.id, title: album.title, urls: photosGroup[album.id]}});

    this.setState({albums: albumsGroup.slice(0, 12)})
  }

  groupPhotos = (result, photo) => {
    if (!result[photo.albumId]) {
      result[photo.albumId] = [{title: photo.title, url: photo.url}]
    } 
    else if (result[photo.albumId].length < 7) {
      result[photo.albumId].push({title: photo.title, url: photo.url})
    }
    return result
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="container">
        <div className="btn-area">
          <Link to="/" className="btn btn-dark btn-lg">Home</Link>
        </div>
        <div className="albums">
          {albums.map((album) => (
            <div key={album.id} className="album">
              <Carousel albumId={album.id} urls={album.urls}></Carousel>
              <h4>{album.title}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Albums;
