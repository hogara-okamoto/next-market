import { jwtVerify } from "jose"
import { JWTClaimValidationFailed } from "jose/errors"
import { NextResponse } from "next/server"

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15M0BnbWFpbC5jb20iLCJleHAiOjE3Mjk0NjAwMzV9.-7yteNbb38ZejTamsSOl0UVhovit1JhY3gUUXagdbGM"
    //await request.headers.get("Authorization")?.split(" ")[1]
    if (!token) {
        return NextResponse.json({message: "トークンがありません"})
    }

    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        //console.log("decodedJwt:", decodedJwt)
        return NextResponse.next()
    } catch {
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }

}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"]
}
