export interface additionalInfoProps {
    demand: number;
    price: string;
    customMessage?: string;
}

export interface dayDataProps {
    date: string;  // ISO format date string
    value: number | null;
    additionalInfo?: additionalInfoProps;
}

export interface CalendarHeatmapProps {
    data: dayDataProps[];
}
