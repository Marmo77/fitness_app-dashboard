import Link from "next/link"

const MainPage = () => {


    return (
        <main className="min-h-screen bg-background relative flex items-center justify-center px-6">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-semibold">You are successfully logged in!</h1>
                <p className="text-muted-foreground">All the tools for you!</p>
                <Link href="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to dashboard</Link>
            </div>
        </main>
    )

}

export default MainPage