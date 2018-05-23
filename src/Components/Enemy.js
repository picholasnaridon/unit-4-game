import React, { Component } from 'react';

class Enemy extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
        this.handlePick = this.handlePick.bind(this)
    }
    handlePick(target){
        this.props.selectFromList(this.props)
    }
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                <button onClick={this.handlePick}>Button</button>
            </div>
        );
    }
}

export default Enemy;