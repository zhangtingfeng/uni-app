import{_ as a,a4 as i,o as n,c as t,w as s,a as e,r as o,d as l,e as u,l as d,i as h,g as r}from"./index.fb84ef13.js";var g=a({data:()=>({title:"innerAudioContext",isPlaying:!1,isPlayEnd:!1,currentTime:0,duration:100}),computed:{position(){return this.isPlayEnd?0:this.currentTime},playImage(){return this.isPlaying?"/static/pause.png":"/static/play.png"}},onLoad(){this._isChanging=!1,this._audioContext=null,this.createAudio()},onUnload(){null!=this._audioContext&&this.isPlaying&&this.stop()},methods:{createAudio(){var a=this._audioContext=i();return a.autoplay=!1,a.src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",a.onPlay((()=>{console.log("开始播放")})),a.onTimeUpdate((i=>{!0!==this._isChanging&&(this.currentTime=a.currentTime||0,this.duration=a.duration||0)})),a.onEnded((()=>{this.currentTime=0,this.isPlaying=!1,this.isPlayEnd=!0})),a.onError((a=>{this.isPlaying=!1,console.log(a.errMsg),console.log(a.errCode)})),a},onchanging(){this._isChanging=!0},onchange(a){console.log(a.detail.value),console.log(typeof a.detail.value),this._audioContext.seek(a.detail.value),this._isChanging=!1},play(){this.isPlaying?this.pause():(this.isPlaying=!0,this._audioContext.play(),this.isPlayEnd=!1)},pause(){this._audioContext.pause(),this.isPlaying=!1},stop(){this._audioContext.stop(),this.isPlaying=!1}}},[["render",function(a,i,g,c,p,y){const m=o(u("page-head"),l),C=d,_=h,P=r;return n(),t(_,{class:"uni-padding-wrap"},{default:s((()=>[e(m,{title:"audio"}),e(_,{class:"uni-common-mt"},{default:s((()=>[e(C,{value:y.position,min:0,max:p.duration,onChanging:y.onchanging,onChange:y.onchange},null,8,["value","max","onChanging","onChange"])])),_:1}),e(_,{class:"play-button-area"},{default:s((()=>[e(P,{class:"icon-play",src:y.playImage,onClick:y.play},null,8,["src","onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-721d6885"]]);export{g as default};
