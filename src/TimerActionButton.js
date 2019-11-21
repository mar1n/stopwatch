import React from 'react';

const TimerActionButton = ({ timerIsRunning, onStopClick, onLapClick, onStartClick, onResetClick }) => (
        timerIsRunning ?
                <>
                    <button
                        className='ui bottom attached red basic button'
                        onClick={onStopClick}
                    >
                        Stop
                    </button>
                    <button
                        className='Lap'
                        onClick={onLapClick}
                    >
                        Lap
                    </button>
                </>
        :

                <>
                    <button
                        className='ui bottom attached green basic button'
                        onClick={onStartClick}
                    >
                        Start
                    </button>
                    <button
                        className='reset'
                        onClick={onResetClick}
                    >
                        Reset
                    </button>
                </>
);


export default TimerActionButton;