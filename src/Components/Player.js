import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handlePlayerAttack = this.handlePlayerAttack.bind(this)
        this.renderAttackButton = this.renderAttackButton.bind(this)
    }

    handlePlayerAttack(){
        this.props.playerAttack()

    }
    renderAttackButton(){
        if(this.props.gameState == 'playing'){
            return(
                <button  className="card-button" onClick={this.handlePlayerAttack}>Attack!</button>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        if (this.props.playerSelected){
            return (
                <div className="player">
                    <h1>Player</h1>
                    <div>
                        <img src={require(`../assets/images/${this.props.player.imageName}.png`)}/>
                        <div>HP {this.props.player.HP}</div>
                        <div>Base AP {this.props.player.baseAP}</div>
                        <div>Current AP {this.props.player.AP}</div>
                        {this.renderAttackButton()}
                    </div>
                </div>
            );
        }else {
            return (
                <div></div>
            )
        }
       
    }
}

export default Player;