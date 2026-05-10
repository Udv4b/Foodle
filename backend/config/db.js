import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://UDVAB:u2108t1401@cluster0.bnf5zyi.mongodb.net/foodle').then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
}