import AppBarChart from "@/components/charts/AppBarChart";
import AppAreaChart from "@/components/charts/AppAreaChart";
import AppPieChart from "@/components/charts/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-primary-foreground p-4 xl:col-span-2">
                <AppBarChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <CardList title="Popular Content"/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <AppPieChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <CardList title="Latest Transactions"/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4 xl:col-span-2">
                <AppAreaChart/>
            </div>
            <div className="rounded-2xl bg-primary-foreground p-4">
                <TodoList/>
            </div>

        </div>
    );
}
