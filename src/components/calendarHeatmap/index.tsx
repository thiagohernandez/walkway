"use client";
import React, { useState } from 'react'; 
import BarChart from '@/components/icons/barChart';
import {dayDataProps, CalendarHeatmapProps} from "@/types/calendar"; 

 import CardDate from '@/components/cards/cardDate';


const CalendarHeatmap = ({data}: CalendarHeatmapProps) => { 
    const [showHeatmap, setShowHeatmap] = useState(true);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // This function prepares the data for rendering a calendar by adding placeholder objects at the beginning of the array. 
    const getCalendarDays = (data: dayDataProps[]) => {
        const firstDayOfMonth = new Date(data[0].date).getDay(); // 0 = Sunday, 1 = Monday, etc.
        const placeholders = Array(firstDayOfMonth).fill({ date: "", value: null });
        return [...placeholders, ...data];
      };

    const calendarDays = getCalendarDays(data); 

    return (
        <div className="w-full">
            <div className="w-full flex justify-between">
                <h3 className="font-semibold text-3xl w-full mb-2">Calendar heatmap <strong className="font-semibold text-xl text-slate-400">September 2024</strong></h3>  
                <button className={`group flex flex-nowrap gap-2 text-sm font-semibold whitespace-nowrap items-center`} onClick={() => setShowHeatmap((prevState) => !prevState)}>Show heatmap <div className={`w-12 h-[23px] rounded-full relative transition-all after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all after:top-[3px] ${showHeatmap ? "bg-green-400 after:left-[29px]" : "bg-slate-300 after:left-[4px]"}`}></div></button>
            </div>
            <div className="grid grid-cols-7 gap-0.5 w-full border-b-2 border-slate-100 mb-2">
                {weekdays.map((day) => (
                    <div key={day} className="font-bold uppercase text-xs p-2 text-center text-slate-600 tracking-wide">
                        {day}
                    </div>
                ))}
            </div> 
            <div className="grid grid-cols-7 gap-2 w-full">
                {calendarDays.map((day, index) => (
                    <CardDate key={`${day.date}-index`} index={index} day={day} showHeatmap={showHeatmap} />
                ))}
            </div>
            <div className="flex w-full gap-6 items-center border-b-2 border-slate-200 p-2 justify-end">
                <div className="flex gap-2 items-end text-sm font-semibold"><BarChart level="low" /> Low demand</div>
                <div className="flex gap-2 items-end text-sm font-semibold"><BarChart level="medium" /> Medium demand</div>
                <div className="flex gap-2 items-end text-sm font-semibold"><BarChart level="high" /> High demand</div>
            </div>
        </div>
    );
};

export default CalendarHeatmap;