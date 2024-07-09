import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('Add your mongoDB database URL here').then(()=>console.log("DB Connected"));
   
}


