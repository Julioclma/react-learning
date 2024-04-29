import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timer: null
    }


    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    if (this.state.timer === null) {
      this.state.timer = setInterval(() => {
        this.setState({ time: (parseFloat(this.state.time) + 0.1).toFixed(1) });
      }, 100);
      return;
    }

    clearInterval(this.state.timer);
    this.setState({ timer: null });

  }

  clean() {
    clearInterval(this.state.timer);
    this.setState({ timer: null })
    this.setState({ time: 0 });
  }


  render() {
    return (
      <div className='container'>
        <h1>{this.state.time}</h1>

        <ButtonActions start={this.start} clean={this.clean} timer={this.state.timer} />

      </div>
    );

  }
}

class ButtonActions extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start} >{this.props.timer !== null ? 'Pausa' : 'Inicia'}</button> - <button onClick={this.props.clean}>Limpar</button>
      </div>
    )
  }
}


export default App;