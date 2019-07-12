import React, {Component} from "react";
import Square from './Square'
import './LightsOutGame.css'

class LightsOutGameRow extends Component{
    render(){
        return (
            <div className="LightsOutGame-row col-12">
                {this.props.squares.map(square => <Square key={square.id} clickSquare={this.props.clickSquare} square={square} />)}
            </div>
        )
    }
}

export default LightsOutGameRow;