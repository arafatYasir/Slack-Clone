import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types"
import { useState } from "react"

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Sign up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={false}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={false}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={false}
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={false}
                    >
                        Continue
                    </Button>
                </form>

                <Separator />

                <div className="flex flex-col gap-y-2.5">
                    <Button
                        className="w-full relative"
                        size="lg"
                        variant="outline"
                        onClick={() => { }}
                        disabled={false}
                    >
                        <FcGoogle className="size-5" />
                        Continue with Google
                    </Button>
                    <Button
                        className="w-full relative"
                        size="lg"
                        variant="outline"
                        onClick={() => { }}
                        disabled={false}
                    >
                        <FaGithub className="size-4.5" />
                        Continue with GitHub
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                    Already have an account? <button type="button" className="text-sky-700 hover:underline cursor-pointer" onClick={() => setState("signIn")}>Sign in</button>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignUpCard