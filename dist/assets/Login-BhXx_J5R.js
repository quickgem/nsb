import{aE as b,d as r,g as u,h as _,o as c,e as d,a as t,af as m,aI as p,b as w,t as k,aG as y,aH as S}from"./index-DmRi1q9h.js";import{_ as I}from"./SignatureBankLogo-TNUnmZXA.js";import{S as a}from"./storeUtils-BAn43-Ed.js";const e=s=>(y("data-v-b6723597"),s=s(),S(),s),L={class:"container"},V=e(()=>t("div",{class:"bg-image"},null,-1)),B=e(()=>t("div",{class:"overlay"},null,-1)),E={class:"min-container mt-3"},U=e(()=>t("a",{href:"/",class:"navbar-brand p-5"},[t("img",{src:I,class:"img-fluid",style:{width:"100px"},alt:""})],-1)),q={class:"form-container p-2"},C={key:0,class:"w-full d-flex flex-column align-items-center"},O=e(()=>t("h5",{class:"text-white"},"Online Banking Login",-1)),T=e(()=>t("p",{class:"text-white"},"Welcome back! Please fill in the correct details.",-1)),D={class:"w-full d-flex flex-column align-items-center gap-2"},N={class:"input-component d-flex flex-column align-items-center"},P=e(()=>t("h6",{class:"text-white"},"Account Id",-1)),W={class:"relative mt-1"},A=e(()=>t("div",{class:"bg-white rounded col-lg-4"},[t("p",{class:"text-neutral-900 text-sm p-2"},"This is national signature bank secured online banking portal, customers with an account with signature bank will be assigned an account id during creation of their account by their account manager. ")],-1)),G={key:1,class:"w-full d-flex flex-column align-items-center"},H=e(()=>t("h5",{class:"text-white"},"Online Banking Login",-1)),M={class:"text-white"},R={class:"text-warning"},j={class:"w-full d-flex flex-column align-items-center gap-2"},z={class:"input-component d-flex flex-column align-items-center"},F=e(()=>t("h6",{class:"text-white"},"Verification Code",-1)),J={class:"relative mt-1"},K={__name:"Login",setup(s){r(null);const h=u(()=>a.getter().auth.getIsOtp),i=_({username:"nsb001",password:null}),g=r(sessionStorage.getItem("email")),o=_({email:null,otp:null}),f=()=>{a.getter().auth.nsLogin(i)},v=u(()=>a.getter().auth.getUsers),x=()=>{o.email=v.value.email,a.getter().auth.verifyEmail(o)};return(Q,n)=>(c(),d("div",L,[V,B,t("div",E,[U,t("div",q,[h.value==="false"?(c(),d("div",C,[O,T,t("div",D,[t("div",N,[P,t("div",W,[m(t("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>i.password=l),required:""},null,512),[[p,i.password]])])]),A,t("button",{class:"p-2 w-full rounded bg-black border-0",onClick:f},"Send Request")])])):(c(),d("div",G,[H,t("p",M,[w("We sent a verification code to "),t("b",R,'"'+k(g.value)+'"',1)]),t("div",j,[t("div",z,[F,t("div",J,[m(t("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=l=>o.otp=l),required:""},null,512),[[p,o.otp]])])]),t("button",{class:"p-2 w-full rounded bg-black border-0",onClick:x},"Validate")])]))])])]))}},$=b(K,[["__scopeId","data-v-b6723597"]]);export{$ as default};
