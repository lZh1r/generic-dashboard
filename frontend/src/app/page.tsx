import AppBarChart from "@/components/charts/AppBarChart";
import AppAreaChart from "@/components/charts/AppAreaChart";
import AppPieChart from "@/components/charts/AppPieChart";

export default function Home() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-primary-foreground p-4 col-span-2">
                <AppBarChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <p>Test</p>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <AppPieChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <p>Test</p>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4 col-span-2">
                <AppAreaChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <p>Test</p>
            </div>

        </div>
    );
}
