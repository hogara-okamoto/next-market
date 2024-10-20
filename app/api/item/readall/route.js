import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels";

export async function GET(){
    try {
        await connectDB()
        const allitems = await ItemModel.find()
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allitems: allitems})
    } catch {
        console.error("Error reading items:", error);
        return NextResponse.json({message: "アイテム読み取り失敗（オール）"})
    }
}
//Disabling cache
export const revalidate = 0