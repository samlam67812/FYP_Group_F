(function(){"use strict";var e={9706:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(7121),i=n(9812);function o(e,t,n,a,o,l){var r=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(r)}var l=n(5893),r={class:"controlPanel",style:{display:"flex","justify-content":"center"}},c={class:"selection"},s=(0,i._)("span",{class:"Option_data_title"},"Choose a Model: ",-1),u={class:"selection"},d=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),m={class:"selection"},p=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),_={class:"selection"},h=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),f={class:"slideControl"},g=(0,i._)("span",null,"Move the slider for train_test ratio: ",-1),y={class:"slideControl"},k=(0,i._)("span",null,"Move the slider for Join_Non-Join query ratio: ",-1),v={class:"buttonContainer"},w={class:"stepContent"},b=(0,i._)("div",{class:"selection"},[(0,i._)("span",{class:"Option_data_title"}," This project aims to assist researchers to select queries, choose datasets with availiable models to explore query optimization results. ")],-1),S={class:"highlightText"},x={class:"highlightText"},D={class:"highlightText"},C={class:"highlightText"},I={class:"schemeDisplay"},T=(0,i._)("br",null,null,-1),W={class:"schemeDisplay"},N=(0,i._)("br",null,null,-1),M={key:2},P={class:"highlightText"},j={class:"highlightText"},U={class:"highlightText"},Q={class:"highlightText"},q={key:0};function O(e,t,n,a,o,O){var F=this,V=(0,i.up)("a-layout-header"),z=(0,i.up)("a-cascader"),G=(0,i.up)("a-slider"),E=(0,i.up)("a-button"),H=(0,i.up)("a-progress"),B=(0,i.up)("a-divider"),Y=(0,i.up)("a-step"),Z=(0,i.up)("a-steps"),L=(0,i.up)("a-descriptions-item"),R=(0,i.up)("a-descriptions"),A=(0,i.up)("a-card"),J=(0,i.up)("a-modal"),K=(0,i.up)("a-switch"),X=(0,i.up)("a-table"),$=(0,i.up)("a-image"),ee=(0,i.up)("a-col"),te=(0,i.up)("a-row"),ne=(0,i.up)("a-back-top"),ae=(0,i.up)("a-layout-content"),ie=(0,i.up)("a-layout-footer"),oe=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(oe,{class:"main_page"},{default:(0,i.w5)((function(){return[(0,i.Wm)(V,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((function(){return[(0,i._)("h1",null,(0,l.zw)(O.msg),1)]})),_:1}),(0,i.Wm)(ae,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(te,{justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(ee,{span:18},{default:(0,i.w5)((function(){return[(0,i._)("div",r,[(0,i.Wm)(A,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((function(){return[o.isTrain?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",null,[(0,i.Wm)(H,{type:"circle",percent:75,format:function(e){return"".concat(e," Days")}},null,8,["format"]),(0,i.Wm)(H,{type:"circle",percent:100,format:function(){return"Done"}},null,8,["format"])]),(0,i.Wm)(E,{type:"primary",onClick:O.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Train Model")]})),_:1},8,["onClick"])],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",c,[s,(0,i.Wm)(z,{modelValue:o.selectModel,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.selectModel=e}),onChange:O.changeModel,options:o.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",u,[d,(0,i.Wm)(z,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectDataSet=e}),onChange:O.changeDataSet,options:o.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",m,[p,(0,i.Wm)(z,{modelValue:o.selectQuery,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.selectQuery=e}),onChange:O.changeQuery,options:o.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",_,[h,(0,i.Wm)(z,{modelValue:o.selectQueryNum,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.selectQueryNum=e}),onChange:O.changeQueryNum,options:o.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",f,[g,(0,i.Wm)(G,{value:o.train_ratio,"onUpdate:value":t[4]||(t[4]=function(e){return o.train_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!0,step:5},null,8,["value","marks"])]),(0,i._)("div",y,[k,(0,i.Wm)(G,{value:o.join_ratio,"onUpdate:value":t[5]||(t[5]=function(e){return o.join_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!0,step:5},null,8,["value","marks"])]),(0,i._)("div",v,[(0,i.Wm)(E,{type:"primary",onClick:O.confirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Run Model ")]})),_:1},8,["onClick"]),(0,i.Wm)(E,{style:{"margin-right":"6px","margin-left":"6px"},onClick:O.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"]),(0,i.Wm)(E,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:O.clean},{default:(0,i.w5)((function(){return[(0,i.Uk)("Clean Data")]})),_:1},8,["onClick"]),(0,i.Wm)(E,{style:{"margin-left":"6px"},type:"dashed",onClick:O.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Training")]})),_:1},8,["onClick"]),(0,i.Wm)(E,{type:"primary",onClick:O.ratioSelection},{default:(0,i.w5)((function(){return[(0,i.Uk)("ratio")]})),_:1},8,["onClick"])])],64)),(0,i._)("div",null,[(0,i.Wm)(B,{style:{"background-color":"#00BFFF"}}),o.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(Z,{current:o.currentStep,"onUpdate:current":t[6]||(t[6]=function(e){return o.currentStep=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(Y,{title:"Step 2",description:"Confirm to run"}),(0,i.Wm)(Y,{title:"Step 3",description:"Retreiving result"})]})),_:1},8,["current"]),(0,i._)("div",w,[0===o.currentStep?((0,i.wg)(),(0,i.j4)(R,{key:0,title:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(L,null,{default:(0,i.w5)((function(){return[b]})),_:1})]})),_:1})):1===o.currentStep?((0,i.wg)(),(0,i.j4)(R,{key:1},{default:(0,i.w5)((function(){return[(0,i.Wm)(L,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" Click confirm to continue ")]})),_:1})]})),_:1})):((0,i.wg)(),(0,i.j4)(R,{key:2},{default:(0,i.w5)((function(){return[(0,i.Wm)(L,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" end of Guidance ")]})),_:1})]})),_:1}))])],64)):(0,i.kq)("",!0)])]})),_:1})]),(0,i.Wm)(B,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(J,{visible:o.modelVisible,"onUpdate:visible":t[7]||(t[7]=function(e){return o.modelVisible=e}),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:O.runModel},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",S,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",x,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",D,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",C,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. ")])]})),_:1},8,["visible","onOk"]),"IMDB"==o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",I,[(0,i._)("span",null,"Dataset: "+(0,l.zw)(F.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(K,{checked:o.checked,"onUpdate:checked":t[8]||(t[8]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(X,{key:0,columns:o.tableSchema,dataSource:o.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),T,o.checked?((0,i.wg)(),(0,i.j4)($,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",W,[(0,i._)("span",null," Dataset: "+(0,l.zw)(F.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(K,{checked:o.checked,"onUpdate:checked":t[9]||(t[9]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(X,{key:0,columns:o.tableSchema,dataSource:o.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),N,o.checked?((0,i.wg)(),(0,i.j4)($,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",M,"Schema will be shown when you select the dataset")),(0,i.Wm)(B,{style:{"background-color":"#00BFFF"}}),o.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",P,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",j,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",U,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",Q,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(E,{onClick:t[10]||(t[10]=function(e){O.generateImage()})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" image")]})),_:1})]),o.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)($,{height:250,width:550,src:O.avgImage},null,8,["src"]),(0,i.Wm)($,{height:250,width:550,src:O.planImage},null,8,["src"]),(0,i.Wm)($,{height:250,width:550,src:O.execImage},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(X,{columns:o.reponseDataColumns,dataSource:o.displayData,onChange:O.headerChange},{bodyCell:(0,i.w5)((function(e){var t=e.column;return["operation"===t.key?((0,i.wg)(),(0,i.iD)("a",q,"action")):(0,i.kq)("",!0)]})),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)]})),_:1})]})),_:1}),(0,i.Wm)(ne)]})),_:1}),(0,i.Wm)(ie)]})),_:1})}n(2222),n(2707),n(1249);var F=[{label:"NNGP",value:"NNGP"},{label:"Model1",value:"Model1"},{label:"Model2",value:"Model2"},{label:"Model3",value:"Model3"}],V=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"},{label:"Forest",value:"Forest"},{label:"Dataset3",value:"Dataset3"}],z=[{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],G=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],E=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"actions",dataIndex:"actions"}],H=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],B=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],Y=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],Z=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}],L=n(280),R=n(6298),A=n(7422),J=A.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),K=function(){function e(){(0,L.Z)(this,e)}return(0,R.Z)(e,[{key:"get1",value:function(){return J.get("api1")}},{key:"get2",value:function(){return J.get("api2")}},{key:"get3",value:function(){return J.get("api3")}},{key:"get4",value:function(){return J.get("api4")}},{key:"getClean",value:function(){return J.get("clean")}}]),e}(),X=new K,$=n(521),ee=void 0,te={name:"SelectComponent",setup:function(){var e=(0,$.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data:function(){return{click_msg:"SEEM FYP Project",modelStrings:F,dataStrings:V,queryStrings:z,querynumStrings:G,tableSchema:H,ImdbSchema:B,TpcdSchema:Y,ForestSchema:Z,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:E,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!1,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:""}},components:{},computed:{msg:function(){return this.click_msg},imgSource4:function(){return this.var_planImg},avgImage:function(){return console.log("average image link changed"),this.var_avgImg},planImage:function(){return this.var_planImg},execImage:function(){return this.var_execImg}},methods:{run4:function(){X.get4().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},clean:function(){this.isShow=!1,X.getClean().catch((function(e){console.log(e)}))},runModel:function(){var e=this;console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(J.get("/runModel/".concat(this.selectDataSet,"-").concat(this.selectQuery,"-").concat(this.selectQueryNum)).then((function(t){console.log(t.data),e.displayData=t.data,e.isShow=!0})).catch((function(e){console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel:function(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet:function(e){this.selectDataSet=e[0],"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery:function(e){this.selectQuery=e},changeQueryNum:function(e){this.selectQueryNum=e},confirm:function(){this.modelVisible=!0},headerChange:function(e,t,n){ee.displayData=ee.displayData.sort(),console.log("params: ",e,t,n)},viewTutorial:function(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage:function(){var e=this,t=this.displayData.map((function(e){return e.Planning})),n=this.displayData.map((function(e){return e.NNGP_Planning})),a=this.displayData.map((function(e){return e.Execution})),i=this.displayData.map((function(e){return e.NNGP_Execution}));A.Z.post("api/image",{plan:t,execution:a,nngp_plan:n,nngp_execution:i}).then((function(t){var n=t.data;setTimeout((function(){e.isImageShow=!1,e.var_avgImg="",e.var_execImg="",e.var_planImg=""}),100),setTimeout((function(){e.var_avgImg=n.average,e.var_execImg=n.execution,e.var_planImg=n.planning,e.var_exec_high=n.high_exec,e.var_exec_low=n.low_exec,e.var_plan_high=n.high_exec,e.var_plan_low=n.low_plan,e.isImageShow=!0}),500),console.log(t)})).catch((function(e){console.log(e)}))},switchMode:function(){this.isTrain?this.isTrain=!1:this.isTrain=!0},ratioSelection:function(){var e=this.train_ratio/100,t=1-t;console.log("train_percent: "+e),console.log("test_percent: "+t),this.selectDataSet||window.alert("Please select all parameters"),A.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:["0.7"],non_join:["0.3"]},min_max:{min:["3"],max:["5"]}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},ne=n(8998);const ae=(0,ne.Z)(te,[["render",O]]);var ie=ae,oe={name:"App",components:{SelectComponent:ie},data:function(){return{title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""}}};const le=(0,ne.Z)(oe,[["render",o]]);var re=le,ce=n(1853),se=(n(2467),(0,a.ri)(re).use(ce.ZP));se.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(r=!1,o<l&&(l=o));if(r){e.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],c=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var u=c(n)}for(t&&t(a);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9706)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.cc7bd9c7.js.map