import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { jwtVerify } from "jose"

const useAuth = () => {
    const [ loginUserEmail, setLoginUserEmail ] = useState("")
    const router = useRouter()

    useEffect(() => {
        const checkToken = async() => {
            const token = localStorage.getItem("token")

            if (!token) {
                console.log("No token found. Redirecting to login (v=1)...");
                router.push("/user/login")
                return
            }

            try {
                console.log("Verifying token...");
                const secretKey = new TextEncoder().encode("next-market-app-book")
                const decodedJwt = await jwtVerify(token, secretKey)
                console.log("Decoded JWT:", decodedJwt);
                setLoginUserEmail(decodedJwt.payload.email)
            } catch {
                console.error("JWT verification failed:");
                router.push("/user/login")
                return
            }
        }
        checkToken()
    }, [router])

    return loginUserEmail
}

export default useAuth