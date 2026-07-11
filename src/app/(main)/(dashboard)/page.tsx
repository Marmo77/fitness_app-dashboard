// "/" is a dashboard

import AdminsList from "@/components/dashboard/AdminsList";
import DashboardCards from "@/components/dashboard/DashboardCards";
import NewestOrders from "@/components/dashboard/NewestOrders";
import { company } from "@/lib/constants";

const MainPage = () => {

    const [companyFront, companyBack] = company.name.split(" ");
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6 py-18">
            <div className="flex flex-col w-full">
                <div className="flex gap-1 items-baseline text-4xl">
                    <h2 className="font-ight">Dashboard</h2>
                    <span className="text-muted-foreground">-</span>
                    <div className="flex gap-2 font-bold tracking-tight shrink-0">
                        <span className="text-primary">{companyFront}</span>
                        {companyBack && <span className="text-foreground"> {companyBack}</span>}
                    </div>
                </div>
            </div>
            <section className="w-full flex flex-col items-start justify-start gap-4">
                {/* Dashboard with KPI Cards (4 boxes) */}
                <section className="w-full">
                    <DashboardCards />
                </section>
                <section className="w-full grid grid-cols-2 gap-4">
                    {/* history orders - Recent (newest 8 orders) */}
                    <NewestOrders />
                    {/* Administrators List */}
                    <AdminsList />
                </section>
            </section>

        </main >
    )
}

export default MainPage