import React, { useState, useEffect } from 'react';

export default function DailyHoroscope() {
    const [date, setDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-GB');
        setDate(formattedDate);
    }, []);

    return (
        <div>
            <h2>Daily Horoscope</h2>
            <p>Your daily horoscope for {date} is akwdjbwkajdbakbdwakj.</p>
            
        </div>
    );
}