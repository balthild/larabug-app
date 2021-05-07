(self.webpackChunk=self.webpackChunk||[]).push([[234],{7209:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"flex items-center space-x-2"};const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("ul",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},5088:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n=(0,o.createVNode)("svg",{class:"w-4 h-4 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("li",null,[n])}},l=a},4319:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(5166);const n={inheritAttrs:!1,render:function(e,r,t,n,a,l){var s=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createBlock)("li",null,[(0,o.createVNode)(s,(0,o.mergeProps)(e.$attrs,{class:["text-base text-gray-600 font-medium transition","focus:outline-none","hover:text-gray-800","focus:underline"]}),{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3},16)])}},a=n},2087:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(5166);const n={props:{primary:{type:Boolean,default:function(){return!1}},secondary:{type:Boolean,default:function(){return!1}},danger:{type:Boolean,default:function(){return!1}},success:{type:Boolean,default:function(){return!1}},as:{default:function(){return"button"}}},render:function(e,r,t,n,a,l){return(0,o.openBlock)(),(0,o.createBlock)((0,o.resolveDynamicComponent)(t.as),{class:["inline-flex px-3 h-9 items-center justify-center font-bold text-sm rounded-lg transition","focus:outline-none focus:ring focus:ring-blue-200",{"bg-primary-600 text-white shadow":t.primary},{"hover:bg-primary-500":t.primary},{"focus:bg-primary-700":t.primary},{"border border-gray-300 text-gray-800 shadow-sm":t.secondary},{"hover:border-gray-200":t.secondary},{"focus:text-gray-900 focus:border-gray-300":t.secondary},{"bg-red-600 text-white shadow":t.danger},{"hover:bg-red-500":t.danger},{"focus:bg-red-700":t.danger},{"bg-green-600 text-white shadow":t.success},{"hover:bg-green-500":t.success},{"focus:bg-green-700":t.success}]},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3},8,["class"])}},a=n},595:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var o=t(5166),n={class:"bg-white shadow rounded-lg divide-y divide-gray-200"},a={key:0,class:"px-6 py-4 flex items-center justify-between"},l={key:1,class:"px-6 py-4 flex items-center justify-between flex-col sm:flex-row"},s={key:2,class:"px-6 py-3"};const c={props:{contained:{type:Boolean,default:function(){return!1}}},render:function(e,r,t,c,i,d){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[e.$slots.header?((0,o.openBlock)(),(0,o.createBlock)("header",a,[(0,o.renderSlot)(e.$slots,"header")])):(0,o.createCommentVNode)("",!0),e.$slots.buttonheader?((0,o.openBlock)(),(0,o.createBlock)("header",l,[(0,o.renderSlot)(e.$slots,"buttonheader")])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("div",{class:{"p-6":t.contained}},[(0,o.renderSlot)(e.$slots,"default")],2),e.$slots.footer?((0,o.openBlock)(),(0,o.createBlock)("footer",s,[(0,o.renderSlot)(e.$slots,"footer")])):(0,o.createCommentVNode)("",!0)])}},i=c},5896:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"mx-auto max-w-7xl px-4 sm:px-8"};const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},5264:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"text-sm font-medium text-red-600"};const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("p",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},1876:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"text-sm font-medium text-gray-600"};const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("p",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},8617:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var o=t(5166),n={class:"space-y-2"};var a=t(9668);const l={props:{modelValue:{required:!0},error:{default:function(){return!1}}},render:function(e,r,t,n,a,l){return(0,o.openBlock)(),(0,o.createBlock)("input",{type:"text",value:t.modelValue,onInput:r[1]||(r[1]=function(r){return e.$emit("update:modelValue",r.target.value)}),class:["block w-full px-3 h-12 max-w-lg border-gray-300 rounded bg-gray-50 transition",{"hover:border-gray-200":!t.error},{"focus:bg-white focus:border-primary-500":!t.error},{"border-red-600 bg-red-50 text-red-600":t.error},{"hover:border-red-500":t.error},{"focus:ring-red-600 focus:border-red-600":t.error}]},null,42,["value"])}},s=l;var c=t(5264),i=t(1876);const d={inheritAttrs:!1,components:{Label:a.Z,Input:s,FormErrorText:c.Z,FormHelperText:i.Z},props:{label:{type:String,required:!0},helperText:{default:function(){return!1}}},render:function(e,r,t,a,l,s){var c=(0,o.resolveComponent)("Label"),i=(0,o.resolveComponent)("Input"),d=(0,o.resolveComponent)("FormErrorText"),u=(0,o.resolveComponent)("FormHelperText");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(c,{error:e.$attrs.error,for:e.$attrs.id},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.label),1)]})),_:1},8,["error","for"]),(0,o.createVNode)(i,e.$attrs,null,16),(0,o.createVNode)(o.Transition,{mode:"out-in","enter-from-class":"-translate-y-2 opacity-0","enter-active-class":"transition duration-300 transform","enter-to-class":"translate-y-0 opacity-100","leave-from-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-300 transform","leave-to-class":"translate-y-2 opacity-0"},{default:(0,o.withCtx)((function(){return[e.$attrs.error?((0,o.openBlock)(),(0,o.createBlock)(d,{key:"errorText"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$attrs.error[0]),1)]})),_:1})):t.helperText?((0,o.openBlock)(),(0,o.createBlock)(u,{key:"helperText"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.helperText),1)]})),_:1})):(0,o.createCommentVNode)("",!0)]})),_:1})])}},u=d},3535:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var o=t(5166),n={class:"space-y-2"};var a=t(9668);const l={props:{modelValue:{required:!0},error:{default:function(){return!1}}},render:function(e,r,t,n,a,l){return(0,o.openBlock)(),(0,o.createBlock)("textarea",{value:t.modelValue,onInput:r[1]||(r[1]=function(r){return e.$emit("update:modelValue",r.target.value)}),class:["block w-full max-w-lg border border-gray-300 rounded bg-gray-50 transition",{"hover:border-gray-200":!t.error},{"focus:bg-white focus:border-primary-500":!t.error},{"border-red-600 bg-red-50 text-red-600":t.error},{"hover:border-red-500":t.error},{"focus:ring-red-600 focus:border-red-600":t.error}]},null,42,["value"])}},s=l;var c=t(5264),i=t(1876);const d={inheritAttrs:!1,components:{Label:a.Z,Textarea:s,FormErrorText:c.Z,FormHelperText:i.Z},props:{label:{type:String,required:!0},helperText:{default:function(){return!1}}},render:function(e,r,t,a,l,s){var c=(0,o.resolveComponent)("Label"),i=(0,o.resolveComponent)("Textarea"),d=(0,o.resolveComponent)("FormErrorText"),u=(0,o.resolveComponent)("FormHelperText");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(c,{error:e.$attrs.error,for:e.$attrs.id},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.label),1)]})),_:1},8,["error","for"]),(0,o.createVNode)(i,e.$attrs,null,16),(0,o.createVNode)(o.Transition,{mode:"out-in","enter-from-class":"-translate-y-2 opacity-0","enter-active-class":"transition duration-300 transform","enter-to-class":"translate-y-0 opacity-100","leave-from-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-300 transform","leave-to-class":"translate-y-2 opacity-0"},{default:(0,o.withCtx)((function(){return[e.$attrs.error?((0,o.openBlock)(),(0,o.createBlock)(d,{key:"errorText"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$attrs.error),1)]})),_:1})):t.helperText?((0,o.openBlock)(),(0,o.createBlock)(u,{key:"helperText"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.helperText),1)]})),_:1})):(0,o.createCommentVNode)("",!0)]})),_:1})])}},u=d},9668:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(5166);const n={props:{error:{default:function(){return!1}}},render:function(e,r,t,n,a,l){return(0,o.openBlock)(),(0,o.createBlock)("label",{class:["text-base font-medium",{"text-red-600":t.error}]},[(0,o.renderSlot)(e.$slots,"default")],2)}},a=n},1969:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(5166);const n={props:{big:{default:!0,type:Boolean},isopen:{default:!1,type:Boolean}},render:function(e,r,t,n,a,l){return(0,o.openBlock)(),(0,o.createBlock)("ul",(0,o.mergeProps)({class:"flex-1"},e.$attrs,{class:[t.big?"my-2":"",t.isopen?"block":"hidden"]}),[(0,o.renderSlot)(e.$slots,"default")],16)}},a=n},9324:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"font-medium text-base"};const a={props:{isActive:{default:!1,type:Boolean},big:{default:!0,type:Boolean}},render:function(e,r,t,a,l,s){var c=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("li",null,[(0,o.createVNode)(c,(0,o.mergeProps)(e.$attrs,{class:[t.big?"h-11 px-4 flex space-x-3 items-center":"space-x-3 md:space-x-0 h-11 md:h-16 md:w-16 px-4 md:px-none flex md:justify-center items-center transition","focus:outline-none","hover:bg-primary-800","focus:bg-primary-700",{"text-white bg-primary-800":t.isActive,"text-primary-300":!t.isActive}]}),{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"icon"),(0,o.createVNode)("span",n,[(0,o.renderSlot)(e.$slots,"default")])]})),_:3},16,["class"])])}},l=a},3393:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={class:"flex flex-col space-y-8"};const a={render:function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.renderSlot)(e.$slots,"default")])}},l=a},8450:(e,r,t)=>{"use strict";t.d(r,{Z:()=>j});var o=t(5166),n=(0,o.createVNode)("div",{id:"modals"},null,-1),a={class:"flex flex-col md:flex-row min-h-screen bg-primary-100"},l={class:"flex flex-col w-full md:w-72 text-white bg-primary-900 flex-shrink-0 md:h-screen md:sticky md:top-0"},s={class:"flex-shrink-0 p-4 flex flex-row items-center justify-between space-y-1"},c=(0,o.createVNode)("p",{class:"text-xl font-bold"},"LaraBug",-1),i={fill:"currentColor",viewBox:"0 0 20 20",class:"w-6 h-6"},d={"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clip-rule":"evenodd"},u={"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},p=(0,o.createVNode)("svg",{class:"w-6 h-6 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})],-1),f=(0,o.createTextVNode)(" Dashboard "),m=(0,o.createVNode)("svg",{class:"w-6 h-6 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})],-1),h=(0,o.createTextVNode)(" Projects "),x=(0,o.createVNode)("svg",{class:"w-6 h-6 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})],-1),v=(0,o.createTextVNode)(" Profile "),g=(0,o.createVNode)("a",{href:"https://github.com/sponsors/Cannonb4ll",class:"hover:text-primary-300 flex items-center space-x-2",target:"_blank"},[(0,o.createVNode)("svg",{width:"1em",height:"1em",class:"text-yellow-300",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createVNode)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})]),(0,o.createVNode)("span",null," Consider sponsoring LaraBug ")],-1),b=(0,o.createVNode)("a",{href:"https://www.larabug.com/discord",class:"hover:text-primary-300 flex items-center space-x-2",target:"_blank"},[(0,o.createVNode)("span",null," Join our Discord server ")],-1),k={class:"text-base font-medium truncate"},w={class:"text-sm text-primary-200"},y={class:"flex-1 py-8"};var V=t(1969),N=t(9324),C=t(5896),B=t(3393),_=t(1151);const $={data:function(){return{open:!1}},components:{NavList:V.Z,NavListItem:N.Z,Container:C.Z,VStack:B.Z},watch:{"$page.props.flash":{handler:function(){this.$page.props.flash.success&&this.toast.success(this.$page.props.flash.success),this.$page.props.flash.info&&this.toast.info(this.$page.props.flash.info),(this.$page.props.flash.error||Object.keys(this.$page.props.errors).length>0)&&this.$page.props.flash.error&&this.toast.error(this.$page.props.flash.error)},deep:!0}},setup:function(){return{toast:(0,_.pm)()}},render:function(e,r,t,V,N,C){var B=(0,o.resolveComponent)("NavListItem"),_=(0,o.resolveComponent)("NavList"),$=(0,o.resolveComponent)("Container");return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[n,(0,o.createVNode)("div",a,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",s,[c,(0,o.createVNode)("button",{class:"rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline",onClick:r[1]||(r[1]=function(e){return N.open=!N.open})},[((0,o.openBlock)(),(0,o.createBlock)("svg",i,[(0,o.withDirectives)((0,o.createVNode)("path",d,null,512),[[o.vShow,!N.open]]),(0,o.withDirectives)((0,o.createVNode)("path",u,null,512),[[o.vShow,N.open]])]))])]),(0,o.createVNode)(_,{class:"md:block",isopen:N.open,"is-active":e.route().current()},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(B,{onClick:r[2]||(r[2]=function(e){return N.open=!1}),href:"/panel","is-active":e.route().current("panel.dashboard")},{icon:(0,o.withCtx)((function(){return[p]})),default:(0,o.withCtx)((function(){return[f]})),_:1},8,["is-active"]),(0,o.createVNode)(B,{onClick:r[3]||(r[3]=function(e){return N.open=!1}),href:"/panel/projects","is-active":e.route().current("panel.projects.*"),isopen:N.open},{icon:(0,o.withCtx)((function(){return[m]})),default:(0,o.withCtx)((function(){return[h]})),_:1},8,["is-active","isopen"]),(0,o.createVNode)(B,{onClick:r[4]||(r[4]=function(e){return N.open=!1}),href:"/panel/profile","is-active":e.route().current("panel.profile.*"),isopen:N.open},{icon:(0,o.withCtx)((function(){return[x]})),default:(0,o.withCtx)((function(){return[v]})),_:1},8,["is-active","isopen"])]})),_:1},8,["isopen","is-active"]),(0,o.createVNode)("div",{class:[{block:N.open,hidden:!N.open},"p-4 border-t justify-start gap-4 border-primary-800 grid grid-flow-col items-center text-sm md:block"]},[g],2),(0,o.createVNode)("div",{class:[{block:N.open,hidden:!N.open},"p-4 border-t justify-start gap-4 border-primary-800 grid grid-flow-col items-center text-sm md:block"]},[b],2),(0,o.createVNode)("footer",{class:[{block:N.open,hidden:!N.open},"p-4 border-t justify-start gap-4 border-primary-800 grid grid-flow-col items-center md:grid"]},[(0,o.createVNode)("img",{src:e.$page.props.auth.user.avatar,class:"w-10 h-10 rounded-full bg-primary-800"},null,8,["src"]),(0,o.createVNode)("div",null,[(0,o.createVNode)("p",k,(0,o.toDisplayString)(e.$page.props.auth.user.name),1),(0,o.createVNode)("p",w,(0,o.toDisplayString)(e.$page.props.auth.user.email),1)])],2)]),(0,o.createVNode)("main",y,[(0,o.createVNode)($,null,{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3})])])],64)}},j=$},3234:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>N});var o=t(5166),n={class:"flex flex-col space-y-8"},a=(0,o.createTextVNode)("Projects"),l=(0,o.createTextVNode)("Edit"),s=(0,o.createVNode)("h2",{class:"text-xl font-bold"},"Edit project",-1),c={class:"grid grid-cols-2 gap-4"},i={class:"flex items-center space-x-2"},d=(0,o.createVNode)("label",{class:"text-sm font-medium",for:"receive_email"}," Receive email on new exceptions ",-1),u={class:"flex items-center space-x-3"},p=(0,o.createTextVNode)("Update project"),f=(0,o.createTextVNode)("Cancel"),m=(0,o.createTextVNode)("Delete");var h=t(8450),x=t(7209),v=t(4319),g=t(5088),b=t(595),k=t(2087),w=t(8617),y=t(3535);const V={layout:h.Z,components:{Breadcrumbs:x.Z,BreadcrumbsItem:v.Z,BreadcrumbsDivider:g.Z,Card:b.Z,Button:k.Z,FormInputGroup:w.Z,FormTextareaGroup:y.Z},props:{project:Object},data:function(){return{sending:!1,form:{title:this.project.title,url:this.project.url,description:this.project.description,receive_email:this.project.receive_email,slack_webhook:this.project.slack_webhook,discord_webhook:this.project.discord_webhook,custom_webhook:this.project.custom_webhook}}},methods:{submit:function(){var e=this;this.$inertia.put(this.route("panel.projects.update",this.project.id),this.form,{onStart:function(){return e.sending=!0},onFinish:function(){return e.sending=!1}})},destroy:function(){confirm("Are you sure you want to delete this project?")&&this.$inertia.delete(this.route("panel.projects.destroy",this.project.id))}},render:function(e,r,t,h,x,v){var g=(0,o.resolveComponent)("BreadcrumbsItem"),b=(0,o.resolveComponent)("BreadcrumbsDivider"),k=(0,o.resolveComponent)("Breadcrumbs"),w=(0,o.resolveComponent)("FormInputGroup"),y=(0,o.resolveComponent)("FormTextareaGroup"),V=(0,o.resolveComponent)("Button"),N=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(k,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(g,{href:e.route("panel.projects.index")},{default:(0,o.withCtx)((function(){return[a]})),_:1},8,["href"]),(0,o.createVNode)(b),(0,o.createVNode)(g,{href:e.route("panel.projects.show",t.project.id)},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.project.title),1)]})),_:1},8,["href"]),(0,o.createVNode)(b),(0,o.createVNode)(g,{href:e.route("panel.projects.edit",t.project.id)},{default:(0,o.withCtx)((function(){return[l]})),_:1},8,["href"])]})),_:1}),(0,o.createVNode)(N,{contained:""},{header:(0,o.withCtx)((function(){return[s]})),footer:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",u,[(0,o.createVNode)(V,{onClick:v.submit,primary:""},{default:(0,o.withCtx)((function(){return[p]})),_:1},8,["onClick"]),(0,o.createVNode)(V,{as:"inertia-link",href:e.route("panel.projects.show",t.project.id),secondary:""},{default:(0,o.withCtx)((function(){return[f]})),_:1},8,["href"]),(0,o.createVNode)(V,{onClick:v.destroy,danger:""},{default:(0,o.withCtx)((function(){return[m]})),_:1},8,["onClick"])])]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)("form",{class:"space-y-6",onSubmit:r[8]||(r[8]=(0,o.withModifiers)((function(){return v.submit&&v.submit.apply(v,arguments)}),["prevent"]))},[(0,o.createVNode)(w,{modelValue:x.form.title,"onUpdate:modelValue":r[1]||(r[1]=function(e){return x.form.title=e}),error:e.$page.props.errors.title,"helper-text":"The project's title",label:"Title",id:"title",required:""},null,8,["modelValue","error"]),(0,o.createVNode)(w,{modelValue:x.form.url,"onUpdate:modelValue":r[2]||(r[2]=function(e){return x.form.url=e}),label:"App URL",id:"app_url",required:""},null,8,["modelValue"]),(0,o.createVNode)("div",c,[(0,o.createVNode)(w,{modelValue:x.form.slack_webhook,"onUpdate:modelValue":r[3]||(r[3]=function(e){return x.form.slack_webhook=e}),label:"Slack Webhook URL",id:"slack_webhook_url",required:""},null,8,["modelValue"]),(0,o.createVNode)(w,{modelValue:x.form.discord_webhook,"onUpdate:modelValue":r[4]||(r[4]=function(e){return x.form.discord_webhook=e}),label:"Discord Webhook URL",id:"discord_webhook_url",required:""},null,8,["modelValue"]),(0,o.createVNode)("div",i,[(0,o.createVNode)(w,{modelValue:x.form.custom_webhook,"onUpdate:modelValue":r[5]||(r[5]=function(e){return x.form.custom_webhook=e}),label:"Custom Webhook URL",id:"custom_webhook_url",required:""},null,8,["modelValue"]),(0,o.withDirectives)((0,o.createVNode)("input",{class:["text-primary-600 rounded border-gray-300 transition","focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-offset-0"],id:"receive_email",type:"checkbox","onUpdate:modelValue":r[6]||(r[6]=function(e){return x.form.receive_email=e})},null,512),[[o.vModelCheckbox,x.form.receive_email]]),d])]),(0,o.createVNode)(y,{modelValue:x.form.description,"onUpdate:modelValue":r[7]||(r[7]=function(e){return x.form.description=e}),label:"Description",id:"description"},null,8,["modelValue"])],32)]})),_:1})])}},N=V}}]);