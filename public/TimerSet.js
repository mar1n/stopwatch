import React from 'react';
import Time from '../src/Timerset';
class TimerSet extends React.Component {
    render() {
        return (
            <div>
                <Time
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                    onResetClick={this.props.onResetClick}
                    onLapClick={this.props.onLapClick}
                />
            </div>
        );
    }
}

export default TimerSet;