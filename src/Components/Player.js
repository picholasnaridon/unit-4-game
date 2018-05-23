import React, { Component } from 'react';

class Player extends Component {
    render() {
        if (this.props.playerSelected){
            return (
                <div>
                    <h1>Player</h1>
                    <div>
                        <img src={require(`../assets/images/${this.props.player.imageName}.png`)}/>
                        <div>HP {this.props.player.HP}</div>
                    </div>
                </div>
            );
        }else {
            return (
                <div>Not selected </div>
            )
        }
       
    }
}

export default Player;