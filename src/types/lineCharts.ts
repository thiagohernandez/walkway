export interface lineChartsProps {
    month: string;
    avgPrice: number;
    marketAvgPrice?: number;
}

export interface lineChartsDataProps {
    lineChartData: lineChartsProps[];
}