import React from 'react';
import Time from './Timerset';

class Timer extends React.Component {
    render() {
        const timer = this.props.time.map((time) => (
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
            
        ));
        const laps = this.props.laps.map((laps, index) => (
            <ul><li key={index}>{++index} Lap {laps}</li></ul>
        ));
        return (
            <div>
                <div id="timer">
                    {timer}
                </div>
                <div id='laps'>
                    {laps}
                </div>
            </div>
        );
    }
}

export default Timer;