import React from 'react'
import { KpiCard } from './kpiCard'
import { kpiCardsData } from './kpiData'

const DashboardCards = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <h1>ostatnie posiłki</h1>
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
    )
}

export default DashboardCards