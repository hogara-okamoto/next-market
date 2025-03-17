import { NextResponse } from "next/server";
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

export async function POST(request) {
    try {
        await connectDB()
        
        const reqBody = await request.json()
        const { email } = reqBody;
        
        // Check if item already exists
        const existingUser = await UserModel.findOne({ email });
        
        //  if exists, 409 stops the process and return the response to the front end.
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "ユーザーはすでに登録されています" },
                { status: 409 }
            );
        }

        await UserModel.create(reqBody)
        return NextResponse.json({message: "ユーザー登録成功"})
    } catch {
        return NextResponse.json({message: "ユーザー登録失敗"})
    }
}