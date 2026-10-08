import {db} from '../../../lib/db.js';import VendorSource from '../../../models/VendorSource.js';import {requireAdmin} from '../../../lib/auth.js';
export default async function handler(req,res){if(!requireAdmin(req,res))return;await db();
 if(req.method==='GET')return res.json(await VendorSource.find().populate('vendorId','name slug').sort({createdAt:-1}).lean());
 if(req.method==='POST')try{return res.status(201).json(await VendorSource.create(req.body));}catch(e){return res.status(400).json({error:e.message});}
 if(req.method==='PATCH')try{const {id,...data}=req.body;return res.json(await VendorSource.findByIdAndUpdate(id,data,{new:true,runValidators:true}));}catch(e){return res.status(400).json({error:e.message});}
 if(req.method==='DELETE'){const {id}=req.query;await VendorSource.findByIdAndUpdate(id,{enabled:false});return res.json({ok:true});}
 res.status(405).end();}
