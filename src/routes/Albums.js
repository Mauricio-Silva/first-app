import { Component } from "react";
import { Link } from 'react-router-dom';
import { loadAlbums } from "../utils/load-albums";
import { Album } from "../components/Album";


class AlbumsPage extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = async () => {
    const albums = await loadAlbums();
    this.setState({albums: albums.slice(0, 12)})
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
            <Album key={album.id} album={album}/>
          ))}
        </div>
      </section>
    );
  }
}

export default AlbumsPage;
