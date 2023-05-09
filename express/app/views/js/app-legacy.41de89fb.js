(function(){"use strict";var e={487:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(7121),i=n(9812);function o(e,t,n,a,o,l){var r=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(r)}var l=n(5893),r={class:"controlPanel",style:{display:"flex","justify-content":"center"}},s={class:"stepContent"},u={class:"stepContent"},c={class:"stepOne"},m=(0,i._)("mark",null,"explore query optimization results.",-1),d=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),_=(0,i._)("br",null,null,-1),p=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"}," Before actually runnning the nngp model and compare with the PostgreSQL Planner, First, you might generate sets of training and testing queries for exploration. If you do not wish to generate query, you can still use the built in query sets. You need to choose bewteen the given Dataset: min-max numbers of joining: Equi-join and Non-equi-join ratio: Train and Test query ratio: After selecting all required parameters, server will generate the query for nngp model. You can now move to next steps ")],-1),g={class:"selection"},f=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),k={class:"selection"},y=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),v={class:"selection"},w=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),b={class:"selection"},S=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),x={class:"selection"},D=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),C={class:"selection"},j=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),U={class:"slideControl"},T={class:"slideControl"},W=(0,i._)("br",null,null,-1),I={class:"buttonContainer"},N={class:"highlightText"},q={class:"highlightText"},P={class:"highlightText"},M={class:"highlightText"},Q={class:"schemaDisplay"},V=(0,i._)("br",null,null,-1),z={class:"schemaDisplay"},O=(0,i._)("br",null,null,-1),F={key:2,class:"schemaRemind"},G={class:"highlightText"},E={class:"highlightText"},H={class:"highlightText"},Y={class:"highlightText"},B=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),Z=(0,i._)("br",null,null,-1),L=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1),A={key:0};function J(e,t,n,a,o,J){var R=this,K=(0,i.up)("a-layout-header"),X=(0,i.up)("a-step"),$=(0,i.up)("a-steps"),ee=(0,i.up)("a-button"),te=(0,i.up)("a-descriptions-item"),ne=(0,i.up)("a-descriptions"),ae=(0,i.up)("a-divider"),ie=(0,i.up)("a-select"),oe=(0,i.up)("a-cascader"),le=(0,i.up)("a-slider"),re=(0,i.up)("a-progress"),se=(0,i.up)("a-card"),ue=(0,i.up)("a-modal"),ce=(0,i.up)("a-switch"),me=(0,i.up)("a-table"),de=(0,i.up)("a-image"),he=(0,i.up)("a-col"),_e=(0,i.up)("a-row"),pe=(0,i.up)("a-back-top"),ge=(0,i.up)("a-layout-content"),fe=(0,i.up)("a-layout-footer"),ke=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(ke,{class:"main_page"},{default:(0,i.w5)((function(){return[(0,i.Wm)(K,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((function(){return[(0,i._)("h1",null,(0,l.zw)(J.msg),1)]})),_:1}),(0,i.Wm)(ge,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(_e,{justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(he,{span:18},{default:(0,i.w5)((function(){return[(0,i._)("div",r,[(0,i.Wm)(se,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((function(){return[o.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)($,{current:o.currentStep,"onUpdate:current":t[0]||(t[0]=function(e){return o.currentStep=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(X,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(X,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(X,{title:"Step 3",description:"Retreiving result"})]})),_:1},8,["current"]),(0,i._)("div",s,[0===o.currentStep?((0,i.wg)(),(0,i.j4)(ne,{key:0,title:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(te,null,{default:(0,i.w5)((function(){return[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Uk)(" This project aims to assist researchers to select queries, choose datasets with availiable models to "),m,d,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,i.Uk)("Know how to use?"),_,(0,i.Uk)("Just click the "),(0,i.Wm)(ee,{style:{"margin-right":"3px","margin-left":"3px"},onClick:J.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])]})),_:1})]})),_:1})):1===o.currentStep?((0,i.wg)(),(0,i.j4)(ne,{key:1},{default:(0,i.w5)((function(){return[(0,i.Wm)(te,null,{default:(0,i.w5)((function(){return[p]})),_:1})]})),_:1})):2===o.currentStep?((0,i.wg)(),(0,i.j4)(ne,{key:2},{default:(0,i.w5)((function(){return[(0,i.Wm)(te,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" After ")]})),_:1})]})),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),o.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(ee,{style:{"margin-left":"3px"},onClick:J.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"])],64)),(0,i._)("div",null,[(0,i.Wm)(ae,{style:{"background-color":"#00BFFF"}}),o.isTrain?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",null,[(0,i.Wm)(re,{type:"circle",percent:75,format:function(e){return"".concat(e," Days")}},null,8,["format"]),(0,i.Wm)(re,{type:"circle",percent:100,format:function(){return"Done"}},null,8,["format"])]),(0,i.Wm)(ee,{type:"primary",onClick:J.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Train Model")]})),_:1},8,["onClick"])],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",g,[f,(0,i.Wm)(ie,{modelValue:o.selectModel,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectModel=e}),onChange:J.changeModel,options:o.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",k,[y,(0,i.Wm)(ie,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.selectDataSet=e}),onChange:J.changeDataSet,options:o.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",v,[w,(0,i.Wm)(oe,{modelValue:o.selectQuery,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.selectQuery=e}),onChange:J.changeQuery,options:o.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",b,[S,(0,i.Wm)(ie,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.selectDataSet=e}),onChange:J.changeMin,options:o.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",x,[D,(0,i.Wm)(ie,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.selectDataSet=e}),onChange:J.changeMax,options:o.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",C,[j,(0,i.Wm)(ie,{modelValue:o.selectQueryNum,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.selectQueryNum=e}),onChange:J.changeQueryNum,options:o.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",U,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,l.zw)(R.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,l.zw)(100-R.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(le,{value:o.train_ratio,"onUpdate:value":t[7]||(t[7]=function(e){return o.train_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,i._)("div",T,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,l.zw)(R.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,l.zw)(100-R.join_ratio)+"%",1),(0,i.Uk)("] ")]),W,(0,i.Wm)(le,{value:o.join_ratio,"onUpdate:value":t[8]||(t[8]=function(e){return o.join_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,i._)("div",I,[(0,i.Wm)(ee,{type:"primary",onClick:J.confirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Run Model ")]})),_:1},8,["onClick"]),(0,i.Wm)(ee,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:J.clean},{default:(0,i.w5)((function(){return[(0,i.Uk)("Clean Data")]})),_:1},8,["onClick"]),(0,i.Wm)(ee,{style:{"margin-left":"6px"},type:"dashed",onClick:J.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Training")]})),_:1},8,["onClick"]),(0,i.Wm)(ee,{type:"primary",ghost:"",onClick:J.ratioSelection},{default:(0,i.w5)((function(){return[(0,i.Uk)("Generate")]})),_:1},8,["onClick"])])],64))])]})),_:1})]),(0,i.Wm)(ae,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(ue,{visible:o.modelVisible,"onUpdate:visible":t[9]||(t[9]=function(e){return o.modelVisible=e}),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:J.runModel},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",N,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",q,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",P,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",M,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. ")])]})),_:1},8,["visible","onOk"]),"IMDB"==o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",Q,[(0,i._)("span",null,"Dataset: "+(0,l.zw)(R.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(ce,{checked:o.checked,"onUpdate:checked":t[10]||(t[10]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(me,{key:0,columns:o.tableSchema,dataSource:o.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),V,o.checked?((0,i.wg)(),(0,i.j4)(de,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",z,[(0,i._)("span",null," Dataset: "+(0,l.zw)(R.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(ce,{checked:o.checked,"onUpdate:checked":t[11]||(t[11]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(me,{key:0,columns:o.tableSchema,dataSource:o.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),O,o.checked?((0,i.wg)(),(0,i.j4)(de,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",F,"Schema will be shown when you select the dataset")),(0,i.Wm)(ae,{style:{"background-color":"#00BFFF"}}),o.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",G,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",E,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",H,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",Y,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(ee,{onClick:t[12]||(t[12]=function(e){J.generateImage()})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" image")]})),_:1})]),o.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[B,(0,i.Wm)(de,{height:225,width:550,src:J.avgImage},null,8,["src"]),(0,i.Wm)(de,{height:225,width:550,src:J.planImage},null,8,["src"]),(0,i.Wm)(de,{height:225,width:550,src:J.execImage},null,8,["src"]),Z,L,(0,i.Wm)(de,{height:225,width:350,src:o.var_exec_low},null,8,["src"]),(0,i.Wm)(de,{height:225,width:350,src:o.var_exec_high},null,8,["src"]),(0,i.Wm)(de,{height:225,width:350,src:o.var_plan_low},null,8,["src"]),(0,i.Wm)(de,{height:225,width:350,src:o.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(me,{columns:o.reponseDataColumns,dataSource:o.displayData,onChange:J.headerChange},{bodyCell:(0,i.w5)((function(e){var t=e.column;return["operation"===t.key?((0,i.wg)(),(0,i.iD)("a",A,"action")):(0,i.kq)("",!0)]})),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)]})),_:1})]})),_:1}),(0,i.Wm)(pe)]})),_:1}),(0,i.Wm)(fe,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" @seem4999 ")]})),_:1})]})),_:1})}n(2222),n(2707),n(1249);var R=[{label:"NNGP",value:"NNGP"}],K=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],X=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],$=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],ee=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],te=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ne=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"}],ae=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],ie=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],oe=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],le=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}],re=n(280),se=n(6298),ue=n(7422),ce=ue.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),me=function(){function e(){(0,re.Z)(this,e)}return(0,se.Z)(e,[{key:"get1",value:function(){return ce.get("api1")}},{key:"get2",value:function(){return ce.get("api2")}},{key:"get3",value:function(){return ce.get("api3")}},{key:"get4",value:function(){return ce.get("api4")}},{key:"getClean",value:function(){return ce.get("clean")}}]),e}(),de=new me,he=n(521),_e=void 0,pe={name:"SelectComponent",setup:function(){var e=(0,he.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data:function(){return{click_msg:"SEEM FYP Project",modelStrings:R,dataStrings:K,queryStrings:X,querynumStrings:$,minStrings:ee,maxStrings:te,tableSchema:ae,ImdbSchema:ie,TpcdSchema:oe,ForestSchema:le,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:ne,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1}},components:{},computed:{msg:function(){return this.click_msg},imgSource4:function(){return this.var_planImg},avgImage:function(){return console.log("average image link changed"),this.var_avgImg},planImage:function(){return this.var_planImg},execImage:function(){return this.var_execImg}},methods:{run4:function(){de.get4().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},clean:function(){this.isShow=!1,de.getClean().catch((function(e){console.log(e)}))},runModel:function(){var e=this;console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(ce.get("/runModel/".concat(this.selectDataSet,"-").concat(this.selectQuery,"-").concat(this.selectQueryNum)).then((function(t){console.log(t.data),e.displayData=t.data,e.isShow=!0})).catch((function(e){console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel:function(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet:function(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery:function(e){this.selectQuery=e},changeQueryNum:function(e){this.selectQueryNum=e},changeMin:function(e){this.min_join=e},changeMax:function(e){this.min_join<=this.max_join?this.max_join=e:window.alert("Numbers of maximum join should not be smaller than that of minimum join")},confirm:function(){this.modelVisible=!0},headerChange:function(e,t,n){_e.displayData=_e.displayData.sort(),console.log("params: ",e,t,n)},viewTutorial:function(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage:function(){var e=this,t=this.displayData.map((function(e){return e.Planning})),n=this.displayData.map((function(e){return e.NNGP_Planning})),a=this.displayData.map((function(e){return e.Execution})),i=this.displayData.map((function(e){return e.NNGP_Execution}));ue.Z.post("api/image",{plan:t,execution:a,nngp_plan:n,nngp_execution:i}).then((function(t){var n=t.data;setTimeout((function(){e.isImageShow=!1,e.var_avgImg="",e.var_execImg="",e.var_planImg="",e.var_exec_high="",e.var_exec_low="",e.var_plan_high="",e.var_plan_low=""}),100),setTimeout((function(){e.var_avgImg=n.average,e.var_execImg=n.execution,e.var_planImg=n.planning,e.var_exec_high=n.high_exec,e.var_exec_low=n.low_exec,e.var_plan_high=n.high_exec,e.var_plan_low=n.low_plan,e.isImageShow=!0}),500),console.log(t)})).catch((function(e){console.log(e)}))},switchMode:function(){this.isTrain?this.isTrain=!1:this.isTrain=!0},ratioSelection:function(){var e=this.train_ratio/100,t=(100-this.train_ratio)/100,n=this.join_ratio/100,a=(100-this.join_ratio)/100,i=this.min_join,o=this.max_join;""===i&&(i=1),""===o&&(o=5),this.selectDataSet&&i<=o?ue.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[n],non_join:[a]},min_max:{min:[i],max:[o]}}).then((function(e){console.log(e),e.message&&console.log("hello world")})).catch((function(e){console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")}}},ge=n(8998);const fe=(0,ge.Z)(pe,[["render",J]]);var ke=fe,ye={name:"App",components:{SelectComponent:ke},data:function(){return{title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""}}};const ve=(0,ge.Z)(ye,[["render",o]]);var we=ve,be=n(1853),Se=(n(2467),(0,a.ri)(we).use(be.ZP));Se.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(487)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.41de89fb.js.map