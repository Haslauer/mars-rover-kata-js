import React from 'react'

export function SurfaceElement() {
    return (
        <div className="surface-elem">
            <img src={require('./mars-surface.jpeg')}
                 alt="img-surface"
                 className="img-surface"/>
        </div>
    );
}

export function RockElement() {
    return (
        <div className="surface-elem">
            <img src={require('./mars-rock.jpg')}
                 alt="img-surface"
                 className="img-surface"/>
        </div>
    );
}

export function RoverElement(props) {
    const directions = {
        'N':'90deg',
        'E':'180deg',
        'S':'270deg',
        'W':'0deg'
    };
    const rotation = directions[props.direction];
    return (
        <div className="surface-elem">
            <img src={require('./walle.jpg')}
                 style={{transform: `rotate(${rotation})`}}
                 alt="img-surface"
                 className="img-surface"/>
        </div>
    );
}

export function TargetElement() {
    return (
        <div className="surface-elem">
            <img src={require('./target.jpg')}
                 alt="img-surface"
                 className="img-surface"/>
        </div>
    );
}