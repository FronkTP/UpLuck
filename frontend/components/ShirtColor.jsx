import React, { useState, useEffect } from 'react';

export default function ShirtColor() {
    //การงาน การเงิน ความรัก โชคลาภ กาลกิณี
    //Sunday Monday Tuesday Wednesday Thursday Friday Saturday
    const days_of_week = [
    ["เขียว ฟ้า", "แดง", "เขียว เทา ดำ", "ชมพู", "น้ำเงิน"], 
    ["ฟ้า น้ำเงิน", "ม่วง", "ชมพู ม่วง น้ำเงิน", "เขียว", "แดง"],  
    ["ส้ม ชมพู", "เหลือง ทอง", "ส้ม แดง", "เทา ดำ", "ขาว"],  
    ["เหลือง ครีม", "เขียว", "ดำ ครีม", "น้ำเงิน ฟ้า", "ชมพู"],  
    ["ทอง ขาว", "ฟ้า น้ำเงิน", "ฟ้า ส้ม แดง", "ชมพู แดง", "ม่วง"],  
    ["เขียว", "ฟ้า น้ำเงิน", "ฟ้า ชมพู แดง", "ขาว ครีม", "เทา ดำ"],  
    ["แดง", "ส้ม ทอง", "เขียว เทา ดำ", "ม่วง ดำ", "เขียว"]]

    const ThaiDaysMapping = {
        "Sunday": "อาทิตย์",
        "Monday": "จันทร์",
        "Tuesday": "อังคาร",
        "Wednesday": "พุธ",
        "Thursday": "พฤหัสบดี",
        "Friday": "ศุกร์",
        "Saturday": "เสาร์"
    };
    
    const [date, setDate] = useState('');
    const [weekday, setWeekday] = useState('');
    //const [selectedDay, setSelectedDay] = useState(''); testing other day

    useEffect(() => {
        const today = new Date();
        const options = { day: "2-digit", month: "long", year: "numeric" };
        const formattedDate = today.toLocaleDateString("th-TH", options);
        setDate(formattedDate);
        const englishWeekday = today.toLocaleDateString("en-US", { weekday: "long" });
        setWeekday(ThaiDaysMapping[englishWeekday]); 
        //setSelectedDay(onlyday); testing other day
    }, [])

    function shirtcolour(weekday) {
        const daysMapping = {
            "อาทิตย์": 0, "จันทร์": 1, "อังคาร": 2, "พุธ": 3, "พฤหัสบดี": 4, "ศุกร์": 5, "เสาร์": 6
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

    const colorMappings = {
        "เขียว": "green", "ฟ้า": "skyblue", "แดง": "red", "ดำ": "black", "เทา": "gray", 
        "ชมพู": "pink", "น้ำเงิน": "blue", "ส้ม": "orange", "เหลือง": "yellow", "ทอง": "gold", 
        "ขาว": "white", "ครีม": "beige", "ม่วง": "purple"
    };

    return (
        <>
            <div className="fortune-header">
                    <h2>สีเสื้อมงคลประจำวัน{weekday}ที่ {date}</h2>
            </div>
            <div className="fortune-content shirt-content">
                <div className='shirt-container'>
                    {['การงาน', 'การเงิน', 'ความรัก', 'โชคลาภ', 'กาลกิณี'].map((category, index) => (
                        <div className="shirt-category" key={index}>
                            <div className="color-container">
                                {resultofshirt[index].split(' ').map((color, i) => (
                                    <div key={i} className="color-circle" style={{ backgroundColor: colorMappings[color] || 'gray' }}></div>
                                ))}
                            </div>
                            <p className='color-label'>{category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}