import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }

  render() {
    return (
      <div>
        {this.state.status ?
        <div>
          <h1>Bem-vindo ao Sistema</h1>
          <button onClick={() => this.setState({ status: false })}>Sair</button>
          </div>
           :
           <div>
          <h1>Faça o login!</h1>
          <button onClick={() => this.setState({ status: true })}>Logar</button>
          </div>
        }

      </div>
    );

  }
}

export default App;