import {db} from '../../../lib/db.js';import Vendor from '../../../models/Vendor.js';import {requireAdmin} from '../../../lib/auth.js';
export default async function handler(req,res){await db();
 if(req.method==='GET'){const q=(req.query.q||'').trim();const filter={active:true};if(q)filter.$or=[{name:new RegExp(q,'i')},{category:new RegExp(q,'i')}];return res.json(await Vendor.find(filter).sort({name:1}).lean());}
 if(req.method==='POST'){if(!requireAdmin(req,res))return;try{return res.status(201).json(await Vendor.create(req.body));}catch(e){return res.status(400).json({error:e.message});}}
 if(req.method==='PATCH'){if(!requireAdmin(req,res))return;try{const {id,...data}=req.body;if(!id)return res.status(400).json({error:'id required'});return res.json(await Vendor.findByIdAndUpdate(id,data,{new:true,runValidators:true}));}catch(e){return res.status(400).json({error:e.message});}}
 if(req.method==='DELETE'){if(!requireAdmin(req,res))return;const {id}=req.query;if(!id)return res.status(400).json({error:'id required'});await Vendor.findByIdAndUpdate(id,{active:false});return res.json({ok:true});}
 res.status(405).end();}
