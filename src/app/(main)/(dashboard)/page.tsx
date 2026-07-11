// "/" is a dashboard

import { KpiCard } from "@/components/dashboard/kpiCard";
import { kpiCardsData } from "@/components/dashboard/kpiData";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const MainPage = () => {
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <div className="flex flex-col w-full">
                <Button>
                    <Link href="/historia">Historia</Link>
                </Button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {kpiCardsData.map((kpi) => (
                        <KpiCard
                            key={kpi.title}
                            title={kpi.title}
                            value={kpi.value}
                            Icon={kpi.Icon}
                            description={kpi.description}
                            style={kpi.style}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default MainPage