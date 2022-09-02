const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();
const app = express();
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());

 app.get('/',(req,res)=>{
res.send('Hi world!')
 })
app.listen(5000, ()=> console.log('Server running at port 5000'));