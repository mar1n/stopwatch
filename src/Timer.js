import React from 'react';
import Time from './Timerset';

const Timer = ({ time, single, onStartClick, onStopClick, onResetClick, onLapClick, laps }) => {
    const timer = time.map((times) =>
        <div key={times.title} className='timer'>
            <Time
                elapsed={times.elapsed}
                runningSince={times.runningSince}
            />
        </div>
    );
    const singleLap = single.map((times, index) =>
        <div key={index} className='timer'>
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
            <section>
                <div className='mainTimer'>
                    {timer}
                </div>
            </section>
            <ul>
                <section>
                    {singleLap}
                    <div className='pane'>
                        {lap}
                    </div>
                </section>
            </ul>
        </>
    );
}

export default Timer;