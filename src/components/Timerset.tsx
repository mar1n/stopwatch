import React, { useState, useCallback, useEffect } from 'react';
import TimerActionButton from './TimerActionButton';
import { Helpers }from './Helpers'

interface IProps {
    onStartClick?: () => void;
    onStopClick?: () => void;
    onResetClick?: () => void;
    onLapClick?: (results: any) => void;
    elapsed: number;
    runningSince: number;
}

const Time: React.FC<IProps> = ({ onStartClick,
                onStopClick,
                onResetClick,
                onLapClick,
                elapsed,
                runningSince
            }) => {
    const [, forceState] = useState();
    const forceUpdate = useCallback(() => forceState({}), []);

    useEffect(() => {
        const interval = setInterval(forceUpdate, 50);
        return () =>
            clearInterval(interval)

    }, [forceUpdate]);

    const handleStartClick = () => {
        if(onStartClick) {
            onStartClick();
        }
        
    };

    const handleStopClick = () => {
        if(onStopClick) {
            onStopClick();
        }
        
    };

    const handleResetClick = () => {
        if(onResetClick) {
            onResetClick();
        }
    };

    const handleLapClick = () => {
        const result = Helpers.renderElapsedString(elapsed, runningSince);
        if(onLapClick) {
            onLapClick(result);
        }
    };


    const elapsedString = Helpers.renderElapsedString(elapsed, runningSince);
    return (
        <div className='lapBox'>
            {onStartClick 
            && <TimerActionButton
                timerIsRunning={!!runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
                onResetClick={handleResetClick}
                onLapClick={handleLapClick}
            /> }
            <div className="elapsedString">
                {elapsedString}
            </div>

        </div>
    );
}

export default Time;