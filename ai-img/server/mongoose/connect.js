import mongoose from "mongoose";
function connect(url){
    mongoose.set('strict',true);//only the  fields in the model will be used
    mongoose.connect(url).then(()=>{
        console.log("connectiron succeed")
    }).catch((e)=>{
        console.long(e);
    })
}
export default connect;