"use client"

import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { loginWithEmail } from "@/app/(auth)/login/actions"
import { useActionState, useState } from "react"
import { dummyUser } from "@/lib/constants"

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginWithEmail, null);
    const [email, setEmail] = useState(dummyUser.username)
    const [password, setPassword] = useState(dummyUser.password)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form action={formAction}>
            <span className="text-foreground/40 text-xs">Logowanie</span>
            <div className="flex flex-col gap-2 py-2">
                <Input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div className="relative">
                    <Input name="password" type={showPassword ? "text" : "password"} placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Button type={"button"} variant={"preview"} size="icon" className="absolute right-0 inset-y-0 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </div>
                <Button type="submit" variant="outline" disabled={isPending}>
                    {isPending ? "Logowanie..." : "Zaloguj się"}
                </Button>
            </div>
            {state?.error && (
                <p className="text-xs text-red-500 text-center">{state.error}</p>
            )}
        </form>
    )
}