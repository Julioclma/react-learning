import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frase: ''
    }

    this.frases = [
      'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
      'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!',
      'Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!',
      'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
      'A gratidão é uma grande aliada do sucesso!',
      'A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.',
      'A gratidão é o único tesouro dos humildes.',
      'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!',
      'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
      'Conserve os olhos fixos num ideal sublime e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida.'
    ];

    this.changeFrase = this.changeFrase.bind(this);

  }

  changeFrase() {
    this.setState({ frase: this.frases[Math.floor(Math.random() * (this.frases).length)] });
  }




  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img' />
        <ButtonBiscoito name='Abrir Biscoito' actionButton={this.changeFrase} />
        <h3 className='texto-frase'>{this.state.frase}</h3>
      </div>
    );

  }
}

class ButtonBiscoito extends Component {


  render() {
    return (
      <div>
        <button onClick={this.props.actionButton}>{this.props.name}</button>
      </div>
    )
  }
}

export default App;