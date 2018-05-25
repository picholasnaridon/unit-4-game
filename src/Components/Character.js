import React, { Component } from 'react';
import '../assets/styles/style.css'

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
            <div className="card">  
                <div>           
                    <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                </div>
                <div>
                    <button className="card-button" onClick={this.handlePick}>{this.props.name}</button>
                </div>
            </div>
        )
    }

}
   
   

export default Character;
