import React, { Component } from 'react';
import Enemy from './Enemy'

class EnemyList extends Component {
    constructor(props){
        super(props)
        this.state = {
            targetSelected: null
        }
        this.selectTarget = this.selectTarget.bind(this)
    }
    selectTarget(target){
        this.props.selectFromBoard(target)
        this.setState({
            targetSelected: true
        })
    }
    render() {
        return (
            <div className="enemy-list">
                {this.props.data.map((enemy) =>
                    <Enemy 
                        key={enemy.id}
                        id={enemy.id}
                        HP={enemy.HP}
                        AP={enemy.AP}
                        baseAP={enemy.baseAP}
                        counterAP={enemy.counterAP}
                        name={enemy.name}
                        imageName={enemy.imageName}
                        canPick={this.props.gameState}
                        selectFromList={this.selectTarget}
                    />
                )}
            </div>
        )   
    }
}

export default EnemyList;