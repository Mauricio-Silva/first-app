import { Component } from "react";
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <main>
        <Link to="/cards" className="btn btn-dark btn-lg">Cards</Link>
        <Link to="/albums" className="btn btn-dark btn-lg">Albums</Link>
      </main>
    );
  }
}

export default HomePage;
