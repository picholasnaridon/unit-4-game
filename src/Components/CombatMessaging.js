import React, { Component } from 'react';

class CombatMessaging extends Component {
    constructor(props){
        super(props)

        this.renderMessaging = this.renderMessaging.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }
    resetGame(){
        this.props.gameOver()
    }
    renderMessaging(){
        switch(this.props.game) {
            case "initial":
                return(
                    <div>
                        <h1>StarWars</h1>
                        <p> Pick a character </p>
                    </div>
                )
            break;
            case "won":
                return(
                    <div>
                        <h1> You've Won </h1>
                        <button onClick={this.resetGame}>Reset Game </button>
                    </div>
                )
            break;
            case "charSelected":
                return(
                    <h1>Pick an Enemy</h1>
                )
            break;
            case "playing":
                return (
                    <h1>Attack! </h1>
                )
            break;
            case "lost" :
                return(
                    <h1>You've Lost, Try again! </h1>
                )
            break;

        }
        
    }

    render() {
        return (
            <div>
                {this.renderMessaging()}
            </div>
        );
    }
}

export default CombatMessaging;