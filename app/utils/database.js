import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://okamoto:oeEavEctYHVFM9cP@cluster0.a7dhy.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")

    } catch {
        console.log("Failure: Unconnected to MondoDB")
        throw new Error("Database connection failed")
    }
}

export default connectDB
