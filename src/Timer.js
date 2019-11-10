import React from 'react';
import Time from './Timerset';

class Timer extends React.Component {
    render() {
        const timer = this.props.time.map((time) => 
            <div key={time.title} className='timer'>
                <Time
                    title={time.title}
                    project={time.project}
                    elapsed={time.elapsed}
                    runningSince={time.runningSince}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                    onResetClick={this.props.onResetClick}
                    onLapClick={this.props.onLapClick}
                />
            </div>
        );
        const laps = this.props.laps.map((laps, index) =>
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
}

export default Timer;