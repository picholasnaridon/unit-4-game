import React, { Component } from 'react';
import Character from './Character'

class CharacterList extends Component {
    constructor(props){
        super(props)
        this.state ={
            playerSelected: false
        }
        this.selectChar = this.selectChar.bind(this)
    }
    selectChar(char){
        this.props.selectFromBoard(char)
        this.setState({
            playerSelected: true
        })
    }
    render() {
        if (!this.state.playerSelected){
            return (
                <div>
                    {this.props.data.map((char) =>
                        <div>
                            <Character 
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                HP={char.HP}
                                AP={char.AP}
                                counterAP={char.counterAP}
                                alive={char.alive}
                                imageName={char.imageName}
                                selectFromList={this.selectChar}
                            />
                        </div>
                    )}
                </div>
            )
        }else{
            return(
                <div>empty</div>
            )
        }
    }
}

export default CharacterList;