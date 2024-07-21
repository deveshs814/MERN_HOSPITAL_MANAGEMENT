import { config } from "dotenv";
import app from "./app.js";
import cloudinary from 'cloudinary';


config({ path: "./config/.env" });

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
})

app.listen(process.env.PORT , () =>{
    console.log(`Server is listening at the port ${process.env.PORT}`);
});