import React from 'react';

function TimerActionButton(props) {
        if (props.timerIsRunning) {
            return (
                <div>
                    <button
                        className='ui bottom attached red basic button'
                        onClick={props.onStopClick}
                    >
                        Stop
                    </button>
                    <button
                        className='Lap'
                        onClick={props.onLapClick}
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
                        onClick={props.onStartClick}
                    >
                        Start
                    </button>
                    <button
                        className='reset'
                        onClick={props.onResetClick}
                    >
                        Reset
                    </button>
                </div>
            );
        }
}

export default TimerActionButton;