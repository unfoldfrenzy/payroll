import mongoose from 'mongoose';
const uri=process.env.MONGODB_URI;
if(!uri) throw new Error('MONGODB_URI is missing');
let cached=global.mongooseCache;
if(!cached) cached=global.mongooseCache={conn:null,promise:null};
export async function db(){if(cached.conn)return cached.conn;if(!cached.promise)cached.promise=mongoose.connect(uri,{bufferCommands:false});cached.conn=await cached.promise;return cached.conn;}
