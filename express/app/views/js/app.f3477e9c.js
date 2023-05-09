(function(){"use strict";var e={9429:function(e,t,a){a(6992),a(8674),a(7727);var n=a(4220),i=a(9812);function l(e,t,a,n,l,o){const s=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(s)}var o=a(5893);const s={class:"controlPanel",style:{display:"flex","justify-content":"center"}},r={class:"stepContent"},c={class:"stepContent"},u={class:"stepOne"},m=(0,i._)("mark",null,"explore query optimization results.",-1),d=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),_=(0,i._)("br",null,null,-1),p={class:"stepContent"},g=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"},[(0,i.Uk)(" Before actually runnning the nngp model and compare with the PostgreSQL Planner, "),(0,i._)("br"),(0,i.Uk)(" First, you might generate sets of training and testing queries for exploration. "),(0,i._)("br"),(0,i.Uk)(" If you do not wish to generate query, you can still use the built in query sets. "),(0,i._)("br"),(0,i._)("mark",null,"Choose Schema"),(0,i.Uk)(": "),(0,i._)("strong",null,"TPCDS / IMDB"),(0,i.Uk)(" provided"),(0,i._)("br"),(0,i._)("mark",null,"min-max numbers of joining "),(0,i.Uk)(" (Numbers of Minimum, Maximum join in query)"),(0,i._)("br"),(0,i.Uk)(" Equi-join and Non-equi-join ratio: (Only provided when minimum join of 0 is selected)"),(0,i._)("br"),(0,i.Uk)(" Train and Test query ratio: ()"),(0,i._)("br"),(0,i.Uk)(" After selecting all required parameters, server will generate the query. "),(0,i._)("br"),(0,i.Uk)(" You can now move to next steps ")])],-1),k={class:"stepContent"},y={class:"paraSelect"},w={class:"selection"},v=(0,i._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),f={class:"selection"},b=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),S={class:"selection"},x=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),C={class:"slideControl"},D={key:0,class:"slideControl"},U=(0,i._)("br",null,null,-1),j={class:"selection"},q=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),T={class:"selection"},W=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),I={class:"selection"},N=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),P={class:"selection"},M=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),Q={class:"buttonContainer"},V={class:"highlightText"},G={class:"highlightText"},O={class:"highlightText"},z={class:"highlightText"},F={class:"schemaDisplay"},E=(0,i._)("br",null,null,-1),B={class:"schemaDisplay"},H=(0,i._)("br",null,null,-1),Y={key:2,class:"schemaRemind"},L={class:"highlightText"},Z={class:"highlightText"},A={class:"highlightText"},J={class:"highlightText"},R=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),$=(0,i._)("br",null,null,-1),K=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1),X={key:0};function ee(e,t,a,n,l,ee){const te=(0,i.up)("a-layout-header"),ae=(0,i.up)("a-step"),ne=(0,i.up)("a-steps"),ie=(0,i.up)("a-button"),le=(0,i.up)("a-descriptions-item"),oe=(0,i.up)("a-descriptions"),se=(0,i.up)("a-divider"),re=(0,i.up)("a-select"),ce=(0,i.up)("a-slider"),ue=(0,i.up)("a-cascader"),me=(0,i.up)("a-card"),de=(0,i.up)("a-modal"),he=(0,i.up)("a-switch"),_e=(0,i.up)("a-table"),pe=(0,i.up)("a-image"),ge=(0,i.up)("a-col"),ke=(0,i.up)("a-row"),ye=(0,i.up)("a-back-top"),we=(0,i.up)("a-layout-content"),ve=(0,i.up)("a-layout-footer"),fe=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(fe,{class:"main_page"},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((()=>[(0,i._)("h1",null,(0,o.zw)(ee.msg),1)])),_:1}),(0,i.Wm)(we,null,{default:(0,i.w5)((()=>[(0,i.Wm)(ke,{justify:"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(ge,{span:18},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(me,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((()=>[l.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(ne,{current:l.currentStep,"onUpdate:current":t[0]||(t[0]=e=>l.currentStep=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(ae,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(ae,{title:"Step 3",description:"Retreiving result"})])),_:1},8,["current"]),(0,i._)("div",r,[0===l.currentStep?((0,i.wg)(),(0,i.j4)(oe,{key:0,title:""},{default:(0,i.w5)((()=>[(0,i.Wm)(le,null,{default:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i._)("span",u,[(0,i.Uk)(" This project aims to assist researchers to select queries, choose datasets with availiable models to "),m,d,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,i.Uk)("Know how to use?"),_,(0,i.Uk)("Just click the "),(0,i.Wm)(ie,{style:{"margin-right":"3px","margin-left":"3px"},onClick:ee.viewTutorial},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])])),_:1})])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",p,[1===l.currentStep?((0,i.wg)(),(0,i.j4)(oe,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(le,null,{default:(0,i.w5)((()=>[g])),_:1})])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",k,[2===l.currentStep?((0,i.wg)(),(0,i.j4)(oe,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(le,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" After ")])),_:1})])),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),l.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(ie,{style:{"margin-left":"3px"},onClick:ee.viewTutorial},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"])],64)),(0,i._)("div",y,[(0,i.Wm)(se,{style:{"background-color":"#00BFFF"}}),l.isGenerate?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",w,[v,(0,i.Wm)(re,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=e=>l.selectDataSet=e),onChange:ee.changeDataSet,options:l.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",f,[b,(0,i.Wm)(re,{modelValue:l.min_join,"onUpdate:modelValue":t[2]||(t[2]=e=>l.min_join=e),onChange:ee.changeMin,options:l.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",S,[x,(0,i.Wm)(re,{modelValue:l.max_join,"onUpdate:modelValue":t[3]||(t[3]=e=>l.max_join=e),onChange:ee.changeMax,options:l.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",C,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,o.zw)(this.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,o.zw)(100-this.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(ce,{value:l.train_ratio,"onUpdate:value":t[4]||(t[4]=e=>l.train_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),1===this.min_join?((0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,o.zw)(this.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,o.zw)(100-this.join_ratio)+"%",1),(0,i.Uk)("] ")]),U,(0,i.Wm)(ce,{value:l.join_ratio,"onUpdate:value":t[5]||(t[5]=e=>l.join_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])])):(0,i.kq)("",!0),(0,i.Wm)(ie,{type:"primary",ghost:"",onClick:ee.ratioSelection},{default:(0,i.w5)((()=>[(0,i.Uk)("Generate Query")])),_:1},8,["onClick"]),(0,i.Wm)(ie,{type:"primary",style:{"margin-left":"6px"},onClick:ee.switchMode},{default:(0,i.w5)((()=>[(0,i.Uk)("To Testing")])),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),l.isGenerate?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",j,[q,(0,i.Wm)(re,{modelValue:l.selectModel,"onUpdate:modelValue":t[6]||(t[6]=e=>l.selectModel=e),onChange:ee.changeModel,options:l.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",T,[W,(0,i.Wm)(re,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=e=>l.selectDataSet=e),onChange:ee.changeDataSet,options:l.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",I,[N,(0,i.Wm)(ue,{modelValue:l.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=e=>l.selectQuery=e),onChange:ee.changeQuery,options:l.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",P,[M,(0,i.Wm)(re,{modelValue:l.selectQueryNum,"onUpdate:modelValue":t[9]||(t[9]=e=>l.selectQueryNum=e),onChange:ee.changeQueryNum,options:l.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",Q,[(0,i.Wm)(ie,{type:"primary",onClick:ee.confirm},{default:(0,i.w5)((()=>[(0,i.Uk)("Run Model")])),_:1},8,["onClick"]),(0,i.Wm)(ie,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:ee.clean},{default:(0,i.w5)((()=>[(0,i.Uk)("Clean Data")])),_:1},8,["onClick"]),(0,i.Wm)(ie,{style:{"margin-left":"6px"},type:"dashed",onClick:ee.switchMode},{default:(0,i.w5)((()=>[(0,i.Uk)("Back to Generate")])),_:1},8,["onClick"])])],64))])])),_:1})]),(0,i.Wm)(se,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(de,{visible:l.modelVisible,"onUpdate:visible":t[10]||(t[10]=e=>l.modelVisible=e),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:ee.runModel},{default:(0,i.w5)((()=>[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",V,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",G,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",O,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",z,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. ")])])),_:1},8,["visible","onOk"]),"IMDB"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",F,[(0,i._)("span",null,"Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(he,{checked:l.checked,"onUpdate:checked":t[11]||(t[11]=e=>l.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(_e,{key:0,columns:l.tableSchema,dataSource:l.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),E,l.checked?((0,i.wg)(),(0,i.j4)(pe,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",B,[(0,i._)("span",null," Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(he,{checked:l.checked,"onUpdate:checked":t[12]||(t[12]=e=>l.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(_e,{key:0,columns:l.tableSchema,dataSource:l.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),H,l.checked?((0,i.wg)(),(0,i.j4)(pe,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",Y,"Schema will be shown when you select the dataset")),(0,i.Wm)(se,{style:{"background-color":"#00BFFF"}}),l.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",L,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",Z,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",A,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",J,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(ie,{onClick:t[13]||(t[13]=e=>{ee.generateImage()})},{default:(0,i.w5)((()=>[(0,i.Uk)(" image")])),_:1})]),l.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[R,(0,i.Wm)(pe,{height:225,width:550,src:ee.avgImage},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:550,src:ee.planImage},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:550,src:ee.execImage},null,8,["src"]),$,K,(0,i.Wm)(pe,{height:225,width:350,src:l.var_exec_low},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:l.var_exec_high},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:l.var_plan_low},null,8,["src"]),(0,i.Wm)(pe,{height:225,width:350,src:l.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(_e,{columns:l.reponseDataColumns,dataSource:l.displayData,onChange:ee.headerChange},{bodyCell:(0,i.w5)((({column:e})=>["operation"===e.key?((0,i.wg)(),(0,i.iD)("a",X,"action")):(0,i.kq)("",!0)])),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)])),_:1})])),_:1}),(0,i.Wm)(ye)])),_:1}),(0,i.Wm)(ve,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" @seem4999 ")])),_:1})])),_:1})}a(2707);const te=[{label:"NNGP",value:"NNGP"}],ae=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],ne=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],ie=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],le=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],oe=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],se=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"}],re=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],ce=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],ue=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],me=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}];var de=a(7422);const he=de.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}});class _e{get1(){return he.get("api1")}get2(){return he.get("api2")}get3(){return he.get("api3")}get4(){return he.get("api4")}getClean(){return he.get("clean")}}const pe=new _e;var ge=a(521),ke=a(4134),ye={name:"SelectComponent",setup(){const e=(0,ge.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data(){return{click_msg:"SEEM FYP Project",modelStrings:te,dataStrings:ae,queryStrings:ne,querynumStrings:ie,minStrings:le,maxStrings:oe,tableSchema:re,ImdbSchema:ce,TpcdSchema:ue,ForestSchema:me,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:se,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg(){return this.click_msg},imgSource4(){return this.var_planImg},avgImage(){return console.log("average image link changed"),this.var_avgImg},planImage(){return this.var_planImg},execImage(){return this.var_execImg}},methods:{run4(){pe.get4().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},clean(){this.isShow=!1,pe.getClean().catch((e=>{console.log(e)}))},runModel(){console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(he.get(`/runModel/${this.selectDataSet}-${this.selectQuery}-${this.selectQueryNum}`).then((e=>{console.log(e.data),this.displayData=e.data,this.isShow=!0})).catch((e=>{console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery(e){this.selectQuery=e},changeQueryNum(e){this.selectQueryNum=e},changeMin(e){this.min_join=e},changeMax(e){this.max_join=e,this.min_join>this.max_join&&(console.log("min: "+this.min_join),console.log("max: "+this.max_join),window.alert("Numbers of maximum join should not be smaller than that of minimum join"))},confirm(){this.modelVisible=!0},headerChange:(e,t,a)=>{(void 0).displayData=(void 0).displayData.sort(),console.log("params: ",e,t,a)},viewTutorial(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage(){const e=this.displayData.map((e=>e.Planning)),t=this.displayData.map((e=>e.NNGP_Planning)),a=this.displayData.map((e=>e.Execution)),n=this.displayData.map((e=>e.NNGP_Execution));de.Z.post("api/image",{plan:e,execution:a,nngp_plan:t,nngp_execution:n}).then((e=>{let t=e.data;setTimeout((()=>{this.isImageShow=!1,this.var_avgImg="",this.var_execImg="",this.var_planImg="",this.var_exec_high="",this.var_exec_low="",this.var_plan_high="",this.var_plan_low=""}),100),setTimeout((()=>{this.var_avgImg=t.average,this.var_execImg=t.execution,this.var_planImg=t.planning,this.var_exec_high=t.high_exec,this.var_exec_low=t.low_exec,this.var_plan_high=t.high_exec,this.var_plan_low=t.low_plan,this.isImageShow=!0}),500),console.log(e)})).catch((e=>{console.log(e)}))},switchMode(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection(){let e=this.train_ratio/100,t=(100-this.train_ratio)/100,a=this.join_ratio/100,n=(100-this.join_ratio)/100,i=this.min_join,l=this.max_join;""===i&&(i=1),""===l&&(l=5),this.selectDataSet&&i<=l?de.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[a],non_join:[n]},min_max:{min:[i],max:[l]}}).then((e=>{console.log(e),this.response_message=e.data.message,this.show_message(this.response_message)})).catch((e=>{console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message(e){ke.ZP.success(e,[2])},next(){this.currentStep++},prev(){this.currentStep--}}},we=a(8998);const ve=(0,we.Z)(ye,[["render",ee]]);var fe=ve,be={name:"App",components:{SelectComponent:fe},data:()=>({title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""})};const Se=(0,we.Z)(be,[["render",l]]);var xe=Se,Ce=a(1782);a(2467);const De=(0,n.ri)(xe).use(Ce.ZP);De.mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,l){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<o&&(o=l));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var u=r(a)}for(t&&t(n);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9429)}));n=a.O(n)})();
//# sourceMappingURL=app.f3477e9c.js.map