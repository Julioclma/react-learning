import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Julio',
      contador: 0
    };
    
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add = () => {
    this.state.name = "Atualiza"
    this.state.contador++;
    this.setState(this.state); 
  }

  remove = () => {
    this.state.contador--;
    this.setState(this.state); 
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h3><button onClick={this.remove}>-
        </button>{this.state.contador}
          <button onClick={this.add}>+</button>
        </h3>
      </div>
    );

  }
}

export default App;