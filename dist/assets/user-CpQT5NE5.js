import{r as u,g as T,k as h,h as y,_ as p,i as C,a as $,j as s,b as m,f as R,o as H,w as f,x as J,y as V,P as X,T as U,z as G,A as K,B as Q,v as Y,C as Z,W as ee}from"./index-CFyAmOhw.js";import{C as te}from"./Container-Dl3OWcK2.js";import{C as oe}from"./Card-CH3P47np.js";const ae=u.createContext(),E=ae;function se(e){return T("MuiTable",e)}h("MuiTable",["root","stickyHeader"]);const ne=["className","component","padding","size","stickyHeader"],re=e=>{const{classes:t,stickyHeader:o}=e;return R({root:["root",o&&"stickyHeader"]},se,t)},le=y("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":p({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),P="table",ie=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTable"}),{className:r,component:n=P,padding:i="normal",size:l="medium",stickyHeader:d=!1}=a,b=$(a,ne),g=p({},a,{component:n,padding:i,size:l,stickyHeader:d}),c=re(g),x=u.useMemo(()=>({padding:i,size:l,stickyHeader:d}),[i,l,d]);return s.jsx(E.Provider,{value:x,children:s.jsx(le,p({as:n,role:n===P?null:"table",ref:o,className:m(c.root,r),ownerState:g},b))})}),ce=ie,de=u.createContext(),N=de;function pe(e){return T("MuiTableBody",e)}h("MuiTableBody",["root"]);const ue=["className","component"],be=e=>{const{classes:t}=e;return R({root:["root"]},pe,t)},ge=y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),xe={variant:"body"},_="tbody",ve=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableBody"}),{className:r,component:n=_}=a,i=$(a,ue),l=p({},a,{component:n}),d=be(l);return s.jsx(N.Provider,{value:xe,children:s.jsx(ge,p({className:m(d.root,r),as:n,ref:o,role:n===_?null:"rowgroup",ownerState:l},i))})}),fe=ve;function me(e){return T("MuiTableContainer",e)}h("MuiTableContainer",["root"]);const ye=["className","component"],Te=e=>{const{classes:t}=e;return R({root:["root"]},me,t)},he=y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Ce=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableContainer"}),{className:r,component:n="div"}=a,i=$(a,ye),l=p({},a,{component:n}),d=Te(l);return s.jsx(he,p({ref:o,as:n,className:m(d.root,r),ownerState:l},i))}),$e=Ce;function Re(e){return T("MuiTableRow",e)}const je=h("MuiTableRow",["root","selected","hover","head","footer"]),B=je,we=["className","component","hover","selected"],Se=e=>{const{classes:t,selected:o,hover:a,head:r,footer:n}=e;return R({root:["root",o&&"selected",a&&"hover",r&&"head",n&&"footer"]},Re,t)},Me=y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${B.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${B.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:H(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:H(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),O="tr",He=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableRow"}),{className:r,component:n=O,hover:i=!1,selected:l=!1}=a,d=$(a,we),b=u.useContext(N),g=p({},a,{component:n,hover:i,selected:l,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),c=Se(g);return s.jsx(Me,p({as:n,ref:o,className:m(c.root,r),role:n===O?null:"row",ownerState:g},d))}),z=He;function Ne(e){return T("MuiTableCell",e)}const ke=h("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Ue=ke,ze=["align","className","component","padding","scope","size","sortDirection","variant"],Le=e=>{const{classes:t,variant:o,align:a,padding:r,size:n,stickyHeader:i}=e,l={root:["root",o,i&&"stickyHeader",a!=="inherit"&&`align${f(a)}`,r!=="normal"&&`padding${f(r)}`,`size${f(n)}`]};return R(l,Ne,t)},Ae=y("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${f(o.size)}`],o.padding!=="normal"&&t[`padding${f(o.padding)}`],o.align!=="inherit"&&t[`align${f(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?J(H(e.palette.divider,1),.88):V(H(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Ue.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),De=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableCell"}),{align:r="inherit",className:n,component:i,padding:l,scope:d,size:b,sortDirection:g,variant:c}=a,x=$(a,ze),v=u.useContext(E),S=u.useContext(N),L=S&&S.variant==="head";let j;i?j=i:j=L?"th":"td";let M=d;j==="td"?M=void 0:!M&&L&&(M="col");const A=c||S&&S.variant,D=p({},a,{align:r,component:j,padding:l||(v&&v.padding?v.padding:"normal"),size:b||(v&&v.size?v.size:"medium"),sortDirection:g,stickyHeader:A==="head"&&v&&v.stickyHeader,variant:A}),q=Le(D);let I=null;return g&&(I=g==="asc"?"ascending":"descending"),s.jsx(Ae,p({as:j,ref:o,className:m(q.root,n),"aria-sort":I,scope:M,ownerState:D},x))}),w=De,Ie=({query:e})=>s.jsx(z,{children:s.jsx(w,{align:"center",colSpan:6,sx:{py:3},children:s.jsxs(X,{sx:{textAlign:"center"},children:[s.jsx(U,{variant:"h6",paragraph:!0,children:"Not found"}),s.jsxs(U,{variant:"body2",children:["No results found for  ",s.jsxs("strong",{children:['"',e,'"']}),".",s.jsx("br",{})," Try checking for typos or using complete words."]})]})})}),Pe=Ie,_e=({name:e,email:t,role:o})=>s.jsx(s.Fragment,{children:s.jsxs(z,{hover:!0,tabIndex:-1,children:[s.jsx(w,{children:s.jsx(U,{variant:"subtitle2",children:e})}),s.jsx(w,{children:o}),s.jsx(w,{children:t})]})}),Be=_e;function Oe(e){return T("MuiTableHead",e)}h("MuiTableHead",["root"]);const We=["className","component"],Fe=e=>{const{classes:t}=e;return R({root:["root"]},Oe,t)},Ee=y("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),qe={variant:"head"},W="thead",Je=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableHead"}),{className:r,component:n=W}=a,i=$(a,We),l=p({},a,{component:n}),d=Fe(l);return s.jsx(N.Provider,{value:qe,children:s.jsx(Ee,p({as:n,className:m(d.root,r),ref:o,role:n===W?null:"rowgroup",ownerState:l},i))})}),Ve=Je,Xe=G(s.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Ge(e){return T("MuiTableSortLabel",e)}const Ke=h("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),k=Ke,Qe=["active","children","className","direction","hideSortIcon","IconComponent"],Ye=e=>{const{classes:t,direction:o,active:a}=e,r={root:["root",a&&"active"],icon:["icon",`iconDirection${f(o)}`]};return R(r,Ge,t)},Ze=y(K,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.active&&t.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${k.icon}`]:{opacity:.5}},[`&.${k.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${k.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),et=y("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.icon,t[`iconDirection${f(o.direction)}`]]}})(({theme:e,ownerState:t})=>p({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),tt=u.forwardRef(function(t,o){const a=C({props:t,name:"MuiTableSortLabel"}),{active:r=!1,children:n,className:i,direction:l="asc",hideSortIcon:d=!1,IconComponent:b=Xe}=a,g=$(a,Qe),c=p({},a,{active:r,direction:l,hideSortIcon:d,IconComponent:b}),x=Ye(c);return s.jsxs(Ze,p({className:m(x.root,i),component:"span",disableRipple:!0,ownerState:c,ref:o},g,{children:[n,d&&!r?null:s.jsx(et,{as:b,className:m(x.icon),ownerState:c})]}))}),ot=tt,at={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function F(e,t,o){return e[o]===null?1:t[o]===null||t[o]<e[o]?-1:t[o]>e[o]?1:0}function st(e,t){return e==="desc"?(o,a)=>F(o,a,t):(o,a)=>-F(o,a,t)}function nt({inputData:e,comparator:t}){const o=e.map((a,r)=>[a,r]);return o.sort((a,r)=>{const n=t(a[0],r[0]);return n!==0?n:a[1]-r[1]}),e=o.map(a=>a[0]),e}const rt=({order:e,orderBy:t,headLabel:o,onRequestSort:a})=>{const r=n=>i=>{a(i,n)};return s.jsx(Ve,{children:s.jsx(z,{children:o.map(n=>s.jsx(w,{align:n.align||"left",sortDirection:t===n.id?e:!1,sx:{width:n.width,minWidth:n.minWidth},children:s.jsxs(ot,{hideSortIcon:!0,active:t===n.id,direction:t===n.id?e:"asc",onClick:r(n.id),children:[n.label,t===n.id?s.jsx(Q,{sx:{...at},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})},lt=rt;function it(){const{userInfo:{user:e}}=Y(c=>c==null?void 0:c.auth),[t,o]=u.useState("asc"),[a,r]=u.useState("name"),[n,i]=u.useState(""),l=[{id:e._id,name:e.username,email:e.email,role:e.role}],d=(c,x)=>{x!==""&&(o(a===x&&t==="asc"?"desc":"asc"),r(x))},b=nt({inputData:l,comparator:st(t,a)}),g=!b.length;return s.jsx(te,{children:s.jsx(oe,{children:s.jsx(Z,{children:s.jsx($e,{sx:{overflow:"unset"},children:s.jsxs(ce,{sx:{minWidth:800},children:[s.jsx(lt,{order:t,orderBy:a,rowCount:l.length-1,onRequestSort:d,headLabel:[{id:"name",label:"Name"},{id:"role",label:"Role"},{id:"email",label:"Email"}]}),s.jsxs(fe,{children:[b.map(c=>s.jsx(Be,{name:c.name,role:c.role,email:c.email},c.id)),g&&s.jsx(Pe,{query:n})]})]})})})})})}function ut(){return s.jsxs(s.Fragment,{children:[s.jsx(ee,{children:s.jsx("title",{children:" User | Minimal UI "})}),s.jsx(it,{})]})}export{ut as default};
