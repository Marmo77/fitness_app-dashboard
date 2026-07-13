import { CircleDollarSign, Crown, Users } from 'lucide-react';
import { getOrdersStatsKPI } from '@/lib/data/orders';
import { MdTaskAlt, MdOutlineCancel, MdOutlineDoneAll } from 'react-icons/md';
import { FaMoneyBill1 } from 'react-icons/fa6';
import { KpiCardCarousel } from './KpiCardCarousel';

export type KpiItem = {
    title: string;
    value: string;
    Icon: React.ReactNode;
    description: string;
};

export type KpiCardGroup = {
    style: "financial" | "active" | "new" | "performance";
    items: KpiItem[];
};

const DashboardCards = async () => {
    const ordersKPIData = await getOrdersStatsKPI();

    const cardsGroups: KpiCardGroup[] = [
        {
            style: "financial",
            items: [
                {
                    title: "Całkowity przychód",
                    value: ordersKPIData.order.totalRevenue,
                    Icon: <CircleDollarSign className="h-5 w-5" />,
                    description: "+15% względem zeszłego miesiąca",
                },
                {
                    title: "Średni przychód za zlecenie",
                    value: ordersKPIData.order.revenueForCompletedOrders,
                    Icon: <FaMoneyBill1 className="h-5 w-5" />,
                    description: "Tylko dla zakończonych",
                }
            ]
        },
        {
            style: "active",
            items: [
                {
                    title: "Zakończone Zlecenia",
                    value: ordersKPIData.order.completedOrders.toString(),
                    Icon: <MdTaskAlt className="h-5 w-5" />,
                    description: "3 nowe w tym tygodniu",
                },
                {
                    title: "Anulowane Zlecenia",
                    // Zabezpieczenie przed brakiem danych
                    value: ordersKPIData.order.ordersToCanceled?.toString() || "0",
                    Icon: <MdOutlineCancel className="h-5 w-5" />,
                    description: "Wymagają uwagi",
                }
            ]
        },
        {
            style: "new",
            items: [
                {
                    title: "Zlecenia dzisiaj",
                    value: ordersKPIData.users.totalAdmins.toString(),
                    Icon: <MdTaskAlt className="h-5 w-5" />,
                    description: "Ilość zleceń na dzisiaj",
                },
                {
                    title: "Zlecenia w tym tygodniu",
                    value: ordersKPIData.order.completedOrders.toString(),
                    Icon: <MdOutlineDoneAll className="h-5 w-5" />,
                    description: "Zakończone i w toku",

                }
            ]
        },
        {
            style: "performance",
            items: [
                {
                    title: "Wszyscy użytkownicy",
                    value: ordersKPIData.users.totalUsers.toString(),
                    Icon: <Users className="h-5 w-5" />,
                    description: "Zarejestrowani w systemie",
                },
                {
                    title: "Ilość administratorów",
                    value: ordersKPIData.users.totalAdmins.toString(),
                    Icon: <Crown className="h-5 w-5" />,
                    description: "Z pełnym dostępem do edycji",
                }
            ]
        },
    ];

    return (
        <div className="flex w-full flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {cardsGroups.map((group, idx) => (
                    <KpiCardCarousel key={idx} group={group} />
                ))}
            </div>

            {/* DEV INFO */}
            {/* <div className='flex w-full flex-col p-4 gap-1 rounded-lg border text-muted-foreground'>
                <p className="text-xs uppercase font-bold mb-2">Dev Data Debug:</p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h1 className='text-lg font-semibold text-foreground'>Orders Cat.</h1>
                        <p>Total Revenue: {ordersKPIData.order.totalRevenue}</p>
                        <p>Avg Completed: {ordersKPIData.order.revenueForCompletedOrders}</p>
                        <p>Completed Orders: {ordersKPIData.order.completedOrders}</p>
                        <p>Canceled Orders: {ordersKPIData.order.ordersToCanceled}</p>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-foreground'>Users Cat.</h1>
                        <p>Total Users: {ordersKPIData.users.totalUsers}</p>
                        <p>Admins: {ordersKPIData.users.totalAdmins}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DashboardCards;