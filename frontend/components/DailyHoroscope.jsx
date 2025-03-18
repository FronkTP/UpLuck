
import React, { useState, useEffect } from 'react';
export default function DailyHoroscope() {
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
            <h2>Daily Horoscope</h2>
            <p>Your daily horoscope for {date} is akwdjbwkajdbakbdwakj.</p>
            
        </div>
    );
}