import{_ as a,aN as e,o as n,c as t,w as l,a as s,b as i,r as u,d,e as o,i as c,I as m,v as p}from"./index.fb84ef13.js";var r=a({data:()=>({title:"makePhoneCall",disabled:!0}),methods:{bindInput:function(a){this.inputValue=a.detail.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){e({phoneNumber:this.inputValue,success:()=>{console.log("成功拨打电话")}})}}},[["render",function(a,e,r,b,f,h){const _=u(o("page-head"),d),I=c,k=m,v=p;return n(),t(I,null,{default:l((()=>[s(_,{title:f.title},null,8,["title"]),s(I,{class:"uni-padding-wrap uni-common-mt"},{default:l((()=>[s(I,{class:"uni-hello-text uni-center"},{default:l((()=>[i("请在下方输入电话号码")])),_:1}),s(k,{class:"input uni-common-mt",type:"number",name:"input",onInput:h.bindInput},null,8,["onInput"]),s(I,{class:"uni-btn-v uni-common-mt"},{default:l((()=>[s(v,{onClick:h.makePhoneCall,type:"primary",disabled:f.disabled},{default:l((()=>[i("拨打")])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-4b4fa731"]]);export{r as default};
