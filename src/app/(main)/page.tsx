
import CarCard from "@/components/Cars/carCard"

const MainPage = () => {


    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <section className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
                <CarCard />
                <CarCard format="side-by-side" />
                <CarCard format="stack" />
            </section>
        </main>
    )
}

export default MainPage