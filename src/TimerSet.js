import React from 'react';
import TimerActionButton from './TimerActionButton';
const helpers = (function () {
    function newTimer(attrs = {}) {
        const timer = {
            title: attrs.title || 'Timer',
            project: attrs.project || 'Project',
            id: uuid.v4(), // eslint-disable-line no-undef
            elapsed: 0,
        };
        return timer;
    }

    function findById(array, id, cb) {
        array.forEach((el) => {
            if (el.id === id) {
                cb(el);
                return;
            }
        });
    }

    function renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return millisecondsToHuman(totalElapsed);
    }

    function millisecondsToHuman(ms) {
        const milliseconds = new Date(ms);
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        const humanized = [
            pad(hours.toString(), 2),
            pad(minutes.toString(), 2),
            pad(seconds.toString(), 2),
            pad(milliseconds.getMilliseconds().toString(), 3),
        ].join(':');

        return humanized;
    }

    function pad(numberString, size) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    }

    return {
        millisecondsToHuman,
        newTimer,
        findById,
        renderElapsedString,
    };
}());


class Time extends React.Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }



    handleStartClick = () => {
        this.props.onStartClick();
    };

    handleStopClick = () => {
        this.props.onStopClick();
    };

    handleResetClick = () => {
        this.props.onResetClick();
    };

    handleLapClick = () => {
        const test = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        this.props.onLapClick(test);
    };

    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <div className="elapsedString">
                            {elapsedString}
                        </div>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                    onResetClick={this.handleResetClick}
                    onLapClick={this.handleLapClick}
                />
            </div>
        )
    }
}

export default Time;