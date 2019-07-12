import React, {Component} from 'react';
import LightsOutGameRow from './LightsOutGameRow.js'
import uuidv4 from 'uuid/v4'

class LightsOutGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameRows: this.generateGameRows(),
            didWin: false
        }
        this.clickSquare = this.clickSquare.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame(){
        this.setState({
            gameRows: this.generateGameRows(),
            didWin: false
        })
    }

    generateGameRows(){
        let gameRows = [];
        for(let i = 0; i < 5; i++){
            let row = {id: uuidv4(), squares: []};
            for(let j = 0; j < 5; j++){
                row.squares.push({id: uuidv4(), row: i, column: j, isSelected: (Math.random() * 100) > 65});
            }
            gameRows.push(row);
        }
        return gameRows;
    }

    clickSquare(square) {

        let gameRows = [...this.state.gameRows];

        //toggle touching squares
        let selectedSquare = null;
        for(let i = Math.max(0, square.row-1); i < Math.min(4, square.row+1) + 1; i++){
            for(let j = Math.max(0, square.column-1); j < Math.min(4, square.column+1) + 1; j++){
                if((i=== square.row || j === square.column) && gameRows[i].squares[j].isSelected){
                    gameRows[i].squares[j].isSelected = !gameRows[i].squares[j].isSelected;
                }
            }
        }

        //check if any squares are selected
        let didWin = gameRows.filter(row => {
            return row.squares.filter(square => square.isSelected).length > 0
        }).length === 0;

        this.setState({gameRows: gameRows, didWin: didWin});
    }

    gameTitle(){
        if(this.state.didWin){
            return <div className="LightsOut-winning-title">
                <span className="LightsOut-title-orange">You</span> <span className="LightsOut-title-blue">Won!</span>
                <button className="btn btn-outline-warning btn-lg new-game-button" onClick={this.resetGame}>New Game</button>
            </div>
        } else {
            return <div className="LightsOut-game-title">
                <span className="LightsOut-flashing-title-orange">Lights</span> <span className="LightsOut-flashing-title-blue">Out</span>
            </div>
        }
    }

    render() {
        let gameRows = this.state.didWin ? null : (this.state.gameRows.map(row => {
            return (
                <div key={row.id} className="row">
                    <LightsOutGameRow squares={row.squares} clickSquare={this.clickSquare}/>
                </div>
            )
        }));

        return (
            <div className="LightsOut-container container">
                {this.gameTitle()}
                <div className="LightsOut-game-wrapper row">
                    {gameRows}
                </div>
            </div>
        )
    }
}

export default LightsOutGame;