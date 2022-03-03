(self.webpackChunk=self.webpackChunk||[]).push([[462],{600:(t,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>_});var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"chapter-player"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.translationPopup,expression:"translationPopup"},{name:"click-outside",rawName:"v-click-outside",value:t.hideTranslation,expression:"hideTranslation"}],ref:"translationPopup",staticClass:"chapter-player__translation-popup translation-popup",on:{click:function(t){t.stopPropagation()}}},[t.translationText?[a("div",{staticClass:"translation-popup__head"},[a("div",{staticClass:"translation-popup__base-word"},[t._v("\n          "+t._s(t.translationText.base)+"\n        ")]),t._v(" "),a("button",{staticClass:"translation-popup__btn",on:{click:function(n){return t.synthesizeVoice(t.translationText.base)}}},[a("svg",{attrs:{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M19.5 11.5256C19.5 8.99489 18.2 6.82209 15.86 5.77403V17.2515C18.2 16.229 19.5 14.0562 19.5 11.5256ZM0 7.17996V15.8712H5.798L13 22.9519V0.0991821L5.798 7.17996H0Z",fill:"#5BD4D4"}})])]),t._v(" "),a("button",{staticClass:"translation-popup__btn"},[a("svg",{attrs:{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M22.9765 8.36383C22.9286 8.19608 22.737 8.02832 22.5693 8.00436L15.238 6.92593L11.9557 0.287582C11.8838 0.0958606 11.7161 0 11.5005 0C11.2849 0 11.1172 0.0958606 11.0453 0.287582L7.76301 6.92593L0.431757 8.02832C0.264049 8.05229 0.072382 8.17211 0.0244653 8.36383C-0.0234513 8.53159 0.0244654 8.74728 0.144257 8.89107L5.46301 14.0675L4.21717 21.3769C4.19322 21.5926 4.26509 21.7603 4.4328 21.8802C4.57655 21.976 4.79217 22 4.95988 21.9281L11.5005 18.4771L18.0411 21.9281C18.113 21.976 18.1849 21.976 18.2807 21.976C18.3765 21.976 18.4963 21.9521 18.5922 21.8802C18.7359 21.7843 18.8318 21.5686 18.8078 21.3769L17.562 14.0915L22.8568 8.91503C22.9765 8.74728 23.0245 8.57952 22.9765 8.36383ZM16.6515 13.5403C16.5318 13.6601 16.4838 13.8279 16.5078 13.9956L17.6338 20.5381L11.7401 17.4466C11.5963 17.3747 11.4047 17.3747 11.2609 17.4466L5.36717 20.5381L6.49322 13.9956C6.51717 13.8519 6.46926 13.6601 6.34947 13.5403L1.60572 8.8671L8.1703 7.93246C8.33801 7.9085 8.48176 7.81264 8.55363 7.64488L11.5005 1.67756L14.4474 7.64488C14.5193 7.78867 14.687 7.9085 14.8307 7.93246L21.3953 8.8671L16.6515 13.5403Z",fill:"#5BD4D4"}})])])]),t._v(" "),t.translationText.transcription?a("div",{staticClass:"translation-popup__transcription"},[t._v("\n        "+t._s(t.translationText.transcription)+"\n      ")]):t._e(),t._v(" "),t.translationText.translationWords?t._l(t.translationText.translationWords,(function(n){return a("div",{key:n,staticClass:"translation-popup__translation"},[t._v("\n          "+t._s(n)+"\n        ")])})):t._e()]:t._e()],2),t._v(" "),a("div",{staticClass:"chapter-player__subs"},[a("div",{staticClass:"chapter-player__subs-wrap"},t._l(t.subs_en,(function(n){return a("span",{key:n,class:/^\|(.*)$/g.test(n)?"chapter-player__new-word":null,on:{click:t.showTranslation}},[t._v("\n        "+t._s(n.replace(/[\[\]\|]+/g,"")))])})),0),t._v(" "),a("button",{staticClass:"chapter-player__bookmark"},[a("svg",{attrs:{width:"26",height:"31",viewBox:"0 0 26 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 0V31.9667L13 18.7333L26 32V0H0Z",fill:"#00BFA5"}})])])]),t._v(" "),a("div",{staticClass:"chapter-player__translation",style:{opacity:t.translation?1:0}},[t._v("\n    "+t._s(t.subs_ru)+"\n  ")]),t._v(" "),a("Player",{staticClass:"chapter-player__player",attrs:{data:t.data},on:{ruSubsChange:function(n){t.subs_ru=n},enSubsChange:function(n){t.subs_en=n},translationChange:function(n){t.translation=n}}})],1)};s._withStripped=!0;var e=a(913),i=a(559),o=a.n(i),r=a(77),l=a(982),p=a.n(l),c=a(508);const u=e.default.extend({props:{data:{type:Object,required:!0}},directives:{ClickOutside:p()},components:{Player:c.Z},mounted:function(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){return{width:0,height:0,top:n,right:t,bottom:n,left:t}}}var n={getBoundingClientRect:t()},a=this.$refs.translationPopup,s=(0,r.fi)(n,a,{modifiers:[{name:"offset",options:{offset:[0,10]}}]});document.addEventListener("click",(function(a){var e=a.clientX,i=a.clientY;n.getBoundingClientRect=t(e,i),s.update()}))},data:function(){return{translation:!0,subs_ru:"",subs_en:"",translationText:null,translationPopup:!1}},methods:{showTranslation:function(t){var n=this,a=t.target.innerHTML.replace(/[\[\]\|\s\,\,]+/g,"");console.log(a),a.length>1?o().post(window.location.origin+"/english/translation.php",{word:a}).then((function(t){var s=t.data,e=s.match(/\[.*?\]/g),i=s.replace(/\[.*?\]/g,"").split(";");t.data.length?n.translationText={base:a,transcription:e?e[0]:null,translationWords:i}:n.translationText={base:a,transcription:null,translationWords:"Перевод не найден"},n.translationPopup=!0})).catch((function(t){console.log("rest api error",t)})):this.translationPopup=!1},hideTranslation:function(){this.translationPopup=!1},synthesizeVoice:function(t){var n=window.speechSynthesis,a=new SpeechSynthesisUtterance;a.lang="en-US",a.text=t,n.speak(a)}}});var h=(0,a(900).Z)(u,s,[],!1,null,"cb57f294",null);h.options.__file="src/assets/components/chapter/ChapterPlayer.vue";const _=h.exports}}]);