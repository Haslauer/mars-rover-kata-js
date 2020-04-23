import React from "react";
import "./roverControl.css";

export class RoverControl extends React.Component {
    constructor(props) {
        super(props);
        this.rover = props.rover;
        this.state = {
            commands: ''
        }
    }

    addCommand(command) {
        const {commands} = this.state;
        this.setState({commands: commands + command})
    }

    clearCommands() {
        this.setState({commands: ''})
    }

    move = (e) => {
        this.addCommand('M')
    };

    turnLeft = (e) => {
        this.addCommand('L')
    };

    turnRight = (e) => {
        this.addCommand('R')
    };

    execute = () => {
        this.rover.execute(this.state.commands);
        this.clearCommands();
    };

    render() {
        return (
            <div className='commandsContainer'>
                <div>
                    <div className='commands'>
                        <button onClick={this.move}>Move</button>
                        <button onClick={this.turnLeft}>Left</button>
                        <button onClick={this.turnRight}>Right</button>
                    </div>
                    <input type="text" readOnly value={this.state.commands}/>
                </div>
                <div className="execute">
                    <button className="executeButton" onClick={this.execute}>Execute</button>
                </div>
            </div>);
    }
}