import React, {Component} from 'react';

class RandomNumberGenerator extends Component{

    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
    }

    generateRandom = () => {
        this.setState({number: Math.floor(Math.random() * 10)});
    }

    render(){

        let buttonStatus = this.state.number === 7 ? <h3>You Won!!!</h3> : <button className="btn btn-outline-success" onClick={this.generateRandom}>Generate number</button>;

        return (
            <>
                <div>
                    <h3 className="RandomNumberGenerator-header">
                        Current number: {this.state.number}
                    </h3>
                </div>
                <div>
                    {buttonStatus}
                </div>
            </>
        )
    }
}

export default RandomNumberGenerator;