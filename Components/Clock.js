import React, { useState, useEffect } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const Clock = ({ date }) => {
    const [isMobile, setIsMobile] = useState();
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 550) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);

    return (
        <div className="my-4 p-5 bg-invert">
            <FlipCountdown
                size={isMobile ? 'small' : 'medium'}
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