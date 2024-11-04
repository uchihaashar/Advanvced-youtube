import { v2 as cloudinary } from 'cloudinary'; 
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_SECERT_KEY// 
});

const uploadCloudinary = async (localfilePath)=>{
    try {
        if(!localfilePath) return null;
     const response = await cloudinary.uploader.upload(localfilePath,{
            resource_type: "auto",
        })
        console.log("file uploaded successfully on cloudinary", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localfilePath)// remove the locally saved temporary file as the operation got failed 

        return null 
    }
}

export {uploadCloudinary}