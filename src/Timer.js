import React from 'react';
import Time from './Timerset';

const Timer = ({ time, single, onStartClick, onStopClick, onResetClick, onLapClick, laps }) => {
    const timer = time.map((times) =>
        <div key={times.title} className='timer'>
            <Time
                title={times.title}
                project={times.project}
                elapsed={times.elapsed}
                runningSince={times.runningSince}
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
        <li className='scroller' key={index}>
            {++index} Lap {laps}
        </li>
    );
    return (
        <>
            <div className='mainTimer'>
                {timer}
            </div>
            <ul>
                {singleLap}
                <div className='pane'>
                    {lap}
                </div>
            </ul>
        </>
    );
}

export default Timer;