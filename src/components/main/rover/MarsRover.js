import {Position} from "../position";
import {CircularState} from "./circularState";

export class MarsRover {
    static cardinalDirections = new CircularState(['N', 'E', 'S', 'W']);

    constructor() {
        this.direction = 'N';
        this.position = new Position(0, 0);
        this.showRoverCallback = () => alert("Show rover callback not defined");
    }

    execute(commands) {
        this.executeAll(commands.split("").reverse());
    }

    executeAll(commandsArray) {
        const next = commandsArray.pop();
        this.executeNext(next);
        this.showRoverCallback(this);
        if (commandsArray.length > 0) {
            setTimeout(() => this.executeAll(commandsArray), 500);
        }
    }

    executeNext(nextCommand) {
        if (nextCommand === 'L') {
            this.turnLeft();
        } else if (nextCommand === 'R') {
            this.turnRight();
        } else if (nextCommand === 'M') {
            if (this.direction === 'N') {
                this.addRelativePosition(new Position(-1,0))
            } else if (this.direction === 'S') {
                this.addRelativePosition(new Position(1,0))
            } else if (this.direction === 'E') {
                this.addRelativePosition(new Position(0,1))
            } else if (this.direction === 'W') {
                this.addRelativePosition(new Position(0,-1));
            }
        }
    }

    addRelativePosition(diff){
        this.position = new Position(
            this.mapTo8Elements(diff.x + this.position.x),
            this.mapTo8Elements(diff.y + this.position.y)
        )
    }

    mapTo8Elements(value) {
        if (value < 0) {
            return value + 8;
        }
        if (value > 7) {
            return value - 8;
        }
        return value;
    }

    turnRight() {
        this.direction = MarsRover.cardinalDirections.clockwise(this.direction);
    }

    turnLeft() {
        this.direction = MarsRover.cardinalDirections.counterclockwise(this.direction);
    }
}