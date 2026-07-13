"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

type ChartData = {
    date: string;
    revenue: number;
    orderCount: number;
};

export const DashboardChart = ({ data }: { data: ChartData[] }) => {
    const filterOptions = [
        { value: "7", label: "Ostatnie 7 dni" },
        { value: "30", label: "Ostatnie 30 dni" },
        { value: "90", label: "Ostatnie 90 dni" },
    ]

    const [chartTimeRange, setChartTimeRange] = useState<"7" | "30" | "90">("30");


    const filteredData = data.slice(data.length - parseInt(chartTimeRange));

    return (
        <Card className="flex flex-col border-border shadow-sm h-full min-h-[350px]">
            <CardHeader className="flex flex-row justify-between items-center pb-2">
                <div className="flex flex-col gap-0.5">
                    <CardTitle className="text-lg font-bold">Przychody z ostatnich dni</CardTitle>
                    <CardDescription>
                        Zsumowana kwota zrealizowanych i będących w toku zleceń.
                    </CardDescription>
                </div>
                <div>
                    <Select items={filterOptions} onValueChange={(value) => setChartTimeRange(value as "7" | "30" | "90")}>
                        <SelectTrigger>
                            <SelectValue placeholder={filterOptions.find((option) => option.value === chartTimeRange)?.label} />
                        </SelectTrigger>
                        <SelectContent>
                            {filterOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="flex-1 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground)/0.2)" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                            tickFormatter={(value) => `${value} zł`}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                borderColor: "hsl(var(--border))",
                                borderRadius: "8px",
                                color: "hsl(var(--foreground))"
                            }}
                            formatter={(value: any, name: any) => {
                                if (name === "revenue") return [`${value} zł`, "Przychód"];
                                if (name === "orderCount") return [value, "Liczba zleceń"];
                                return [value, name];
                            }}
                            labelStyle={{ color: "hsl(var(--muted-foreground))", marginBottom: "4px" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f59e0b"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                        <Area type="monotone" dataKey="orderCount" stroke="none" fill="none" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}