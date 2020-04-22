export class CircularState {
    constructor(allStates) {
        this.allStates = allStates;
        this.maxId = allStates.length - 1;
    }

    _currentId(currentState){
        return this.allStates.findIndex((el) => el === currentState);
    };

    clockwise(currentState) {
        let currentId = this._currentId(currentState);

        if (currentId === this.maxId) {
            return this.allStates[0];
        }
        return this.allStates[currentId +1];
    }

    counterclockwise(currentState) {
        let currentId = this._currentId(currentState);
        if (currentId === 0) {
            return this.allStates[this.maxId];
        }
        return this.allStates[currentId -1];
    }
}