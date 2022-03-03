(self.webpackChunk=self.webpackChunk||[]).push([[389],{389:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>_});var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"new-words"},[e("div",{staticClass:"new-words__wrap"},[e("ul",{staticClass:"new-words__list"},t._l(t.newWords,(function(t){return e("WordItem",{key:t,staticClass:"news-words__word-item",attrs:{word:t}})})),1)])])};n._withStripped=!0;var i=e(913),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"new-words__word-item word-item",style:{display:t.show?"list-item":"none"}},[e("div",{staticClass:"word-item__wrap"},[e("div",{staticClass:"word-item__content"},[e("div",{staticClass:"word-item__base-word"},[t._v(t._s(t.word))]),t._v(" "),e("div",{staticClass:"word-item__translation"},[t._v(t._s(t.translation))])]),t._v(" "),e("button",{staticClass:"word-item__btn",on:{click:function(s){return t.synthesizeVoice(t.word)}}},[e("svg",{attrs:{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.5 11.5256C19.5 8.99489 18.2 6.82209 15.86 5.77403V17.2515C18.2 16.229 19.5 14.0562 19.5 11.5256ZM0 7.17996V15.8712H5.798L13 22.9519V0.0991821L5.798 7.17996H0Z",fill:"#5BD4D4"}})])]),t._v(" "),e("button",{staticClass:"word-item__btn"},[e("svg",{attrs:{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M22.9765 8.36383C22.9286 8.19608 22.737 8.02832 22.5693 8.00436L15.238 6.92593L11.9557 0.287582C11.8838 0.0958606 11.7161 0 11.5005 0C11.2849 0 11.1172 0.0958606 11.0453 0.287582L7.76301 6.92593L0.431757 8.02832C0.264049 8.05229 0.072382 8.17211 0.0244653 8.36383C-0.0234513 8.53159 0.0244654 8.74728 0.144257 8.89107L5.46301 14.0675L4.21717 21.3769C4.19322 21.5926 4.26509 21.7603 4.4328 21.8802C4.57655 21.976 4.79217 22 4.95988 21.9281L11.5005 18.4771L18.0411 21.9281C18.113 21.976 18.1849 21.976 18.2807 21.976C18.3765 21.976 18.4963 21.9521 18.5922 21.8802C18.7359 21.7843 18.8318 21.5686 18.8078 21.3769L17.562 14.0915L22.8568 8.91503C22.9765 8.74728 23.0245 8.57952 22.9765 8.36383ZM16.6515 13.5403C16.5318 13.6601 16.4838 13.8279 16.5078 13.9956L17.6338 20.5381L11.7401 17.4466C11.5963 17.3747 11.4047 17.3747 11.2609 17.4466L5.36717 20.5381L6.49322 13.9956C6.51717 13.8519 6.46926 13.6601 6.34947 13.5403L1.60572 8.8671L8.1703 7.93246C8.33801 7.9085 8.48176 7.81264 8.55363 7.64488L11.5005 1.67756L14.4474 7.64488C14.5193 7.78867 14.687 7.9085 14.8307 7.93246L21.3953 8.8671L16.6515 13.5403Z",fill:"#5BD4D4"}})])])])])};o._withStripped=!0;var r=e(559),a=e.n(r);const l=i.default.extend({props:{word:{type:String,required:!0}},data:function(){return{translation:"",show:!0}},mounted:function(){this.translate(this.word)},methods:{translate:function(t){var s=this;a().post(window.location.origin+"/english/translation.php",{word:t}).then((function(t){s.translation=t.data,t.data.length||(s.show=!1)})).catch((function(t){console.log("rest api error",t),s.show=!1}))},synthesizeVoice:function(t){var s=window.speechSynthesis,e=new SpeechSynthesisUtterance;e.lang="en-US",e.text=t,s.speak(e)}}});var c=e(900),d=(0,c.Z)(l,o,[],!1,null,"127d94a5",null);d.options.__file="src/assets/components/chapter/NewWordItem.vue";const w=d.exports,u=i.default.extend({components:{WordItem:w},props:{data:{type:Object,required:!0}},data:function(){return{en_subs:[]}},created:function(){this.en_subs=this.data.en},mounted:function(){},computed:{newWords:function(){var t=this.en_subs.filter((function(t){return/\|.*?\s/g.test(t.text)})),s=[];return t.forEach((function(t){t.text.split(" ").forEach((function(t){/^\|(.*)$/g.test(t)&&s.push(t.replace(/[\|\,\.]/g,""))}))})),s}}});var h=(0,c.Z)(u,n,[],!1,null,"28db291e",null);h.options.__file="src/assets/components/chapter/NewWords.vue";const _=h.exports}}]);