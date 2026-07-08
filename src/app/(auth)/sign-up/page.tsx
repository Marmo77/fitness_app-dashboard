"use client"
import Link from "next/link"
import { AuthShell } from "@/app/(auth)/auth-shell"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

const signUpData = {
    eyebrow: "StrengthMap",
    title: "Get started",
    description: "Create your account and start tracking progress.",
    submitLabel: "Sign up",
    secondaryText: "Have an account?",
    secondaryHref: "/sign-in",
    secondaryLabel: "Sign in",
}



export default function SignUpPage() {
    return (
        <AuthShell
            eyebrow={signUpData.eyebrow}
            title={signUpData.title}
            description={signUpData.description}
        >
            <form className="space-y-5">
                <div className="space-y-3">
                    <Button
                        type="button"
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-input bg-background text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        <FaGoogle />
                        Continue with Google
                    </Button>

                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-input bg-background text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                        <FaGithub className="size-4" />
                        Continue with GitHub
                    </button>
                </div>

                {/* Normal Sign Up Form */}
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
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/80 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
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
                        <label htmlFor="password" className="text-sm font-medium text-foreground">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/80 focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-full rounded-2xl bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                    >
                        {signUpData.submitLabel}
                    </button>
                </div> */}

                <p className="text-center text-sm text-muted-foreground">
                    {signUpData.secondaryText}{" "}
                    <Link
                        href={signUpData.secondaryHref}
                        className="font-medium text-foreground transition hover:text-primary"
                    >
                        {signUpData.secondaryLabel}
                    </Link>
                </p>
            </form>
        </AuthShell>
    )
}