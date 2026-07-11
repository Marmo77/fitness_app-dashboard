import { Activity, Car, CircleDollarSign, Users } from "lucide-react";

// Data for KPI Cards
export type KpiCardProps = {
    title: string;
    value: string;
    Icon: React.ElementType;
    description: string;
    style: KpiCardStyle;
}

export type KpiCardStyle = "financial" | "active" | "new" | "performance";


export const kpiCardsData: KpiCardProps[] = [
    {
        title: "Całkowity przychód",
        value: "124 500 zł",
        Icon: CircleDollarSign,
        description: "+15% względem zeszłego miesiąca",
        style: "financial"
    },
    {
        title: "Aktywne ogłoszenia",
        value: "42",
        Icon: Car,
        description: "3 nowe w tym tygodniu",
        style: "active"
    },
    {
        title: "Nowi użytkownicy",
        value: "+12",
        Icon: Users,
        description: "Zarejestrowani w ostatnich 7 dniach",
        style: "new"
    },
    {
        title: "Aktywność serwera",
        value: "99.9%",
        Icon: Activity,
        description: "Czas działania w tym miesiącu",
        style: "performance"
    }

]