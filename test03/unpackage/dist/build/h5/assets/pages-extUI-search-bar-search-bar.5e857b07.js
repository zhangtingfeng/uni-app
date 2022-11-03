import{bc as e,_ as a,L as l,r as n,e as c,o,c as t,w as r,a as s,aX as i,b as u,t as h,m as d,z as f,i as m,I as p,f as b,s as y}from"./index.fb84ef13.js";import{_ as C}from"./uni-card.d5287825.js";import{_}from"./uni-icons.3ce326c8.js";import{_ as V}from"./uni-section.fac8d8c9.js";var x={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}};const{t:w}=e(x);var B=a({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||w("uni-search-bar.cancel")},placeholderText(){return this.placeholder||w("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,l())},confirm(){l(),this.$emit("confirm",{value:this.searchVal})},blur(){l(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,l,y,C,V){const x=n(c("uni-icons"),_),w=m,B=p,g=b;return o(),t(w,{class:"uni-searchbar"},{default:r((()=>[s(w,{style:f({borderRadius:l.radius+"px",backgroundColor:l.bgColor}),class:"uni-searchbar__box",onClick:V.searchClick},{default:r((()=>[s(w,{class:"uni-searchbar__box-icon-search"},{default:r((()=>[i(e.$slots,"searchIcon",{},(()=>[s(x,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),C.show||C.searchVal?(o(),t(B,{key:0,focus:C.showSync,disabled:l.readonly,placeholder:V.placeholderText,maxlength:l.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:C.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>C.searchVal=e),onConfirm:V.confirm,onBlur:V.blur,onFocus:V.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(o(),t(g,{key:1,class:"uni-searchbar__text-placeholder"},{default:r((()=>[u(h(l.placeholder),1)])),_:1})),C.show&&("always"===l.clearButton||"auto"===l.clearButton&&""!==C.searchVal)&&!l.readonly?(o(),t(w,{key:2,class:"uni-searchbar__box-icon-clear",onClick:V.clear},{default:r((()=>[i(e.$slots,"clearIcon",{},(()=>[s(x,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):d("",!0)])),_:3},8,["style","onClick"]),"always"===l.cancelButton||C.show&&"auto"===l.cancelButton?(o(),t(g,{key:0,onClick:V.cancel,class:"uni-searchbar__cancel"},{default:r((()=>[u(h(V.cancelTextI18n),1)])),_:1},8,["onClick"])):d("",!0)])),_:3})}],["__scopeId","data-v-6b860158"]]);var g=a({data:()=>({searchValue:"123123"}),methods:{search(e){y({title:"搜索："+e.value,icon:"none"})},input(e){console.log("----input:",e)},clear(e){y({title:"clear事件，清除值为："+e.value,icon:"none"})},blur(e){y({title:"blur事件，输入值为："+e.value,icon:"none"})},focus(e){y({title:"focus事件，输出值为："+e.value,icon:"none"})},cancel(e){y({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress(){}},[["render",function(e,a,l,i,d,f){const p=b,y=n(c("uni-card"),C),x=n(c("uni-search-bar"),B),w=m,g=n(c("uni-section"),V),k=n(c("uni-icons"),_);return o(),t(w,null,{default:r((()=>[s(y,{"is-shadow":!1,"is-full":""},{default:r((()=>[s(p,{class:"uni-h6"},{default:r((()=>[u("搜索栏组件，通常用于搜索商品、文章等。")])),_:1})])),_:1}),s(g,{title:"基本用法",type:"line"},{default:r((()=>[s(x,{onConfirm:f.search,focus:!0,modelValue:d.searchValue,"onUpdate:modelValue":a[0]||(a[0]=e=>d.searchValue=e),onBlur:f.blur,onFocus:f.focus,onInput:f.input,onCancel:f.cancel,onClear:f.clear},null,8,["onConfirm","modelValue","onBlur","onFocus","onInput","onCancel","onClear"]),s(w,{class:"search-result"},{default:r((()=>[s(p,{class:"search-result-text"},{default:r((()=>[u("当前输入为："+h(d.searchValue),1)])),_:1})])),_:1})])),_:1}),s(g,{title:"自定义样式",subTitle:"使用 bgColor 属性自定义背景色",type:"line"},{default:r((()=>[s(x,{placeholder:"自定义背景色",bgColor:"#EEEEEE",onConfirm:f.search},null,8,["onConfirm"])])),_:1}),s(g,{title:"只读样式",subTitle:"使用 readonly 使搜索框只读",type:"line"},{default:r((()=>[s(x,{readonly:"",placeholder:"自定义背景色",onConfirm:f.search},null,8,["onConfirm"])])),_:1}),s(g,{title:"自定义icon",type:"line"},{default:r((()=>[s(x,{placeholder:"自定义searchIcon",onConfirm:f.search,onCancel:f.cancel,"cancel-text":"cancel"},{default:r((()=>[s(k,{slot:"searchIcon",color:"#999999",size:"18",type:"home"})])),_:1},8,["onConfirm","onCancel"])])),_:1}),s(g,{title:"控制清除/取消按钮",subTitle:"使用 clearButton 属性设置清除按钮",type:"line"},{default:r((()=>[s(x,{radius:"5",placeholder:"一直显示",clearButton:"always",cancelButton:"always",onConfirm:f.search,onCancel:f.cancel},null,8,["onConfirm","onCancel"]),s(x,{class:"uni-mt-10",radius:"5",placeholder:"自动显示隐藏",clearButton:"auto",cancelButton:"none",onConfirm:f.search},null,8,["onConfirm"]),s(x,{class:"uni-mt-10",radius:"100",placeholder:"一直不显示",clearButton:"none",cancelButton:"none",onConfirm:f.search},null,8,["onConfirm"])])),_:1})])),_:1})}],["__scopeId","data-v-6d98cea4"]]);export{g as default};
