import mongoose from "mongoose";

const ConnectDatabase = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("Database connected");
    }
    catch(err){
        console.log("Error: ", err.message);
    }
}

export default ConnectDatabase;