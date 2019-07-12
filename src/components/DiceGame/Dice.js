import React, {Component} from 'react'

class Dice extends Component {

    render(){
        const diceClass = this.props.rolling ? 'dice-shake ' + this.props.diceValue : this.props.diceValue;
        return <i className={diceClass}></i>
    }

}

export default Dice;