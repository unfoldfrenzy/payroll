import mongoose from 'mongoose';
const S=new mongoose.Schema({startedAt:{type:Date,default:Date.now},finishedAt:Date,total:Number,success:Number,changed:Number,failed:Number,error:String},{timestamps:true});
export default mongoose.models.CrawlRun||mongoose.model('CrawlRun',S);
