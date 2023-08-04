import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Mau',
      counter: 0
    };
  }

  handleClick = () => {
    const { name } = this.state;
    console.log(`Hello, ${name}!`);
    this.setState({ name: 'Gandalf' });
  }

  handleIncrease = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1});
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span onClick={this.handleClick}>{name} - {counter}</span>
            <br/>
            <button onClick={this.handleIncrease}>+</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
