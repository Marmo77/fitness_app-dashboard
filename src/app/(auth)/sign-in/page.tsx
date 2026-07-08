import Link from "next/link"
import { AuthShell } from "@/app/(auth)/auth-shell"
import { FaGithub, FaGoogle } from "react-icons/fa6"

const signInData = {
    eyebrow: "StrengthMap",
    title: "Welcome back",
    description: "Sign in to continue your training.",
    submitLabel: "Sign in",
    secondaryText: "New here?",
    secondaryHref: "/sign-up",
    secondaryLabel: "Create account",
}



export default function SignInPage() {
    return (
        <AuthShell
            eyebrow={signInData.eyebrow}
            title={signInData.title}
            description={signInData.description}
        >
            <form className="space-y-5">
                <div className="space-y-3">
                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-input bg-background text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        <FaGoogle />
                        Continue with Google
                    </button>

                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-input bg-background text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        <FaGithub className="size-4" />
                        Continue with GitHub
                    </button>
                </div>
                {/* Normal Sign In Form */}
                {/* <div>
                    <div className="relative py-1">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-card px-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                or
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/80 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-muted-foreground transition hover:text-foreground"
                            >
                                Forgot?
                            </Link>
                        </div>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/80 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-full rounded-2xl bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                    >
                        {signInData.submitLabel}
                    </button>
                </div> */}

                <p className="text-center text-sm text-muted-foreground">
                    {signInData.secondaryText}{" "}
                    <Link
                        href={signInData.secondaryHref}
                        className="font-medium text-foreground transition hover:text-primary"
                    >
                        {signInData.secondaryLabel}
                    </Link>
                </p>
            </form>
        </AuthShell>
    )
}