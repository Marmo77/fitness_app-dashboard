import OrdersComponent from "@/components/historia/OrdersComponent"


const page = () => {
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <div className='flex gap-12 w-full'>
                <div className="flex flex-col flex-1 w-full">
                    <h2 className="text-2xl font-semibold">Ostatnie zlecenia</h2>
                    <span className="text-primary text-xs mb-4">Serwis samochodowy</span>
                    <OrdersComponent />
                </div>
            </div>
        </main>
    )
}

export default page