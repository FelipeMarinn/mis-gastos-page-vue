(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],m=0,d=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1fea":function(t,e,a){},4667:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.login&&!t.register?a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"misGastos"}},[a("h1",{attrs:{id:"titulo"}},[t._v("Mis gastos")]),t._m(0),a("div",[a("button",{attrs:{id:"singIn",type:"button",role:"button"},on:{click:function(e){return t.system(e)}}},[t._v(" Sign in ")]),a("button",{attrs:{id:"logOut",type:"button",role:"button"},on:{click:function(e){return t.system(e)}}},[t._v(" Log Out ")])]),a("div",{staticClass:"container bg-color rounded py-3"},[a("span",{class:"pointer "+t.show,attrs:{id:"show"},on:{click:t.controlInput}}),a("form",{directives:[{name:"show",rawName:"v-show",value:t.input,expression:"input"}],staticClass:"w-50 m-auto",attrs:{id:"input"}},[a("div",{staticClass:"form-group row text-left"},[a("label",{staticClass:"col-12 col-sm-4 col-form-label",attrs:{for:"name"}},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nameValue,expression:"nameValue"}],staticClass:"col-12 col-sm-8 form-control",attrs:{type:"text",placeholder:"Nombre del gasto",id:"name"},domProps:{value:t.nameValue},on:{input:function(e){e.target.composing||(t.nameValue=e.target.value)}}})]),a("div",{staticClass:"form-group row text-left"},[a("label",{staticClass:"col-12 col-sm-4 col-form-label",attrs:{for:"monto"}},[t._v("Monto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amountValue,expression:"amountValue"}],class:"col-12 col-sm-8 form-control "+t.valido,attrs:{type:"text",placeholder:"Monto del gasto",id:"monto"},domProps:{value:t.amountValue},on:{input:function(e){e.target.composing||(t.amountValue=e.target.value)}}})]),a("div",{staticClass:"form-group row text-left"},[a("label",{staticClass:"col-12 col-sm-4 col-form-label",attrs:{for:"type"}},[t._v("Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeValue,expression:"typeValue"}],staticClass:"col-12 col-sm-8 form-control",attrs:{type:"text",placeholder:"Tipo de gasto",id:"type"},domProps:{value:t.typeValue},on:{input:function(e){e.target.composing||(t.typeValue=e.target.value)}}})]),a("button",{attrs:{id:"agregar",role:"button"},on:{click:function(e){return e.preventDefault(),t.agregarGasto(e)}}},[t._v("Agragar")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.cancel,expression:"cancel"}]},[a("span",{staticClass:"pointer",attrs:{id:"cancel",role:"button","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Cancel edition"},on:{click:t.cancelEdit}},[t._v("X")])]),a("div",{staticClass:"container mt-5"},[a("ul",{staticClass:"content-tabs row"},[t._l(t.listaTipo,(function(e,s){return a("li",{key:s,staticClass:"item pointer"},[a("a",{staticClass:"item-link",attrs:{id:e.type},on:{click:function(a){return a.preventDefault(),t.selected(a,e.type)}}},[t._v(t._s(e.type))])])})),a("li",{staticClass:"item pointer"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.times,expression:"times"}],staticClass:"fa fa-times",attrs:{id:"delete"},on:{click:t.eliminarFiltro}})])],2)]),a("div",{staticClass:"container mt-2 bg-light rounded"},[t._m(1),t._l(t.listaGastos,(function(e,s){return a("MisGastos",{key:s,attrs:{type:t.type,id:e.id,gasto:e,indice:s},on:{eliminarGasto:function(e){return t.eliminarGasto(e)},editarGasto:function(e){return t.editarGasto(e)}}})})),a("div",{staticClass:"row total py-2"},[a("div",{staticClass:"text-left col-4 mark-text"},[t._v("Total")]),a("div",{staticClass:"col-4"},[a("span",[t._v("$"+t._s(t.num))])])])],2)])]):t.register?a("div",[a("SingIn",{attrs:{firebase:t.firebase},on:{goBack:function(t){this.register=!1}}})],1):a("div",[a("LoginForm",{attrs:{firebase:t.firebase},on:{loginApp:function(e){return t.loginApp(e)}}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("p",{staticClass:"parrafo"},[t._v("Agrega un gasto a la lista")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mark-text titulo-seccion py-2"},[a("div",{staticClass:"col-4 text-left"},[t._v("Nombre")]),a("div",{staticClass:"col-2 "},[t._v("Monto")]),a("div",{staticClass:"col-3 "},[t._v("Tipo")]),a("div",{staticClass:"col-3 "},[t._v("Accion")])])}],o=a("b85c"),r=(a("159b"),a("b0c0"),a("4de4"),a("a434"),a("a9e3"),a("2591")),l=(a("e71f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"singIn"},[a("div",[a("button",{staticClass:"back"},[a("a",{attrs:{href:""},on:{click:t.goBack}},[t._v("Go back")])])]),t.register?a("div",{staticClass:"container"},[a("div",{staticClass:"row successfully"},[a("h2",{staticClass:"col-12 text-center"},[t._v("Registro satisfactorio en el sistema")]),a("h5",{staticClass:"col-12 text-center"},[t._v("Muchas gracias por crear su registro "),a("span",[t._v(t._s(t.name))])])])]):a("div",{staticClass:"container rounded border pt-3",staticStyle:{width:"400px"},attrs:{id:"form"}},[t._m(0),a("div",{staticClass:"form-group "},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"name"}},[t._v("Your Name")]),a("span",{ref:"errorName",staticClass:"text-danger ml-4"}),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],ref:"name",staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeFocus(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"email"}},[t._v("Choose a username")]),a("span",{ref:"errorUser",staticClass:"text-danger ml-4"}),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],ref:"user",staticClass:"form-control",attrs:{type:"text",name:"user",id:"user"},domProps:{value:t.user},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeFocus(e)},input:function(e){e.target.composing||(t.user=e.target.value)}}})])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"username"}},[t._v("Email")]),a("span",{ref:"errorEmail",staticClass:"text-danger ml-4"}),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"email",staticClass:"form-control",attrs:{type:"text",name:"email",id:"email"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeFocus(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}})])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"password"}},[t._v("Choose Password")]),a("span",{ref:"errorPass",staticClass:"text-danger ml-4"}),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],ref:"pass",staticClass:"form-control",attrs:{type:"password",name:"password",id:"password"},domProps:{value:t.pass},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeFocus(e)},input:function(e){e.target.composing||(t.pass=e.target.value)}}})])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"confirm"}},[t._v("confirm Password")]),a("span",{ref:"errorConfirm",staticClass:"text-danger ml-4"}),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm,expression:"confirm"}],ref:"confirm",staticClass:"form-control",attrs:{type:"password",name:"confirm",id:"confirm"},domProps:{value:t.confirm},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeFocus(e)},input:function(e){e.target.composing||(t.confirm=e.target.value)}}})])])]),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn login-button",attrs:{type:"button"},on:{click:function(e){return t.validateLogin(e)}}},[t._v("Registro")])])])])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"titulo"}},[a("div",{staticClass:"col-12 text-center"},[a("h3",[t._v("Registro del Sistema")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon bg-info"},[a("i",{staticClass:"fa fa-user fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon bg-info"},[a("i",{staticClass:"fa fa-envelope fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon bg-info"},[a("i",{staticClass:"fa fa-users fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon bg-info"},[a("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon bg-info"},[a("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])}],u={name:"SingIn",props:["firebase"],data:function(){return{email:"",name:"",user:"",pass:"",confirm:"",register:!1}},methods:{goBack:function(){this.$emit("goBack")},changeFocus:function(t){"name"===t.target.id?this.$refs.user.focus():"user"===t.target.id?this.$refs.email.focus():"email"===t.target.id?this.$refs.pass.focus():"password"===t.target.id?this.$refs.confirm.focus():this.validateLogin()},manejaChange:function(t){"pdEmail"===t.target.id&&(this.valid=this.emailValido(this.pdEmail)?"is-valid":"is-invalid")},deleteError:function(){for(var t=document.getElementsByClassName("text-danger"),e=0;e<t.length;e++)t[e].innerHTML=""},validateLogin:function(){var t=this;return this.deleteError(),this.vacio(this.name)?(this.$refs.errorName.innerText="Name is required.",!1):this.vacio(this.user)?(this.$refs.errorUser.innerText="Username is required.",!1):this.emailValido(this.email)?this.passValido(this.pass)?this.passValido(this.confirm)&&this.confirm==this.pass?void this.firebase.auth().createUserWithEmailAndPassword(this.email,this.pass).then((function(e){t.email=e.user.email,t.register=!0,t.$emit("fullRecord",e.user.email)})).catch((function(t){var e=t.code,a=t.message;alert("Error: "+e+" - "+a)})):(this.$refs.errorConfirm.innerText="password does not match",!1):(this.$refs.errorPass.innerText="must have a minimum of six characters",!1):(this.$refs.errorEmail.innerText="invalid field",!1)},emailValido:function(t){var e=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;return e.test(t)},passValido:function(t){var e=/.{6,100}/;return e.test(t)},vacio:function(t){return""===t}}},m=u,d=(a("ab7c"),a("2877")),p=Object(d["a"])(m,l,c,!1,null,"087dc03b",null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listGastos"},[t.type===t.gasto.type?a("div",{staticClass:"row py",attrs:{amount:t.gasto.amount}},[a("div",{staticClass:"col-4 text-left"},[t._v(t._s(t.gasto.name))]),a("div",{staticClass:"col-4"},[t._v(t._s(t.gasto.amount))]),a("div",{staticClass:"col-2"},[t._v(t._s(t.gasto.type))]),a("div",{staticClass:"col-2"},[a("a",{staticClass:"fa fa-pencil pointer mr-2",attrs:{href:"#input",id:"editar"},on:{click:function(e){return t.editar({indice:t.indice,id:t.id})}}}),a("div",{staticClass:"fa fa-trash pointer",attrs:{id:"eliminar"},on:{click:function(e){return t.eliminar({indice:t.indice,id:t.id})}}})])]):t._e(),t.type?t._e():a("div",{staticClass:"row py"},[a("div",{staticClass:"col-4 text-left"},[t._v(t._s(t.gasto.name))]),a("div",{staticClass:"col-2"},[t._v(t._s(t.gasto.amount))]),a("div",{staticClass:"col-3"},[t._v(t._s(t.gasto.type))]),a("div",{staticClass:"col-3"},[a("a",{staticClass:"fa fa-pencil pointer mr-2",attrs:{href:"#input",id:"editar"},on:{click:function(e){return t.editar({indice:t.indice,id:t.id})}}}),a("div",{staticClass:"fa fa-trash pointer",attrs:{id:"eliminar"},on:{click:function(e){return t.eliminar({indice:t.indice,id:t.id})}}})])])])},v=[],g={name:"MisGatos",props:["gasto","id","indice","type"],methods:{eliminar:function(t){this.$emit("eliminarGasto",t)},editar:function(t){this.$emit("editarGasto",t)}}},y=g,C=(a("d3c4"),Object(d["a"])(y,h,v,!1,null,"2b403fbe",null)),b=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container border rounded",staticStyle:{width:"350px"}},[t._m(0),a("div",{staticClass:"form-group mt-4"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el Correo Electrónico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"cols-sm-2 control-label",attrs:{for:"password"}},[t._v("Contraseña")]),a("div",{staticClass:"cols-sm-10"},[a("div",{staticClass:"input-group"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Ingrese la contraseña"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn form-color",attrs:{type:"button"},on:{click:t.ingresar}},[t._v("Ingresar")])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h3",[t._v("Ingreso al Sistema")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon form-color"},[a("i",{staticClass:"fa fa-envelope fa",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"pt-2 px-3 input-group-addon form-color"},[a("i",{staticClass:"fa fa-lock fa-lg",attrs:{"aria-hidden":"true"}})])}],w={name:"LoginForm",props:["firebase"],data:function(){return{email:"",password:""}},mounted:function(){this.email="estudiante@nextu.com",this.password="12345678"},methods:{ingresar:function(){var t=this;this.firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){t.$emit("loginApp",e.user.email)})).catch((function(t){console.log("Error: "+t.code+" - "+t.message)}))}}},k=w,E=(a("c461"),Object(d["a"])(k,_,x,!1,null,"d0717bb8",null)),N=E.exports,I={name:"App",components:{MisGastos:b,LoginForm:N,SingIn:f},data:function(){return{login:!1,input:!0,register:!1,show:"fa fa-minus-square",valido:"",nameValue:"",amountValue:"",typeValue:"",listaGastos:[],listaTipo:[],coleccion:{},type:"",num:0,amountResult:[],editar:!1,times:!1,cancel:!1,gastoId:"",updateTabs:!1,firebase:""}},methods:{loginApp:function(t){var e=this,a=t;this.coleccion=this.db.collection("/usuarios/"+a+"/gastos"),this.coleccion.get().then((function(t){t.forEach((function(t){e.listaGastos.unshift({id:t.id,name:t.data().name,amount:t.data().amount,type:t.data().type}),e.num+=t.data().amount})),t.forEach((function(a){var s=a.data().type;!(s in t)&&(t[s]=!0)&&e.listaTipo.unshift({type:s})})),e.login=!0}))},system:function(t){"singIn"===t.target.id?this.register=!0:"logOut"===t.target.id&&(this.login=!1,this.listaGastos=[],this.listaTipo=[],this.num=0)},controlInput:function(){this.input=!this.input,this.show=this.input?"fa fa-minus-square":"fa fa-plus-square"},selected:function(t,e){var a=this;this.times=!0,this.num=0,this.type=e,this.amountResult=this.listaGastos.filter((function(t){return t.type===e})),this.amountResult.forEach((function(t){a.num+=t.amount}));var s,i=Object(o["a"])(this.listaTipo);try{for(i.s();!(s=i.n()).done;){var n=s.value;n.type===t.target.id?document.getElementById(e).className="item-link selected":document.getElementById(n.type).className="item-link"}}catch(r){i.e(r)}finally{i.f()}},eliminarFiltro:function(){var t=this;this.times=!1,this.num=0,this.listaGastos.forEach((function(e){t.num+=e.amount})),this.type="";var e,a=Object(o["a"])(this.listaTipo);try{for(a.s();!(e=a.n()).done;){var s=e.value;document.getElementById(s.type).className="item-link"}}catch(i){a.e(i)}finally{a.f()}},cancelEdit:function(){this.cancel=!1,this.editar=!1,this.nameValue="",this.amountValue="",this.typeValue="",this.controlInput()},editarGasto:function(t){this.cancel=!0,this.editar=!0,this.gastoId=t;var e=this.listaGastos[t.indice];this.input||(this.input=!0,this.show="fa fa-minus-square"),this.nameValue=e.name,this.amountValue=e.amount,this.typeValue=e.type},tabsFilter:function(t){return this.listaGastos.filter((function(e){return e.type===t.type}))},eliminarGasto:function(t){if(window.confirm("Are you sure to remove it from the list?")){for(var e=this.listaGastos[t.indice],a=this.tabsFilter(e),s=0;s<this.listaTipo.length;s++)this.listaTipo[s].type===e.type&&a.length<2&&this.listaTipo.splice(s,1);this.coleccion.doc(t.id).delete(),this.listaGastos.splice(t.indice,1),this.num=this.num-e.amount}},agregarGasto:function(){var t=this,e={name:this.nameValue,amount:isNaN(this.amountValue)?null:Number(this.amountValue),type:this.typeValue};if(this.editar){this.num=this.num-this.listaGastos[this.gastoId.indice].amount;for(var a=this.listaGastos[this.gastoId.indice],s=this.tabsFilter(a),i=0;i<this.listaTipo.length;i++)this.listaTipo[i].type===a.type&&s.length<2&&this.listaTipo.splice(i,1);this.coleccion.doc(this.gastoId.id).update(e),this.listaGastos.splice(this.gastoId.indice,1,{id:this.gastoId.id,name:e.name,amount:e.amount,type:e.type}),this.editar=!1}else this.coleccion.add(e).then((function(a){console.log(a),t.listaGastos.unshift({id:a.id,name:e.name,amount:e.amount,type:e.type})})).catch((function(t){alert("No se pudo agregar el libro al sistema.Error: "+t.message)}));this.num+=e.amount;var n,r=e.type,l=Object(o["a"])(this.listaTipo);try{for(l.s();!(n=l.n()).done;){var c=n.value;e.type===c.type&&(r="")}}catch(u){l.e(u)}finally{l.f()}r&&this.listaTipo.unshift({type:r}),this.nameValue="",this.amountValue="",this.typeValue="",this.cancel=!1}},updated:function(){localStorage.setItem("dataLogin",JSON.stringify(this.login)),localStorage.setItem("dataNum",JSON.stringify(this.num)),localStorage.setItem("dataTabs",JSON.stringify(this.listaTipo)),localStorage.setItem("dataGastos",JSON.stringify(this.listaGastos))},mounted:function(){var t=JSON.parse(localStorage.getItem("dataLogin")),e=JSON.parse(localStorage.getItem("dataGastos")),a=JSON.parse(localStorage.getItem("dataNum")),s=JSON.parse(localStorage.getItem("dataTabs"));this.login=t,e.length>0&&(this.listaGastos=e),s.length>0&&(this.listaTipo=s),a>0&&(this.num=a)},beforeMount:function(){var t={apiKey:"AIzaSyCvWt4g1-ljgucslUxDiP_ZNcj1nAb7vIk",authDomain:"app-mis-gastos.firebaseapp.com",projectId:"app-mis-gastos",storageBucket:"app-mis-gastos.appspot.com",messagingSenderId:"821603135063",appId:"1:821603135063:web:64f7c50e9462fe802f3d12"};r["a"].initializeApp(t),this.db=r["a"].firestore();var e={timestampsInSnapshots:!0};this.db.settings(e),this.firebase=r["a"]}},G=I,O=(a("034f"),Object(d["a"])(G,i,n,!1,null,null,null)),V=O.exports;a("f9e3"),a("7f10");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(V)}}).$mount("#app")},"85ec":function(t,e,a){},"88a0":function(t,e,a){},ab7c:function(t,e,a){"use strict";a("88a0")},c461:function(t,e,a){"use strict";a("4667")},d3c4:function(t,e,a){"use strict";a("1fea")}});
//# sourceMappingURL=app.296039e0.js.map