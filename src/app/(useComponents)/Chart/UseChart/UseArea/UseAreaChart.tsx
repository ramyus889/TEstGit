"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", web: 600, desktop: 300, mobile: 420 },
  { month: "February", web: 300, desktop: 200, mobile: 600 },
  { month: "March", web: 800, desktop: 300, mobile: 150 },
  { month: "April", web: 500, desktop: 100, mobile: 300 },
  { month: "May", web: 100, desktop: 700, mobile: 450 },
  { month: "June", web: 700, desktop: 600, mobile: 300 },
  { month: "Jule", web: 800, desktop: 300, mobile: 150 },
  { month: "August", web: 100, desktop: 500, mobile: 400 },
  { month: "September", web: 300, desktop: 100, mobile: 450 },
  { month: "October", web: 600, desktop: 400, mobile: 100 },
  { month: "November", web: 300, desktop: 600, mobile: 450 },
  { month: "December", web: 700, desktop: 500, mobile: 700 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  web: {
    label: "Web",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        {/* <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="mobile"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
        />
        {/*
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="web"
              type="natural"
              fill="var(--color-web)"
              fillOpacity={0.4}
              stroke="var(--color-web)"
              stackId="a"
            /> 
            */}
      </AreaChart>
    </ChartContainer>
  );
}
