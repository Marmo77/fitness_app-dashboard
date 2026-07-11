// src/app/(main)/historia/page.tsx
import OrdersComponent from "@/components/historia/OrdersComponent";
import { getOrdersFromDB } from "@/lib/data/orders";

export default async function HistoryPage() {
    const initialOrders = await getOrdersFromDB();

    return (
        <main className="container mx-auto py-8">
            <OrdersComponent initialOrders={initialOrders} />
        </main>
    );
}