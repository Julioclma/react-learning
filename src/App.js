import React, { Component } from 'react';

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre name={this.props.name} responsability={this.props.responsability} age={this.props.age} />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <p>Olá, sou o {this.props.name}</p>
        <p>Cargo: {this.props.responsability}</p>
        <p>Idade: {this.props.age}</p>
        <Social />
      </div>
    )
  }
}

const Social = () => {
  return(
    <div>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
    </div>
  )
}

export default function App() {


  return (
    <div>
      <h1>Conheça nossa equipe: </h1>
      <Equipe name="Julio" responsability="developer" age="23" />
      <Equipe name="João" responsability="developer" age="20" />
    </div>
  )
}