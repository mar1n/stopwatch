import React from 'react';

class TimerActionButton extends React.Component {
    render() {
        if(this.props.timerIsRunning) {
            return (
                <div>
                    <button
                      className='ui bottom attached red basic button'
                      onClick={this.props.onStopClick}
                    >
                        Stop
                    </button>
                    <button
                        className='Lap'
                        onClick={this.props.onLapClick}
                    >
                        Lap
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        className='ui bottom attached green basic button'
                        onClick={this.props.onStartClick}
                    >
                        Start
                    </button>
                    <button
                        className='reset'
                        onClick={this.props.onResetClick}
                    >
                        Reset
                    </button>
                </div>
            );
        }
    }
}

export default TimerActionButton;