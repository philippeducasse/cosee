(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},852:e=>{"use strict";e.exports=require("async_hooks")},4300:e=>{"use strict";e.exports=require("buffer")},6206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},7643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},6281:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},5673:e=>{"use strict";e.exports=require("node:events")},4492:e=>{"use strict";e.exports=require("node:stream")},7261:e=>{"use strict";e.exports=require("node:util")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},7282:e=>{"use strict";e.exports=require("process")},3477:e=>{"use strict";e.exports=require("querystring")},2781:e=>{"use strict";e.exports=require("stream")},5356:e=>{"use strict";e.exports=require("stream/web")},1576:e=>{"use strict";e.exports=require("string_decoder")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9830:e=>{"use strict";e.exports=require("util/types")},1267:e=>{"use strict";e.exports=require("worker_threads")},9796:e=>{"use strict";e.exports=require("zlib")},3627:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var r=s(7096),a=s(6132),i=s(7284),o=s.n(i),n=s(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3982)),"/home/philo/Desktop/code/cosee/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,5345)),"/home/philo/Desktop/code/cosee/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/philo/Desktop/code/cosee/app/page.tsx"],d="/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2573:()=>{},113:(e,t,s)=>{Promise.resolve().then(s.bind(s,3950))},6147:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},8373:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(3854),a=s(4218),i=s(1956),o=s.n(i),n=s(5548),l=s.n(n);let c=()=>{let[e,t]=(0,a.useState)(!1);return r.jsx("div",{children:r.jsx("section",{className:"w-screen p-6 mx-auto bg-gradient-to-r from-cosee-y to-cosee-g",children:(0,r.jsxs)("nav",{className:"relative ",children:[(0,r.jsxs)("div",{className:"flex px-8",children:[r.jsx(o(),{src:"/cosee_logo.jpg",alt:"Cosee Logo",width:150,height:10,className:"rounded-2xl"}),(0,r.jsxs)("div",{className:"nav-list hidden md:flex justify-evenly w-full space-x-6",children:[r.jsx(l(),{href:"/",className:"nav-item my-auto",children:"GALLERIE"}),r.jsx(l(),{href:"/about",className:"nav-item my-auto",children:"\xdcBER MICH"}),r.jsx(l(),{href:"/cosee",className:"nav-item my-auto",children:"\xdcBER COSEE"})]}),r.jsx(l(),{href:"/upload",className:"cta hidden md:block p-2 px-6 pt-2 text-xs bg-cosee-y duration-300 rounded-full w-100 text-center",children:"Bild hochladen"}),r.jsx("div",{onClick:()=>{t(!e)},className:"",children:(0,r.jsxs)("button",{id:"menu-btn",className:`hamburger md:hidden flex focus:outline-none ${e?"open":""}`,children:[r.jsx("span",{className:"hamburger-top"}),r.jsx("span",{className:"hamburger-middle"}),r.jsx("span",{className:"hamburger-bottom"})]})})]}),r.jsx("div",{className:"md:hidden",children:(0,r.jsxs)("div",{id:"menu",className:`absolute flex-col m-2 items-center bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${e?"open flex":"hidden"}`,children:[r.jsx(l(),{href:"/",className:"nav-item py-1",children:"GALLERIE"}),r.jsx(l(),{href:"/about",className:"nav-item py-1",children:"\xdcBER MICH"}),r.jsx(l(),{href:"/cosee",className:"nav-item py-1",children:"\xdcBER COSEE"})]})})]})})})}},4294:(e,t,s)=>{"use strict";s.d(t,{db:()=>n,t:()=>l});var r=s(5020),a=s(2745),i=s(2863);let o=(0,i.ZF)({apiKey:"AIzaSyA-1qJpCt4M04_q6-XUYnJNtoT7sARZ_Zg",authDomain:"cosee-fbd40.firebaseapp.com",projectId:"cosee-fbd40",storageBucket:"cosee-fbd40.appspot.com",messagingSenderId:"725791732485",appId:"1:725791732485:web:119da81ca8e0b0288b3d6c"}),n=(0,r.ad)(o),l=(0,a.cF)(o)},3950:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(3854),a=s(4218),i=s(8373);let o=({filteredImages:e,isLoading:t})=>{let s=window.innerWidth<500?150:250,i=window.innerWidth<500?200:300,o=(0,a.useRef)(-1),n=(0,a.useRef)(null);console.log(n);let l=e=>{let t=n.current.children;if(-1!==o.current&&o.current<t.length){let e=t[o.current];e.style.transform="scale(1)",e.style.zIndex="0"}let r=t[e];if(!r)return;r.style.transform="scale(1.5)",r.style.zIndex="10",t.length<3&&(o.current=0),o.current=e;let a=s+10;n.current.style.transform=`translateX(calc(50% - ${a*e+.4*a}px))`};return(0,a.useEffect)(()=>{e.length>0&&e.length<3?l(0):l(2)},[e]),r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex transition-all duration-700 h-full ",ref:n,children:[t&&r.jsx("div",{className:"spinner flex mx-auto justify-center"}),!t&&e.map((e,t)=>r.jsx("div",{className:"image-gallery w-full sm:w-3/4 sm:h-auto flex  duration-700 ease-out origin-center rounded-lg bg-no-repeat bg-white bg-contain bg-center mb-12 cursor-pointer",onClick:e=>l(t),style:{width:s,height:i,boxShadow:"10px 10px 20px -2px rgba(0,0,0,0.85)",backgroundImage:`url(${e.imageUrl})`}},e.imageUrl))]})})};var n=s(5020),l=s(4294);let c=e=>{let[t,s]=(0,a.useState)([]),[r,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t;let r=async()=>{try{let r=(0,n.IO)((0,n.hJ)(l.db,e),(0,n.Xo)("createdAt","desc"));t=(0,n.cf)(r,e=>{let t=[];e.forEach(e=>{console.log(e.data);let s=e.data().imageUrl,r=e.data().createdAt,a=[e.data().tags.tag1,e.data().tags.tag2,e.data().tags.tag3];t.push({imageUrl:s,createdAt:r,tags:a})}),console.log(t),s(t),i(!1)})}catch(e){console.error(e),i(!1)}};return r(),()=>t&&t()},[e]),{docs:t,isLoading:r}},u=({setSearchInput:e})=>r.jsx("div",{className:"flex justify-center mb-12",children:r.jsx("input",{type:"text",onChange:t=>{t.preventDefault(),e(t.target.value)},placeholder:"Bilder durchsuchen",className:"search-input focus:outline-none focus:border:teal focus:ring-0"})}),d=()=>{let[e,t]=(0,a.useState)(""),{docs:s,isLoading:n}=c("images"),[l,d]=(0,a.useState)([]);return(0,a.useEffect)(()=>{if(e){let t=s.filter(t=>t.tags.some(t=>t.toLowerCase().includes(e.toLowerCase())));d(t)}else d(s)},[s,e]),(0,r.jsxs)("div",{className:"w-screen h-screen flex flex-col items-center overflow-x-clip",children:[r.jsx(i.default,{}),(0,r.jsxs)("div",{className:"mt-12 pb-20",children:[r.jsx(u,{setSearchInput:t}),r.jsx(o,{filteredImages:l,isLoading:n})]})]})}},5345:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>o});var r=s(4656),a=s(1326),i=s.n(a);s(7272);let o={title:"Cosee Mate App",description:"Lade deine Mate Bildern hoch!"};function n({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:i().className,children:e})})}},3982:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var r=s(5153);let a=(0,r.createProxy)(String.raw`/home/philo/Desktop/code/cosee/app/page.tsx`),{__esModule:i,$$typeof:o}=a,n=a.default,l=n},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(8531);let a=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,449,622,680],()=>s(3627));module.exports=r})();