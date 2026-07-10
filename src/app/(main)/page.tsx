import { LogoutButton } from "@/components/auth/logout-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CarCard from "@/components/Cars/carCard"

const MainPage = () => {
    return (
        <main className="relative flex flex-1 container mx-auto justify-center p-6">
            <section className="grid grid-cols-1  lg:grid-cols-2 gap-6 w-full">
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </section>
        </main>
    )
}

export default MainPage