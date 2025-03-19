import React, { useState, useEffect } from 'react';

export default function ShirtColor() {
    //การงาน การเงิน ความรัก โชคลาภ กาลกิณี
    //Sunday Monday Tuesday Wednesday Thursday 
    const days_of_week = [
    ["เขียว ฟ้า", "แดง", "ดำ เทา เขียว", "ชมพู", "น้ำเงิน"], 
    ["น้ำเงิน ฟ้า", "ม่วง", "ชมพู ม่วง น้ำเงิน", "เขียว", "แดง"],  
    ["ส้ม ชมพู", "เหลือง ทอง", "แดง ส้ม", "เทา ดำ", "ขาว"],  
    ["เหลือง ครีม", "เขียว", "ดำ ครีม", "น้ำเงิน ฟ้า", "ชมพู"],  
    ["ทอง ขาว", "น้ำเงิน ฟ้า", "ฟ้า ส้ม แดง", "แดง ชมพู", "ม่วง"],  
    ["เขียว", "น้ำเงิน ฟ้า", "ฟ้า ชมพู แดง", "ขาว ครีม", "เทา ดำ"],  
    ["แดง", "ส้ม ทอง", "ดำ เทา เขียว", "ม่วง ดำ", "เขียว"]]
    const [date, setDate] = useState('');
    const [weekday, setWeekday] = useState('');
    //const [selectedDay, setSelectedDay] = useState(''); testing other day

    useEffect(() => {
        const today = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        const onlyday  = today.toLocaleDateString('en-GB',{weekday:'short'})
        setDate(formattedDate);
        setWeekday(onlyday)
        //setSelectedDay(onlyday); testing other day
    }, [])

    function shirtcolour(weekday) {
        const daysMapping = {
            "Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6
        };
        const index = daysMapping[weekday];
        return index !== undefined ? days_of_week[index] : "impossible";
    }

    const resultofshirt = shirtcolour(weekday) //use selectedDay if want to select
    /* uncomment this if want to test changing 
    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };
    */

    return (
        <div>
            <h2>Shirt Color</h2>
            <p>Your daily lucky shirt for {date} is </p>
            {/*
            <label htmlFor="day-select">Select a Day: </label>
            <select id="day-select" value={selectedDay} onChange={handleDayChange}>
                <option value="Sun">Sunday</option>
                <option value="Mon">Monday</option>
                <option value="Tue">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thu">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
            </select>
            */}

            <ul>
                <li>For การงาน : {resultofshirt[0]}</li>
                <li>For การเงิน : {resultofshirt[1]}</li>
                <li>For ความรัก : {resultofshirt[2]}</li>
                <li>For โชคลาภ : {resultofshirt[3]}</li>
                <li>For กาลกิณี : {resultofshirt[4]}</li>
            </ul>
        </div>
    );
}