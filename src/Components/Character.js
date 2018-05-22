import React, { Component } from 'react';

class Character extends Component {
    constructor(props){
        super(props)

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(){
        this.props.selectChar(this.props.id)
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>ID: {this.props.id}</p>
                <p>Attach Power: {this.props.AP}</p>
                <p>Counter Attack Power: {this.props.counterAP}</p>
                <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                <button onClick={this.handleSelect}>Select</button>
            </div>
        );
    }
}

export default Character;