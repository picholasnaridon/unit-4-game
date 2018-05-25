import React, { Component } from 'react';

class Enemy extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
        this.handlePick = this.handlePick.bind(this)
        this.renderSelectButton = this.renderSelectButton.bind(this)
    }
    handlePick(target){
        this.props.selectFromList(this.props)
    }
    renderSelectButton(){
        if(this.props.canPick == 'charSelected'){
            return(
                <button className="card-button" onClick={this.handlePick}>{this.props.name}</button>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        return (
            <div className="enemy">
                <div>
                    <img src={require(`../assets/images/${this.props.imageName}.png`)}/>
                </div>
                <div>
                    {this.renderSelectButton()}
                </div>
            </div>
        );
    }
}

export default Enemy;