import React, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.userName}</h3>
                <a>{this.props.likes} Likes / {this.props.comments === 0 ? <span>Comentário</span> : <span>Comentários</span>} </a>
            </div>
        );
    }
}

export default Feed;