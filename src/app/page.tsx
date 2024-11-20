import Image from "next/image";
import logotypeWalkway from "../../public/logotype-walkway.png";
import CalendarHeatmap from "@/components/calendarHeatmap";
import LineChart from "@/components/charts/lineChart";
import Footer from "@/components/footer";
import {data} from "@/data/calendar";
import {lineChartData} from "@/data/lineChart";


export default function Home() {
  return (
    <div className="w-full mx-auto p-4 md:p-6">
      <div className="container mx-auto pb-8">
        <header className="py-2 mb-6">
          <Image src={logotypeWalkway} width={258} height={104} alt="Walkway.ai" className="w-full max-w-28" />
        </header>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <CalendarHeatmap data={data} />
          <LineChart lineChartData={lineChartData} />
          <Footer />
        </main>
        
      </div>
    </div>
  );
}
