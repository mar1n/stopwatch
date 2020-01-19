import React from 'react';

const TimerActionButton = ({ timerIsRunning, onStopClick, onLapClick, onStartClick, onResetClick }) => (
        timerIsRunning ?
                <>
                <div className='buttonBoxStop'>
                    <button
                        className='stopButton'
                        onClick={onStopClick}
                    >
                        Stop
                    </button>
                    </div>
                    <div className='buttonBoxLap'>
                    <button
                        className='lapButton'
                        onClick={onLapClick}
                    >
                        Lap
                    </button>
                    </div>
                </>
        :

                <>
                <div className='buttonBoxStart'>
                    <button
                        className='startButton'
                        onClick={onStartClick}
                    >
                        Start
                    </button>
                    </div>
                    <div className='buttonBoxReset'>
                    <button
                        className='resetButton'
                        onClick={onResetClick}
                    >
                        Reset
                    </button>
                    </div>
                </>
);


export default TimerActionButton;