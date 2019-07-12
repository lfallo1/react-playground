import React, {Component} from 'react';
import diceOptions from '../../api/diceOptions'
import Dice from './Dice'
import './DiceGame.css'
import {sleep} from '../../helpers/utilities'

class DiceGame extends Component{

    constructor(props){
        super(props);
        this.state={
            diceOne: 1,
            diceTwo: 1,
            rolling: false
        }
    }

    async rollDice() {
        if(this.state.rolling) return

        this.setState({rolling: true});
        await sleep(Math.floor(Math.random() * 1200));
        this.setState({
            diceOne: Math.floor(Math.random() * 6) + 1,
            diceTwo: Math.floor(Math.random() * 6) + 1,
            rolling: false
        });
    }

    render(){

        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Dice Game</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <div className="row">
                            <div className="col text-center DiceGame-dice-wrapper">
                                <Dice rolling={this.state.rolling} diceValue={diceOptions[this.state.diceOne-1]} />
                                <Dice rolling={this.state.rolling} diceValue={diceOptions[this.state.diceTwo-1]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center DiceGame-button-wrapper">
                                <button disabled={this.state.rolling} className="btn btn-lg btn-dark" onClick={() => this.rollDice()}>{this.state.rolling ? 'Rolling...' : 'Roll Dice'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiceGame;