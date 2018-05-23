import React, { Component } from 'react';


class Target extends Component {
    
    render() {
        if (this.props.targetSelected){
            return (
                <div>
                    <h1>Target</h1>
                    <div>
                        <img src={require(`../assets/images/${this.props.target.imageName}.png`)}/>
                        <div>HP: {this.props.target.HP}</div>
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

export default Target;