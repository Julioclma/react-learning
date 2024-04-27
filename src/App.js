import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hour: new Date().toLocaleTimeString()
    };
  }

  componentDidMount(){

    setInterval(() => {
      this.setState({hour: new Date().toLocaleTimeString()});
    }, 1000);

  }

  componentDidUpdate(){
    console.log(this.state.hour);
    console.log('atualizou');
  }

 
  render() {
    return (
      <div>
    <p>Horário: {this.state.hour}</p>
      </div>
    );

  }
}

export default App;