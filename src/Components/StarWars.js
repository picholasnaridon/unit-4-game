import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Player from './Player'
import Target from './Target'
import EnemyList from './EnemyList'

class StarWars extends Component {
    constructor(props){
        super(props)
        this.state = {
            enemies: [],
            player: null,
            playerSelected: false,
            target: null,
            targetSelected: false
        }
        this.handlePlayerSelect = this.handlePlayerSelect.bind(this)
        this.handleTargetSelect = this.handleTargetSelect.bind(this)
    }
    handlePlayerSelect(playerChar){
        this.setState({
            player: playerChar,
            playerSelected: true,
            enemies: this.props.data.filter(char => char.name !== playerChar.name) 
        })
    }
    handleTargetSelect(target){
        this.setState({
            target: target,
            targetSelected: true,
            enemies: this.state.enemies.filter(char => char.name !== target.name) 
        })
    }
    render() {
        return (
            <div>
                <div>
                    <CharacterList data={this.props.data} selectFromBoard={this.handlePlayerSelect} playerSelected={this.state.playerSelected}/>
                    <Player player={this.state.player} playerSelected={this.state.playerSelected}/>
                    <EnemyList data={this.state.enemies} playerSelected={this.state.playerSelected} selectFromBoard={this.handleTargetSelect}/>
                    <Target  target={this.state.target} targetSelected={this.state.targetSelected}/>
                </div>
            </div>
        );
    }
}

export default StarWars;