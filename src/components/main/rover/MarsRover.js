import {Position} from "../position";

export class MarsRover {
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
            if (this.direction === 'N') {
                this.direction = 'W';
            } else if (this.direction === 'S') {
                this.direction = 'E';
            } else if (this.direction === 'E') {
                this.direction = 'N';
            } else if (this.direction === 'W') {
                this.direction = 'S';
            }
        } else if (nextCommand === 'R') {
            if (this.direction === 'N') {
                this.direction = 'E';
            } else if (this.direction === 'S') {
                this.direction = 'W';
            } else if (this.direction === 'E') {
                this.direction = 'S';
            } else if (this.direction === 'W') {
                this.direction = 'N';
            }
        } else if (nextCommand === 'M') {
            let p = this.position;
            if (this.direction === 'N') {
                this.position = new Position(p.x - 1, p.y);
            } else if (this.direction === 'S') {
                this.position = new Position(p.x + 1, p.y);
            } else if (this.direction === 'E') {
                this.position = new Position(p.x, p.y + 1);
            } else if (this.direction === 'W') {
                this.position = new Position(p.x, p.y - 1);
            }
        }
    }
}