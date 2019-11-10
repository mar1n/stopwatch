import React from 'react';

const TimerActionButton = (props) => {
        if (props.timerIsRunning) {
            return (
                <>
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
                </>
            );
        } else {
            return (
                <>
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
                </>
            );
        }
}

export default TimerActionButton;