import crypto from 'crypto';
export function isAdmin(req){const h=req.headers.authorization||'';if(!h.startsWith('Basic '))return false;try{const raw=Buffer.from(h.slice(6),'base64').toString();const i=raw.indexOf(':');if(i<0)return false;const u=raw.slice(0,i),p=raw.slice(i+1);return u===process.env.ADMIN_EMAIL&&p===process.env.ADMIN_PASSWORD;}catch{return false;}}
export function requireAdmin(req,res){if(!isAdmin(req)){res.setHeader('WWW-Authenticate','Basic realm="Payroll Intelligence Admin"');res.status(401).json({error:'Unauthorized'});return false;}return true;}
