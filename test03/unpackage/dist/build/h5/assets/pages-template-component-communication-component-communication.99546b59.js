import{_ as e,ay as s,az as a,o as t,c as n,w as r,a as d,b as c,t as o,i,aA as u,v as l,r as m,d as f,e as _,aW as p}from"./index.fb84ef13.js";var v=e({components:{reciver:e({data:()=>({msg:""}),created(){s("cc",this.recive)},beforeDestroy(){a("cc",this.recive)},methods:{recive(e){this.msg=e.msg}}},[["render",function(e,s,a,u,l,m){const f=i;return t(),n(f,null,{default:r((()=>[d(f,{class:"reciver"},{default:r((()=>[c(o(""===l.msg?"等待发送":"收到消息：")+o(l.msg),1)])),_:1})])),_:1})}],["__scopeId","data-v-ab7f75e8"]]),sender:e({methods:{send(){let e=parseInt(1e4*Math.random());u("cc",{msg:"From uni.$emit -> "+e})}}},[["render",function(e,s,a,o,u,m){const f=l,_=i;return t(),n(_,{class:"sender-container"},{default:r((()=>[d(f,{type:"primary",onClick:m.send},{default:r((()=>[c("点击发送消息")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-287c83a5"]]),senderBus:e({methods:{send(){let e=parseInt(1e4*Math.random());u("cc",{msg:"From event bus -> "+e})}}},[["render",function(e,s,a,o,u,m){const f=l,_=i;return t(),n(_,{class:"sender-container"},{default:r((()=>[d(f,{type:"primary",onClick:m.send},{default:r((()=>[c("自定义EventBus")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-e4813256"]])},data:()=>({}),methods:{}},[["render",function(e,s,a,c,o,u){const l=m(_("page-head"),f),v=p("reciver"),h=p("sender"),g=p("sender-bus"),b=i;return t(),n(b,null,{default:r((()=>[d(l,{title:"组件通讯示例"}),d(b,{class:"uni-padding-wrap"},{default:r((()=>[d(b,{class:"uni-btn-v"},{default:r((()=>[d(v),d(h),d(g)])),_:1})])),_:1})])),_:1})}]]);export{v as default};
