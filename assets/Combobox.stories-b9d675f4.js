import{S as E,i as V,s as j,u as h,G as R,D as J,v as k,w as b,H as q,E as K,d as y,x as c,B as Y,a as x,I as g,L as D,F as ke,C as I,M as U,N as G,O as H,P as _e,g as Q,t as w,c as W,b as _,Q as de,J as ve,K as we,j as T,k as C,m as L,p as O,e as P,R as Z,T as xe,f as X,U as Ie,V as De}from"./index-b203b68f.js";import{S as Ue}from"./Search-ae2f075f.js";function Ee(s){let e,t,n,u,a,d,o,l,i;return{c(){e=h("li"),t=h("img"),u=R(),a=h("p"),d=J(s[1]),this.h()},l(r){e=k(r,"LI",{role:!0,"aria-selected":!0,id:!0,class:!0});var f=b(e);t=k(f,"IMG",{class:!0,src:!0,alt:!0}),u=q(f),a=k(f,"P",{class:!0});var v=b(a);d=K(v,s[1]),v.forEach(y),f.forEach(y),this.h()},h(){c(t,"class","object-cover w-8 h-8 mx-1 rounded-full"),Y(t.src,n=s[0])||c(t,"src",n),c(t,"alt",""),c(a,"class","mx-2 text-sm text-gray-600 dark:text-gray-50"),c(e,"role","option"),c(e,"aria-selected",s[2]),c(e,"id",s[3]),c(e,"class",o=`cursor-pointer flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b last:border-0 hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-600 ${s[2]?"bg-gray-100 dark:bg-gray-500":""}`)},m(r,f){x(r,e,f),g(e,t),g(e,u),g(e,a),g(a,d),l||(i=D(e,"mousedown",s[4]),l=!0)},p(r,[f]){f&1&&!Y(t.src,n=r[0])&&c(t,"src",n),f&2&&ke(d,r[1]),f&4&&c(e,"aria-selected",r[2]),f&8&&c(e,"id",r[3]),f&4&&o!==(o=`cursor-pointer flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b last:border-0 hover:bg-gray-100 dark:hover:bg-gray-500 dark:border-gray-600 ${r[2]?"bg-gray-100 dark:bg-gray-500":""}`)&&c(e,"class",o)},i:I,o:I,d(r){r&&y(e),l=!1,i()}}}function Ve(s,e,t){let{imageUrl:n}=e,{text:u}=e,{selected:a}=e,{id:d}=e;function o(l){U.call(this,s,l)}return s.$$set=l=>{"imageUrl"in l&&t(0,n=l.imageUrl),"text"in l&&t(1,u=l.text),"selected"in l&&t(2,a=l.selected),"id"in l&&t(3,d=l.id)},[n,u,a,d,o]}class fe extends E{constructor(e){super(),V(this,e,Ve,Ee,j,{imageUrl:0,text:1,selected:2,id:3})}}fe.__docgen={version:3,name:"DropDownItem.svelte",data:[{visibility:"public",description:null,keywords:[],name:"imageUrl",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"selected",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"mousedown",parent:"li",modificators:[],locations:null}],slots:[],refs:[]};function je(s){let e,t,n;return{c(){e=G("svg"),t=G("path"),n=G("animateTransform"),this.h()},l(u){e=H(u,"svg",{class:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,style:!0,"xml:space":!0});var a=b(e);t=H(a,"path",{fill:!0,d:!0});var d=b(t);n=H(d,"animateTransform",{attributeType:!0,attributeName:!0,type:!0,from:!0,to:!0,dur:!0,repeatCount:!0}),b(n).forEach(y),d.forEach(y),a.forEach(y),this.h()},h(){c(n,"attributeType","xml"),c(n,"attributeName","transform"),c(n,"type","rotate"),c(n,"from","0 25 25"),c(n,"to","360 25 25"),c(n,"dur","0.6s"),c(n,"repeatCount","indefinite"),c(t,"fill","currentColor"),c(t,"d","M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"),c(e,"class","inline"),c(e,"version","1.1"),c(e,"id","loader-1"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(e,"x","0px"),c(e,"y","0px"),c(e,"width","40px"),c(e,"height","40px"),c(e,"viewBox","0 0 50 50"),_e(e,"enable-background","new 0 0 50 50"),c(e,"xml:space","preserve")},m(u,a){x(u,e,a),g(e,t),g(t,n)},p:I,i:I,o:I,d(u){u&&y(e)}}}let pe=class extends E{constructor(e){super(),V(this,e,null,je,j,{})}};pe.__docgen={version:3,name:"Loading.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function $(s,e,t){const n=s.slice();return n[8]=e[t],n[10]=t,n}function Te(s){let e,t=[],n=new Map,u,a=s[0];const d=o=>o[8].key;for(let o=0;o<a.length;o+=1){let l=$(s,a,o),i=d(l);n.set(i,t[o]=ee(i,l))}return{c(){e=h("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=k(o,"UL",{class:!0,role:!0,"aria-label":!0,id:!0});var l=b(e);for(let i=0;i<t.length;i+=1)t[i].l(l);l.forEach(y),this.h()},h(){c(e,"class","py-2"),c(e,"role","listbox"),c(e,"aria-label","検索結果"),c(e,"id",s[2])},m(o,l){x(o,e,l);for(let i=0;i<t.length;i+=1)t[i].m(e,null);u=!0},p(o,l){l&57&&(a=o[0],Q(),t=ve(t,l,d,1,o,a,n,e,we,ee,null,$),W()),(!u||l&4)&&c(e,"id",o[2])},i(o){if(!u){for(let l=0;l<a.length;l+=1)_(t[l]);u=!0}},o(o){for(let l=0;l<t.length;l+=1)w(t[l]);u=!1},d(o){o&&y(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Ce(s){let e,t,n;return{c(){e=h("div"),t=h("p"),n=J("検索結果がありません"),this.h()},l(u){e=k(u,"DIV",{class:!0,"aria-live":!0,"aria-atomic":!0});var a=b(e);t=k(a,"P",{class:!0});var d=b(t);n=K(d,"検索結果がありません"),d.forEach(y),a.forEach(y),this.h()},h(){c(t,"class","text-gray-500 dark:text-gray-300"),c(e,"class","py-2 text-center"),c(e,"aria-live","polite"),c(e,"aria-atomic","true")},m(u,a){x(u,e,a),g(e,t),g(t,n)},p:I,i:I,o:I,d(u){u&&y(e)}}}function Le(s){let e,t,n,u,a,d;return a=new pe({}),{c(){e=h("div"),t=h("div"),n=J("検索中"),u=R(),T(a.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0,"aria-live":!0,"aria-atomic":!0});var l=b(e);t=k(l,"DIV",{class:!0});var i=b(t);n=K(i,"検索中"),i.forEach(y),u=q(l),C(a.$$.fragment,l),l.forEach(y),this.h()},h(){c(t,"class","sr-only"),c(e,"class","py-2 text-center"),c(e,"aria-live","polite"),c(e,"aria-atomic","true")},m(o,l){x(o,e,l),g(e,t),g(t,n),g(e,u),L(a,e,null),d=!0},p:I,i(o){d||(_(a.$$.fragment,o),d=!0)},o(o){w(a.$$.fragment,o),d=!1},d(o){o&&y(e),O(a)}}}function ee(s,e){let t,n,u;function a(){return e[7](e[8])}return n=new fe({props:{imageUrl:e[8].imageUrl,text:e[8].text,selected:e[10]===e[4],id:`${e[3]}-${e[10]}`}}),n.$on("mousedown",a),{key:s,first:null,c(){t=P(),T(n.$$.fragment),this.h()},l(d){t=P(),C(n.$$.fragment,d),this.h()},h(){this.first=t},m(d,o){x(d,t,o),L(n,d,o),u=!0},p(d,o){e=d;const l={};o&1&&(l.imageUrl=e[8].imageUrl),o&1&&(l.text=e[8].text),o&17&&(l.selected=e[10]===e[4]),o&9&&(l.id=`${e[3]}-${e[10]}`),n.$set(l)},i(d){u||(_(n.$$.fragment,d),u=!0)},o(d){w(n.$$.fragment,d),u=!1},d(d){d&&y(t),O(n,d)}}}function Oe(s){let e,t,n,u,a,d;const o=[Le,Ce,Te],l=[];function i(r,f){return r[1]?0:r[0].length===0?1:2}return t=i(s),n=l[t]=o[t](s),{c(){e=h("div"),n.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var f=b(e);n.l(f),f.forEach(y),this.h()},h(){c(e,"class","absolute z-20 overflow-hidden bg-white rounded-br-md rounded-bl-md shadow-lg w-72 max-h-60 overflow-y-scroll dark:bg-gray-700 border-2 border-t-0 border-gray-300 dark:border-gray-600")},m(r,f){x(r,e,f),l[t].m(e,null),u=!0,a||(d=D(e,"keydown",s[6]),a=!0)},p(r,[f]){let v=t;t=i(r),t===v?l[t].p(r,f):(Q(),w(l[v],1,1,()=>{l[v]=null}),W(),n=l[t],n?n.p(r,f):(n=l[t]=o[t](r),n.c()),_(n,1),n.m(e,null))},i(r){u||(_(n),u=!0)},o(r){w(n),u=!1},d(r){r&&y(e),l[t].d(),a=!1,d()}}}function Se(s,e,t){const n=de();let{items:u}=e,{loading:a=!1}=e,{listboxId:d}=e,{optionId:o}=e,{activeIndex:l=null}=e;function i(f){U.call(this,s,f)}const r=f=>{n("select",f)};return s.$$set=f=>{"items"in f&&t(0,u=f.items),"loading"in f&&t(1,a=f.loading),"listboxId"in f&&t(2,d=f.listboxId),"optionId"in f&&t(3,o=f.optionId),"activeIndex"in f&&t(4,l=f.activeIndex)},[u,a,d,o,l,n,i,r]}class me extends E{constructor(e){super(),V(this,e,Se,Oe,j,{items:0,loading:1,listboxId:2,optionId:3,activeIndex:4})}}me.__docgen={version:3,name:"DropDownMenu.svelte",data:[{visibility:"public",description:null,keywords:[],name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"loading",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"listboxId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"optionId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"activeIndex",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"keydown",parent:"div",modificators:[],locations:null},{visibility:"public",description:null,keywords:[],name:"select"}],slots:[],refs:[]};function Ne(s){let e,t,n,u,a,d,o,l;return a=new Ue({props:{className:"text-gray-600 dark:text-gray-50 h-6 w-6"}}),{c(){e=h("div"),t=h("input"),n=R(),u=h("button"),T(a.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var r=b(e);t=k(r,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0,role:!0,"aria-autocomplete":!0,"aria-expanded":!0,"aria-controls":!0}),n=q(r),u=k(r,"BUTTON",{class:!0,"aria-label":!0});var f=b(u);C(a.$$.fragment,f),f.forEach(y),r.forEach(y),this.h()},h(){c(t,"class","bg-white h-10 px-5 rounded-l-lg focus:outline-none dark:bg-gray-800 w-60"),c(t,"type","text"),c(t,"id",s[4]),c(t,"name",s[2]),c(t,"placeholder",s[1]),c(t,"role","combobox"),c(t,"aria-autocomplete","both"),c(t,"aria-expanded",s[3]),c(t,"aria-controls",s[5]),c(u,"class","flex justify-end p-2 rounded-r-lg dark:bg-gray-700"),c(u,"aria-label","検索"),c(e,"class","flex border-2 border-gray-300 dark:border-gray-600 rounded-lg w-full")},m(i,r){x(i,e,r),g(e,t),Z(t,s[0]),s[13](t),g(e,n),g(e,u),L(a,u,null),d=!0,o||(l=[D(t,"input",s[12]),D(t,"focus",s[8]),D(t,"blur",s[9]),D(t,"keydown",s[10]),D(t,"input",s[11])],o=!0)},p(i,[r]){(!d||r&16)&&c(t,"id",i[4]),(!d||r&4)&&c(t,"name",i[2]),(!d||r&2)&&c(t,"placeholder",i[1]),(!d||r&8)&&c(t,"aria-expanded",i[3]),(!d||r&32)&&c(t,"aria-controls",i[5]),r&1&&t.value!==i[0]&&Z(t,i[0])},i(i){d||(_(a.$$.fragment,i),d=!0)},o(i){w(a.$$.fragment,i),d=!1},d(i){i&&y(e),s[13](null),O(a),o=!1,xe(l)}}}function Me(s,e,t){let{value:n=""}=e,{placeholder:u=""}=e,{name:a=""}=e,{isOpen:d=!1}=e,{inputId:o=""}=e,{listboxId:l=""}=e;const i=()=>{r.focus()};let r;function f(p){U.call(this,s,p)}function v(p){U.call(this,s,p)}function z(p){U.call(this,s,p)}function S(p){U.call(this,s,p)}function A(){n=this.value,t(0,n)}function F(p){X[p?"unshift":"push"](()=>{r=p,t(6,r)})}return s.$$set=p=>{"value"in p&&t(0,n=p.value),"placeholder"in p&&t(1,u=p.placeholder),"name"in p&&t(2,a=p.name),"isOpen"in p&&t(3,d=p.isOpen),"inputId"in p&&t(4,o=p.inputId),"listboxId"in p&&t(5,l=p.listboxId)},[n,u,a,d,o,l,r,i,f,v,z,S,A,F]}class ye extends E{constructor(e){super(),V(this,e,Me,Ne,j,{value:0,placeholder:1,name:2,isOpen:3,inputId:4,listboxId:5,focus:7})}get focus(){return this.$$.ctx[7]}}ye.__docgen={version:3,name:"Input.svelte",data:[{visibility:"public",description:null,keywords:[],name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"",bind:[{source:"input",property:"value"}]},{visibility:"public",description:null,keywords:[],name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isOpen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"inputId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"listboxId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"focus",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"focus",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"blur",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"keydown",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"input",parent:"input",modificators:[],locations:null}],slots:[],refs:[]};function te(s){let e,t;return e=new me({props:{items:s[2],loading:s[1],listboxId:ge,optionId:Re,activeIndex:s[5]}}),e.$on("select",s[9]),{c(){T(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,u){L(e,n,u),t=!0},p(n,u){const a={};u&4&&(a.items=n[2]),u&2&&(a.loading=n[1]),u&32&&(a.activeIndex=n[5]),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Be(s){let e,t,n,u,a;function d(i){s[12](i)}let o={inputId:Pe,listboxId:ge,placeholder:"Search"};s[0]!==void 0&&(o.value=s[0]),e=new ye({props:o}),s[11](e),X.push(()=>Ie(e,"value",d,s[0])),e.$on("focus",s[7]),e.$on("blur",s[8]),e.$on("keydown",s[10]),e.$on("input",s[6]);let l=s[3]&&te(s);return{c(){T(e.$$.fragment),n=R(),l&&l.c(),u=P()},l(i){C(e.$$.fragment,i),n=q(i),l&&l.l(i),u=P()},m(i,r){L(e,i,r),x(i,n,r),l&&l.m(i,r),x(i,u,r),a=!0},p(i,[r]){const f={};!t&&r&1&&(t=!0,f.value=i[0],De(()=>t=!1)),e.$set(f),i[3]?l?(l.p(i,r),r&8&&_(l,1)):(l=te(i),l.c(),_(l,1),l.m(u.parentNode,u)):l&&(Q(),w(l,1,1,()=>{l=null}),W())},i(i){a||(_(e.$$.fragment,i),_(l),a=!0)},o(i){w(e.$$.fragment,i),w(l),a=!1},d(i){s[11](null),O(e,i),i&&y(n),l&&l.d(i),i&&y(u)}}}const Pe="combobox",ge="listbox",Re="option";function qe(s,e,t){let n;const u=de();let{value:a=""}=e,{loading:d=!1}=e,{items:o=[]}=e,l,i=null,r=!1;const f=()=>{a.trim()?t(3,r=!0):t(3,r=!1)},v=()=>{a.trim()&&t(3,r=!0)},z=()=>{t(3,r=!1)},S=m=>{t(0,a=m.detail.text),u("select",m.detail)},A=m=>{m.key==="ArrowDown"?(m.preventDefault(),i===null?(t(3,r=!0),t(5,i=0)):i<n-1?t(5,i++,i):t(5,i=0)):m.key==="ArrowUp"?(m.preventDefault(),i===null?(t(3,r=!0),t(5,i=0)):i>0?t(5,i--,i):t(5,i=n-1)):m.key==="Enter"?(t(3,r=!1),i!==null&&(m.preventDefault(),S({detail:o[i]}),t(5,i=null))):m.key==="Escape"&&(m.preventDefault(),l.focus(),r?(t(3,r=!1),t(5,i=null)):t(0,a=""))};function F(m){X[m?"unshift":"push"](()=>{l=m,t(4,l)})}function p(m){a=m,t(0,a)}return s.$$set=m=>{"value"in m&&t(0,a=m.value),"loading"in m&&t(1,d=m.loading),"items"in m&&t(2,o=m.items)},s.$$.update=()=>{s.$$.dirty&4&&(n=o.length),s.$$.dirty&8&&(r||t(5,i=null))},[a,d,o,r,l,i,f,v,z,S,A,F,p]}class be extends E{constructor(e){super(),V(this,e,qe,Be,j,{value:0,loading:1,items:2})}}be.__docgen={version:3,name:"Combobox.svelte",data:[{visibility:"public",description:null,keywords:[],name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"",bind:[{source:"Input",property:"value"}]},{visibility:"public",description:null,keywords:[],name:"loading",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"select"}],slots:[],refs:[]};const Ge={title:"Combobox",component:be,tags:["autodocs"],argTypes:{items:{control:{type:"object"},describe:"選択肢の配列。各要素は { imageUrl: string, text: string, key: string } の形式である必要がある。"},loading:{control:{type:"boolean"},describe:"ローディング中かどうか"},value:{control:{type:"text"},describe:"入力されている値"}}},he=[{imageUrl:"https://placehold.jp/24/cccccc/ffffff/150x150.png?text=1",text:"Item 1",key:"1"},{imageUrl:"https://placehold.jp/24/cccccc/ffffff/150x150.png?text=2",text:"Item 2",key:"2"},{imageUrl:"https://placehold.jp/24/cccccc/ffffff/150x150.png?text=3",text:"Item 3",key:"3"},{imageUrl:"https://placehold.jp/24/cccccc/ffffff/150x150.png?text=4",text:"Item 4",key:"4"},{imageUrl:"https://placehold.jp/24/cccccc/ffffff/150x150.png?text=5",text:"Item 5",key:"5"}],N={args:{items:he,loading:!1,value:""}},M={args:{items:he,value:"hoge",loading:!0}},B={args:{items:[],loading:!1,value:"hoge"}};var le,ne,ie;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    items,
    loading: false,
    value: ''
  }
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,ae,re;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items,
    value: 'hoge',
    loading: true
  }
}`,...(re=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ue,ce;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: [],
    loading: false,
    value: 'hoge'
  }
}`,...(ce=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const He=["Default","Loading","noResults"];export{N as Default,M as Loading,He as __namedExportsOrder,Ge as default,B as noResults};
//# sourceMappingURL=Combobox.stories-b9d675f4.js.map