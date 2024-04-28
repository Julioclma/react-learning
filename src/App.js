import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }

    this.showData = this.showData.bind(this);
  }

  showData(event) {
    event.preventDefault();
    const { name, email, password } = this.state;

    if(name !== '' && email !== '' && password !== ''){
      alert(`Nome: ${name} \nEmail: ${email} \nSenha: ${password}`);
      this.setState({error: ''});
      return;
    }

    this.setState({error: 'Preencha todos os campos!'});

  }


  render() {
    return (
      <div>
        <h1>Novo usuário</h1>

        <form onSubmit={this.showData}>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={(element) => this.setState({ name: element.target.value })} /><br></br>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={(element) => this.setState({ email: element.target.value })} /><br></br>
          <label>Senha:</label>
          <input type="password" name="password" value={this.state.password} onChange={(element) => this.setState({ password: element.target.value })} /><br></br>
          <button type="submit">+ Cadastrar</button>
        </form>
      </div>
    );

  }
}

export default App;