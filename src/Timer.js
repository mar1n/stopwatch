import React from 'react';
import Time from './Timerset';

const Timer = (props) => {
        const timer = props.time.map((time) => 
            <div key={time.title} className='timer'>
                <Time
                    title={time.title}
                    project={time.project}
                    elapsed={time.elapsed}
                    runningSince={time.runningSince}
                    onStartClick={props.onStartClick}
                    onStopClick={props.onStopClick}
                    onResetClick={props.onResetClick}
                    onLapClick={props.onLapClick}
                />
            </div>
        );
        const laps = props.laps.map((laps, index) =>
            <li key={index}>
                {++index} Lap {laps}
            </li>
        );
        return (
            <>
                {timer}
                <ul>{laps}</ul>
            </>
        );
}

export default Timer;