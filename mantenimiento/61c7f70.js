(window.webpackJsonp=window.webpackJsonp||[]).push([[39,28],{558:function(e,t,l){"use strict";l.r(t);l(26);var n={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Login obligatorio"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail obligatorio"},function(e){return/.+@.+\..+/.test(e)||"E-mail no válido"}],select:null,items:["Rol 1","Rol 2","Rol 3","Rol 4"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},o=l(52),r=l(76),c=l.n(r),d=l(435),m=l(232),v=l(614),f=l(536),x=l(567),k=l(464),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{"padding-bottom":"300px"},attrs:{id:"app"}},[l("v-app",{staticClass:"rounded xl",attrs:{id:"inspire",elevation:"20"}},[l("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Login",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),l("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Password",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),l("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Nombre completo",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),l("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),l("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Rol requerido"}],label:"Rol",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),l("v-checkbox",{attrs:{label:"Activo"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),l("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("\n        Validate\n      ")]),e._v(" "),l("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v("\n        Reset Form\n      ")]),e._v(" "),l("v-btn",{attrs:{color:"warning"},on:{click:e.resetValidation}},[e._v("\n        Reset Validation\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VApp:d.a,VBtn:m.a,VCheckbox:v.a,VForm:f.a,VSelect:x.a,VTextField:k.a})},630:function(e,t,l){"use strict";l.r(t);var n={components:{Registro:l(558).default}},o=l(52),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",staticStyle:{"background-color":"#3480B8"}},[t("Registro")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Registro:l(558).default})}}]);