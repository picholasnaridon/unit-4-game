import React, { Component } from 'react';

class Character extends Component {
    constructor(props){
        super(props)

        this.handlePick = this.handlePick.bind(this)

    }

    handlePick(char){
        this.props.selectFromList(this.props)
    }
    render() {
        return(
            <div>                
                <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                <button onClick={this.handlePick}>Button</button>
            </div>
        )
    }

}
   
   

export default Character;