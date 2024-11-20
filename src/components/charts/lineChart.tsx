"use client" 
import React from 'react';
import {lineChartsDataProps, lineChartsProps} from "@/types/lineCharts"; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

const LineChart = ({lineChartData}: lineChartsDataProps) => {
    const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug"];

    const avgPrices = Array.from({ length: lineChartData.length }, (_, i) => lineChartData[i].avgPrice);
    const marketAvgPrices = Array.from({ length: lineChartData.length }, (_, i) => lineChartData[i].marketAvgPrice);

    // eslint-disable-next-line
    const data:any = {
        labels,
        datasets: [
          {
            label: 'You',
            data: avgPrices,
            borderColor: 'rgb(15, 15, 15)',
            backgroundColor: 'rgba(15, 15, 15, 1)',
            pointStyle: false,
          },
          {
            label: 'Market',
            data: marketAvgPrices,
            borderColor: 'rgb(120, 120, 120)',
            borderDash: [4, 4, 4],
            backgroundColor: 'rgba(120, 120, 120, 1)',
            pointStyle: false,
          },
        ],
      };

    // eslint-disable-next-line
    const options:any = {
        responsive: true, 
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false
                },
            },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };

      function calculateAverages(data:lineChartsProps[]) {
        const total = data.reduce((acc:lineChartsProps, item:lineChartsProps) => {
            acc.avgPrice += item.avgPrice;
            acc.marketAvgPrice += item.marketAvgPrice;
            return acc;
        }, { avgPrice: 0, marketAvgPrice: 0 });
    
        const avgPrice = total.avgPrice / data.length;
        const marketAvgPrice = total.marketAvgPrice / data.length;
        const percentageVariation = ((marketAvgPrice - avgPrice) / avgPrice) * 100;

        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    
        return {
            avgPrice: USDollar.format(avgPrice),
            marketAvgPrice: USDollar.format(marketAvgPrice),
            percentageVariation: percentageVariation.toFixed(2) + "%"
        };
    }
    
    const averagesSummary = calculateAverages(lineChartData);

    return (
        <div className="flex w-full py-2">
            <div className="flex flex-col flex-wrap gap-0.5 w-auto p-6 border border-slate-200 shadow-sm rounded-md">
                <h3 className="text-lg font-semibold text-slate-800">Avg. ticket price</h3>
                <h4 className="text-2xl font-semibold text-slate-800 flex items-center gap-2">{averagesSummary.avgPrice} <span className="bg-green-300 text-green-800 text-xs font-semibold py-1 px-2 rounded-sm">{averagesSummary.percentageVariation}</span></h4>
                <div style={{ height: '200px', width: '400px' }}>
                    <Line data={data} options={options} />
                </div>
                <div className="flex gap-2 w-full pt-3">
                    <div className="flex items-center gap-1">
                        <div className="relative text-xs pl-3 pr-2 after:content-[' '] after:absolute after:left-0 after:top-1 after:bg-black after:w-2 after:h-2 after:rounded-full">You</div>
                        <div className="relative text-xs pl-3 pr-2 after:content-[' '] after:absolute after:left-0 after:top-1 after:bg-slate-400 after:w-2 after:h-2 after:rounded-full">Market</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LineChart;