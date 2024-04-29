import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        gender: 'male'
      }
    }

    this.showData = this.showData.bind(this);
    this.formData = this.formData.bind(this);
  }

  showData(event) {
    event.preventDefault();
    const { name, email, password, gender } = this.state.form;

    if (name !== '' && email !== '' && password !== '') {
      alert(`Nome: ${name} \nEmail: ${email} \nSenha: ${password}\nSexo: ${gender}`);
      this.setState({ error: '' });
      return;
    }

    this.setState({ error: 'Preencha todos os campos!' });

  }

  formData(element) {
    let form = this.state.form;
    form[element.target.name] = element.target.value;
    this.setState({ form: form });
  }


  render() {
    return (
      <div>
        <h1>Novo usuário</h1>

        <form onSubmit={this.showData}>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.form.name} onChange={this.formData} /><br></br>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.form.email} onChange={this.formData} /><br></br>
          <label>Senha:</label>
          <input type="password" name="password" value={this.state.form.password} onChange={this.formData} /><br></br>
          <select name="gender" value={this.state.form.gender} onChange={this.formData} >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select><br></br>


          <button type="submit">+ Cadastrar</button>
        </form>
      </div>
    );

  }
}

export default App;