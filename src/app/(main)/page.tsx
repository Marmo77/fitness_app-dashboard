// "/" is a dashboard

import OrderTable from "@/components/dashboard/OrderTables";



const MainPage = () => {
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <div className="flex flex-col w-full">
                <h2 className="text-2xl font-semibold">Ostatnie zlecenia</h2>
                <span className="text-primary text-xs mb-4">Serwis samochodowy</span>
                <OrderTable />
            </div>
        </main>
    )
}

export default MainPage