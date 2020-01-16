import React from 'react';

const TimerActionButton = ({ timerIsRunning, onStopClick, onLapClick, onStartClick, onResetClick }) => (
        timerIsRunning ?
                <>
                    <button
                        className='stopButton'
                        onClick={onStopClick}
                    >
                        Stop
                    </button>
                    <button
                        className='lapButton'
                        onClick={onLapClick}
                    >
                        Lap
                    </button>
                </>
        :

                <>
                    <button
                        className='startButton'
                        onClick={onStartClick}
                    >
                        Start
                    </button>
                    <button
                        className='resetButton'
                        onClick={onResetClick}
                    >
                        Reset
                    </button>
                </>
);


export default TimerActionButton;