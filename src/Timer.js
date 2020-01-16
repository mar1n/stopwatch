import React from 'react';
import Time from './Timerset';

const Timer = ({time, single, onStartClick, onStopClick, onResetClick, onLapClick, laps}) => {
        const timer = time.map((times) => 
            <div key={times.title} className='timer'>
                <Time
                    title={times.title}
                    project={times.project}
                    elapsed={times.elapsed}
                    runningSince={times.runningSince}
                    // onStartClick={onStartClick}
                    // onStopClick={onStopClick}
                    // onResetClick={onResetClick}
                    // onLapClick={onLapClick}
                />
            </div>
        );
        const singleLap = single.map((times) => 
        <div key={times.title} className='timer'>
            <Time
                elapsed={times.elapsed}
                runningSince={times.runningSince}
                onStartClick={onStartClick}
                onStopClick={onStopClick}
                onResetClick={onResetClick}
                onLapClick={onLapClick}
            />
        </div>
        );
        const lap = laps.map((laps, index) =>
            <li key={index}>
                {++index} Lap {laps}
            </li>
        );
        return (
            <>
                {timer}
                <ul>
                    {singleLap}
                    {lap}
                </ul>
            </>
        );
}

export default Timer;