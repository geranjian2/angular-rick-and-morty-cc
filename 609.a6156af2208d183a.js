"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[609],{6609:(h,p,i)=>{i.r(p),i.d(p,{DetailEpisodeComponent:()=>f});var r=i(6895),e=i(4650),d=i(2647),c=i(8851);let u=(()=>{class o{constructor(t){this.repository=t}run(t){return this.repository.findOne(t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.R))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=i(9732);function m(o,n){if(1&o&&(e.TgZ(0,"div",4),e._UZ(1,"img",5),e.TgZ(2,"div",6),e._uU(3),e.qZA(),e.TgZ(4,"div",7),e._uU(5),e.qZA(),e._UZ(6,"hr",8),e.TgZ(7,"div",9)(8,"div",10),e._uU(9," Fecha Lanzamiento "),e._UZ(10,"br"),e.TgZ(11,"span",11),e._uU(12),e.ALo(13,"date"),e.qZA()(),e._UZ(14,"div",12),e.TgZ(15,"div",10),e._uU(16," Total Personajes "),e._UZ(17,"br"),e.TgZ(18,"span",13),e._uU(19),e.qZA()()(),e.TgZ(20,"div",14)(21,"div",10),e._uU(22," Creado "),e._UZ(23,"br"),e.TgZ(24,"span",11),e._uU(25),e.ALo(26,"date"),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(3),e.hij(" ",t.episode.name," "),e.xp6(2),e.hij(" ",t.episode.episode," "),e.xp6(7),e.Oqu(e.xi3(13,5,t.episode.air_date,"dd-MM-yyyy")),e.xp6(7),e.Oqu(t.episode.characters.length),e.xp6(6),e.Oqu(e.xi3(26,8,t.episode.created,"dd/MM/yyyy"))}}let f=(()=>{class o{constructor(){this.searchUseCase=(0,e.f3M)(u),this.activatedRoute=(0,e.f3M)(d.gz),this.notification=(0,e.f3M)(l.gq)}ngOnInit(){this.find()}find(){this.activatedRoute.paramMap.subscribe(t=>{let a=t.get("id");this.searchUseCase.run(parseInt(a)).subscribe({next:s=>{this.episode=s},error:s=>{console.log(s),this.notification.show({type:"danger",title:`Error Code: ${s.status}`,text:s})}})})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-detail-episode"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"h-screen","w-full","flex","flex-col","justify-center","items-center"],["class","card w-96 mx-auto bg-white shadow-xl hover:shadow",4,"ngIf"],[1,"mt-5"],["routerLink","/rick-and-morty/episodes","routerLinkActive","bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium",1,"text-gray-600","cursor-pointer","hover:bg-gray-700","hover:text-white","rounded-md","px-3","py-2","text-sm","font-medium"],[1,"card","w-96","mx-auto","bg-white","shadow-xl","hover:shadow"],["src","assets/rick-episode.jpg","alt","",1,"w-32","mx-auto","rounded-full","-mt-20","border-8","border-white"],[1,"text-center","mt-2","text-3xl","font-medium","text-teal-400"],[1,"text-center","font-normal","text-lg"],[1,"mt-8"],[1,"flex","p-4"],[1,"w-1/2","text-center"],[1,"font-bold"],[1,"w-0","border","border-gray-300"],[1,"inline-flex","items-center","rounded-md","px-2","py-1","text-xs","font-medium","ring-1","ring-inset"],[1,"flex","p-4","justify-center","content-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,m,27,11,"div",1),e.TgZ(2,"div",2)(3,"a",3),e._uU(4," Volver "),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.episode))},dependencies:[r.ez,r.O5,r.uU,d.rH,d.Od]}),o})()}}]);