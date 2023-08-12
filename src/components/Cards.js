import { Component } from "react";
import { Link } from 'react-router-dom';
import Post from '../models/Post';
import Card from '../models/Card';
import Photo from '../models/Photo';


class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = async () => {
    const url = 'https://jsonplaceholder.typicode.com';
    const postsResponse = fetch(url.concat('/posts'));
    const photosResponse = fetch(url.concat('/photos'));
  
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsObj = postsJson.map((obj) => new Post(obj))
    const photosObj = photosJson.map((obj) => new Photo(obj))

    const cards = postsObj.map((obj, index) => new Card(obj, photosObj[index].url))

    this.setState({cards: cards})
  }

  render() {
    const { cards } = this.state;
    return (
      <section className="container">
        <div className="btn-area">
          <Link to="/" className="btn btn-dark btn-lg">Home</Link>
        </div>
        <div className="posts">
          {cards.map((card) => (
            <div key={card.id} className="post">
              <img src={card.cover} alt="" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
