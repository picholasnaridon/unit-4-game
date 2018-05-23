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
            <div style={{float: "right"}}>
                <h1>Enemy List </h1>
                {this.props.data.map((enemy) =>
                    <Enemy 
                        key={enemy.id}
                        id={enemy.id}
                        HP={enemy.HP}
                        AP={enemy.AP}
                        counterAP={enemy.counterAP}
                        name={enemy.name}
                        imageName={enemy.imageName}
                        selectFromList={this.selectTarget}
                    />
                )}
            </div>
        )   
    }
}

export default EnemyList;