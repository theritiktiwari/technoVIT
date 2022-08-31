import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const Clock = ({ date }) => {
    return (
        <div className="my-4">
            <FlipCountdown
                hideYear
                hideMonth
                endAtZero
                dayTitle='Days'
                hourTitle='Hours'
                minuteTitle='Minutes'
                secondTitle='Seconds'
                endAt={date}
            />
        </div>
    );
}

export default Clock