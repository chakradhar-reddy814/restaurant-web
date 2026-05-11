"use strict";(()=>{var e={};e.id=722,e.ids=[722],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},661:e=>{e.exports=require("sqlite3")},5315:e=>{e.exports=require("path")},8887:e=>{e.exports=import("sqlite")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},1996:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>d,default:()=>o,routeModule:()=>u});var E=r(1802),s=r(7153),T=r(6249),n=r(8527),i=e([n]);n=(i.then?(await i)():i)[0];let o=(0,T.l)(n,"default"),d=(0,T.l)(n,"config"),u=new E.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/orders",pathname:"/api/orders",bundlePath:"",filename:""},userland:n});a()}catch(e){a(e)}})},7837:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{n:()=>d});var E=r(661),s=r.n(E),T=r(8887),n=r(5315),i=r.n(n),o=e([T]);T=(o.then?(await o)():o)[0];let u=i().resolve(process.cwd(),"database.sqlite"),l=null;async function d(){if(l)return l;let e=await (0,T.open)({filename:u,driver:s().Database});return await e.exec(`
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
  `),l=e,e}a()}catch(e){a(e)}})},8527:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>T});var E=r(7837),s=e([E]);async function T(e,t){let r=await (0,E.n)();if("POST"===e.method){let{user_id:a,items:E,total_amount:s}=e.body;try{let e=JSON.stringify(E),T=await r.run("INSERT INTO orders (user_id, items_json, total_amount) VALUES (?, ?, ?)",[a,e,s]),n=await r.get("SELECT * FROM orders WHERE id = ?",[T.lastID]);t.status(201).json({message:"Order created successfully",order:n})}catch(e){console.error(e),t.status(500).json({error:"Failed to create order"})}}else if("GET"===e.method){let{user_id:a}=e.query;try{let e="SELECT * FROM orders",E=[];a&&(e+=" WHERE user_id = ?",E.push(a)),e+=" ORDER BY created_at DESC";let s=(await r.all(e,E)).map(e=>({...e,items:JSON.parse(e.items_json)}));t.status(200).json({orders:s})}catch(e){console.error(e),t.status(500).json({error:"Failed to fetch orders"})}}else t.setHeader("Allow",["GET","POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}E=(s.then?(await s)():s)[0],a()}catch(e){a(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=1996);module.exports=r})();