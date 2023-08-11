import './App.css';
import { Component } from 'react';

class App extends Component {
  timeoutUpdate = null
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Title1',
        body: 'Body1'
      },
      {
        id: 2,
        title: 'Title2',
        body: 'Body2'
      },
      {
        id: 3,
        title: 'Title3',
        body: 'Body3'
      }
    ]
  };

  componentDidMount() {
    this.handleTimeOut()
  }

  componentDidUpdate() {
    this.handleTimeOut()
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    this.timeoutUpdate = setTimeout(() => {
      posts[0].title = 'other title'
      this.setState({
        posts,
        counter: counter + 1
      })
    }, 2000)
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <div>Counter: {counter}</div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
