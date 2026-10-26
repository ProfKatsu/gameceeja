import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const base=process.cwd();
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
http.createServer(async(req,res)=>{try{
 const p=resolve(base,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname==='/'?'/index.html':new URL(req.url,'http://localhost').pathname));
 if(!p.startsWith(base+sep)) {res.writeHead(403).end();return;}
 const data=await readFile(p);res.writeHead(200,{'Content-Type':(types[extname(p)]||'application/octet-stream')+'; charset=utf-8'}).end(data);
}catch {res.writeHead(404).end('Não encontrado');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
