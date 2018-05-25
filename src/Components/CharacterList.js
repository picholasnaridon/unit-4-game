import React, { Component } from 'react';
import Character from './Character'

class CharacterList extends Component {
    constructor(props){
        super(props)
        this.state ={
            characterChosen: false
        }
        this.selectChar = this.selectChar.bind(this)
    }
    selectChar(char){
        this.props.selectFromBoard(char)
        this.setState({
            characterChosen: true
        })
    }
    render() {
        if ((!this.state.characterChosen) || (!this.props.playerSelected)){
            return (
                <div className="card-list">
                    {this.props.data.map((char) =>
                            <Character 
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                HP={char.HP}
                                AP={char.AP}
                                baseAP={char.baseAP}
                                counterAP={char.counterAP}
                                alive={char.alive}
                                imageName={char.imageName}
                                selectFromList={this.selectChar}
                            />
                    )}
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}

export default CharacterList;

const styles = {

}