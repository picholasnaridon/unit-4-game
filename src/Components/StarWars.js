import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Player from './Player'
import Target from './Target'
import EnemyList from './EnemyList'
import CombatMessaging from './CombatMessaging';

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
        this.startCombat = this.startCombat.bind(this)
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

    playerDied(){
        this.setState(prevState => ({
            enemies: [],
            player: null,
            playerSelected: false,
            target: null,
            targetSelected: false,
            game: "lost"
        }))
    }
    targetDied(){
        var playerHP = this.state.player.HP - this.state.target.counterAP
        var playerAP = this.state.player.AP + this.state.player.baseAP

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
    }

    attack(){
        var playerHP = this.state.player.HP - this.state.target.counterAP
        var targetHP = this.state.target.HP - this.state.player.AP
        var playerAP = this.state.player.AP + this.state.player.baseAP
        
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
    wonGame(){
        this.setState({
            enemies: [],
            target: null,
            targetSelected: false,
            game: "won"

        })
    }

    startCombat(){
        var playerHP = this.state.player.HP - this.state.target.counterAP
        var playerAP = this.state.player.AP + this.state.player.baseAP
        var targetHP = this.state.target.HP - this.state.player.AP

        if (playerHP <= 0){
            this.playerDied()
        }else if ((playerHP >= 0) && (this.state.enemies.length === 0) && (targetHP <= 0)){
            this.wonGame()
        }else if (this.state.target.HP <= playerAP){
            this.targetDied()
        }else if (this.state.player.HP <= this.state.target.counterAP){
            this.playerDied()
        }else{
            this.attack()
        }
    }

    render() {
        return (
            <div className="app">
                <div className="global-message">
                    <CombatMessaging game={this.state.game} gameOver={this.resetGame}/>
                </div>
                <div className="board">
                    <div className="playing-container">
                        <Player player={this.state.player} playerSelected={this.state.playerSelected} playerAttack={this.startCombat} gameState={this.state.game}/>
                        <Target  target={this.state.target} targetSelected={this.state.targetSelected} targetAttack={this.targetAttack}/>
                    </div>
                    <div className="char-list-container">
                        <CharacterList data={this.props.data} selectFromBoard={this.handlePlayerSelect} playerSelected={this.state.playerSelected}/>
                    </div>
                    <div className="enemy-list-container">
                        <EnemyList data={this.state.enemies} playerSelected={this.state.playerSelected} selectFromBoard={this.handleTargetSelect} gameState={this.state.game}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StarWars;

