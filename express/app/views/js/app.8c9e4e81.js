(function(){"use strict";var e={9605:function(e,t,a){a(6992),a(8674),a(7727);var n=a(4220),l=a(9812);function i(e,t,a,n,i,o){const s=(0,l.up)("SelectComponent");return(0,l.wg)(),(0,l.j4)(s)}var o=a(5893);const s={class:"controlPanel",style:{display:"flex","justify-content":"center"}},r={class:"selection"},c=(0,l._)("span",{class:"Option_data_title"},"Choose a Model: ",-1),u={class:"selection"},d=(0,l._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),m={class:"selection"},h=(0,l._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),_={class:"selection"},p=(0,l._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),g={class:"slideControl"},y=(0,l._)("br",null,null,-1),f={class:"slideControl"},k=(0,l._)("br",null,null,-1),w={class:"buttonContainer"},v={class:"stepContent"},b={class:"selection"},S={class:"Option_data_title"},x=(0,l._)("br",null,null,-1),D=(0,l._)("br",null,null,-1),C=(0,l._)("br",null,null,-1),j=(0,l._)("br",null,null,-1),I=(0,l._)("br",null,null,-1),W=(0,l._)("pre",null,"                                        You need to choose bewteen the given Dataset: \n                                        min-max numbers of joining: \n                                        Equi-join and Non-equi-join ratio:\n                                        Train and Test query ratio: \n                                        After selecting all required parameters, server will generate the query for nngp model.\n                                        You can now move to next steps\n                                        ",-1),N={class:"highlightText"},T={class:"highlightText"},P={class:"highlightText"},U={class:"highlightText"},q={class:"schemeDisplay"},M=(0,l._)("br",null,null,-1),Q={class:"schemeDisplay"},z=(0,l._)("br",null,null,-1),O={key:2},F={class:"highlightText"},V={class:"highlightText"},G={class:"highlightText"},E={class:"highlightText"},H=(0,l._)("br",null,null,-1),Y=(0,l._)("span",null,"Here is lowest 10 and highest 10 performance bewteen PostgreSQL Planner and NNGP model",-1),B={key:0};function L(e,t,a,n,i,L){const Z=(0,l.up)("a-layout-header"),A=(0,l.up)("a-cascader"),R=(0,l.up)("a-slider"),$=(0,l.up)("a-button"),J=(0,l.up)("a-progress"),K=(0,l.up)("a-divider"),X=(0,l.up)("a-step"),ee=(0,l.up)("a-steps"),te=(0,l.up)("a-descriptions-item"),ae=(0,l.up)("a-descriptions"),ne=(0,l.up)("a-card"),le=(0,l.up)("a-modal"),ie=(0,l.up)("a-switch"),oe=(0,l.up)("a-table"),se=(0,l.up)("a-image"),re=(0,l.up)("a-col"),ce=(0,l.up)("a-row"),ue=(0,l.up)("a-back-top"),de=(0,l.up)("a-layout-content"),me=(0,l.up)("a-layout-footer"),he=(0,l.up)("a-layout");return(0,l.wg)(),(0,l.j4)(he,{class:"main_page"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{style:{"background-color":"#00BFFF"}},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,o.zw)(L.msg),1)])),_:1}),(0,l.Wm)(de,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ce,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(re,{span:18},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(ne,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,l.w5)((()=>[i.isTrain?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",null,[(0,l.Wm)(J,{type:"circle",percent:75,format:e=>`${e} Days`},null,8,["format"]),(0,l.Wm)(J,{type:"circle",percent:100,format:()=>"Done"},null,8,["format"])]),(0,l.Wm)($,{type:"primary",onClick:L.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("Train Model")])),_:1},8,["onClick"])],64)):((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",r,[c,(0,l.Wm)(A,{modelValue:i.selectModel,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectModel=e),onChange:L.changeModel,options:i.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",u,[d,(0,l.Wm)(A,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=e=>i.selectDataSet=e),onChange:L.changeDataSet,options:i.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",m,[h,(0,l.Wm)(A,{modelValue:i.selectQuery,"onUpdate:modelValue":t[2]||(t[2]=e=>i.selectQuery=e),onChange:L.changeQuery,options:i.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",_,[p,(0,l.Wm)(A,{modelValue:i.selectQueryNum,"onUpdate:modelValue":t[3]||(t[3]=e=>i.selectQueryNum=e),onChange:L.changeQueryNum,options:i.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",g,[(0,l._)("span",null,"Move the slider for train_test ratio: [train: "+(0,o.zw)(this.test_ratio)+", non-join: "+(0,o.zw)(100-this.test_ratio)+"]",1),y,(0,l.Wm)(R,{value:i.train_ratio,"onUpdate:value":t[4]||(t[4]=e=>i.train_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!0,step:5},null,8,["value","marks"])]),(0,l._)("div",f,[(0,l._)("span",null,"Move the slider for Join_Non-Join query ratio: [join: "+(0,o.zw)(this.join_ratio)+", non-join: "+(0,o.zw)(100-this.join_ratio)+"]",1),k,(0,l.Wm)(R,{value:i.join_ratio,"onUpdate:value":t[5]||(t[5]=e=>i.join_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!0,step:5},null,8,["value","marks"])]),(0,l._)("div",w,[(0,l.Wm)($,{type:"primary",onClick:L.confirm},{default:(0,l.w5)((()=>[(0,l.Uk)("Run Model ")])),_:1},8,["onClick"]),(0,l.Wm)($,{style:{"margin-right":"6px","margin-left":"6px"},onClick:L.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,l.Wm)($,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:L.clean},{default:(0,l.w5)((()=>[(0,l.Uk)("Clean Data")])),_:1},8,["onClick"]),(0,l.Wm)($,{style:{"margin-left":"6px"},type:"dashed",onClick:L.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("Training")])),_:1},8,["onClick"]),(0,l.Wm)($,{type:"primary",onClick:L.ratioSelection},{default:(0,l.w5)((()=>[(0,l.Uk)("ratio")])),_:1},8,["onClick"])])],64)),(0,l._)("div",null,[(0,l.Wm)(K,{style:{"background-color":"#00BFFF"}}),i.showTutorial?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(ee,{current:i.currentStep,"onUpdate:current":t[6]||(t[6]=e=>i.currentStep=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{title:"Step 1",description:"Introduction"}),(0,l.Wm)(X,{title:"Step 2",description:"Confirm to run"}),(0,l.Wm)(X,{title:"Step 3",description:"Retreiving result"})])),_:1},8,["current"]),(0,l._)("div",v,[0===i.currentStep?((0,l.wg)(),(0,l.j4)(ae,{key:0,title:""},{default:(0,l.w5)((()=>[(0,l.Wm)(te,null,{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l._)("span",S,[(0,l.Uk)(" This project aims to assist researchers to select queries, choose datasets with availiable models to explore query optimization results. "),x,(0,l.Uk)(" You may follow the following steps to investigate performance of NNGP model in optimizing query planning and execution. "),D,(0,l.Uk)(" If you know how to use this gui, you may click the "),(0,l.Wm)($,{style:{"margin-right":"3px","margin-left":"3px"},onClick:L.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,l.Uk)(" to close this guidance. ")])])])),_:1})])),_:1})):1===i.currentStep?((0,l.wg)(),(0,l.j4)(ae,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(te,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Before actually runnning the nngp model and compare with the PostgreSQL Planner, "),C,(0,l.Uk)(" First, you might generate sets of training and testing queries for exploration. "),j,(0,l.Uk)(" If you do not wish to generate query, you can still use the built in query sets. "),I,W])),_:1})])),_:1})):2===i.currentStep?((0,l.wg)(),(0,l.j4)(ae,{key:2},{default:(0,l.w5)((()=>[(0,l.Wm)(te,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" After ")])),_:1})])),_:1})):(0,l.kq)("",!0)])],64)):(0,l.kq)("",!0)])])),_:1})]),(0,l.Wm)(K,{style:{"background-color":"#00BFFF"}}),(0,l.Wm)(le,{visible:i.modelVisible,"onUpdate:visible":t[7]||(t[7]=e=>i.modelVisible=e),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:L.runModel},{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l.Uk)(" You are running model "),(0,l._)("span",N,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",T,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",P,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",U,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. ")])])),_:1},8,["visible","onOk"]),"IMDB"==i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",q,[(0,l._)("span",null,"Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(ie,{checked:i.checked,"onUpdate:checked":t[8]||(t[8]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(oe,{key:0,columns:i.tableSchema,dataSource:i.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),M,i.checked?((0,l.wg)(),(0,l.j4)(se,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,l.kq)("",!0)],64)):"TPCDS"===i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",Q,[(0,l._)("span",null," Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(ie,{checked:i.checked,"onUpdate:checked":t[9]||(t[9]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(oe,{key:0,columns:i.tableSchema,dataSource:i.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),z,i.checked?((0,l.wg)(),(0,l.j4)(se,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,l.kq)("",!0)],64)):((0,l.wg)(),(0,l.iD)("span",O,"Schema will be shown when you select the dataset")),(0,l.Wm)(K,{style:{"background-color":"#00BFFF"}}),i.isShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[(0,l._)("p",null,[(0,l.Uk)(" Result of running model "),(0,l._)("span",F,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",V,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",G,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",E,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. "),(0,l.Wm)($,{onClick:t[10]||(t[10]=e=>{L.generateImage()})},{default:(0,l.w5)((()=>[(0,l.Uk)(" image")])),_:1})]),i.isImageShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(se,{height:250,width:500,src:L.avgImage},null,8,["src"]),(0,l.Wm)(se,{height:250,width:500,src:L.planImage},null,8,["src"]),(0,l.Wm)(se,{height:250,width:500,src:L.execImage},null,8,["src"]),H,Y,(0,l.Wm)(se,{height:250,width:350,src:i.var_exec_low},null,8,["src"]),(0,l.Wm)(se,{height:250,width:350,src:i.var_exec_high},null,8,["src"]),(0,l.Wm)(se,{height:250,width:350,src:i.var_plan_low},null,8,["src"]),(0,l.Wm)(se,{height:250,width:350,src:i.var_plan_high},null,8,["src"])],64)):(0,l.kq)("",!0),(0,l.Wm)(oe,{columns:i.reponseDataColumns,dataSource:i.displayData,onChange:L.headerChange},{bodyCell:(0,l.w5)((({column:e})=>["operation"===e.key?((0,l.wg)(),(0,l.iD)("a",B,"action")):(0,l.kq)("",!0)])),_:1},8,["columns","dataSource","onChange"])],64)):(0,l.kq)("",!0)])),_:1})])),_:1}),(0,l.Wm)(ue)])),_:1}),(0,l.Wm)(me)])),_:1})}a(2707);const Z=[{label:"NNGP",value:"NNGP"},{label:"Model1",value:"Model1"},{label:"Model2",value:"Model2"},{label:"Model3",value:"Model3"}],A=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"},{label:"Forest",value:"Forest"},{label:"Dataset3",value:"Dataset3"}],R=[{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],$=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],J=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"actions",dataIndex:"actions"}],K=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],X=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],ee=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],te=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}];var ae=a(7422);const ne=ae.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}});class le{get1(){return ne.get("api1")}get2(){return ne.get("api2")}get3(){return ne.get("api3")}get4(){return ne.get("api4")}getClean(){return ne.get("clean")}}const ie=new le;var oe=a(521),se={name:"SelectComponent",setup(){const e=(0,oe.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data(){return{click_msg:"SEEM FYP Project",modelStrings:Z,dataStrings:A,queryStrings:R,querynumStrings:$,tableSchema:K,ImdbSchema:X,TpcdSchema:ee,ForestSchema:te,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:J,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1}},components:{},computed:{msg(){return this.click_msg},imgSource4(){return this.var_planImg},avgImage(){return console.log("average image link changed"),this.var_avgImg},planImage(){return this.var_planImg},execImage(){return this.var_execImg}},methods:{run4(){ie.get4().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},clean(){this.isShow=!1,ie.getClean().catch((e=>{console.log(e)}))},runModel(){console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(ne.get(`/runModel/${this.selectDataSet}-${this.selectQuery}-${this.selectQueryNum}`).then((e=>{console.log(e.data),this.displayData=e.data,this.isShow=!0})).catch((e=>{console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet(e){this.selectDataSet=e[0],"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery(e){this.selectQuery=e},changeQueryNum(e){this.selectQueryNum=e},confirm(){this.modelVisible=!0},headerChange:(e,t,a)=>{(void 0).displayData=(void 0).displayData.sort(),console.log("params: ",e,t,a)},viewTutorial(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage(){const e=this.displayData.map((e=>e.Planning)),t=this.displayData.map((e=>e.NNGP_Planning)),a=this.displayData.map((e=>e.Execution)),n=this.displayData.map((e=>e.NNGP_Execution));ae.Z.post("api/image",{plan:e,execution:a,nngp_plan:t,nngp_execution:n}).then((e=>{let t=e.data;setTimeout((()=>{this.isImageShow=!1,this.var_avgImg="",this.var_execImg="",this.var_planImg=""}),100),setTimeout((()=>{this.var_avgImg=t.average,this.var_execImg=t.execution,this.var_planImg=t.planning,this.var_exec_high=t.high_exec,this.var_exec_low=t.low_exec,this.var_plan_high=t.high_exec,this.var_plan_low=t.low_plan,this.isImageShow=!0}),500),console.log(e)})).catch((e=>{console.log(e)}))},switchMode(){this.isTrain?this.isTrain=!1:this.isTrain=!0},ratioSelection(){let e=this.train_ratio/100,t=(100-this.train_ratio)/100,a=this.join_ratio/100,n=(100-this.join_ratio)/100,l=this.min_join,i=this.max_join;""===l&&(l=1),""===i&&(i=5),console.log("train_percent: "+e),console.log("test_percent: "+t),console.log("join_percent: "+a),console.log("non_join_percent: "+n),this.selectDataSet||window.alert("Please select all parameters"),ae.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[a],non_join:[n]},min_max:{min:[l],max:[i]}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},re=a(8998);const ce=(0,re.Z)(se,[["render",L]]);var ue=ce,de={name:"App",components:{SelectComponent:ue},data:()=>({title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""})};const me=(0,re.Z)(de,[["render",i]]);var he=me,_e=a(8322);a(2467);const pe=(0,n.ri)(he).use(_e.ZP);pe.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,i,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9605)}));n=a.O(n)})();
//# sourceMappingURL=app.8c9e4e81.js.map