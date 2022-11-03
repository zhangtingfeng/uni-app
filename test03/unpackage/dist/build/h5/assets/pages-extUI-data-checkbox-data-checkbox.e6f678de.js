import{_ as l,o as e,c as a,w as t,a as o,b as d,t as u,f as i,r as c,e as s,i as n}from"./index.fb84ef13.js";import{_ as x}from"./uni-card.d5287825.js";import{_ as b}from"./uni-data-checkbox.ec643f4f.js";import{_ as m}from"./uni-section.fac8d8c9.js";import"./uni-load-more.5afad021.js";var f=l({data:()=>({radio1:0,radio2:0,radio3:0,radio4:0,radio5:0,radio6:0,checkbox1:[0],checkbox2:[0],checkbox3:[0],checkbox4:[0],checkbox5:[0],checkbox6:[0],sex:[{text:"男",value:0},{text:"女",value:1},{text:"未知",value:2}],sex1:[{text:"男",value:0},{text:"女",value:1,disable:!0},{text:"未知",value:2}],hobby:[{text:"足球",value:0},{text:"篮球",value:1},{text:"游泳",value:2}],hobby2:[{text:"足球",value:0,disable:!0},{text:"篮球",value:1,disable:!0},{text:"游泳",value:2}]}),onLoad(){},onReady(){},methods:{}},[["render",function(l,f,r,p,_,h){const V=i,k=c(s("uni-card"),x),y=n,g=c(s("uni-data-checkbox"),b),v=c(s("uni-section"),m);return e(),a(y,null,{default:t((()=>[o(k,{"is-full":""},{default:t((()=>[o(V,{class:"uni-h6"},{default:t((()=>[d("通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用")])),_:1})])),_:1}),o(v,{title:"单选",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("单选选中："+u(JSON.stringify(_.radio1)),1)])),_:1}),o(g,{modelValue:_.radio1,"onUpdate:modelValue":f[0]||(f[0]=l=>_.radio1=l),localdata:_.sex},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"多选",subTitle:"使用multiple属性开启多选",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("多选选中："+u(JSON.stringify(_.checkbox1)),1)])),_:1}),o(g,{multiple:"",modelValue:_.checkbox1,"onUpdate:modelValue":f[1]||(f[1]=l=>_.checkbox1=l),localdata:_.hobby},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"最大最小值",subTitle:"使用 min / max 设置多选的最大最小值,单选无效"},{default:t((()=>[o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("选中："+u(JSON.stringify(_.checkbox6)),1)])),_:1}),o(g,{min:"1",max:"2",multiple:"",modelValue:_.checkbox6,"onUpdate:modelValue":f[2]||(f[2]=l=>_.checkbox6=l),localdata:_.hobby},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"更多样式 - button",subTitle:"使用mode=button属性使用按钮样式",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("单选选中："+u(JSON.stringify(_.radio2)),1)])),_:1}),o(g,{mode:"button",modelValue:_.radio2,"onUpdate:modelValue":f[3]||(f[3]=l=>_.radio2=l),localdata:_.sex},null,8,["modelValue","localdata"])])),_:1}),o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("多选选中："+u(JSON.stringify(_.checkbox2)),1)])),_:1}),o(g,{mode:"button",multiple:"",modelValue:_.checkbox2,"onUpdate:modelValue":f[4]||(f[4]=l=>_.checkbox2=l),localdata:_.hobby},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"更多样式 - tag",subTitle:"使用mode=tag属性使用标签样式",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("单选选中："+u(JSON.stringify(_.radio3)),1)])),_:1}),o(g,{mode:"tag",modelValue:_.radio3,"onUpdate:modelValue":f[5]||(f[5]=l=>_.radio3=l),localdata:_.sex},null,8,["modelValue","localdata"])])),_:1}),o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("多选选中："+u(JSON.stringify(_.checkbox3)),1)])),_:1}),o(g,{mode:"tag",multiple:"",modelValue:_.checkbox3,"onUpdate:modelValue":f[6]||(f[6]=l=>_.checkbox3=l),localdata:_.hobby},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"禁用",subTitle:"数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("单选选中："+u(JSON.stringify(_.radio4)),1)])),_:1}),o(g,{mode:"button",modelValue:_.radio4,"onUpdate:modelValue":f[7]||(f[7]=l=>_.radio4=l),localdata:_.sex1},null,8,["modelValue","localdata"])])),_:1}),o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("多选选中："+u(JSON.stringify(_.checkbox4)),1)])),_:1}),o(g,{mode:"button",multiple:"",modelValue:_.checkbox4,"onUpdate:modelValue":f[8]||(f[8]=l=>_.checkbox4=l),localdata:_.hobby2},null,8,["modelValue","localdata"])])),_:1})])),_:1}),o(v,{title:"自定义高亮颜色",subTitle:"使用 selectedColor 属性修改颜色",type:"line"},{default:t((()=>[o(y,{class:"uni-px-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("单选选中："+u(JSON.stringify(_.radio5)),1)])),_:1}),o(g,{selectedColor:"red",modelValue:_.radio5,"onUpdate:modelValue":f[9]||(f[9]=l=>_.radio5=l),localdata:_.sex1},null,8,["modelValue","localdata"])])),_:1}),o(y,{class:"uni-px-5 uni-pb-5"},{default:t((()=>[o(y,{class:"text"},{default:t((()=>[d("多选选中："+u(JSON.stringify(_.checkbox5)),1)])),_:1}),o(g,{selectedColor:"red",multiple:"",modelValue:_.checkbox5,"onUpdate:modelValue":f[10]||(f[10]=l=>_.checkbox5=l),localdata:_.hobby2},null,8,["modelValue","localdata"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1ce33166"]]);export{f as default};
