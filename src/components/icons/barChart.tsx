import React from 'react';
interface barChartProps {
    level?: string;
}

const BarChart = ({level = "low"}: barChartProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart">
            {level === "high" && (
                <>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                </>
            )}
            {level === "medium" && (
                <>
                    <line x1="18" y1="20" x2="18" y2="18"></line>
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                </>
            )}
            {level === "low" && (
                <>
                    <line x1="18" y1="20" x2="18" y2="18"></line>
                    <line x1="12" y1="20" x2="12" y2="18"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                </>
            )}
        </svg>
    );
};

export default BarChart;