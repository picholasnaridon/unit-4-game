import React, { Component } from 'react';
import Character from './Character'
import Player from './Player'
import Enemy from './Enemy'

class StarWars extends Component {
    constructor(props){
        super(props)
        this.state = {
            playerCharacter: null,
            enemyCharacters: []
        }
        this.renderPlayerSelect = this.renderPlayerSelect.bind(this)
        this.renderPlaying = this.renderPlaying.bind(this)
        this.pickChar = this.pickChar.bind(this)
    }

    pickChar(id){
        this.setState({
           playerCharacter: this.props.characters[id],
           enemyCharacters: this.props.characters.filter(char => char.id !== id)
        })
    }

    renderPlayerSelect() {
        if (this.state.playerCharacter == null) {
            return(
                <div>
                    <h1>
                        Pick A Character
                    </h1>
                    {this.props.characters.map((char) => 
                        <div>
                            <Character   
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                AP={char.AP}
                                counterAP={char.counterAP}
                                image={char.image}
                                imageName={char.imageName}
                                selectChar={this.pickChar}
                            >
                            </Character>
                        </div>
                    )}
                </div>
            )   
        }

    }
    renderPlaying() {
        if (this.state.playerCharacter != null){
            return (
                <div>
                    <div style={{float: "left"}}>
                        <h1>Player:</h1>
                        <Player
                                key={this.state.playerCharacter.id}
                                id={this.state.playerCharacter.id}
                                name={this.state.playerCharacter.name}
                                AP={this.state.playerCharacter.AP}
                                counterAP={this.state.playerCharacter.counterAP}
                                image={this.state.playerCharacter.image}
                                imageName={this.state.playerCharacter.imageName}
                            >
                        </Player>
                    </div>
                    <div style={{float: "right"}}>
                        <h1>Enemies</h1>
                        {this.state.enemyCharacters.map((char) => 
                            <div>
                                <Enemy   
                                    key={char.id}
                                    id={char.id}
                                    name={char.name}
                                    AP={char.AP}
                                    counterAP={char.counterAP}
                                    image={char.image}
                                    imageName={char.imageName}
                                >
                                </Enemy>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderPlayerSelect()}
                {this.renderPlaying()}
            </div>
        );
    }
}

export default StarWars;