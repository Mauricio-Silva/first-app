import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
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

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
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
