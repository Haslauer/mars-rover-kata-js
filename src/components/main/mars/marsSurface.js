import React from 'react';
import './surface.css'
import {RockElement, SurfaceElement, TargetElement, RoverElement} from "./surfaceElements";
import {Position} from "../position";

const SIDE_LENGTH = 8;
const OBSTACLE_COUNT = 16;

export class MarsSurface extends React.Component {
    constructor(props) {
        super(props);
        this.rover = this.initializeRover(props.rover);
        this.target = this.randomPosition();
        this.state = {
            roverDirection: this.rover.direction,
            roverPosition: this.rover.position
        };
        this.obstacles = this.initializeObstacles();
    }

    initializeRover(rover) {
        rover.position = this.randomPosition();
        rover.direction = ['N', 'E', 'S', 'W'][Math.floor(Math.random() * 4)];
        rover.showRoverCallback = this.showRover;
        return rover;
    }

    initializeObstacles() {
        let obstacles = [];
        let count;
        for (count = 0; count < OBSTACLE_COUNT; count++) {
            let obstacle = this.randomPosition();
            while (this.rover.position.equals(obstacle) || this.target.equals(obstacle)) {
                obstacle = this.randomPosition();
            }
            obstacles.push(obstacle);
        }
        return obstacles;
    }

    isObstacle(position) {
        return this.obstacles.filter((o) => o.equals(position)).length > 0;
    }

    randomPosition() {
        return new Position(
            Math.floor(Math.random() * (SIDE_LENGTH)),
            Math.floor(Math.random() * (SIDE_LENGTH)));
    }

    showRover = (rover) => {
        this.setState({
            roverDirection: rover.direction,
            roverPosition: rover.position
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.isObstacle(this.rover.position)) {
            setTimeout(() => alert("The rover is broken. You crashed a rock!"), 200);
        }
        if (this.rover.position.equals(this.target)) {
            setTimeout(()=> alert("Congratulations, you made it to the target."), 200);
        }
    }

    elementForPos(position) {
        if (position.equals(this.state.roverPosition)) {
            return <RoverElement direction={this.state.roverDirection}/>
        }
        if (position.equals(this.target)) {
            return <TargetElement/>;
        }
        if (this.isObstacle(position)) {
            return <RockElement/>
        }
        return <SurfaceElement/>
    }

    renderElements() {
        let elements = [];
        let i, j;
        for (i = 0; i < SIDE_LENGTH; i++) {
            for (j = 0; j < SIDE_LENGTH; j++) {
                elements.push(this.elementForPos(new Position(i, j)));
            }
        }
        return elements;
    }

    render() {
        return (
            <div className="surface-grid">{this.renderElements()}</div>
        );
    }
}