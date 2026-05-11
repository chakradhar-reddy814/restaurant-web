"use strict";(()=>{var e={};e.id=829,e.ids=[829],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},661:e=>{e.exports=require("sqlite3")},5315:e=>{e.exports=require("path")},8887:e=>{e.exports=import("sqlite")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},9440:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>o,routeModule:()=>l});var r=a(1802),E=a(7153),n=a(6249),i=a(2175),T=e([i]);i=(T.then?(await T)():T)[0];let o=(0,n.l)(i,"default"),u=(0,n.l)(i,"config"),l=new r.PagesAPIRouteModule({definition:{kind:E.x.PAGES_API,page:"/api/users",pathname:"/api/users",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},7837:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{n:()=>u});var r=a(661),E=a.n(r),n=a(8887),i=a(5315),T=a.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let l=T().resolve(process.cwd(),"database.sqlite"),d=null;async function u(){if(d)return d;let e=await (0,n.open)({filename:l,driver:E().Database});return await e.exec(`
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
  `),d=e,e}s()}catch(e){s(e)}})},2175:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>n});var r=a(7837),E=e([r]);async function n(e,t){let a=await (0,r.n)();if("POST"===e.method){let{full_name:s,email:r,phone:E,password_hash:n}=e.body;try{let e=await a.run("INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)",[s,r,E,n||"placeholder_hash"]),i=await a.get("SELECT * FROM users WHERE id = ?",[e.lastID]);t.status(201).json({message:"User created successfully",user:i})}catch(e){e.message.includes("UNIQUE constraint failed")?t.status(409).json({error:"Email already exists"}):t.status(500).json({error:"Failed to create user"})}}else if("GET"===e.method){let{email:s}=e.query;try{if(s){let e=await a.get("SELECT id, full_name, email, phone, created_at FROM users WHERE email = ?",[s]);if(!e)return t.status(404).json({error:"User not found"});t.status(200).json({user:e})}else{let e=await a.all("SELECT id, full_name, email, phone, created_at FROM users");t.status(200).json({users:e})}}catch(e){t.status(500).json({error:"Failed to fetch users"})}}else t.setHeader("Allow",["GET","POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}r=(E.then?(await E)():E)[0],s()}catch(e){s(e)}})},7153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},1802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=9440);module.exports=a})();