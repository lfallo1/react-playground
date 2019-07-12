import React, {Component} from "react";
import './Box.css'

class Box extends Component{
    render(){
        const backgroundColor = {backgroundColor : this.props.color}
        return (
            <div className="Box-item col-2"
                 style={backgroundColor}
                 onClick={() => this.props.changeColor(this.props.color, this.props.idx)} />
        )
    }
}

export default Box;