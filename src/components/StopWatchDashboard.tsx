import React, { useState } from 'react';
import Timer from './Timer';

type time = {
    title: string;
    project: string;
    elapsed: number;
    runningSince: number;
}

type singlelap = {
    elapsed: number;
    runningSince: number;
}


const StopWatchDashBoard: React.FC = () => {

    const [time, setTime] = useState<time []>([
        {
            title: 'StopWatch',
            project: 'Web Timer',
            elapsed: 0,
            runningSince: 0,
        }
    ]);
    const [lap, setLap] = useState<string []>([]);
    const [singlelap, setSinglelap] = useState<singlelap []>([
        {
            elapsed: 0,
            runningSince: 0,
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
                { ...timer, elapsed: 0, runningSince: 0 }
                )));
        setSinglelap( singlelap
            .map(timer =>  (
                { ...timer, elapsed: 0, runningSince: 0 }
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
                ? { ...timer, elapsed: timer.elapsed + lastElapsed, runningSince: 0 }
                : timer
                )
                
               
            }),
        );
        setSinglelap(
            singlelap.map((timer) => {
                const lastElapsed = now - timer.runningSince;
                return ((timer) 
                ? { ...timer, elapsed: timer.elapsed + lastElapsed, runningSince: 0 }
                : timer
                )
            }),
        );
    };

    const handleLapClick = (results: string) => {
        console.log(results);
        console.log(lap.length);
        const now = Date.now();
        setLap([...lap, results]);
        setSinglelap(
            singlelap.map((timer) => 
                timer
                ? {...timer, elapsed:0, runningSince: now}
                : timer
            ),
        );
    };

        return (
            <div className='stopwatch'>
                <Timer
                    time={time}
                    laps={lap}
                    single={singlelap}
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                    onResetClick={handleResetClick}
                    onLapClick={handleLapClick}
                />
            </div>
        );
}

export default StopWatchDashBoard;