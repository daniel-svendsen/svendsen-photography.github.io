import{r as a,j as r,_ as t}from"./index-ba659d3f.js";import{H as d}from"./Helmet-5f701910.js";function E(){const[_,l]=a.useState([]),[o,i]=a.useState(null);return a.useEffect(()=>{(async()=>{const s=Object.assign({"../assets/portraits/portraits-10.jpg":()=>t(()=>import("./portraits-10-b23dab47.js"),[]),"../assets/portraits/portraits-11.jpg":()=>t(()=>import("./portraits-11-abb911b7.js"),[]),"../assets/portraits/portraits-12.jpg":()=>t(()=>import("./portraits-12-3387e1e1.js"),[]),"../assets/portraits/portraits-13.jpg":()=>t(()=>import("./portraits-13-61658cab.js"),[]),"../assets/portraits/portraits-14.jpg":()=>t(()=>import("./portraits-14-a496d4db.js"),[]),"../assets/portraits/portraits-15.jpg":()=>t(()=>import("./portraits-15-0ace8cfa.js"),[]),"../assets/portraits/portraits-16.jpg":()=>t(()=>import("./portraits-16-6d973b02.js"),[]),"../assets/portraits/portraits-17.jpg":()=>t(()=>import("./portraits-17-4d4cc9dc.js"),[]),"../assets/portraits/portraits-18.jpg":()=>t(()=>import("./portraits-18-edb00622.js"),[]),"../assets/portraits/portraits-19.jpg":()=>t(()=>import("./portraits-19-92c1de2f.js"),[]),"../assets/portraits/portraits-2.jpg":()=>t(()=>import("./portraits-2-6f1aeb79.js"),[]),"../assets/portraits/portraits-20.jpg":()=>t(()=>import("./portraits-20-92ff1342.js"),[]),"../assets/portraits/portraits-21.jpg":()=>t(()=>import("./portraits-21-9e7cb80f.js"),[]),"../assets/portraits/portraits-22.jpg":()=>t(()=>import("./portraits-22-2e55edbd.js"),[]),"../assets/portraits/portraits-23.jpg":()=>t(()=>import("./portraits-23-3342b5bd.js"),[]),"../assets/portraits/portraits-24.jpg":()=>t(()=>import("./portraits-24-ecee0043.js"),[]),"../assets/portraits/portraits-3.jpg":()=>t(()=>import("./portraits-3-fb8d33ab.js"),[]),"../assets/portraits/portraits-4.jpg":()=>t(()=>import("./portraits-4-2f357da5.js"),[]),"../assets/portraits/portraits-5.jpg":()=>t(()=>import("./portraits-5-dd770efc.js"),[]),"../assets/portraits/portraits-6.jpg":()=>t(()=>import("./portraits-6-7e7d139b.js"),[]),"../assets/portraits/portraits-7.jpg":()=>t(()=>import("./portraits-7-82b1d4dc.js"),[]),"../assets/portraits/portraits-8.jpg":()=>t(()=>import("./portraits-8-c2876fd0.js"),[]),"../assets/portraits/portraits-9.jpg":()=>t(()=>import("./portraits-9-65c28608.js"),[]),"../assets/portraits/portraits.jpg":()=>t(()=>import("./portraits-b01acdae.js"),[])}),p=[];for(const g in s)p.push(s[g]().then(m=>m.default));const n=await Promise.all(p);l(n)})()},[]),a.useEffect(()=>{o?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[o]),a.useEffect(()=>{const e=s=>{s.key==="Escape"&&i(null)};return o&&window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[o]),r.jsxs(r.Fragment,{children:[r.jsxs(d,{children:[r.jsx("title",{children:"Porträttgalleri - Svendsén Photography"}),r.jsx("meta",{name:"description",content:"Utforska vårt porträttgalleri och se de vackra ögonblick vi fångar. Kontakta oss för att boka en porträttfotografering idag."}),r.jsx("meta",{name:"keywords",content:"porträtt, galleri, porträttfotografering, Svendsén Photography, fotografering, Göteborg, Kungälv"}),r.jsx("meta",{property:"og:title",content:"Porträttgalleri - Svendsén Photography"}),r.jsx("meta",{property:"og:description",content:"Se våra fantastiska porträtt i vårt galleri och boka en porträttfotografering idag."}),r.jsx("meta",{property:"og:image",content:"https://www.svendsenphotography.com/assets/socialshare/socialshare.png"}),r.jsx("meta",{property:"og:url",content:"https://www.svendsenphotography.com/portraits"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"})]}),r.jsxs("main",{className:"p-6",children:[r.jsx("header",{children:r.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Porträttgalleri"})}),r.jsx("section",{"aria-label":"Porträttgalleri",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:_.map((e,s)=>r.jsx("figure",{className:"relative",children:r.jsx("img",{src:e,alt:`Porträtt ${s+1}`,className:"w-full h-full object-cover cursor-pointer",onClick:()=>i({src:e,alt:`Porträtt ${s+1}`}),loading:"lazy"})},s))}),o&&r.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:()=>i(null),"aria-modal":"true",role:"dialog","aria-label":"Förstorad bild",children:[r.jsx("button",{onClick:()=>i(null),className:"absolute top-4 right-4 text-white text-3xl focus:outline-none","aria-label":"Stäng",children:"×"}),r.jsx("img",{src:o.src,alt:o.alt,className:"max-w-full max-h-full"})]})]})]})}export{E as default};
