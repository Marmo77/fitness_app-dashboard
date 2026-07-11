// "/" is a dashboard

import { Button } from "@/components/ui/button";
import Link from "next/link";



const MainPage = () => {
    return (
        <main className="relative flex flex-col gap-4 flex-1 container mx-auto items-center p-6">
            <div className="flex flex-col w-full">
                <Button>
                    <Link href="/historia">Historia</Link>
                </Button>
            </div>
        </main>
    )
}

export default MainPage