import{r as i,j as l,R as b,a as he}from"./index-b3719ebe.js";function Y(e,t=[]){let n=[];function o(s,c){const a=i.createContext(c),d=n.length;n=[...n,c];const u=f=>{var A;const{scope:m,children:p,...x}=f,g=((A=m==null?void 0:m[e])==null?void 0:A[d])||a,h=i.useMemo(()=>x,Object.values(x));return l.jsx(g.Provider,{value:h,children:p})};u.displayName=s+"Provider";function v(f,m){var g;const p=((g=m==null?void 0:m[e])==null?void 0:g[d])||a,x=i.useContext(p);if(x)return x;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[u,v]}const r=()=>{const s=n.map(c=>i.createContext(c));return function(a){const d=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:d}}),[a,d])}};return r.scopeName=e,[o,Ae(r,...t)]}function Ae(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const c=o.reduce((a,{useScope:d,scopeName:u})=>{const f=d(s)[`__scope${u}`];return{...a,...f}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function be(e,t=[]){let n=[];function o(s,c){const a=i.createContext(c),d=n.length;n=[...n,c];function u(f){const{scope:m,children:p,...x}=f,g=(m==null?void 0:m[e][d])||a,h=i.useMemo(()=>x,Object.values(x));return l.jsx(g.Provider,{value:h,children:p})}function v(f,m){const p=(m==null?void 0:m[e][d])||a,x=i.useContext(p);if(x)return x;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u.displayName=s+"Provider",[u,v]}const r=()=>{const s=n.map(c=>i.createContext(c));return function(a){const d=(a==null?void 0:a[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:d}}),[a,d])}};return r.scopeName=e,[o,Ne(r,...t)]}function Ne(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const c=o.reduce((a,{useScope:d,scopeName:u})=>{const f=d(s)[`__scope${u}`];return{...a,...f}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Re(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Z(...e){return t=>e.forEach(n=>Re(n,t))}function w(...e){return i.useCallback(Z(...e),e)}var M=i.forwardRef((e,t)=>{const{children:n,...o}=e,r=i.Children.toArray(n),s=r.find(Se);if(s){const c=s.props.children,a=r.map(d=>d===s?i.Children.count(c)>1?i.Children.only(null):i.isValidElement(c)?c.props.children:null:d);return l.jsx(V,{...o,ref:t,children:i.isValidElement(c)?i.cloneElement(c,void 0,a):null})}return l.jsx(V,{...o,ref:t,children:n})});M.displayName="Slot";var V=i.forwardRef((e,t)=>{const{children:n,...o}=e;if(i.isValidElement(n)){const r=Ie(n);return i.cloneElement(n,{...Pe(o,n.props),ref:t?Z(t,r):r})}return i.Children.count(n)>1?i.Children.only(null):null});V.displayName="SlotClone";var ye=({children:e})=>l.jsx(l.Fragment,{children:e});function Se(e){return i.isValidElement(e)&&e.type===ye}function Pe(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{s(...a),r(...a)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function Ie(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function je(e){const t=e+"CollectionProvider",[n,o]=be(t),[r,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=p=>{const{scope:x,children:g}=p,h=b.useRef(null),A=b.useRef(new Map).current;return l.jsx(r,{scope:x,itemMap:A,collectionRef:h,children:g})};c.displayName=t;const a=e+"CollectionSlot",d=b.forwardRef((p,x)=>{const{scope:g,children:h}=p,A=s(a,g),C=w(x,A.collectionRef);return l.jsx(M,{ref:C,children:h})});d.displayName=a;const u=e+"CollectionItemSlot",v="data-radix-collection-item",f=b.forwardRef((p,x)=>{const{scope:g,children:h,...A}=p,C=b.useRef(null),N=w(x,C),y=s(u,g);return b.useEffect(()=>(y.itemMap.set(C,{ref:C,...A}),()=>void y.itemMap.delete(C))),l.jsx(M,{[v]:"",ref:N,children:h})});f.displayName=u;function m(p){const x=s(e+"CollectionConsumer",p);return b.useCallback(()=>{const h=x.collectionRef.current;if(!h)return[];const A=Array.from(h.querySelectorAll(`[${v}]`));return Array.from(x.itemMap.values()).sort((y,S)=>A.indexOf(y.ref.current)-A.indexOf(S.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:d,ItemSlot:f},m,o]}function X(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function ee(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function F({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=we({defaultProp:t,onChange:n}),s=e!==void 0,c=s?e:o,a=ee(n),d=i.useCallback(u=>{if(s){const f=typeof u=="function"?u(e):u;f!==e&&a(f)}else r(u)},[s,e,r,a]);return[c,d]}function we({defaultProp:e,onChange:t}){const n=i.useState(e),[o]=n,r=i.useRef(o),s=ee(t);return i.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),n}var _e=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=_e.reduce((e,t)=>{const n=i.forwardRef((o,r)=>{const{asChild:s,...c}=o,a=s?M:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(a,{...c,ref:r})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),O=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{};function Ee(e,t){return i.useReducer((n,o)=>t[n][o]??n,e)}var te=e=>{const{present:t,children:n}=e,o=Me(t),r=typeof n=="function"?n({present:o.isPresent}):i.Children.only(n),s=w(o.ref,Oe(r));return typeof n=="function"||o.isPresent?i.cloneElement(r,{ref:s}):null};te.displayName="Presence";function Me(e){const[t,n]=i.useState(),o=i.useRef({}),r=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[a,d]=Ee(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const u=E(o.current);s.current=a==="mounted"?u:"none"},[a]),O(()=>{const u=o.current,v=r.current;if(v!==e){const m=s.current,p=E(u);e?d("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(v&&m!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),O(()=>{if(t){let u;const v=t.ownerDocument.defaultView??window,f=p=>{const g=E(o.current).includes(p.animationName);if(p.target===t&&g&&(d("ANIMATION_END"),!r.current)){const h=t.style.animationFillMode;t.style.animationFillMode="forwards",u=v.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=h)})}},m=p=>{p.target===t&&(s.current=E(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{v.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}function E(e){return(e==null?void 0:e.animationName)||"none"}function Oe(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Te=he["useId".toString()]||(()=>{}),De=0;function ne(e){const[t,n]=i.useState(Te());return O(()=>{e||n(o=>o??String(De++))},[e]),e||(t?`radix-${t}`:"")}var W="Collapsible",[ke,oe]=Y(W),[$e,B]=ke(W),re=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:o,defaultOpen:r,disabled:s,onOpenChange:c,...a}=e,[d=!1,u]=F({prop:o,defaultProp:r,onChange:c});return l.jsx($e,{scope:n,disabled:s,contentId:ne(),open:d,onOpenToggle:i.useCallback(()=>u(v=>!v),[u]),children:l.jsx(_.div,{"data-state":G(d),"data-disabled":s?"":void 0,...a,ref:t})})});re.displayName=W;var se="CollapsibleTrigger",ce=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,...o}=e,r=B(se,n);return l.jsx(_.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":G(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...o,ref:t,onClick:X(e.onClick,r.onOpenToggle)})});ce.displayName=se;var K="CollapsibleContent",ie=i.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=B(K,e.__scopeCollapsible);return l.jsx(te,{present:n||r.open,children:({present:s})=>l.jsx(Le,{...o,ref:t,present:s})})});ie.displayName=K;var Le=i.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:o,children:r,...s}=e,c=B(K,n),[a,d]=i.useState(o),u=i.useRef(null),v=w(t,u),f=i.useRef(0),m=f.current,p=i.useRef(0),x=p.current,g=c.open||a,h=i.useRef(g),A=i.useRef();return i.useEffect(()=>{const C=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(C)},[]),O(()=>{const C=u.current;if(C){A.current=A.current||{transitionDuration:C.style.transitionDuration,animationName:C.style.animationName},C.style.transitionDuration="0s",C.style.animationName="none";const N=C.getBoundingClientRect();f.current=N.height,p.current=N.width,h.current||(C.style.transitionDuration=A.current.transitionDuration,C.style.animationName=A.current.animationName),d(o)}},[c.open,o]),l.jsx(_.div,{"data-state":G(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!g,...s,ref:v,style:{"--radix-collapsible-content-height":m?`${m}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:g&&r})});function G(e){return e?"open":"closed"}var Ve=re,Ue=ce,Fe=ie,We=i.createContext(void 0);function Be(e){const t=i.useContext(We);return e||t||"ltr"}var R="Accordion",Ke=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[H,Ge,He]=je(R),[D,nt]=Y(R,[He,oe]),q=oe(),ae=b.forwardRef((e,t)=>{const{type:n,...o}=e,r=o,s=o;return l.jsx(H.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?l.jsx(Je,{...s,ref:t}):l.jsx(Qe,{...r,ref:t})})});ae.displayName=R;var[le,qe]=D(R),[de,ze]=D(R,{collapsible:!1}),Qe=b.forwardRef((e,t)=>{const{value:n,defaultValue:o,onValueChange:r=()=>{},collapsible:s=!1,...c}=e,[a,d]=F({prop:n,defaultProp:o,onChange:r});return l.jsx(le,{scope:e.__scopeAccordion,value:a?[a]:[],onItemOpen:d,onItemClose:b.useCallback(()=>s&&d(""),[s,d]),children:l.jsx(de,{scope:e.__scopeAccordion,collapsible:s,children:l.jsx(ue,{...c,ref:t})})})}),Je=b.forwardRef((e,t)=>{const{value:n,defaultValue:o,onValueChange:r=()=>{},...s}=e,[c=[],a]=F({prop:n,defaultProp:o,onChange:r}),d=b.useCallback(v=>a((f=[])=>[...f,v]),[a]),u=b.useCallback(v=>a((f=[])=>f.filter(m=>m!==v)),[a]);return l.jsx(le,{scope:e.__scopeAccordion,value:c,onItemOpen:d,onItemClose:u,children:l.jsx(de,{scope:e.__scopeAccordion,collapsible:!0,children:l.jsx(ue,{...s,ref:t})})})}),[Ye,k]=D(R),ue=b.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:o,dir:r,orientation:s="vertical",...c}=e,a=b.useRef(null),d=w(a,t),u=Ge(n),f=Be(r)==="ltr",m=X(e.onKeyDown,p=>{var Q;if(!Ke.includes(p.key))return;const x=p.target,g=u().filter(L=>{var J;return!((J=L.ref.current)!=null&&J.disabled)}),h=g.findIndex(L=>L.ref.current===x),A=g.length;if(h===-1)return;p.preventDefault();let C=h;const N=0,y=A-1,S=()=>{C=h+1,C>y&&(C=N)},$=()=>{C=h-1,C<N&&(C=y)};switch(p.key){case"Home":C=N;break;case"End":C=y;break;case"ArrowRight":s==="horizontal"&&(f?S():$());break;case"ArrowDown":s==="vertical"&&S();break;case"ArrowLeft":s==="horizontal"&&(f?$():S());break;case"ArrowUp":s==="vertical"&&$();break}const ge=C%A;(Q=g[ge].ref.current)==null||Q.focus()});return l.jsx(Ye,{scope:n,disabled:o,direction:r,orientation:s,children:l.jsx(H.Slot,{scope:n,children:l.jsx(_.div,{...c,"data-orientation":s,ref:d,onKeyDown:o?void 0:m})})})}),T="AccordionItem",[Ze,z]=D(T),fe=b.forwardRef((e,t)=>{const{__scopeAccordion:n,value:o,...r}=e,s=k(T,n),c=qe(T,n),a=q(n),d=ne(),u=o&&c.value.includes(o)||!1,v=s.disabled||e.disabled;return l.jsx(Ze,{scope:n,open:u,disabled:v,triggerId:d,children:l.jsx(Ve,{"data-orientation":s.orientation,"data-state":ve(u),...a,...r,ref:t,disabled:v,open:u,onOpenChange:f=>{f?c.onItemOpen(o):c.onItemClose(o)}})})});fe.displayName=T;var pe="AccordionHeader",Xe=b.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=k(R,n),s=z(pe,n);return l.jsx(_.h3,{"data-orientation":r.orientation,"data-state":ve(s.open),"data-disabled":s.disabled?"":void 0,...o,ref:t})});Xe.displayName=pe;var U="AccordionTrigger",me=b.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=k(R,n),s=z(U,n),c=ze(U,n),a=q(n);return l.jsx(H.ItemSlot,{scope:n,children:l.jsx(Ue,{"aria-disabled":s.open&&!c.collapsible||void 0,"data-orientation":r.orientation,id:s.triggerId,...a,...o,ref:t})})});me.displayName=U;var xe="AccordionContent",Ce=b.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=k(R,n),s=z(xe,n),c=q(n);return l.jsx(Fe,{role:"region","aria-labelledby":s.triggerId,"data-orientation":r.orientation,...c,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Ce.displayName=xe;function ve(e){return e?"open":"closed"}var et=ae,P=fe,I=me,j=Ce;const ot=()=>l.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[l.jsx("h1",{className:"text-3xl font-bold mb-6",children:"FAQ"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:l.jsx("div",{children:l.jsxs(et,{type:"single",collapsible:!0,children:[l.jsxs(P,{value:"item-1",children:[l.jsx(I,{className:"text-left text-lg font-medium py-2",children:"Vad ingår?"}),l.jsx(j,{className:"text-gray-700 py-2",children:"I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då kontaktar ni mig om ni vill ha fler."})]}),l.jsxs(P,{value:"item-2",children:[l.jsx(I,{className:"text-left text-lg font-medium py-2",children:"Hur går det till?"}),l.jsx(j,{className:"text-gray-700 py-2",children:"Vi planerar fotograferingen tillsammans och hittar en tid och plats som passar."})]}),l.jsxs(P,{value:"item-3",children:[l.jsx(I,{className:"text-left text-lg font-medium py-2",children:"Hur lång tid tar en vanlig fotosession?"}),l.jsx(j,{className:"text-gray-700 py-2",children:"En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål."})]}),l.jsxs(P,{value:"item-4",children:[l.jsx(I,{className:"text-left text-lg font-medium py-2",children:"Fotograferar du utanför Kungälv?"}),l.jsx(j,{className:"text-gray-700 py-2",children:"Ja, men reseersättning kan tillkomma."})]}),l.jsxs(P,{value:"item-5",children:[l.jsx(I,{className:"text-left text-lg font-medium py-2",children:"Bröllop, vad ingår i baspaketet?"}),l.jsx(j,{className:"text-gray-700 py-2",children:"I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer ut."})]})]})})})]});export{ot as default};
