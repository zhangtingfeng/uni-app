import{_ as e,s as l,o as a,c as t,w as o,a as u,b as n,t as d,f as i,r as s,e as p,i as c}from"./index.fb84ef13.js";import{_ as r}from"./uni-card.d5287825.js";import{_ as m}from"./uni-easyinput.8ce57c86.js";import{_ as f}from"./uni-section.fac8d8c9.js";import"./uni-icons.3ce326c8.js";var y=e({data:()=>({value:"",password:"",placeholderStyle:"color:#2979FF;font-size:14px",styles:{color:"#2979FF",borderColor:"#2979FF"}}),onLoad(){},onReady(){},methods:{input(e){console.log("输入内容：",e)},iconClick(e){l({title:`点击了${"prefix"===e?"左侧":"右侧"}的图标`,icon:"none"})}}},[["render",function(e,l,y,V,h,v){const _=i,b=s(p("uni-card"),r),I=s(p("uni-easyinput"),m),g=s(p("uni-section"),f),x=c;return a(),t(x,null,{default:o((()=>[u(b,{"is-shadow":!1,"is-full":""},{default:o((()=>[u(_,{class:"uni-h6"},{default:o((()=>[n("easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能")])),_:1})])),_:1}),u(g,{title:"默认",subTitle:"使用 focus 属性自动获取输入框焦点",type:"line",padding:""},{default:o((()=>[u(I,{errorMessage:"",modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),focus:"",placeholder:"请输入内容",onInput:v.input},null,8,["modelValue","onInput"])])),_:1}),u(g,{title:"去除空格",subTitle:"使用 trim 属性 ,可以控制返回内容的空格 ",type:"line",padding:""},{default:o((()=>[u(_,{class:"uni-subtitle"},{default:o((()=>[n("输入内容："+d('"'+h.value+'"'),1)])),_:1}),u(I,{class:"uni-mt-5",trim:"all",modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value=e),placeholder:"请输入内容",onInput:v.input},null,8,["modelValue","onInput"])])),_:1}),u(g,{title:"自定义样式",subTitle:"使用 styles 属性 ,可以自定义输入框样式",type:"line",padding:""},{default:o((()=>[u(I,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value=e),styles:h.styles,placeholderStyle:h.placeholderStyle,placeholder:"请输入内容",onInput:v.input},null,8,["modelValue","styles","placeholderStyle","onInput"])])),_:1}),u(g,{title:"图标",subTitle:"使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标",type:"line",padding:""},{default:o((()=>[u(I,{prefixIcon:"search",modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),placeholder:"左侧图标",onIconClick:v.iconClick},null,8,["modelValue","onIconClick"]),u(I,{class:"uni-mt-5",suffixIcon:"search",modelValue:h.value,"onUpdate:modelValue":l[4]||(l[4]=e=>h.value=e),placeholder:"右侧图标",onIconClick:v.iconClick},null,8,["modelValue","onIconClick"])])),_:1}),u(g,{title:"禁用",subTitle:"使用 disabled 属性禁用输入框",type:"line",padding:""},{default:o((()=>[u(I,{disabled:"",value:"已禁用",placeholder:"请输入内容"})])),_:1}),u(g,{title:"密码框",subTitle:"指定属性 type=password 使用密码框,右侧会显示眼睛图标",type:"line",padding:""},{default:o((()=>[u(I,{type:"password",modelValue:h.password,"onUpdate:modelValue":l[5]||(l[5]=e=>h.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),u(g,{title:"多行文本",subTitle:"指定属性 type=textarea 使用多行文本框",type:"line",padding:""},{default:o((()=>[u(I,{type:"textarea",modelValue:h.value,"onUpdate:modelValue":l[6]||(l[6]=e=>h.value=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),u(g,{title:"多行文本自动高度",subTitle:"使用属性 autoHeight 使多行文本框自动增高",type:"line",padding:""},{default:o((()=>[u(I,{type:"textarea",autoHeight:"",modelValue:h.value,"onUpdate:modelValue":l[7]||(l[7]=e=>h.value=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1})])),_:1})}],["__scopeId","data-v-72f7abaa"]]);export{y as default};
