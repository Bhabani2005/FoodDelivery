import mongoose from "mongoose";
 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhabanicharanpanda:9SzB9NwDL4NOvH8L@cluster0.xgf6c.mongodb.net/FoodDelivery').then(()=>console.log("DB connected"))
}