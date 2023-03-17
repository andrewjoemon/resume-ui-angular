"use strict";(self.webpackChunkresume_ui=self.webpackChunkresume_ui||[]).push([[738],{5738:(j,v,i)=>{i.r(v),i.d(v,{FormModule:()=>p});var m=i(6895),u=i(7932),e=i(4650),b=i(8729),l=i(433);function A(n,t){1&n&&(e.TgZ(0,"div",11),e._uU(1," Enter minimum 5 characters "),e.qZA())}function y(n,t){1&n&&(e.TgZ(0,"div",11),e._uU(1," Please enter something "),e.qZA())}function q(n,t){if(1&n&&(e.TgZ(0,"h1",12),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.successMessage)}}class f{constructor(t){this.formService=t,this.successMessage="No Form Added",this.form={ftype:"",photo:"",dateofbirth:new Date,rating:0}}addForm(t){this.formService.addForms(this.form).subscribe(o=>{this.successMessage="Form Added Successfully",t.resetForm({ftype:"",photo:"",dateofbirth:new Date,rating:0})})}}f.\u0275fac=function(t){return new(t||f)(e.Y36(b.s))},f.\u0275cmp=e.Xpm({type:f,selectors:[["ajui-create-resume"]],decls:22,vars:18,consts:[[3,"ngSubmit"],["form360","ngForm"],[1,"form-group"],["email","","pattern","[a-z]*[1-10]@[a-z]*.com","required","","minlength","5","maxlength","20","type","text","name","ftype","placeholder","form type",1,"form-control",3,"ngModel","ngModelChange"],["formamenities","ngModel"],["class","alert alert-danger",4,"ngIf"],["required","","type","text","name","photo","placeholder","photo (provide link)",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","datetime","name","dateofbirth","placeholder","date of birth",1,"form-control",3,"ngModel","ngModelChange"],["required","","min","1","max","5","type","number","name","rating","placeholder","rating",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","alert alert-success",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-success"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){e.CHM(r);const a=e.MAs(1);return e.KtG(o.addForm(a))}),e.TgZ(2,"div",2)(3,"input",3,4),e.NdJ("ngModelChange",function(a){return o.form.ftype=a}),e.qZA(),e.YNc(5,A,2,0,"div",5),e.YNc(6,y,2,0,"div",5),e.TgZ(7,"div"),e._uU(8),e.ALo(9,"json"),e.qZA()(),e.TgZ(10,"div",2)(11,"input",6),e.NdJ("ngModelChange",function(a){return o.form.photo=a}),e.qZA()(),e.TgZ(12,"div",2)(13,"input",7),e.NdJ("ngModelChange",function(a){return o.form.dateofbirth=a}),e.qZA()(),e.TgZ(14,"div",2)(15,"input",8),e.NdJ("ngModelChange",function(a){return o.form.rating=a}),e.qZA()(),e.TgZ(16,"div",2)(17,"button",9),e._uU(18,"Submit"),e.qZA()()(),e._uU(19),e.ALo(20,"json"),e.YNc(21,q,2,1,"h1",10)}if(2&t){const r=e.MAs(1),s=e.MAs(4);e.xp6(3),e.Q6J("ngModel",o.form.ftype),e.xp6(2),e.Q6J("ngIf",null==s.errors?null:s.errors.minlength),e.xp6(1),e.Q6J("ngIf",s.dirty&&(null==s.errors?null:s.errors.required)),e.xp6(2),e.hij(" ",e.lcZ(9,14,s.errors)," "),e.xp6(3),e.Q6J("ngModel",o.form.photo),e.xp6(2),e.Q6J("ngModel",o.form.dateofbirth),e.xp6(2),e.Q6J("ngModel",o.form.rating),e.xp6(2),e.Q6J("disabled",r.invalid),e.xp6(2),e.xDo("\n",r.pristine,"\n",r.dirty,"\n",r.valid,"\n",r.invalid,"\n",e.lcZ(20,16,r.value),"\n"),e.xp6(2),e.Q6J("ngIf","No Form Added"!==o.successMessage)}},dependencies:[m.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.wO,l.nD,l.c5,l.on,l.qQ,l.Fd,l.On,l.F,m.Ts],styles:["form[_ngcontent-%COMP%]{margin-top:80px}"]});var Z=i(6313),c=i(529),C=i(91),x=i(7579),M=i(262),U=i(9646),T=i(4004);const S=function(n){return["/form",n]};function J(n,t){if(1&n){const o=e.EpF();e.TgZ(0,"tr",1)(1,"td"),e._uU(2),e.ALo(3,"percent"),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"titlecase"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"number"),e.qZA(),e.TgZ(17,"td")(18,"button",2),e.NdJ("click",function(){const a=e.CHM(o).$implicit,Q=e.oxw();return e.KtG(Q.selectForm(a))}),e._uU(19,"selectt"),e.qZA()(),e.TgZ(20,"td")(21,"button",3),e._uU(22,"Submit this "),e.qZA()()()}if(2&n){const o=t.$implicit,r=t.even,s=t.index;e.Q6J("ngClass",r?"even":"odd"),e.xp6(2),e.Oqu(e.lcZ(3,8,s)),e.xp6(3),e.Oqu(o.formNumber),e.xp6(2),e.Oqu(r?"even":"odd"),e.xp6(2),e.Oqu(e.lcZ(10,10,o.ftype)),e.xp6(3),e.Oqu(e.lcZ(13,12,o.dateofbirth)),e.xp6(3),e.Oqu(e.Dn7(16,14,o.rating,"1.1-2","en-us")),e.xp6(6),e.Q6J("routerLink",e.VKq(18,S,o.formNumber))}}class h{constructor(){this.forms=[],this.title=" ",this.selectedFormEvent=new e.vpe}ngOnDestroy(){console.log("on destroy is called")}ngOnChanges(t){console.log(t),t.title&&(this.title=t.title.currentValue.toUpperCase())}ngOnInit(){}selectForm(t){this.selectedFormEvent.emit(t)}}function O(n,t){if(1&n){const o=e.EpF();e.TgZ(0,"div",1),e._uU(1," default forms "),e.TgZ(2,"ajui-form-list",2),e.NdJ("selectedFormEvent",function(s){e.CHM(o);const a=e.oxw();return e.KtG(a.selectForm(s))}),e.qZA(),e.TgZ(3,"div")(4,"button",3),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.addForm())}),e._uU(5,"Add Form"),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.editForm())}),e._uU(7,"Edit Form"),e.qZA(),e.TgZ(8,"button",3),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.deleteForm())}),e._uU(9,"Delete Form"),e.qZA(),e.TgZ(10,"h1"),e._uU(11),e.qZA(),e.TgZ(12,"button",4),e._uU(13,"Stop Form"),e.qZA()()()}if(2&n){const o=t.ngIf,r=e.oxw();e.xp6(2),e.Q6J("forms",o)("title","Forms Here"),e.xp6(9),e.hij(" ",r.totalBytes," loaded ")}}h.\u0275fac=function(t){return new(t||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["ajui-form-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(Z.S,5),2&t){let r;e.iGM(r=e.CRH())&&(o.navbarComponent=r.first)}},inputs:{forms:"forms",title:"title"},outputs:{selectedFormEvent:"selectedFormEvent"},features:[e.TTD],decls:20,vars:2,consts:[[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e._UZ(2,"div"),e.TgZ(3,"table")(4,"tr")(5,"th"),e._uU(6,"Index"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"FormNumber"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Even/Odd"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Ftype"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Date-of-Both"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Rating"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Select "),e.qZA()(),e.YNc(19,J,23,20,"tr",0),e.qZA()),2&t&&(e.xp6(1),e.Oqu(o.title),e.xp6(18),e.Q6J("ngForOf",o.forms))},dependencies:[m.mk,m.sg,u.rH,m.JJ,m.Zx,m.rS,m.uU],changeDetection:0});class g{constructor(t,o,r){this.formService=o,this.dialog=r,this.showit1=!0,this.fl=[],this.fn="hanz zimmer",this.ln="Default",this.totalBytes=0,this.error$=new x.x,this.getError$=this.error$.asObservable(),this.forms$=this.formService.getForms$.pipe((0,M.K)(s=>(console.log(s),this.error$.next(s.message),(0,U.of)([])))),this.formsCount$=this.formService.getForms$.pipe((0,T.U)(s=>s.length)),this.fn=t.name}ngOnInit(){this.formService.getPhotos().subscribe(t=>{switch(t.type){case c.dt.Sent:console.log("Request has been sent");break;case c.dt.DownloadProgress:this.totalBytes+=t.loaded;break;case c.dt.ResponseHeader:console.log("Request has been made successfully");break;case c.dt.Response:console.log(t.body)}})}pfn(){this.ln=this.fn}selectForm(t){this.selform=t}addForm(){const t={formNumber:"4",ftype:"unique",photo:"https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",dateofbirth:new Date("15-Dec-2003"),rating:3.445};this.formService.addForms(t).subscribe(o=>this.fl=o)}editForm(){const t={ftype:"uniqueness",photo:"https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",dateofbirth:new Date("12-May-2005"),rating:1.776};this.formService.editForms(this.selform,t).subscribe(o=>this.fl=o)}deleteForm(){this.formService.deleteForms(this.selform).subscribe(t=>this.fl=t)}stopForm(){}}g.\u0275fac=function(t){return new(t||g)(e.Y36(C.WI),e.Y36(b.s),e.Y36(C.uw))},g.\u0275cmp=e.Xpm({type:g,selectors:[["ajui-popup"]],inputs:{showit1:"showit1"},decls:8,vars:9,consts:[["mat-dialog-actions","",4,"ngIf"],["mat-dialog-actions",""],[3,"forms","title","selectedFormEvent"],[3,"click"],["mat-button","","mat-dialog-close",""]],template:function(t,o){1&t&&(e.YNc(0,O,14,3,"div",0),e.ALo(1,"async"),e.TgZ(2,"h1"),e._uU(3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"h1"),e._uU(6),e.ALo(7,"async"),e.qZA()),2&t&&(e.Q6J("ngIf",e.lcZ(1,3,o.forms$)),e.xp6(3),e.Oqu(e.lcZ(4,5,o.getError$)),e.xp6(3),e.hij("Number of Forms : ",e.lcZ(7,7,o.formsCount$),""))},dependencies:[m.O5,h,m.Ov]});var w=i(9751);function N(n,t){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"json"),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,o.selectedForm),"\n")}}const R=function(n){return{"background-color":n}};class _{constructor(t,o){this.formService=t,this.dialogref=o,this.NumberOfTemplates=3,this.frm="Start Form",this.showit=!1,this.formstart="Show Form",this.stream=new w.y(r=>{r.next("user1"),r.next("user2"),r.next("user3"),r.complete(),r.error("error found")}),this.fm={name:"ikka",age:24},this.flist=[],this.totalBytes=0}toggle(){this.dialogref.open(g,{data:{name:"JK"}})}ngAfterViewInit(){console.log(this.navbarComponent),this.navbarChildren.last.title="Last Title of Instance"}ngAfterViewChecked(){this.navbarComponent.title="Forms Done"}ngDoCheck(){console.log("on changes has worked")}ngOnInit(){console.log(this.navbarComponent),this.stream.subscribe({next:t=>console.log(t),complete:()=>console.log("completed"),error:t=>console.log(t)}),this.stream.subscribe(t=>console.log(t)),this.formService.getForms$.subscribe(t=>{this.flist=t}),this.formService.getPhotos().subscribe(t=>{switch(t.type){case c.dt.Sent:console.log("Request has been sent");break;case c.dt.DownloadProgress:this.totalBytes+=t.loaded;break;case c.dt.ResponseHeader:console.log("Request has been made successfully");break;case c.dt.Response:console.log(t.body)}})}selectForm(t){this.selectedForm=t}addForm(){const t={ftype:"uniqueness",photo:"https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",dateofbirth:new Date("15-Dec-2003"),rating:3.665};this.formService.addForms(t).subscribe(o=>this.flist=o)}editForm(){new Date("12-May-2005")}}_.\u0275fac=function(t){return new(t||_)(e.Y36(b.s),e.Y36(C.uw))},_.\u0275cmp=e.Xpm({type:_,selectors:[["ajui-form"]],viewQuery:function(t,o){if(1&t&&(e.Gf(Z.S,5),e.Gf(Z.S,5)),2&t){let r;e.iGM(r=e.CRH())&&(o.navbarComponent=r.first),e.iGM(r=e.CRH())&&(o.navbarChildren=r)}},decls:13,vars:9,consts:[[3,"hidden"],[3,"ngStyle","innerText"],[3,"click"],[4,"ngIf"],["routerLink","create-resume"]],template:function(t,o){if(1&t&&(e._UZ(0,"ajui-navbar"),e.TgZ(1,"div",0)(2,"h1"),e._uU(3),e.qZA(),e._uU(4," Number of Templates: "),e._UZ(5,"div",1),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return o.toggle()}),e._uU(7),e.qZA(),e._uU(8),e.YNc(9,N,3,3,"div",3),e.TgZ(10,"button",4),e._uU(11,"create resume"),e.qZA(),e._UZ(12,"router-outlet")),2&t){let r;e.xp6(1),e.Q6J("hidden",o.showit),e.xp6(2),e.Oqu(o.frm),e.xp6(2),e.Q6J("ngStyle",e.VKq(7,R,o.fm.age?"red":"steelblue"))("innerText",o.NumberOfTemplates),e.xp6(2),e.Oqu(o.formstart),e.xp6(1),e.hij("\n",null!==(r=null==o.fm?null:o.fm.age)&&void 0!==r?r:"no form","\n"),e.xp6(1),e.Q6J("ngIf",o.selectedForm)}},dependencies:[m.O5,m.PC,u.lC,u.rH,Z.S,m.Ts]});class F{constructor(t){this.router=t,this.id=0,this.id$=this.router.paramMap.pipe((0,T.U)(o=>o.get("id")))}ngOnInit(){}}F.\u0275fac=function(t){return new(t||F)(e.Y36(u.gz))},F.\u0275cmp=e.Xpm({type:F,selectors:[["ajui-submitform"]],decls:3,vars:3,template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.hij("FORM SUBMITTED FOR ",e.lcZ(2,1,o.id$)," "))},dependencies:[m.Ov],styles:["h1[_ngcontent-%COMP%]{margin:50px}"]});const D=[{component:_,path:"",children:[{path:"create-resume",component:f},{path:":id",component:F}]}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[u.Bz.forChild(D),u.Bz]});var L=i(2775);class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[m.ez,d,l.u5,L.W]})}}]);