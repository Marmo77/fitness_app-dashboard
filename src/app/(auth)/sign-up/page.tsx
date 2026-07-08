import AuthLayout from "@/app/(auth)/layout"
import Link from "next/link"


const SignUpPage = () => {
    return (
        <div className="w-full max-w-md">
            <AuthLayout>
                <div>
                    <h1 className="text-4xl font-bold">Register Form</h1>
                    <Link href="/sign-in" className="text-blue-200 hover:underline">
                        <span className="text-blue-500">Sign In</span>
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}

export default SignUpPage