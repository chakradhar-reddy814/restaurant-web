"use strict";(()=>{var e={};e.id=224,e.ids=[224],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},661:e=>{e.exports=require("sqlite3")},5315:e=>{e.exports=require("path")},8887:e=>{e.exports=import("sqlite")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6175:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>o,routeModule:()=>d});var E=a(1802),s=a(7153),n=a(6249),i=a(6810),T=e([i]);i=(T.then?(await T)():T)[0];let o=(0,n.l)(i,"default"),u=(0,n.l)(i,"config"),d=new E.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/reservations",pathname:"/api/reservations",bundlePath:"",filename:""},userland:i});r()}catch(e){r(e)}})},7837:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{n:()=>u});var E=a(661),s=a.n(E),n=a(8887),i=a(5315),T=a.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let d=T().resolve(process.cwd(),"database.sqlite"),l=null;async function u(){if(l)return l;let e=await (0,n.open)({filename:d,driver:s().Database});return await e.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone TEXT,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      items_json TEXT NOT NULL,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      booking_id TEXT UNIQUE,
      name TEXT,
      email TEXT,
      phone TEXT,
      date TEXT,
      time TEXT,
      guests INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `),l=e,e}r()}catch(e){r(e)}})},6810:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>n});var E=a(7837),s=e([E]);async function n(e,t){let a=await (0,E.n)();if("POST"===e.method){let{user_id:r,booking_id:E,name:s,email:n,phone:i,date:T,time:o,guests:u}=e.body;try{let e=await a.run(`INSERT INTO reservations (user_id, booking_id, name, email, phone, date, time, guests) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[r||null,E,s,n,i,T,o,u]),d=await a.get("SELECT * FROM reservations WHERE id = ?",[e.lastID]);t.status(201).json({message:"Table reserved successfully",reservation:d})}catch(e){console.error(e),t.status(500).json({error:"Failed to create reservation"})}}else if("GET"===e.method){let{user_id:r,email:E}=e.query;try{let e="SELECT * FROM reservations",s=[];r?(e+=" WHERE user_id = ?",s.push(r)):E&&(e+=" WHERE email = ?",s.push(E)),e+=" ORDER BY created_at DESC";let n=await a.all(e,s);t.status(200).json({reservations:n})}catch(e){console.error(e),t.status(500).json({error:"Failed to fetch reservations"})}}else t.setHeader("Allow",["GET","POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}E=(s.then?(await s)():s)[0],r()}catch(e){r(e)}})},7153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},1802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=6175);module.exports=a})();