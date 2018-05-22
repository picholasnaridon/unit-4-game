import React, { Component } from 'react';

class Enemy extends Component {
    render() {
        return (
            <div >
                <h1>{this.props.name}</h1>
                <p>ID: {this.props.id}</p>
                <p>Attach Power: {this.props.AP}</p>
                <p>Counter Attack Power: {this.props.counterAP}</p>
                <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
            </div>
        );
    }
}

export default Enemy;