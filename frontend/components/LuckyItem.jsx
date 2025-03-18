import React, { useState, useEffect } from 'react';

export default function LuckyItem() {
    const [date, setDate] = useState('');
        
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-GB');
        setDate(formattedDate);
    }, []);
    
    return (
        <div>
            <h2>Lucky Item</h2>
            <p>Your lucky item for {date} is aljdbawjldabdkj.</p>
        </div>
    );
}