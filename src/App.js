import React, { Component } from 'react';
import Feed  from './components/Feed';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1, userName: 'Julio', likes : 10, comments:2
        },
        {
          id: 2, userName: 'Lucas', likes : 5, comments:1
        },
        {
          id: 3, userName: 'Amanda', likes : 1000, comments:85
        },
        {
          id: 4, userName: 'Roberto', likes : 2, comments:0
        }
      ]
    }
  }

  render() {
    return (
      <div>
     {this.state.feed.map((item) => {
      return (
      <Feed id={item.id} userName={item.userName} likes={item.likes} comments={item.comments}/>
      );
     })}
      </div>
    );

  }
}

export default App;