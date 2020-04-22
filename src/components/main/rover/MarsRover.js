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
            let p = this.position;
            if (this.direction === 'N') {
                this.position = new Position(this.mapTo8Elements(p.x - 1), p.y);
            } else if (this.direction === 'S') {
                this.position = new Position(this.mapTo8Elements(p.x + 1), p.y);
            } else if (this.direction === 'E') {
                this.position = new Position(p.x, this.mapTo8Elements(p.y + 1));
            } else if (this.direction === 'W') {
                this.position = new Position(p.x, this.mapTo8Elements(p.y - 1));
            }
        }
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