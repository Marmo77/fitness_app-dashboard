import type { ReactNode } from "react"
import Silk from "@/components/ui/Silk"

type AuthShellProps = {
    children: ReactNode
    eyebrow: string
    title: string
    description: string
}

export function AuthShell({
    children,
    eyebrow,
    title,
    description,
}: AuthShellProps) {
    return (
        <section className="grid min-h-svh w-full lg:grid-cols-[38%_62%]">
            <div className="flex items-center justify-center border-r border-border bg-background px-8 py-10 md:px-12 lg:px-14">
                <div className="w-full max-w-lg">
                    <div className="mb-8 space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                            {eyebrow}
                        </p>

                        <div className="space-y-3">
                            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                                {title}
                            </h1>
                            <p className="max-w-md text-base leading-7 text-muted-foreground md:text-[1.05rem]">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_30px_rgba(15,23,42,0.06)] md:p-7">
                        {children}
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Clear training. Clean progress. One focused workflow.
                    </p>
                </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,110,247,0.14),transparent_34%),linear-gradient(180deg,rgba(248,250,252,0.12),rgba(15,23,42,0.06))]" />

                <div className="absolute inset-0 opacity-[0.82]">
                    <Silk
                        speed={3}
                        scale={1}
                        color="#4F6EF7"
                        noiseIntensity={0.9}
                        rotation={0}
                    />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(9,16,33,0.08)_0%,rgba(9,16,33,0.02)_45%,rgba(9,16,33,0.18)_100%)]" />

                <div className="absolute left-12 top-12 z-10 max-w-xl">
                    <p className="mb-3 text-sm uppercase tracking-[0.24em] text-muted/50">
                        PERFORMANCE SYSTEM
                    </p>
                    <h2 className="font-heading text-5xl font-semibold tracking-tight text-background">
                        Train better.
                        <br />
                        See progress faster.
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-7 text-muted/80">
                        A focused fitness dashboard for workouts, strength trends, and better training consistency.
                    </p>
                </div>

                <div className="absolute bottom-10 left-12 z-10 grid w-full max-w-xl grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-border/70 bg-background/80 p-5 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Weekly consistency
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">4 sessions</p>
                    </div>

                    <div className="rounded-3xl border border-border/70 bg-background/80 p-5 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Strength trend
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">+12%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}