import{_ as e,aS as a,o as s,c as l,w as t,a as c,b as i,t as u,r as n,d as r,e as o,i as d,O as h,a0 as f}from"./index.fb84ef13.js";var m=[["camera"],["album"],["camera","album"]];var p=e({data:()=>({title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}),onUnload(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange(e){for(let a=0;a<this.cameraList.length;a++)if(this.cameraList[a].value===e.detail.value){this.cameraIndex=a;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},chooseVideo:function(){a({camera:this.cameraList[this.cameraIndex].value,sourceType:m[this.sourceTypeIndex],success:e=>{this.src=e.tempFilePath},fail:e=>{}})}}},[["render",function(e,a,m,p,y,T){const _=n(o("page-head"),r),v=d,x=h,I=f;return s(),l(v,null,{default:t((()=>[c(_,{title:y.title},null,8,["title"]),c(v,{class:"uni-common-mt"},{default:t((()=>[c(v,{class:"uni-list"},{default:t((()=>[c(v,{class:"uni-list-cell"},{default:t((()=>[c(v,{class:"uni-list-cell-left"},{default:t((()=>[c(v,{class:"uni-label"},{default:t((()=>[i("视频来源")])),_:1})])),_:1}),c(v,{class:"uni-list-cell-right"},{default:t((()=>[c(x,{range:y.sourceType,onChange:T.sourceTypeChange,value:y.sourceTypeIndex},{default:t((()=>[c(v,{class:"uni-input"},{default:t((()=>[i(u(y.sourceType[y.sourceTypeIndex]),1)])),_:1})])),_:1},8,["range","onChange","value"])])),_:1})])),_:1})])),_:1})])),_:1}),y.src?(s(),l(I,{key:1,src:y.src,class:"video"},null,8,["src"])):(s(),l(v,{key:0,class:"uni-hello-addfile",onClick:T.chooseVideo},{default:t((()=>[i("+ 添加视频")])),_:1},8,["onClick"]))])),_:1})}],["__scopeId","data-v-30d815b1"]]);export{p as default};
