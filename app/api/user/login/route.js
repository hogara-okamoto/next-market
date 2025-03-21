import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

export async function POST(request) {
    const reqBody = await request.json()
    try {
        await connectDB()
        const saveduserData = await UserModel.findOne({email: reqBody.email})
        console.log(saveduserData)
        if (saveduserData) {
            if (reqBody.password === saveduserData.password) {

                const secretKey = new TextEncoder().encode("next-market-app-book")
                const payload = {
                    email: reqBody.email
                }
                
                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretKey)

                return NextResponse.json({message: "ログイン成功", token: token})
            }else{
                return NextResponse.json({message: "ログイン失敗1：パスワードが間違っています"})
            }

        }else{
            return NextResponse.json({message: "ログイン失敗1：ユーザー登録をしてください"})
        }
    } catch {
        return NextResponse.json({message: "ログイン失敗"})
    }

}