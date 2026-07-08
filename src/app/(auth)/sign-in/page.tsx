import Link from "next/link"
import { AuthShell } from "@/app/(auth)/auth-shell"
import { GitCompare } from "lucide-react"

const signInData = {
    eyebrow: "StrengthMap",
    title: "Welcome back",
    description: "Sign in to continue your training.",
    submitLabel: "Sign in",
    secondaryText: "New here?",
    secondaryHref: "/sign-up",
    secondaryLabel: "Create account",
}

function GoogleIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
            <path
                d="M21.805 10.023h-9.72v3.955h5.573c-.24 1.27-.96 2.347-2.04 3.067v2.55h3.3c1.932-1.78 3.047-4.4 3.047-7.525 0-.683-.06-1.343-.16-2.047z"
                fill="currentColor"
            />
            <path
                d="M12.084 22c2.76 0 5.077-.912 6.77-2.473l-3.3-2.55c-.912.612-2.077.983-3.47.983-2.664 0-4.92-1.8-5.724-4.223H2.95v2.63A10.214 10.214 0 0 0 12.084 22z"
                fill="currentColor"
                className="opacity-80"
            />
            <path
                d="M6.36 13.737A6.13 6.13 0 0 1 6.048 12c0-.603.108-1.188.312-1.737v-2.63H2.95A10.214 10.214 0 0 0 1.884 12c0 1.645.396 3.203 1.066 4.367l3.41-2.63z"
                fill="currentColor"
                className="opacity-60"
            />
            <path
                d="M12.084 6.04c1.5 0 2.845.516 3.905 1.53l2.93-2.93C17.156 2.995 14.838 2 12.084 2 8.102 2 4.666 4.288 2.95 7.633l3.41 2.63c.804-2.424 3.06-4.223 5.724-4.223z"
                fill="currentColor"
                className="opacity-90"
            />
        </svg>
    )
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
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-input bg-background text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        <GitCompare className="size-4" />
                        Continue with GitHub
                    </button>
                </div>

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