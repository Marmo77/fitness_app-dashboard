import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { KpiCardProps } from "./kpiData";

export const KpiCard = ({
    title,
    value,
    Icon,
    description,
    style
}: KpiCardProps) => {

    return (
        <Card className={cn(
            "overflow-hidden transition-all duration-200 hover:shadow-lg border-border bg-card",
            (style === "financial" && "border-b-3 border-b-emerald-500 shadow-emerald-500/50"),
            (style === "active" && "border-b-3 border-b-blue-500 shadow-blue-500/50"),
            (style === "new" && "border-b-3 border-b-purple-500 shadow-purple-500/50"),
            (style === "performance" && "border-b-3 border-b-orange-500 shadow-orange-500/50")
        )}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <div className={cn(
                    "p-2 rounded-lg",
                    style === "financial" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                )}>
                    <Icon className="h-4 w-4" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                    {value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};