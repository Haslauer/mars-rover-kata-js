import React from 'react';
import {MarsRover} from "./rover/MarsRover";
import {RoverControl} from "./control/roverControl";
import {MarsSurface} from "./mars/marsSurface"

export class RoverGameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.rover = new MarsRover()
    }

    render() {
        return (
            <div>
                <RoverControl rover={this.rover}/>
                <MarsSurface rover={this.rover}/>
            </div>
        );
    }
}