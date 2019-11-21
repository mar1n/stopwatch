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
        const result = helpers.renderElapsedString(elapsed, runningSince);
        onLapClick(result);
    };


    const elapsedString = helpers.renderElapsedString(elapsed, runningSince);
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
            <TimerActionButton
                timerIsRunning={!!runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
                onResetClick={handleResetClick}
                onLapClick={handleLapClick}
            />
        </div>
    );
}

export default Time;