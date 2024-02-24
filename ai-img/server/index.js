import express from 'express';
import * as dotenv from 'dotenv';//impoerting the whole dotev
import cors from 'cors';
import connect from './mongoose/connect.js';
import postRoute from './routes/postRoute.js';
import daleeRoutes from './routes/daleeRoutes.js';

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json({limit: "50mb"})); //to increase the limit of json data that can be sent
app.use('/api/v1/posts',postRoute)
app.use('/api/v1/dalle',daleeRoutes);
app.get('/',async(req,res)=>{
    res.send("Hello!");
})
const startServer=async()=>{
    try{
        connect('mongodb://localhost:27017/Dalle-E');
        app.listen(8000,()=>{
            console.log('server started at http://localhost:8000');
        })

    }
    catch(err){
        console.log(err);
    }
   
}
startServer();
