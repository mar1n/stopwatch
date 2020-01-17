import React from 'react';

const TimerActionButton = ({ timerIsRunning, onStopClick, onLapClick, onStartClick, onResetClick }) => (
        timerIsRunning ?
                <>
                <div className='buttonBox1'>
                    <button
                        className='stopButton'
                        onClick={onStopClick}
                    >
                        Stop
                    </button>
                    </div>
                    <div className='buttonBox2'>
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
                <div className='buttonBox1'>
                    <button
                        className='startButton'
                        onClick={onStartClick}
                    >
                        Start
                    </button>
                    </div>
                    <div className='buttonBox2'>
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