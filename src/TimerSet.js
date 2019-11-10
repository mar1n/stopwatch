import React, { useState, useCallback, useEffect } from 'react';
import TimerActionButton from './TimerActionButton';
const helpers = (function () {
    function newTimer(attrs = {}) {
        const timer = {
            title: attrs.title || 'Timer',
            project: attrs.project || 'Project',
            id: uuid.v4(), // eslint-disable-line no-undef
            elapsed: 0,
        };
        return timer;
    }

    function findById(array, id, cb) {
        array.forEach((el) => {
            if (el.id === id) {
                cb(el);
                return;
            }
        });
    }

    function renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return millisecondsToHuman(totalElapsed);
    }

    function millisecondsToHuman(ms) {
        const milliseconds = new Date(ms);
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        const humanized = [
            pad(hours.toString(), 2),
            pad(minutes.toString(), 2),
            pad(seconds.toString(), 2),
            pad(milliseconds.getMilliseconds().toString(), 3),
        ].join(':');

        return humanized;
    }

    function pad(numberString, size) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    }

    return {
        millisecondsToHuman,
        newTimer,
        findById,
        renderElapsedString,
    };
}());


const Time = (props) => {
    const [, forceState] = useState();
    const forceUpdate = useCallback(() => forceState({}), []);

    useEffect(() => {
        const interval = setInterval(forceUpdate, 50);
        return () => 
            clearInterval(interval)
        
    }, [forceUpdate]);

    const handleStartClick = () => {
        props.onStartClick();
    };

    const handleStopClick = () => {
        props.onStopClick();
    };

    const handleResetClick = () => {
        props.onResetClick();
    };

    const handleLapClick = () => {
        const test = helpers.renderElapsedString(props.elapsed, props.runningSince);
        props.onLapClick(test);
    };


    const elapsedString = helpers.renderElapsedString(props.elapsed, props.runningSince);
    return (
        <div className='ui centered card'>
            <div className='header'>
                {props.title}
            </div>
            <div className='meta'>
                {props.project}
            </div>
            <div  className="elapsedString">
                {elapsedString}
            </div>
            <TimerActionButton
                timerIsRunning={!!props.runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
                onResetClick={handleResetClick}
                onLapClick={handleLapClick}
            />
        </div>
    );
}

export default Time;