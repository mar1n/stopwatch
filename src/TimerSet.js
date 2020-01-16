import React, { useState, useCallback, useEffect } from 'react';
import TimerActionButton from './TimerActionButton';
import { Helpers }from './Helpers.js'

const Time = ({ onStartClick,
                onStopClick,
                onResetClick,
                onLapClick,
                elapsed,
                runningSince,
                project,
                title
            }) => {
    const [, forceState] = useState();
    const forceUpdate = useCallback(() => forceState({}), []);

    useEffect(() => {
        const interval = setInterval(forceUpdate, 50);
        return () =>
            clearInterval(interval)

    }, [forceUpdate]);

    const handleStartClick = () => {
        onStartClick();
    };

    const handleStopClick = () => {
        onStopClick();
    };

    const handleResetClick = () => {
        onResetClick();
    };

    const handleLapClick = () => {
        const result = Helpers.renderElapsedString(elapsed, runningSince);
        onLapClick(result);
    };


    const elapsedString = Helpers.renderElapsedString(elapsed, runningSince);
    return (
        <div className='ui centered card'>
            <div className='header'>
                {title}
            </div>
            <div className='meta'>
                {project}
            </div>
            <div className="elapsedString">
                {elapsedString}
            </div>
            {onStartClick 
            && <TimerActionButton
                timerIsRunning={!!runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
                onResetClick={handleResetClick}
                onLapClick={handleLapClick}
            /> }
        </div>
    );
}

export default Time;