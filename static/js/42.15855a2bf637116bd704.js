webpackJsonp([42],{IAOY:function(n,t,e){"use strict";function o(n){e("h6br")}Object.defineProperty(t,"__esModule",{value:!0});var a=(e("8lc1"),{data:function(){return{showdialog:!1,orderContent:"",defaultValue:"",orderlist:[],orderEndtime:"",orderExcutorId:"",list:[],mysrc:[],havealpic:!1,options:{getThumbBoundsFn:function(n){var t=document.querySelectorAll(".previewer-demo-img")[n],e=window.pageYOffset||document.documentElement.scrollTop,o=t.getBoundingClientRect();return{x:o.left,y:o.top+e,w:o.width}}},reviewsingledata:[],alarmonuname:"",projectid:"",phoneNum:"",permission:""}},created:function(){this.phoneNum=sessionStorage.getItem("phone"),this.permission=sessionStorage.getItem("permission"),this.projectid=sessionStorage.getItem("projectid"),this.reviewsingledata=this.$route.params.item,this.getpic(),this.getWorkerPhone()},methods:{getWorkerPhone:function(){var n=this;this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:35,projectid:this.projectid,permission:this.permission,phoneNum:this.phoneNum}}).then(function(t){console.log(JSON.parse(t.data[0]));var e=[];for(var o in t.data)e.push({key:JSON.parse(t.data[o]).appid,value:JSON.parse(t.data[o]).appuser});n.defaultValue=e[0].key,console.log(e),n.orderlist=e})},postworkorder:function(){var n=this;""==this.orderEndtime?this.$vux.toast.show({text:"请选择时间",type:"text"}):(this.$vux.loading.show({text:"加载中"}),this.orderExcutorId=this.$refs.defaultValueRef.getFullValue()[0].key,this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:422,onuName:this.reviewsingledata.onuName,orderContent:this.orderContent,orderExcutorId:this.orderExcutorId,orderEndtime:this.orderEndtime,appPhone:this.phoneNum,projectid:this.projectid}}).then(function(t){n.$vux.loading.hide(),console.log(t),"success"==t.data?(n.$vux.toast.show({text:"提交成功",type:"text"}),n.orderContent="",n.orderEndtime="",n.showdialog=!1):n.$vux.toast.show({text:"提交失败",type:"text"})}).catch(function(n){console.log(n)}))},backdialog:function(){this.showdialog=!1},getpic:function(){var n=this,t=this;this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:31,detailsid:this.reviewsingledata.planDetailsid}}).then(function(e){"noRecord"==e.data?console.log("暂无图片"):"failure"==e.data?console.log("发生异常"):(n.havealpic=!0,console.log(e),console.log(e.data.split(",")),e.data.split(",").forEach(function(n,e){t.mysrc[e]={src:n}}),t.list=t.mysrc)}).catch(function(n){console.log(n)})},workorder:function(){this.showdialog=!0},show:function(n){this.$refs.previewer.show(n)},reviewdone:function(){var n=this;this.$vux.loading.show({text:"提交中"}),this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:33,detailsid:this.reviewsingledata.planDetailsid}}).then(function(t){n.$vux.loading.hide(),"success"==t.data?(n.$vux.toast.show({text:"数据提交成功",type:"text"}),n.$router.push({name:"alarmreview"})):n.$vux.toast.show({text:"数据提交失败",type:"text"}),console.log(t)}).catch(function(n){console.log(n)})},reviewcancel:function(){var n=this;this.$vux.loading.show({text:"提交中"}),this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:34,detailsid:this.reviewsingledata.planDetailsid}}).then(function(t){n.$vux.loading.hide(),"success"==t.data?(n.$vux.toast.show({text:"数据提交成功",type:"text"}),n.$router.push({name:"alarmreview"})):n.$vux.toast.show({text:"数据提交失败",type:"text"}),console.log(t)}).catch(function(n){console.log(n)})},goHome:function(){this.$router.push({name:"home"})},postalarm:function(){var n=this;this.$vux.loading.show({text:"加载中"}),this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:110,alarmDisposeExplain:this.alarmDisposeExplain,alarmInfoId:this.reviewsingledata.alarmInfoId,phoneNum:this.phoneNum}}).then(function(t){console.log(t),n.$vux.loading.hide(),"success"==t.data?n.$vux.toast.show({text:"数据提交成功",type:"text"}):n.$vux.toast.show({text:"数据提交失败",type:"text"})}).catch(function(n){console.log(n)})}}}),i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"singlealarm"},[o("x-header",{staticClass:"myHeader",nativeOn:{click:function(t){n.goHome()}}},[n._v("巡检审核"),o("img",{attrs:{slot:"right",width:"22",height:"22",src:e("77/w"),alt:""},on:{click:function(t){n.goHome()}},slot:"right"})]),n._v(" "),o("group",{attrs:{"label-width":"5em",title:"巡检详情"}},[o("cell",{staticClass:"searchtxt",attrs:{primary:"content",title:"光交名称",value:n.reviewsingledata.onuName}}),n._v(" "),o("cell",{staticClass:"searchtxt",attrs:{primary:"content",title:"光交编号",value:n.reviewsingledata.onuNum}}),n._v(" "),o("cell",{staticClass:"searchtxt",attrs:{primary:"content",title:"巡检计划",value:n.reviewsingledata.planName}}),n._v(" "),o("cell",{staticClass:"searchtxt",attrs:{primary:"content",title:"处理结果",value:n.reviewsingledata.pollingResult}})],1),n._v(" "),o("group",{directives:[{name:"show",rawName:"v-show",value:n.havealpic,expression:"havealpic"}],attrs:{"label-width":"5em",title:"巡检图片"}},[o("div",{staticClass:"imgbox"},[n._l(n.list,function(t,e){return e<3?o("img",{staticClass:"previewer-demo-img",attrs:{src:t.src,width:"100"},on:{click:function(t){n.show(e)}}}):n._e()}),n._v(" "),o("div",[o("previewer",{ref:"previewer",attrs:{list:n.list,options:n.options}})],1)],2)]),n._v(" "),o("flexbox",{staticClass:"myflexbox"},[o("flexbox-item",[o("x-button",{staticClass:"collbtn",attrs:{type:"primary"},nativeOn:{click:function(t){n.reviewdone()}}},[n._v("审核通过")])],1),n._v(" "),o("flexbox-item",[o("x-button",{staticClass:"collbtn",attrs:{type:"primary"},nativeOn:{click:function(t){n.reviewcancel()}}},[n._v("审核不通过")])],1),n._v(" "),o("flexbox-item",[o("x-button",{staticClass:"collbtn",attrs:{type:"primary"},nativeOn:{click:function(t){n.workorder()}}},[n._v("生成工单")])],1)],1),n._v(" "),o("div",{staticClass:"workdialog"},[o("x-dialog",{staticClass:"dialog-demo",attrs:{"hide-on-blur":!0},model:{value:n.showdialog,callback:function(t){n.showdialog=t},expression:"showdialog"}},[o("group",{attrs:{"label-width":"5em",title:"生成工单"}},[o("cell",{staticClass:"searchtxt",attrs:{primary:"content",title:"箱体名称",value:n.reviewsingledata.onuName}}),n._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:n.orderContent,expression:"orderContent"}],staticClass:"ordertextarea",attrs:{name:"",placeholder:"请输入工单内容",cols:"30",rows:"5"},domProps:{value:n.orderContent},on:{input:function(t){t.target.composing||(n.orderContent=t.target.value)}}}),n._v(" "),o("selector",{ref:"defaultValueRef",staticClass:"searchtit",attrs:{title:"工单指派人",options:n.orderlist},model:{value:n.defaultValue,callback:function(t){n.defaultValue=t},expression:"defaultValue"}}),n._v(" "),o("datetime",{staticClass:"searchtit",attrs:{format:"YYYY-MM-DD HH:mm",title:"截止时间"},model:{value:n.orderEndtime,callback:function(t){n.orderEndtime=t},expression:"orderEndtime"}})],1),n._v(" "),o("flexbox",{staticClass:"myflexbox"},[o("flexbox-item",[o("x-button",{staticClass:"collbtn",attrs:{type:"primary"},nativeOn:{click:function(t){n.backdialog()}}},[n._v("返回")])],1),n._v(" "),o("flexbox-item",[o("x-button",{staticClass:"collbtn",attrs:{type:"primary"},nativeOn:{click:function(t){n.postworkorder()}}},[n._v("提交")])],1)],1)],1)],1)],1)},s=[],r={render:i,staticRenderFns:s},l=r,c=e("VU/8"),u=o,d=c(a,l,!1,u,"data-v-46ffdd4a",null);t.default=d.exports},OhCi:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},h6br:function(n,t,e){var o=e("OhCi");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("371f6109",o,!0,{})}});