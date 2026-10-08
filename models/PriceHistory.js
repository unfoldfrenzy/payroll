import mongoose from 'mongoose';
const S=new mongoose.Schema({vendorId:{type:mongoose.Schema.Types.ObjectId,ref:'Vendor',required:true,index:true},sourceId:{type:mongoose.Schema.Types.ObjectId,ref:'VendorSource'},price:Number,priceText:String,currency:{type:String,default:'INR'},verified:{type:Boolean,default:true},recordedAt:{type:Date,default:Date.now,index:true}},{timestamps:true});
export default mongoose.models.PriceHistory||mongoose.model('PriceHistory',S);
