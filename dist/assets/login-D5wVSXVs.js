import{r as t,F as S,G as C,w as I,H as P,q as k,j as s,B,I as D,o as E,L as F,S as l,T as u,J as T,K as G,M as R,O as W,W as A}from"./index-B-aEMq8e.js";import{u as H,a as M,T as h,I as U,L as q,B as z}from"./InputAdornment-BnaGbdhi.js";import{C as J}from"./Card-ALcuC4kO.js";import"./isMuiElement-BqREFxol.js";import"./Button-DF7jteLA.js";function K(){const[o,p]=t.useState(""),[r,g]=t.useState(""),x=S(),m=C(),[j,{isLoading:N}]=H(),{userInfo:i}=I(e=>e==null?void 0:e.auth),{search:f}=P(),w=new URLSearchParams(f).get("redirect")||"/signup";t.useEffect(()=>{i&&c.push("/dashboard")},[m,w,i]);const v=k(),c=M(),[n,b]=t.useState(!1),L=async e=>{var d;e.preventDefault();try{const a=await j({email:o,password:r}).unwrap();x(W({...a})),c.push("/dashboard")}catch(a){z.error(((d=a==null?void 0:a.data)==null?void 0:d.message)||a.error)}},y=s.jsxs(s.Fragment,{children:[s.jsxs(l,{spacing:3,children:[s.jsx(h,{name:"email",label:"Email address",value:o,onChange:e=>p(e.target.value)}),s.jsx(h,{name:"password",label:"Password",type:n?"text":"password",value:r,onChange:e=>g(e.target.value),InputProps:{endAdornment:s.jsx(U,{position:"end",children:s.jsx(G,{onClick:()=>b(!n),edge:"end",children:s.jsx(R,{icon:n?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),s.jsx(q,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:L,children:"Login"})]});return s.jsxs(B,{sx:{...D({color:E(v.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[s.jsx(F,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),s.jsx(l,{alignItems:"center",justifyContent:"center",sx:{height:1},children:s.jsxs(J,{sx:{p:5,width:1,maxWidth:420},children:[s.jsx(u,{variant:"h4",children:"Sign in to Dashboard"}),s.jsxs(u,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",s.jsx(T,{to:"/signup",children:"Get started"})]}),y]})})]})}function Z(){return s.jsxs(s.Fragment,{children:[s.jsx(A,{children:s.jsx("title",{children:" Login | Dashboard "})}),s.jsx(K,{})]})}export{Z as default};
