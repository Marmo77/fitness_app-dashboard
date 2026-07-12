"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { KpiCardGroup } from "./DashboardCards";

export const KpiCardCarousel = ({ group }: { group: KpiCardGroup }) => {
    const { style, items } = group;

    return (
        <Card className={cn(
            "overflow-hidden transition-all duration-200 hover:shadow-lg border-border bg-card group/kpicard relative",
            (style === "financial" && "border-b-4 border-b-emerald-500 shadow-emerald-500/10"),
            (style === "active" && "border-b-4 border-b-blue-500 shadow-blue-500/10"),
            (style === "new" && "border-b-4 border-b-purple-500 shadow-purple-500/10"),
            (style === "performance" && "border-b-4 border-b-orange-500 shadow-orange-500/10")
        )}>
            <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {items.map((item, index) => {
                        return (
                            <CarouselItem key={index}>
                                <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        {item.title}
                                    </CardTitle>
                                    <div className={cn(
                                        "p-2 rounded-lg shrink-0",
                                        (style === "financial" && "bg-emerald-500/10 text-emerald-500"),
                                        (style === "active" && "bg-blue-500/10 text-blue-500"),
                                        (style === "new" && "bg-purple-500/10 text-purple-500"),
                                        (style === "performance" && "bg-orange-500/10 text-orange-500")
                                    )}>
                                        {item.Icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold tracking-tight text-foreground truncate">
                                        {item.value}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 min-h-[16px]">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>

                {/* Renderuj strzałki TYLKO, gdy w grupie jest więcej niż 1 element */}
                {items.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex gap-1 opacity-25 transition-opacity duration-300 group-hover/kpicard:opacity-100">
                        {/* Nadpisujemy klasami static i inset-auto pozycje absolutne shadcn */}
                        <CarouselPrevious className="static translate-y-0 h-6 w-6 border-border bg-background hover:bg-muted" />
                        <CarouselNext className="static translate-y-0 h-6 w-6 border-border bg-background hover:bg-muted" />
                    </div>
                )}
            </Carousel>
        </Card>
    );
};