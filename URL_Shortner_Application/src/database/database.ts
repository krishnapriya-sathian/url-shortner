import mongoose from "mongoose";
require("dotenv").config();

export async function initializeDb() {
    try {
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.MONGO_URL || "").then(() => {
            console.log("database connected sucessfully");
        }).catch((error) => {
            console.log(`error in database connection ${error}`);
        })
    } catch (error: any) {
        console.error(error.message);
    }
}
