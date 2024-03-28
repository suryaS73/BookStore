"use strict";(self.webpackChunkbookStoreApp=self.webpackChunkbookStoreApp||[]).push([[711],{2711:(y,l,s)=>{s.r(l),s.d(l,{BooksModule:()=>b});var u=s(6814),i=s(3758);class p{set author(c){this._author=c}get author(){return"Author :"+this._author}}var t=s(5879);let m=(()=>{class o{constructor(){}getBooks(){return[{id:1,title:"Angular Fundamentals",totalPages:500,author:"Ram Singh",price:{currency:"INR",value:200}},{id:2,title:"Java Fundamentals",totalPages:700,author:"James",price:{currency:"USD",value:500}},{id:3,title:"ReactJs Fundamentals",totalPages:600,author:"Smith",price:{currency:"INR",value:300}},{id:4,title:"Spring boot Fundamentals",totalPages:500,author:"James",price:{currency:"INR",value:800}},{id:5,title:"Spring boot Fundamentals",totalPages:500,author:"James",price:{currency:"INR",value:800}},{id:6,title:"Spring boot Fundamentals",totalPages:500,author:"James",price:{currency:"INR",value:800}},{id:7,title:"Spring boot Fundamentals",totalPages:500,author:"James",price:{currency:"INR",value:800}}]}static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var h=s(1555),d=s(2296),r=s(5195);function g(o,c){if(1&o&&(t.TgZ(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA()(),t._UZ(4,"img",3),t.TgZ(5,"mat-card-content")(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"mat-card-actions")(13,"button",4),t._uU(14,"Details"),t.qZA(),t.TgZ(15,"button",4),t._uU(16,"SHARE"),t.qZA()()()),2&o){const a=c.$implicit;t.xp6(3),t.Oqu(a.title),t.xp6(4),t.hij(" ",a.author," "),t.xp6(2),t.hij(" Total Pages : ",a.totalPages," "),t.xp6(2),t.hij("price : ",a.price.value+" "+a.price.currency,"")}}const f=[{path:"",component:(()=>{class o{constructor(a,e){this.bookService=a,this.counterService=e,this.books=[]}ngOnInit(){this.bookService.getBooks().forEach(e=>{var n=new p;n.id=e.id,n.author=e.author,n.price=e.price,n.title=e.title,n.totalPages=e.totalPages,this.books.push(n)})}increaseCounter(){this.counterService.incCounter()}decreaseCounter(){this.counterService.decCounter()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(m),t.Y36(h.Q))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-books"]],decls:2,vars:1,consts:[[1,"container"],["class","book-card",4,"ngFor","ngForOf"],[1,"book-card"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"],["mat-button",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,g,17,4,"mat-card",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.books))},dependencies:[u.sg,d.lW,r.a8,r.hq,r.dn,r.dk,r.G2,r.n5],styles:[".book-card[_ngcontent-%COMP%]{max-width:400px;margin:5px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 400px}"]})}return o})()},{path:":id",component:(()=>{class o{constructor(a){this.route=a,this.id=0}ngOnInit(){this.route.params.subscribe(a=>{this.id=a.id})}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(i.gz))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-details"]],decls:3,vars:1,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"book-details works!"),t.qZA(),t._uU(2)),2&e&&(t.xp6(2),t.hij("\n",n.id,"\n"))}})}return o})()}];let k=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(f),i.Bz]})}return o})();var v=s(6208);let b=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[u.ez,i.Bz,k,v.m]})}return o})()}}]);