import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(name) {
        this.setState({ name: name });
    }



    render() {
        return (
            <div>
                <h2>Bem vindo, {this.state.name}</h2>
                <button onClick={() => this.entrar('Julio')}>Entrar no Sistema</button>
                <button onClick={() => this.setState({ name: 'Visitante' })}>Sair</button>
            </div>
        );
    }
}

export default Membro;