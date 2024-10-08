import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Db_url, {
            dbName: "ChatbotY",
        });

        console.log("Mongo is on");
         
    } catch (error) {
        console.log(error);
        
    }
};

export default connectDb;