import{_ as p,a as x}from"./SVm0NjTe.js";import{_ as g}from"./DdtQXPvc.js";import{_ as b}from"./l9g5KDA0.js";import{x as h,k as y,l as v,c,b as a,f as o,a as n,t as w,F as k,m as B,g as l,o as r,U as S}from"./C0Y6wZfR.js";import"./ChT1bhKJ.js";const F={key:0,class:"mt-44 mb-32 max-md:w-11/12 w-6/12 m-auto"},H={class:"flex flex-col gap-4"},I={class:"flex flex-col gap-1"},M={class:"font-bold text-xl"},N=["innerHTML"],L={key:1,class:"mt-44 mb-32 max-md:w-11/12 w-6/12 m-auto text-3xl text-center font-bold font-exo"},U={__name:"articles",setup(T){const i=h(),t=y(()=>l().blogs.filter(s=>{var e;return s.id==((e=i.query)==null?void 0:e.id)})),m=async()=>{if(t.value.length==0){const{findMany:s}=await B(S.BLOGS,"blogs"),{data:e}=await s();e&&(l().blogs=e.data.blogs)}};return v(()=>{m()}),(s,e)=>{const _=p,d=g,u=b,f=x;return r(),c(k,null,[a(_),o(t).length!=0?(r(),c("div",F,[n("div",H,[n("div",I,[a(d,{src:o(t)[0].original_url,class:"max-h-[20rem] object-cover object-top rounded-md"},null,8,["src"]),n("span",M,w(o(t)[0].title),1),a(u,{class:"text-sm",datetime:o(t)[0].created_at,day:"numeric",month:"long",year:"numeric"},null,8,["datetime"])]),n("article",{innerHTML:o(t)[0].content},null,8,N)])])):(r(),c("div",L," Pas d'article disponible ")),a(f)],64)}}};export{U as default};