import React, { useState, useEffect } from 'react';

export default function LuckyItem() {


    const [date, setDate] = useState('');
        
    useEffect(() => {
        // Get the current date
        const today = new Date();
        
        // Format the date as you need (e.g., YYYY-MM-DD)
        const formattedDate = today.toLocaleDateString(); // You can change this format
        setDate(formattedDate);
    }, []); // Empty dependency array to run once when the component mounts
    return (
        <div>
            <h2>Lucky Item</h2>
            <p>Your lucky item for {date} is aljdbawjldabdkj.</p>
        </div>
    );
}