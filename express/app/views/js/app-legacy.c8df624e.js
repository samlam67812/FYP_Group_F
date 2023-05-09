(function(){"use strict";var e={8098:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(7121),i=n(9812);function o(e,t,n,a,o,l){var r=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(r)}var l=n(5893),r={class:"controlPanel",style:{display:"flex","justify-content":"center"}},s={class:"stepContent"},u={class:"stepContent"},c={class:"stepOne"},m=(0,i._)("mark",null,"explore query optimization results.",-1),d=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),_=(0,i._)("br",null,null,-1),p=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"},[(0,i.Uk)(" Before actually runnning the nngp model and compare with the PostgreSQL Planner, "),(0,i._)("br"),(0,i.Uk)(" First, you might generate sets of training and testing queries for exploration. "),(0,i._)("br"),(0,i.Uk)(" If you do not wish to generate query, you can still use the built in query sets. "),(0,i._)("br"),(0,i.Uk)(" Choose the Schema: TPCDS / IMDB provided"),(0,i._)("br"),(0,i.Uk)(" min-max numbers of joining: "),(0,i._)("br"),(0,i.Uk)(" Equi-join and Non-equi-join ratio: "),(0,i._)("br"),(0,i.Uk)(" Train and Test query ratio: "),(0,i._)("br"),(0,i.Uk)(" After selecting all required parameters, server will generate the query. "),(0,i._)("br"),(0,i.Uk)(" You can now move to next steps ")])],-1),g={class:"stepContent"},f={class:"paraSelect"},k={class:"selection"},y=(0,i._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),v={class:"selection"},w=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),b={class:"selection"},S=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),x={class:"slideControl"},C={class:"slideControl"},D=(0,i._)("br",null,null,-1),U={class:"selection"},j=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),W={class:"selection"},T=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),q={class:"selection"},I=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),N={class:"selection"},P=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),M={class:"buttonContainer"},Q={class:"highlightText"},V={class:"highlightText"},G={class:"highlightText"},O={class:"highlightText"},z={class:"schemaDisplay"},F=(0,i._)("br",null,null,-1),E={class:"schemaDisplay"},H=(0,i._)("br",null,null,-1),B={key:2,class:"schemaRemind"},Y={class:"highlightText"},Z={class:"highlightText"},L={class:"highlightText"},A={class:"highlightText"},J=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),R=(0,i._)("br",null,null,-1),K=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1),X={key:0};function $(e,t,n,a,o,$){var ee=this,te=(0,i.up)("a-layout-header"),ne=(0,i.up)("a-step"),ae=(0,i.up)("a-steps"),ie=(0,i.up)("a-button"),oe=(0,i.up)("a-descriptions-item"),le=(0,i.up)("a-descriptions"),re=(0,i.up)("a-divider"),se=(0,i.up)("a-select"),ue=(0,i.up)("a-slider"),ce=(0,i.up)("a-cascader"),me=(0,i.up)("a-card"),de=(0,i.up)("a-modal"),he=(0,i.up)("a-switch"),_e=(0,i.up)("a-table"),pe=(0,i.up)("a-image"),ge=(0,i.up)("a-col"),fe=(0,i.up)("a-row"),ke=(0,i.up)("a-back-top"),ye=(0,i.up)("a-layout-content"),ve=(0,i.up)("a-layout-footer"),we=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(we,{class:"main_page"},{default:(0,i.w5)((function(){return[(0,i.Wm)(te,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((function(){return[(0,i._)("h1",null,(0,l.zw)($.msg),1)]})),_:1}),(0,i.Wm)(ye,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(fe,{justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(ge,{span:18},{default:(0,i.w5)((function(){return[(0,i._)("div",r,[(0,i.Wm)(me,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((function(){return[o.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(ae,{current:o.currentStep,"onUpdate:current":t[0]||(t[0]=function(e){return o.currentStep=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(ne,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(ne,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(ne,{title:"Step 3",description:"Retreiving result"})]})),_:1},8,["current"]),(0,i._)("div",s,[0===o.currentStep?((0,i.wg)(),(0,i.j4)(le,{key:0,title:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(oe,null,{default:(0,i.w5)((function(){return[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Uk)(" This project aims to assist researchers to select queries, choose datasets with availiable models to "),m,d,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,i.Uk)("Know how to use?"),_,(0,i.Uk)("Just click the "),(0,i.Wm)(ie,{style:{"margin-right":"3px","margin-left":"3px"},onClick:$.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])]})),_:1})]})),_:1})):(0,i.kq)("",!0)]),1===o.currentStep?((0,i.wg)(),(0,i.j4)(le,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(oe,null,{default:(0,i.w5)((function(){return[p]})),_:1})]})),_:1})):(0,i.kq)("",!0),(0,i._)("div",g,[2===o.currentStep?((0,i.wg)(),(0,i.j4)(le,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(oe,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" After ")]})),_:1})]})),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),o.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(ie,{style:{"margin-left":"3px"},onClick:$.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"])],64)),(0,i._)("div",f,[(0,i.Wm)(re,{style:{"background-color":"#00BFFF"}}),o.isGenerate?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",k,[y,(0,i.Wm)(se,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectDataSet=e}),onChange:$.changeDataSet,options:o.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",v,[w,(0,i.Wm)(se,{modelValue:o.min_join,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.min_join=e}),onChange:$.changeMin,options:o.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",b,[S,(0,i.Wm)(se,{modelValue:o.max_join,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.max_join=e}),onChange:$.changeMax,options:o.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",x,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,l.zw)(ee.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,l.zw)(100-ee.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(ue,{value:o.train_ratio,"onUpdate:value":t[4]||(t[4]=function(e){return o.train_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,i._)("div",C,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,l.zw)(ee.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,l.zw)(100-ee.join_ratio)+"%",1),(0,i.Uk)("] ")]),D,(0,i.Wm)(ue,{value:o.join_ratio,"onUpdate:value":t[5]||(t[5]=function(e){return o.join_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,i.Wm)(ie,{type:"primary",ghost:"",onClick:$.ratioSelection},{default:(0,i.w5)((function(){return[(0,i.Uk)("Generate")]})),_:1},8,["onClick"]),(0,i.Wm)(ie,{type:"primary",style:{"margin-left":"6px"},onClick:$.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Testing")]})),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),o.isGenerate?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",U,[j,(0,i.Wm)(se,{modelValue:o.selectModel,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.selectModel=e}),onChange:$.changeModel,options:o.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",W,[T,(0,i.Wm)(se,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.selectDataSet=e}),onChange:$.changeDataSet,options:o.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",q,[I,(0,i.Wm)(ce,{modelValue:o.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.selectQuery=e}),onChange:$.changeQuery,options:o.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",N,[P,(0,i.Wm)(se,{modelValue:o.selectQueryNum,"onUpdate:modelValue":t[9]||(t[9]=function(e){return o.selectQueryNum=e}),onChange:$.changeQueryNum,options:o.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",M,[(0,i.Wm)(ie,{type:"primary",onClick:$.confirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Run Model")]})),_:1},8,["onClick"]),(0,i.Wm)(ie,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:$.clean},{default:(0,i.w5)((function(){return[(0,i.Uk)("Clean Data")]})),_:1},8,["onClick"]),(0,i.Wm)(ie,{style:{"margin-left":"6px"},type:"dashed",onClick:$.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Generate")]})),_:1},8,["onClick"])])],64))])]})),_:1})]),(0,i.Wm)(re,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(de,{visible:o.modelVisible,"onUpdate:visible":t[10]||(t[10]=function(e){return o.modelVisible=e}),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:$.runModel},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",Q,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",V,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",G,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",O,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. ")])]})),_:1},8,["visible","onOk"]),"IMDB"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",z,[(0,i._)("span",null,"Dataset: "+(0,l.zw)(ee.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(he,{checked:o.checked,"onUpdate:checked":t[11]||(t[11]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(_e,{key:0,columns:o.tableSchema,dataSource:o.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),F,o.checked?((0,i.wg)(),(0,i.j4)(pe,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",E,[(0,i._)("span",null," Dataset: "+(0,l.zw)(ee.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(he,{checked:o.checked,"onUpdate:checked":t[12]||(t[12]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(_e,{key:0,columns:o.tableSchema,dataSource:o.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),H,o.checked?((0,i.wg)(),(0,i.j4)(pe,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",B,"Schema will be shown when you select the dataset")),(0,i.Wm)(re,{style:{"background-color":"#00BFFF"}}),o.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",Y,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",Z,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",L,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",A,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(ie,{onClick:t[13]||(t[13]=function(e){$.generateImage()})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" image")]})),_:1})]),o.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[J,(0,i.Wm)(pe,{height:225,width:550,src:$.avgImage},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:550,src:$.planImage},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:550,src:$.execImage},null,8,["src"]),R,K,(0,i.Wm)(pe,{height:225,width:350,src:o.var_exec_low},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:o.var_exec_high},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:o.var_plan_low},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:o.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(_e,{columns:o.reponseDataColumns,dataSource:o.displayData,onChange:$.headerChange},{bodyCell:(0,i.w5)((function(e){var t=e.column;return["operation"===t.key?((0,i.wg)(),(0,i.iD)("a",X,"action")):(0,i.kq)("",!0)]})),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)]})),_:1})]})),_:1}),(0,i.Wm)(ke)]})),_:1}),(0,i.Wm)(ve,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" @seem4999 ")]})),_:1})]})),_:1})}n(2222),n(2707),n(1249);var ee=[{label:"NNGP",value:"NNGP"}],te=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],ne=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],ae=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],ie=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],oe=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],le=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"}],re=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],se=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],ue=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],ce=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}],me=n(280),de=n(6298),he=n(7422),_e=he.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),pe=function(){function e(){(0,me.Z)(this,e)}return(0,de.Z)(e,[{key:"get1",value:function(){return _e.get("api1")}},{key:"get2",value:function(){return _e.get("api2")}},{key:"get3",value:function(){return _e.get("api3")}},{key:"get4",value:function(){return _e.get("api4")}},{key:"getClean",value:function(){return _e.get("clean")}}]),e}(),ge=new pe,fe=n(521),ke=n(4134),ye=void 0,ve={name:"SelectComponent",setup:function(){var e=(0,fe.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data:function(){return{click_msg:"SEEM FYP Project",modelStrings:ee,dataStrings:te,queryStrings:ne,querynumStrings:ae,minStrings:ie,maxStrings:oe,tableSchema:re,ImdbSchema:se,TpcdSchema:ue,ForestSchema:ce,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:le,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg:function(){return this.click_msg},imgSource4:function(){return this.var_planImg},avgImage:function(){return console.log("average image link changed"),this.var_avgImg},planImage:function(){return this.var_planImg},execImage:function(){return this.var_execImg}},methods:{run4:function(){ge.get4().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},clean:function(){this.isShow=!1,ge.getClean().catch((function(e){console.log(e)}))},runModel:function(){var e=this;console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(_e.get("/runModel/".concat(this.selectDataSet,"-").concat(this.selectQuery,"-").concat(this.selectQueryNum)).then((function(t){console.log(t.data),e.displayData=t.data,e.isShow=!0})).catch((function(e){console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel:function(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet:function(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery:function(e){this.selectQuery=e},changeQueryNum:function(e){this.selectQueryNum=e},changeMin:function(e){this.min_join=e},changeMax:function(e){this.max_join=e,this.min_join>this.max_join&&(console.log("min: "+this.min_join),console.log("max: "+this.max_join),window.alert("Numbers of maximum join should not be smaller than that of minimum join"))},confirm:function(){this.modelVisible=!0},headerChange:function(e,t,n){ye.displayData=ye.displayData.sort(),console.log("params: ",e,t,n)},viewTutorial:function(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage:function(){var e=this,t=this.displayData.map((function(e){return e.Planning})),n=this.displayData.map((function(e){return e.NNGP_Planning})),a=this.displayData.map((function(e){return e.Execution})),i=this.displayData.map((function(e){return e.NNGP_Execution}));he.Z.post("api/image",{plan:t,execution:a,nngp_plan:n,nngp_execution:i}).then((function(t){var n=t.data;setTimeout((function(){e.isImageShow=!1,e.var_avgImg="",e.var_execImg="",e.var_planImg="",e.var_exec_high="",e.var_exec_low="",e.var_plan_high="",e.var_plan_low=""}),100),setTimeout((function(){e.var_avgImg=n.average,e.var_execImg=n.execution,e.var_planImg=n.planning,e.var_exec_high=n.high_exec,e.var_exec_low=n.low_exec,e.var_plan_high=n.high_exec,e.var_plan_low=n.low_plan,e.isImageShow=!0}),500),console.log(t)})).catch((function(e){console.log(e)}))},switchMode:function(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection:function(){var e=this,t=this.train_ratio/100,n=(100-this.train_ratio)/100,a=this.join_ratio/100,i=(100-this.join_ratio)/100,o=this.min_join,l=this.max_join;""===o&&(o=1),""===l&&(l=5),this.selectDataSet&&o<=l?he.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[t],test:[n]},non_join_query_ratio:{join:[a],non_join:[i]},min_max:{min:[o],max:[l]}}).then((function(t){console.log(t),e.response_message=t.data.message,e.show_message(e.response_message)})).catch((function(e){console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message:function(e){ke.ZP.success(e,[2])},next:function(){this.currentStep++},prev:function(){this.currentStep--}}},we=n(8998);const be=(0,we.Z)(ve,[["render",$]]);var Se=be,xe={name:"App",components:{SelectComponent:Se},data:function(){return{title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""}}};const Ce=(0,we.Z)(xe,[["render",o]]);var De=Ce,Ue=n(8e3),je=(n(2467),(0,a.ri)(De).use(Ue.ZP));je.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8098)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.c8df624e.js.map