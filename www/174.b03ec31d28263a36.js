"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[174],{5652:(p,l,o)=>{o.r(l),o.d(l,{TabsPageModule:()=>h});var s=o(7609),g=o(6895),r=o(4719),d=o(8564),t=o(6738),b=o(1589);const c=[{path:"",component:(()=>{class n{constructor(a,e){this.router=a,this.votes=e,this.actionPending=!1}isTab1(){return!!this.router.url.includes("tab1")}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(d.F0),t.Y36(b.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabs"]],decls:23,vars:4,consts:[[1,"center"],["id","progress"],["id","progress-icon"],["name","walk"],["id","finish-icon"],["name","flag"],["id","greenbar"],["id","whitebar"],["slot","bottom"],["tab","tab1",3,"disabled"],["name","play"],["tab","tab2",3,"disabled"],["name","map"],["tab","tab3",3,"disabled"],["name","help"]],template:function(a,e){1&a&&(t.TgZ(0,"ion-tabs")(1,"div",0)(2,"span",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._UZ(5,"ion-icon",3),t.qZA(),t.TgZ(6,"span",4),t._UZ(7,"ion-icon",5),t.qZA(),t._UZ(8,"div",6)(9,"div",7),t.qZA(),t.TgZ(10,"ion-tab-bar",8)(11,"ion-tab-button",9),t._UZ(12,"ion-icon",10),t.TgZ(13,"ion-label"),t._uU(14,"Play"),t.qZA()(),t.TgZ(15,"ion-tab-button",11),t._UZ(16,"ion-icon",12),t.TgZ(17,"ion-label"),t._uU(18,"Map / Polls"),t.qZA()(),t.TgZ(19,"ion-tab-button",13),t._UZ(20,"ion-icon",14),t.TgZ(21,"ion-label"),t._uU(22,"Help"),t.qZA()()()()),2&a&&(t.xp6(3),t.Oqu(e.votes.progressMessage),t.xp6(8),t.Q6J("disabled",e.votes.actionPending||e.isTab1()),t.xp6(4),t.Q6J("disabled",e.votes.actionPending),t.xp6(4),t.Q6J("disabled",e.votes.actionPending))},dependencies:[s.gu,s.Q$,s.yq,s.ZU,s.UN],styles:["#greenbar[_ngcontent-%COMP%]{height:12px;overflow:visible;color:#000;width:4.25%;background-image:linear-gradient(to left,rgb(255,255,255),#38ff80)}#progress[_ngcontent-%COMP%]{position:fixed;bottom:50px;left:37%;color:#000;font-size:10px}#progress-icon[_ngcontent-%COMP%]{position:fixed;bottom:45px;left:0%;color:#000;font-size:32px}#finish-icon[_ngcontent-%COMP%]{position:fixed;bottom:56px;right:2%;color:#000;font-size:24px}#whitebar[_ngcontent-%COMP%]{height:12px;width:99%;fill:#fff;background-color:#fff}.center[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),n})(),children:[{path:"tab1",loadChildren:()=>Promise.all([o.e(8592),o.e(5775)]).then(o.bind(o,5775)).then(n=>n.Tab1PageModule)},{path:"tab2",loadChildren:()=>Promise.all([o.e(8592),o.e(9196)]).then(o.bind(o,9196)).then(n=>n.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([o.e(8592),o.e(3805)]).then(o.bind(o,3805)).then(n=>n.Tab3PageModule)},{path:"**",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let f=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(c)]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Pc,g.ez,r.u5,f]}),n})()}}]);