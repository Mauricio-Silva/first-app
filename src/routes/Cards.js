import { Component } from "react";
import { Link } from 'react-router-dom';
import { loadCards } from "../utils/load-cards";
import { Card } from "../components/Card";
import { Button } from "../components/Button";


class CardsPage extends Component {
  state = {
    cards: [],
    allCars: [],
    page: 0,
    cardsPerPage: 3,
    searchValue: ''
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = async () => {
    const { page, cardsPerPage} = this.state;
    const allCards = await loadCards();
    const cards = allCards.slice(page, cardsPerPage);
    this.setState({cards: cards, allCars: allCards})
  }

  loadMoreCards = () => {
    const { cards, allCars, page, cardsPerPage } = this.state;
    const nextPage = page + cardsPerPage;
    const nextCards = allCars.slice(nextPage, nextPage + cardsPerPage);
    this.setState({cards: [...cards, ...nextCards], page: nextPage});
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({searchValue: value});
  }

  render() {
    const { cards, searchValue } = this.state;
    const filteredCards = !!searchValue ? cards.filter(card => {
      return card.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : cards;
    return (
      <section className="container">
        <div className="btn-area">
          <Link to="/" className="btn btn-dark btn-lg btn-router">Home</Link>
        </div>
        <input type="text" id="search" placeholder="Search..." onChange={this.handleSearch} value={searchValue}/>
        <div className="posts">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card}/>
          ))}
        </div>
        <Button text="Load more cards" action={this.loadMoreCards}/>
      </section>
    );
  }
}

export default CardsPage;
