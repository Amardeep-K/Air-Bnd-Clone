const mongoose =require("mongoose");
const Schema =mongoose.Schema;
const listingSchema = new Schema({
    title:{
        type:String,
        required:true

    },
    descriptiom:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        set:(v)=>v===""?"Default link":v,
    },
    location:String,
    country:String

});
const Listing =mongoose.model("Listing",listingSchema)
module.export=Listing;