"use client";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {zustandStore} from "@/lib/zustand-store";
import {useParams} from "next/navigation";
import {capitalize} from "@/lib/lib";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, LabelList, Line, LineChart, XAxis} from "recharts";

const chartData = [
    { month: "January", sales: 186},
    { month: "February", sales: 305},
    { month: "March", sales: 237},
    { month: "April", sales: 73},
    { month: "May", sales: 209},
    { month: "June", sales: 214},
];

const chartConfig = {
    sales: {
        label: "Total Sales",
        color: "var(--chart-1)",
    }
} satisfies ChartConfig;

function UserCard() {

    const params = useParams<{username: string}>();
    const isLoggedUser = params.username === zustandStore((state) => state.username);
    const displayName = zustandStore((state) => state.displayName);

    return (
        <div className="w-full xl:w-2/3 space-y-5">
            <div className="rounded-lg bg-primary-foreground p-4">
                <div className="flex gap-4 items-center">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/126076657?v=4"/>
                        <AvatarFallback>PF</AvatarFallback>
                    </Avatar>
                    <h1 className="text-lg font-medium">{
                        isLoggedUser ? displayName : capitalize(params.username)
                    }</h1>
                </div>
                <p className="text-muted-foreground p-2 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu augue vitae leo
                    suscipit mattis. Etiam a tempor nibh. Phasellus quam diam, blandit in justo et,
                    viverra tempus enim. Phasellus porta sem odio, in fringilla nisl rutrum ultricies.
                    Maecenas mattis neque quis tellus pellentesque, eget eleifend massa volutpat.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper
                    maximus odio ac scelerisque. Morbi laoreet ac quam ac mollis. Duis enim ligula,
                    dapibus quis lectus vel, efficitur aliquet odio. Quisque ut ex sed est rhoncus
                    ullamcorper eget quis lacus. Donec euismod metus nec ex faucibus, eu gravida
                    nibh tincidunt. Proin ullamcorper sem lacus, dignissim varius purus mollis at.
                    Suspendisse tempus mollis tellus, a porta arcu ullamcorper vitae. Quisque
                    condimentum sem in sollicitudin euismod.
                </p>
            </div>
            <div className="rounded-lg bg-primary-foreground p-4 space-y-4">
                <h1 className="text-lg font-medium">Sales Graph</h1>
                <ChartContainer className="" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey="sales"
                            type="natural"
                            stroke="var(--color-sales)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-sales)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </div>
        </div>
    );
}

export default UserCard;