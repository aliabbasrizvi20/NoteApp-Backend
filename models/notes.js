const mongoose= require("mongoose")
const noteSchema= new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    text:{
        type:String,
        required:true,
    },
    color:{
        type:String,
    },
    bold:{
        type:Boolean,
        default:false,
    },
    italic:{
        type:Boolean,
        default:false,
    },
    underline:{
        type:Boolean,
        default:false,
    },
    isPinned:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true})

module.exports=mongoose.model("Notes",noteSchema);