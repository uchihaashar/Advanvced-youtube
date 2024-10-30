import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
console.log("MONGODB CONNECTION FAILED: " + err);
})










/*
(async()=>{
try {
  await mongoose.connect(`${process.env.MONGODB_URL}/${advanedyoutube}`)
} catch (error) {
    console.error("ERROR ",error);
    throw error
    
}
})()
*/