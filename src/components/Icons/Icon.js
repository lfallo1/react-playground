import React, {Component} from 'react';

class Icon extends Component{
    render(){
        return (
            <li className="list-group-item" onClick={() => this.props.removeIcon(this.props.idx)}>
                <i className={`fas fa-${this.props.icon}`}></i>
            </li>
        )
    }
}

export default Icon;