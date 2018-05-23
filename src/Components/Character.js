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
                <div>           
                    <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                </div>
                <div>
                    <button onClick={this.handlePick}>{this.props.name}</button>
                </div>
            </div>
        )
    }

}
   
   

export default Character;