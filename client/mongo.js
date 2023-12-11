const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://chuang04:Sp02511077@animate.jtiopta.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("userdatas",newSchema)

module.exports=collection