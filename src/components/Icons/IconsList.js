import React, {Component} from 'react';
import Icon from './Icon.js'

class IconsList extends Component{

    static defaultProps = {
        icons: [
            'angry',
            'anchor',
            'archive',
            'at',
            'archway',
            'baby',
            'bell',
            'bolt',
            'bone',
            'car',
            'city',
            'cloud',
            'couch'
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            icons: []
        };
        this.addIcon = this.addIcon.bind(this);
        this.removeIcon = this.removeIcon.bind(this);
    }

    addIcon(){
        let icon = this.props.icons[Math.floor(Math.random() * (this.props.icons.length-1))];
        this.setState({icons: [icon, ...this.state.icons]});
    }

    removeIcon(idx){
        let icons = [...this.state.icons];
        icons.splice(idx, 1);
        this.setState({icons: icons});
    }

    render(){
        return (
            <div>
                <button className="btn btn-success" onClick={this.addIcon}>Add icon</button>
                <ul className="list-group">
                    {this.state.icons.map((i, idx) => <Icon key={idx} idx={idx} icon={i} removeIcon={this.removeIcon} /> )}
                </ul>
            </div>
        )
    }

}

export default IconsList;