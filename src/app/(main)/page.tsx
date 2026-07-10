// "/" is a dashboard

import OrderTable from "@/components/dashboard/OrderTables";



const MainPage = () => {
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <OrderTable />
        </main>
    )
}

export default MainPage