import Link from "next/link"

const SignInPage = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Login Form</h2>
                <p className="text-sm text-muted-foreground">
                    Enter your credentials to continue.
                </p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                        placeholder="name@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Sign in
                </button>
            </form>

            <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-primary hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    )
}

export default SignInPage