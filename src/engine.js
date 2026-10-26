import {scenes,activities,characters} from './story.js';
export const VERSION=1;
const clamp=n=>Math.max(0,Math.min(100,n));
export function initialStats(plan){let s={energy:64,progress:0,network:22};for(const id of plan){const a=activities[id];if(!a)throw Error('Plano inválido');s.energy=clamp(s.energy+a.e);s.progress=clamp(s.progress+a.p);s.network=clamp(s.network+a.n);}return s;}
export function simulate(run){
 if(!characters.some(c=>c.id===run.character)||!Array.isArray(run.plan)||run.plan.length!==6)throw Error('Jornada inválida');
 let s=initialStats(run.plan),points=0,history=[];
 if(!Array.isArray(run.choices)||run.choices.length>scenes.length)throw Error('Decisões inválidas');
 run.choices.forEach((idx,i)=>{const ch=scenes[i].choices[idx];if(!Number.isInteger(idx)||!ch)throw Error('Escolha inválida');const before={...s};
 const assisted=(run.supports||[]).includes(i);if(assisted){s.energy=clamp(s.energy+10);s.network=clamp(s.network+8);}
 // Sobrecarga limita o rendimento, nunca impede a continuidade.
 const fatigue=s.energy<20;const isolation=s.network<15;
 s.energy=clamp(s.energy+ch.e);s.progress=clamp(s.progress+Math.max(1,ch.p-(fatigue?3:0)-(isolation?1:0)));s.network=clamp(s.network+ch.n);points+=ch.points;
 history.push({scene:scenes[i].id,choice:idx,before,after:{...s},fatigue,isolation,assisted});});
 const diversity=new Set(run.plan).size;
 return {...s,points,score:Math.round(points+diversity*5+Math.min(s.energy,60)/6+Math.min(s.network,60)/6),history,complete:s.progress>=80,balanced:s.energy>=25};
}
export function validRun(r){try{return r.version===VERSION&&typeof r.id==='string'&&r.id.length<=80&&r.plan.length===6&&Array.isArray(r.supports)&&r.supports.length<=2&&new Set(r.supports).size===r.supports.length&&r.supports.every(i=>Number.isInteger(i)&&i>=0&&i<scenes.length)&&r.choices.every(Number.isInteger)&&!!simulate(r);}catch{return false;}}
export function makeRecord(run){if(!validRun(run)||run.choices.length!==scenes.length)throw Error('Conclua a jornada antes de registrar.'); const result=simulate(run);return {version:VERSION,id:run.id,name:String(run.name||'Educador(a)').trim().slice(0,32),group:String(run.group||'Formação CEEJA').trim().slice(0,40),character:run.character,score:result.score,progress:result.progress,energy:result.energy,network:result.network,date:new Date().toISOString(),ending:result.complete?'Etapa concluída':'Percurso em continuidade'};}
export function validRecord(r){return r&&r.version===VERSION&&typeof r.id==='string'&&r.id.length<=80&&typeof r.name==='string'&&r.name.length<=32&&typeof r.group==='string'&&r.group.length<=40&&characters.some(c=>c.id===r.character)&&Number.isInteger(r.score)&&r.score>=0&&r.score<=155&&['progress','energy','network'].every(k=>Number.isFinite(r[k])&&r[k]>=0&&r[k]<=100)&&typeof r.date==='string'&&!Number.isNaN(Date.parse(r.date))&&['Etapa concluída','Percurso em continuidade'].includes(r.ending);}
