
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./index.js";
import Product from "./model/book.model.js"
import ProductJson from "../Frontend/src/list.json";

const start =async()=>
{
    try{
        await connectDB(process.env.MongoDBURI)
        await Product.create(ProductJson)
        console.log("successs")
    }catch(error){
        console.log(error);
    }
}
start();