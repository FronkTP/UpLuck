import React, { useState, useEffect } from 'react';

export default function ShirtColor() {
    const [date, setDate] = useState('');
        
    useEffect(() => {
        const today = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        setDate(formattedDate);
    }, [])

    return (
        <div>
            <h2>Shirt Color</h2>
            <p>Your daily lucky shirt for {date} is color content goes here.</p>
            <p>akwdjbwakjdba</p>
        </div>
    );
}