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
            <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <div className={cn(
                    "p-2 rounded-lg",
                    (style === "financial" && "bg-emerald-500/10 text-emerald-500"),
                    (style === "active" && "bg-blue-500/10 text-blue-500"),
                    (style === "new" && "bg-purple-500/10 text-purple-500"),
                    (style === "performance" && "bg-orange-500/10 text-orange-500")
                )}>
                    <Icon className="h-6 w-6" />
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