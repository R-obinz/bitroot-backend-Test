const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:[String],
        required:true,
        unique:true

    },
    image:{
        type:String
    }
},{
    timeStamps:true
}
);

module.exports = mongoose.model("Contact",contactSchema);