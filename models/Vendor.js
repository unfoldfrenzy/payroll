import mongoose from 'mongoose';
const VendorSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},slug:{type:String,required:true,unique:true,index:true},website:String,description:String,category:String,pricingUrl:String,active:{type:Boolean,default:true},seo:{title:String,description:String},features:[String],compliance:[String],plans:[{name:String,price:Number,currency:{type:String,default:'INR'},period:String,priceText:String}],lastVerifiedAt:Date},{timestamps:true});
export default mongoose.models.Vendor||mongoose.model('Vendor',VendorSchema);
