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
    const [singlelap, setSinglelap] = useState([
        {
            elapsed: null,
            runningSince: null,
        }
    ]);

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
        setSinglelap( singlelap
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
        setSinglelap(
            singlelap.map((timer) => 
                timer
                ? {...timer, runningSince: now}
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
        setSinglelap(
            singlelap.map((timer) => {
                const lastElapsed = now - timer.runningSince;
                return ((timer) 
                ? { ...timer, elapsed: timer.elapsed + lastElapsed, runningSince: null }
                : timer
                )
            }),
        );
    };

    const handleLapClick = (results) => {
        console.log(results);
        console.log(lap.length);
        const now = Date.now();
        setLap([...lap, results]);
        setSinglelap(
            singlelap.map((timer) => 
                timer
                ? {...timer, elapsed:null, runningSince: now}
                : timer
            ),
        );
    };

console.log(lap);
        return (
            <>
                <Timer
                    time={time}
                    laps={lap}
                    single={singlelap}
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                    onResetClick={handleResetClick}
                    onLapClick={handleLapClick}
                />
            </>
        );
}

export default StopWatchDashBoard;