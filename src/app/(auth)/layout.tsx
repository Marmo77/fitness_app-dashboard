"use client"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grid h-svh w-full lg:grid-cols-[32%_68%]">
            <div className="flex items-center justify-center border-r bg-background px-6 py-10 md:px-10">
                <div className="w-full max-w-sm space-y-6">
                    <div className="space-y-2">
                        <div className="text-sm font-medium tracking-wide text-muted-foreground">
                            StrengthMap
                        </div>
                        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                            Welcome back
                        </h1>
                        <p className="text-sm leading-6 text-muted-foreground">
                            Sign in to track workouts, monitor progress, and manage your training dashboard.
                        </p>
                    </div>

                    {children}

                    <p className="text-xs text-muted-foreground">
                        Built for consistent training, clear progress, and a clean fitness workflow.
                    </p>
                </div>
            </div>

            <div className="relative hidden min-h-svh overflow-hidden lg:block">
                <div className="relative h-full min-h-svh w-full overflow-hidden">

                </div>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/10 via-transparent to-black/30" />
                <div className="absolute left-10 top-10 z-10 max-w-md">
                    <p className="mb-3 text-sm uppercase tracking-[0.24em] text-white/60">
                        FITNESS APP
                    </p>
                    <h2 className="text-5xl font-semibold tracking-tight text-white">
                        Train with structure. Progress with clarity.
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/70">
                        Log workouts, track strength, and see your growth in one clean dashboard.
                    </p>
                </div>
            </div>
        </section >
    )
}