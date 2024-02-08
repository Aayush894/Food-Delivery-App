import 'dotenv/config';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js" ; 
import router from './routes/CreateUser.js'; 

const app = express() ;

const corsOptions = {
  origin: '*', 
  credentials:true, 
  optionSuccessStatus:200,
}
app.use(cors(corsOptions)) ; 

app.use(express.json()) ; 
app.use('/api', router) ; 

connectDB() ; 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})