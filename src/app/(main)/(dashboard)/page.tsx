// "/" is a dashboard

import AdminsList from "@/components/dashboard/AdminsList";
import DashboardCards from "@/components/dashboard/DashboardCards";
import NewestOrders from "@/components/dashboard/NewestOrders";
import DashboardNavigation from "@/components/dashboard/DasboardNavigation";
import { DashboardChart } from "@/components/dashboard/DashboardChart";
import { getChartData } from "@/lib/data/orders";

const MainPage = async () => {

    const chartData = await getChartData();

    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6 py-8">
            <DashboardNavigation />
            <section className="w-full flex flex-col items-start justify-start gap-4">
                {/* Dashboard with KPI Cards (4 boxes) */}
                <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <DashboardCards />
                    </div>
                    <div>
                        <DashboardChart data={chartData} />
                    </div>
                </section>
                <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {/* history orders - Recent (newest 8 orders) */}
                    <div className="lg:col-span-2">
                        <NewestOrders />  {/* 66% of width */}
                    </div>
                    {/* Administrators List */}
                    <div className="lg:col-span-1">
                        <AdminsList /> {/*  33% of width */}
                    </div>
                </section>
            </section>

        </main >
    )
}

export default MainPage