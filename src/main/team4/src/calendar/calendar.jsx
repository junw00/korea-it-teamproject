import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import './calendar.css'
import "primereact/resources/themes/lara-light-blue/theme.css"; // theme


export default function MultipleMonthsDemo() {
    // state
    const [date, setDate] = useState([]); // date[0] = 여행 시작, date[1] = 여행 마지막
    console.log(date[0].getFullYear())
    const [lastDay, setLastDay] = useState(new Date);

    
    let today = new Date()

    return (
    <div className="calendar-modal">
        <div className="card flex justify-content-center">
            
            <Calendar
                className="calendar"
                value={date}
                selectionMode="range"
                onChange={(e) => {
                    setDate((prevDate) => {
                        if (date[0] !== null) {
                            let lastDay = new Date(e.value[0]);
                            lastDay.setDate(lastDay.getDate() + 9);
                            setLastDay(lastDay);
                            console.log(lastDay)
                        }
                        return e.value;
                    });
                }}
                minDate={ date[1] === null ? date[0] : today }
                maxDate={ date[1] === null ? lastDay : null }
                numberOfMonths={2}
                inline
            />
            <div className="calendar-btn-box"><button className="calendar-btn">선택</button></div>
        </div>
        </div>
    );
}
