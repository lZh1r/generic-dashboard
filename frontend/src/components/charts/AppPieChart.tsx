'use client';

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import {Label, Pie, PieChart} from "recharts";

function AppPieChart() {

    const chartData = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 190, fill: "var(--color-other)" },
    ];
    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        chrome: {
            label: "Chrome",
            color: "var(--chart-1)",
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
        firefox: {
            label: "Firefox",
            color: "var(--chart-3)",
        },
        edge: {
            label: "Edge",
            color: "var(--chart-4)",
        },
        other: {
            label: "Other",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig;

    const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

    return (
        <div>
            <h1 className="font-medium text-lg mb-4">Visitors by Browser</h1>
            <ChartContainer config={chartConfig} className="min-h-[250px] aspect-square mx-auto">
                <PieChart>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>} />
                    <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {totalVisitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Visitors
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                    <ChartLegend content={<ChartLegendContent/>}/>
                </PieChart>
            </ChartContainer>
        </div>
    );
}

export default AppPieChart;