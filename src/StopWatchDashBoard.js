import React, { useState } from 'react';
import Timer from './Timer';

const StopWatchDashBoard = () => {

    const [time, setTime] = useState([
        {
            title: 'StopWatch',
            project: 'Web Timer',
            elapsed: null,
            runningSince: null,
        }
    ]);
    const [lap, setLap] = useState([]);

    const handleStartClick = () => {
        startTimer();
    };

    const handleStopClick = () => {
        stopTimer();
    };

    const handleResetClick = () => {
        setTime( time
            .map(timer =>  (
                { ...timer, elapsed: null, runningSince: null }
                )));
        setLap( [] );
    };



    const startTimer = () => {
        const now = Date.now();
        setTime(
            time.map((timer) => 
                timer ?
                { ...timer, runningSince: now }
                : timer
            ),
        );
    };

    const stopTimer = () => {
        const now = Date.now();
        setTime(
            time.map((timer) => {
                const lastElapsed = now - timer.runningSince;
                return ((timer) 
                ? { ...timer, elapsed: timer.elapsed + lastElapsed, runningSince: null }
                : timer
                )
            }),
        );
    };

    const handleLapClick = (results) => {
        setLap([...lap, results]);
    };


        return (
            <>
                <Timer
                    time={time}
                    laps={lap}
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                    onResetClick={handleResetClick}
                    onLapClick={handleLapClick}
                />
            </>
        );
}

export default StopWatchDashBoard;