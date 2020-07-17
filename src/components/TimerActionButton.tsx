import React from 'react';
interface IProps {
    timerIsRunning: boolean;
    onStopClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    onStartClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    onLapClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    onResetClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}
const TimerActionButton: React.FC<IProps> = ({ timerIsRunning, onStopClick, onLapClick, onStartClick, onResetClick }) => (
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