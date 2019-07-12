import React, {Component} from "react";
import './Square.css'

class Square extends Component{

    constructor(props) {
        super(props);
        this.handleClickSquare = this.handleClickSquare.bind(this);
    }

    handleClickSquare(){
        this.props.clickSquare(this.props.square);
    }

    render(){
        const squareClass = this.props.square.isSelected ? 'Square selected' : 'Square';

        return (
            <div className={squareClass}
                 onClick={this.handleClickSquare} />
        )
    }
}

export default Square;