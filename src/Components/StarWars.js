import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Player from './Player'
import Target from './Target'
import EnemyList from './EnemyList'
import update from 'react-addons-update'

class StarWars extends Component {
    constructor(props){
        super(props)
        this.state = {
            enemies: [],
            player: null,
            playerSelected: false,
            target: null,
            targetSelected: false,
            game: "initial"
        }
        this.handlePlayerSelect = this.handlePlayerSelect.bind(this)
        this.handleTargetSelect = this.handleTargetSelect.bind(this)
        this.playerAttack = this.playerAttack.bind(this)
        this.renderMessaging = this.renderMessaging.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }
    handlePlayerSelect(playerChar){
        this.setState({
            player: playerChar,
            playerSelected: true,
            game: "charSelected",
            enemies: this.props.data.filter(char => char.name !== playerChar.name) 
        })
    }
    handleTargetSelect(target){
        this.setState({
            target: target,
            targetSelected: true,
            game: "playing",
            enemies: this.state.enemies.filter(char => char.name !== target.name) 
        })
    }
    resetGame(){
        this.setState({
            enemies: [],
            player: null,
            playerSelected: false,
            target: null,
            targetSelected: false,
            game: "initial"
        })
    }

    playerAttack(){
        var playerHP = this.state.player.HP - this.state.target.counterAP
        var targetHP = this.state.target.HP - this.state.player.AP
        var playerAP = this.state.player.AP + this.state.player.baseAP
        
        if (this.state.target.HP <= playerAP){
            this.setState(prevState => ({
                player: {
                    ...prevState.player,
                    HP: playerHP,
                    AP: playerAP
                },
                target: null,
                targetSelected: false,
                game: "charSelected"
            }))
        }else if (this.state.player.HP <= this.state.target.counterAP){
            this.setState(prevState => ({
                enemies: [],
                player: null,
                playerSelected: false,
                target: null,
                targetSelected: false,
                game: "lost"
            }))
        }else{
            this.setState(prevState => ({
                player: {
                    ...prevState.player,
                    HP: playerHP,
                    AP: playerAP
                },
                target: {
                    ...prevState.target,
                    HP: targetHP
                }
            }))
        }
    }

    renderMessaging(){
        if (this.state.game == "initial"){
            return(
                <h1>Pick a Character </h1>
            )
        }else if ((this.state.game == "charSelected") && (this.state.enemies.length == 0)){
            return(
                <div>
                    <h1> You've Won </h1>
                    <button onClick={this.resetGame}>Reset Game </button>
                </div>
            )
        }else if (this.state.game == "charSelected"){
            return(
                <h1>Pick an Enemy</h1>
            )
        }else if (this.state.game == "playing"){
            return (
                <h1>FIGHT TO THE DEATH </h1>
            )
        }else  {
            return(
                <h1>You've Lost, Try again! </h1>
            )
        }
    }



    render() {
        return (
            <div>
                 <div>
                     {this.renderMessaging()}
                     <CharacterList data={this.props.data} selectFromBoard={this.handlePlayerSelect} playerSelected={this.state.playerSelected}/>
                     <EnemyList data={this.state.enemies} playerSelected={this.state.playerSelected} selectFromBoard={this.handleTargetSelect} gameState={this.state.game}/>

                     <Player player={this.state.player} playerSelected={this.state.playerSelected} playerAttack={this.playerAttack} gameState={this.state.game}/>
                     <Target  target={this.state.target} targetSelected={this.state.targetSelected} targetAttack={this.targetAttack}/>
                 </div>
            </div>
        );
    }
}

export default StarWars;

