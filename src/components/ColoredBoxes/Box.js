import React, {Component} from "react";
import './Box.css'

class Box extends Component{

    constructor(props) {
        super(props);
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }

    handleChangeColor(){
        this.props.changeColor(this.props.color, this.props.idx);
    }

    render(){
        const backgroundColor = {backgroundColor : this.props.color}
        return (
            <div className="Box-item col-2"
                 style={backgroundColor}
                 onClick={this.handleChangeColor} />
        )
    }
}

export default Box;