import { CircleDollarSign, Crown, Users } from 'lucide-react';
import { KpiCard } from './kpiCard'
import { KpiCardProps, kpiCardsData } from './kpiData'
import { getOrdersStatsKPI } from '@/lib/data/orders'
import { MdTaskAlt } from 'react-icons/md';
import { Activity } from 'react';

const DashboardCards = async () => {

    const getOrders = await getOrdersStatsKPI();

    const CardsData: KpiCardProps[] = [
        {
            title: "Całkowity przychód",
            value: getOrders.order.totalRevenue,
            Icon: CircleDollarSign,
            description: "+15% względem zeszłego miesiąca",
            style: "financial"
        },
        {
            title: "Zakończone Zlecenia",
            value: getOrders.order.completedOrders.toString(),
            Icon: MdTaskAlt,
            description: "3 nowe w tym tygodniu",
            style: "active"
        },
        {
            title: "Wszyscy użytkownicy",
            value: getOrders.users.totalUsers.toString(),
            Icon: Users,
            description: "",
            style: "new"
        },
        {
            title: "Ilość administratorów",
            value: getOrders.users.totalAdmins.toString(),
            Icon: Crown,
            description: "",
            style: "performance"
        }

    ]


    return (
        <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {CardsData.map((kpi) => (
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
            <div className='flex w-full flex-col p-4 gap-1 rounded-lg border'>
                <div>
                    <h1 className='text-2xl'>Orders Cat.</h1>
                    <span>Money</span>
                    <p>{getOrders.order.totalRevenue}</p>
                    <p>{getOrders.order.revenueForCompletedOrders}</p>
                    <span>Orders</span>
                    <p>{getOrders.order.completedOrders}</p>
                    <p>{getOrders.order.ordersToCanceled}</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Users Cat.</h1>
                    <span>Total</span>
                    <p>{getOrders.users.totalUsers}</p>
                    <span>Admins</span>
                    <p>{getOrders.users.totalAdmins}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards