import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Success: Connected to MongoDB")

    } catch {
        console.log("Failure: Unconnected to MondoDB")
        throw new Error("Database connection failed")
    }
}

export default connectDB
