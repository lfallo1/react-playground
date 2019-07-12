import React, {Component} from 'react';
import Box from './Box.js'

class ColoredBoxes extends Component {

    static defaultProps = {
        colors: [
            '#007bff',
            '#6610f2',
            '#6f42c1',
            '#e83e8c',
            '#dc3545',
            '#fd7e14',
            '#ffc107',
            '#28a745',
            '#20c997',
            '#17a2b8',
            '#6c757d',
            '#343a40'
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            boxes: Array.from({length: 18}, () => ({color: this.props.colors[Math.floor(Math.random() * (this.props.colors.length - 1))]}))
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(currentColor, index) {
        let newColor = null;
        do {
            newColor = this.props.colors[Math.floor(Math.random() * (this.props.colors.length - 1))]
        } while (newColor === currentColor);

        let boxes = [...this.state.boxes];
        boxes[index].color = newColor;
        this.setState({
            boxes: boxes
        });
    }

    render() {
        const boxesList = this.state.boxes.map((box, idx) => <Box key={idx} color={box.color}
                                                                  changeColor={this.changeColor} idx={idx}/>);

        return (
            <div className="container">
                <div className="row">
                    {boxesList}
                </div>
            </div>
        )
    }
}

export default ColoredBoxes;