import {MarsRover} from "./MarsRover";
import {Position} from "../position";

describe('The Mars Rover', () => {

    it(' has the correct default position and direction', () => {
        let rover = new MarsRover();
        expect(rover.direction).toEqual('N');
        expect(rover.position).toEqual(new Position(0, 0))
    });

    describe('when pointing north on position (3,3)', () => {
        let rover = new MarsRover();
        beforeEach(() => {
            rover.direction = 'N';
            rover.position = new Position(3,3);
        });

        it('handles the turn left command', () => {
            rover.executeNext('L');
            expect(rover.direction).toEqual('W');
        });

        it('handles the turn right command', () => {
            rover.executeNext('R');
            expect(rover.direction).toEqual('E');
        });

        it('handles the move command', () => {
            rover.executeNext('M');
            expect(rover.position).toEqual(new Position(2,3));
        });
    });

    describe('when pointing south on position (3,3)', () => {
        let rover = new MarsRover();
        beforeEach(() => {
            rover.direction = 'S';
            rover.position = new Position(3, 3);
        });
        it('handles the turn left command', () => {
            rover.executeNext('L');
            expect(rover.direction).toEqual('E');
        });

        it('handles the turn right command', () => {
            rover.executeNext('R');
            expect(rover.direction).toEqual('W');
        });

        it('handles the move command', () => {
            rover.executeNext('M');
            expect(rover.position).toEqual(new Position(4,3));
        });
    });

    describe('when pointing east on position (3,3)', () => {
        let rover = new MarsRover();
        beforeEach(() => {
            rover.direction = 'E';
            rover.position = new Position(3, 3);
        });
        it('handles the turn left command', () => {
            rover.executeNext('L');
            expect(rover.direction).toEqual('N');
        });

        it('handles the turn right command', () => {
            rover.executeNext('R');
            expect(rover.direction).toEqual('S');
        });

        it('handles the move command', () => {
            rover.executeNext('M');
            expect(rover.position).toEqual(new Position(3,4));
        });
    });

    describe('when pointing west on position (3,3)', () => {
        let rover = new MarsRover();
        beforeEach(() => {
            rover.direction = 'W';
            rover.position = new Position(3, 3);
        });
        it('handles the turn left command', () => {
            rover.executeNext('L');
            expect(rover.direction).toEqual('S');
        });

        it('handles the turn right command', () => {
            rover.executeNext('R');
            expect(rover.direction).toEqual('N');
        });

        it('handles the move command', () => {
            rover.executeNext('M');
            expect(rover.position).toEqual(new Position(3,2));
        });
    });
});


