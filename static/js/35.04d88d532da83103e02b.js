webpackJsonp([35],{Myaf:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.divinp {\r\n  padding: 10px;\r\n  background-color: #F9FAFC;\r\n  height: 100%;\n}\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n\r\n\r\n  z-index: 2;\n}\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /*   z-index: 2;*/\n}\n.div2 {\r\n  width: 100%;\r\n  height: 30px;\r\n  background-color: #969696;\r\n  line-height: 30px;\r\n  color: #F0F8FF;\n}\r\n\r\n",""])},kuNy:function(t,e,n){"use strict";function o(t){n("lDTZ")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("YxJB"),i=n("3Lt7"),a=n("ABCa"),s=(r.a,i.a,a.a,{components:{Flexbox:r.a,FlexboxItem:i.a,XHeader:a.a},data:function(){return{roinf:{name:"",descr:""},phoneNum:"",projectid:""}},created:function(){this.projectid=sessionStorage.getItem("projectid"),this.phoneNum=sessionStorage.getItem("phone"),this.refi()},methods:{goHome:function(){this.$router.push({name:"home"})},refi:function(){var t=this;this.$http.get("/OnuMonitorNew/DataCommunicate",{params:{requestType:53,phoneNum:this.phoneNum,projectid:this.projectid}}).then(function(e){"noRecord"==e.data&&console.log("暂无记录!"),"failure"==e.data&&console.log("发生异常"),console.log(e.data),t.roinf=e.data}).catch(function(t){console.log("请求失败："+t.status+","+t.statusText)})},backi:function(){console.log("返回"),this.$router.back(-1)}}}),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"roleinfo"}},[o("header",[o("x-header",{attrs:{slot:"buttom"},slot:"buttom"},[t._v("角色信息\n      "),o("img",{attrs:{slot:"right",width:"22",height:"22",src:n("77/w"),alt:""},on:{click:function(e){t.goHome()}},slot:"right"})])],1),t._v(" "),o("div",{staticStyle:{"margin-top":"46px"}},[t._m(0),t._v(" "),o("div",{staticClass:"divinp"},[o("flexbox",{attrs:{orient:"vertical",gutter:10}},[o("flexbox-item",[o("flexbox",{attrs:{gutter:0}},[o("flexbox-item",{attrs:{span:1}}),t._v(" "),o("flexbox-item",{attrs:{span:4}},[t._v("角色名称:")]),t._v(" "),o("flexbox-item",[t._v(t._s(t.roinf.name))])],1)],1),t._v(" "),o("flexbox-item",[o("flexbox",{attrs:{gutter:0}},[o("flexbox-item",{attrs:{span:1}}),t._v(" "),o("flexbox-item",{attrs:{span:4}},[t._v("角色描述:")]),t._v(" "),o("flexbox-item",[t._v(t._s(t.roinf.descr))])],1)],1)],1)],1)]),t._v(" "),o("footer",[o("div",{attrs:{align:"center"}},[o("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.backi()}}},[t._v("返回")])],1)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div2"},[n("span",[t._v("角色信息:")])])}],d={render:c,staticRenderFns:l},u=d,f=n("VU/8"),p=o,x=f(s,u,!1,p,null,null);e.default=x.exports},lDTZ:function(t,e,n){var o=n("Myaf");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("da3311d4",o,!0,{})}});