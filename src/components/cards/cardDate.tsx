import React, { useState } from 'react';
import {dayDataProps} from "@/types/calendar"; 
import BarChart from '../icons/barChart';

interface cardDateProps {
    day: dayDataProps;
    index: number;
    showHeatmap: boolean;
}

const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-US", { weekday: "long", day: "numeric" }).format(date);
  };

const getLevel = (value: number): string => {
    if (value < 40) {
        return "low";
    } else if (value >= 40 && value <= 70) {
        return "medium";
    } else {
        return "high";
    }
};

const CardDate = ({day, index, showHeatmap}:cardDateProps ) => {
    
    return (
        <div key={`${day.date}-${index}`} className="day relative w-full h-full rounded p-2 transition-all hover:shadow-2xl hover:z-50 hover:!bg-slate-700 hover:text-slate-50 hover:cursor-pointer group"
            style={{ 
                backgroundColor: showHeatmap && day.value ? `rgba(74, 222, 128, ${day.value / 100})` : "#f1f5f9"
            }}
        >
            <strong className="text-sm flex w-full mb-3">{day.date && day.date.split("-")[2]}</strong>
            {day.additionalInfo?.price && day.value &&
                <div className="flex w-full justify-between">
                    <h3 className="text-2xl font-semibold">{day.additionalInfo.price}</h3>
                    <BarChart level={getLevel(day.value)} />
                </div>
            }
            <div className="w-full py-2 flex justify-between text-xs">
                <div><strong>14.3%</strong> vs comp.</div><div>11 Tours</div>
            </div>
            {day.additionalInfo && day.value &&
                <div className="flex flex-row w-auto flex-wrap bg-slate-900 justify-between absolute -top-4 left-0 z-[51] rounded-md p-3 opacity-0 group-hover:-top-1 group-hover:opacity-100 group-hover:-translate-y-full transition-all">
                    <div className="flex w-full mb-2"><h4 className="text-xl font-semibold">{formatDate(day.date)}</h4></div>
                    <div className="flex w-full justify-between text-sm font-semibold capitalize"><h4 className="text-sm font-semibold">Demand:</h4> <span className={`${getLevel(day.value) === "low" ? "text-sky-400": ""} ${getLevel(day.value) === "medium" ? "text-yellow-400": ""} ${getLevel(day.value) === "high" ? "text-orange-500": ""}`}>{getLevel(day.value)}</span></div>
                    <div className="flex w-full justify-between text-sm font-semibold capitalize"><h4 className="text-sm font-semibold">Price:</h4> {day.additionalInfo.price}</div>
                    {day.additionalInfo.customMessage && 
                        <div className="flex w-full justify-between text-sm leading-tight mt-2">{day.additionalInfo.customMessage}</div>
                    }
                </div>
            }
        </div>
    );
};

export default CardDate;