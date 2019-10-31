import React from'react';
import Timer from './Timer';

class StopWatchDashBoard extends React.Component {

    state = {
        time: [
            {
                title: 'StopWatch',
                project: 'Web Timer',
                elapsed: null,
                runningSince: null,
            }
        ],
        lap : [],
    };

    handleStartClick = () => {
        this.startTimer();
    };

    handleStopClick = () => {
        this.stopTimer();
    };

    handleResetClick = () => {
        this.setState({
            time: this.state.time.map(timer => {return {...timer, elapsed:null, runningSince:null} }

            // return Object.assign({}, timer , {
            //     elapsed: null,
            //     runningSince: null,
            // })
            ),
            //time: [...this.state.time, {elapsed:null, runningSince:null}],
        lap: [],})
        //this.setState({ lap: [], });
    };



    startTimer = () => {
        const now = Date.now();
        this.setState({
            time: this.state.time.map((timer) => {
                if (timer) {
                    return {...timer, runningSince:now}
                    // return Object.assign({}, timer, {
                    //     runningSince: now,});
                } else {return timer;}
            }),
        });
    };

    stopTimer = () => {
        const now = Date.now();
        this.setState({
            time: this.state.time.map((timer) => {
                if (timer) {
                    const lastElapsed = now - timer.runningSince;
                    return {...timer, elapsed: timer.elapsed + lastElapsed, runningSince:null}
                    // return Object.assign({}, timer, { 
                    //     elapsed: timer.elapsed + lastElapsed,
                    //     runningSince: null,});
                } else {
                    return timer;
                }}),
        });
        //console.log(test);
    };

    handleLapClick = (test) => {
        this.setState(state => {
            const lap = state.lap.concat(test);

            return {
                lap,
            };
        });
    };


    render() {
        return (
          <div>
              <Timer
                time={this.state.time}
                laps={this.state.lap}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
                onResetClick={this.handleResetClick}
                onLapClick={this.handleLapClick}
              />

          </div>
        );
    }
}

export default StopWatchDashBoard;