import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      gender: '',
    }

    this.alteraSenha = this.alteraSenha.bind(this);
  }


  alteraSenha(element) {
    this.setState({ password: element.target.value });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={(element) => this.setState({ email: element.target.value })} /><br></br>
        Senha:
        <input type="password" name="password" value={this.state.password} onChange={this.alteraSenha} /><br></br>
        Qual seu sexo?
        <select name='gender' onChange={(element) => this.setState({ gender: element.target.value })}>
          <option value="">Selecione</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <a>{this.state.email} - {this.state.password} - {this.state.gender}</a>
      </div>
    );

  }
}

export default App;