"use client"
import { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import { Clock2 } from 'lucide-react'
import { CurrentTime } from '@/lib/functions'
import { company } from '@/lib/constants'

const DasboardNavigation = () => {

    const [companyFront, companyBack] = company.name.split(" ");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = async () => {
            setCurrentTime(await CurrentTime());
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex lg:flex-row flex-col justify-between w-full">
            <div className="flex flex-col items-center lg:items-start justify-center">
                <div className="flex gap-1 items-baseline text-4xl">
                    <h2 className="font-ight">Dashboard</h2>
                    <span className="text-muted-foreground">-</span>
                    <div className="flex gap-2 font-bold tracking-tight shrink-0">
                        <span className="text-primary">{companyFront}</span>
                        {companyBack && <span className="text-foreground"> {companyBack}</span>}
                    </div>

                </div>
                <span className="text-md text-muted-foreground font-light">Witamy na panelu administracyjnym!</span>
            </div>
            {/* CLOCK */}
            <div className="inline-flex text-2xl  lg:text-sm items-center justify-center gap-2 px-4 py-5 lg:py-1 rounded-full border border-border bg-muted/30 shadow-sm">
                <Clock2 className="w-4 h-4 text-primary" />
                <span className="font-medium tabular-nums text-foreground">
                    {currentTime}
                </span>
            </div>
        </div>
    )
}

export default DasboardNavigation