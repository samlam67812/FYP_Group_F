(function(){"use strict";var e={8427:function(e,t,a){a(6992),a(8674),a(7727);var n=a(4220),l=a(9812);function i(e,t,a,n,i,o){const s=(0,l.up)("SelectComponent");return(0,l.wg)(),(0,l.j4)(s)}var o=a(5893);const s={class:"controlPanel",style:{display:"flex","justify-content":"center"}},r={class:"stepContent"},c={class:"stepContent"},u={class:"stepOne"},m=(0,l._)("mark",null,"explore query optimization results.",-1),d=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),_=(0,l._)("br",null,null,-1),p={class:"steps-action"},g=(0,l._)("div",{class:"stepContent"},[(0,l._)("span",{class:"stepTwo"},[(0,l.Uk)(" Before actually runnning the nngp model and compare with the PostgreSQL Planner, "),(0,l._)("br"),(0,l.Uk)(" First, you might generate sets of training and testing queries for exploration. "),(0,l._)("br"),(0,l.Uk)(" If you do not wish to generate query, you can still use the built in query sets. "),(0,l._)("br"),(0,l.Uk)(" Choose the Schema: TPCDS / IMDB provided"),(0,l._)("br"),(0,l.Uk)(" min-max numbers of joining: "),(0,l._)("br"),(0,l.Uk)(" Equi-join and Non-equi-join ratio: "),(0,l._)("br"),(0,l.Uk)(" Train and Test query ratio: "),(0,l._)("br"),(0,l.Uk)(" After selecting all required parameters, server will generate the query. "),(0,l._)("br"),(0,l.Uk)(" You can now move to next steps ")])],-1),k={class:"paraSelect"},y={class:"selection"},w=(0,l._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),v={class:"selection"},f=(0,l._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),b={class:"selection"},S=(0,l._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),x={class:"slideControl"},C={class:"slideControl"},D=(0,l._)("br",null,null,-1),U={class:"selection"},j=(0,l._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),q={class:"selection"},W=(0,l._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),T={class:"selection"},I=(0,l._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),N={class:"selection"},P=(0,l._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),M={class:"buttonContainer"},Q={class:"highlightText"},V={class:"highlightText"},G={class:"highlightText"},O={class:"highlightText"},z={class:"schemaDisplay"},F=(0,l._)("br",null,null,-1),E={class:"schemaDisplay"},H=(0,l._)("br",null,null,-1),B={key:2,class:"schemaRemind"},Y={class:"highlightText"},L={class:"highlightText"},Z={class:"highlightText"},A={class:"highlightText"},J=(0,l._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),R=(0,l._)("br",null,null,-1),$=(0,l._)("p",null,"Top 10 lowest and highest Queries performance",-1),K={key:0};function X(e,t,a,n,i,X){const ee=(0,l.up)("a-layout-header"),te=(0,l.up)("a-step"),ae=(0,l.up)("a-steps"),ne=(0,l.up)("a-button"),le=(0,l.up)("a-descriptions-item"),ie=(0,l.up)("a-descriptions"),oe=(0,l.up)("a-divider"),se=(0,l.up)("a-select"),re=(0,l.up)("a-slider"),ce=(0,l.up)("a-cascader"),ue=(0,l.up)("a-card"),me=(0,l.up)("a-modal"),de=(0,l.up)("a-switch"),he=(0,l.up)("a-table"),_e=(0,l.up)("a-image"),pe=(0,l.up)("a-col"),ge=(0,l.up)("a-row"),ke=(0,l.up)("a-back-top"),ye=(0,l.up)("a-layout-content"),we=(0,l.up)("a-layout-footer"),ve=(0,l.up)("a-layout");return(0,l.wg)(),(0,l.j4)(ve,{class:"main_page"},{default:(0,l.w5)((()=>[(0,l.Wm)(ee,{style:{"background-color":"#00BFFF"}},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,o.zw)(X.msg),1)])),_:1}),(0,l.Wm)(ye,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ge,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(pe,{span:18},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(ue,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,l.w5)((()=>[i.showTutorial?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(ae,{current:i.currentStep,"onUpdate:current":t[0]||(t[0]=e=>i.currentStep=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(te,{title:"Step 1",description:"Introduction"}),(0,l.Wm)(te,{title:"Step 2",description:"Preparation"}),(0,l.Wm)(te,{title:"Step 3",description:"Retreiving result"})])),_:1},8,["current"]),(0,l._)("div",r,[0===i.currentStep?((0,l.wg)(),(0,l.j4)(ie,{key:0,title:""},{default:(0,l.w5)((()=>[(0,l.Wm)(le,null,{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l._)("span",u,[(0,l.Uk)(" This project aims to assist researchers to select queries, choose datasets with availiable models to "),m,d,(0,l.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,l.Uk)("Know how to use?"),_,(0,l.Uk)("Just click the "),(0,l.Wm)(ne,{style:{"margin-right":"3px","margin-left":"3px"},onClick:X.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,l.Uk)(" to skip this guidance.")])])])),_:1}),(0,l._)("div",p,[i.currentStep<3?((0,l.wg)(),(0,l.j4)(ne,{key:0,type:"primary",onClick:X.next},{default:(0,l.w5)((()=>[(0,l.Uk)("Next")])),_:1},8,["onClick"])):(0,l.kq)("",!0),2===i.currentStep?((0,l.wg)(),(0,l.j4)(ne,{key:1,type:"primary",onClick:t[1]||(t[1]=t=>e.message.success("Processing complete!"))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Done")])),_:1})):(0,l.kq)("",!0),i.currentStep>0?((0,l.wg)(),(0,l.j4)(ne,{key:2,style:{"margin-left":"8px"},onClick:X.prev},{default:(0,l.w5)((()=>[(0,l.Uk)("Previous")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])])),_:1})):(0,l.kq)("",!0)]),1===i.currentStep?((0,l.wg)(),(0,l.j4)(ie,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(le,null,{default:(0,l.w5)((()=>[g])),_:1})])),_:1})):(0,l.kq)("",!0),2===i.currentStep?((0,l.wg)(),(0,l.j4)(ie,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(le,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" After ")])),_:1})])),_:1})):(0,l.kq)("",!0)],64)):(0,l.kq)("",!0),i.showTutorial?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l.Uk)("Guidance will be shown here: "),(0,l.Wm)(ne,{style:{"margin-left":"3px"},onClick:X.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"])],64)),(0,l._)("div",k,[(0,l.Wm)(oe,{style:{"background-color":"#00BFFF"}}),i.isGenerate?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",y,[w,(0,l.Wm)(se,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[2]||(t[2]=e=>i.selectDataSet=e),onChange:X.changeDataSet,options:i.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",v,[f,(0,l.Wm)(se,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[3]||(t[3]=e=>i.selectDataSet=e),onChange:X.changeMin,options:i.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",b,[S,(0,l.Wm)(se,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[4]||(t[4]=e=>i.selectDataSet=e),onChange:X.changeMax,options:i.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",x,[(0,l._)("span",null,[(0,l.Uk)("Move the slider for train_test ratio: [train: "),(0,l._)("mark",null,(0,o.zw)(this.train_ratio)+"%",1),(0,l.Uk)(", test: "),(0,l._)("mark",null,(0,o.zw)(100-this.train_ratio)+"%",1),(0,l.Uk)("] ")]),(0,l.Wm)(re,{value:i.train_ratio,"onUpdate:value":t[5]||(t[5]=e=>i.train_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,l._)("div",C,[(0,l._)("span",null,[(0,l.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,l._)("mark",null,(0,o.zw)(this.join_ratio)+"%",1),(0,l.Uk)(", non-join: "),(0,l._)("mark",null,(0,o.zw)(100-this.join_ratio)+"%",1),(0,l.Uk)("] ")]),D,(0,l.Wm)(re,{value:i.join_ratio,"onUpdate:value":t[6]||(t[6]=e=>i.join_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),(0,l.Wm)(ne,{type:"primary",onClick:X.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("Testing")])),_:1},8,["onClick"]),(0,l.Wm)(ne,{type:"primary",ghost:"",onClick:X.ratioSelection},{default:(0,l.w5)((()=>[(0,l.Uk)("Generate")])),_:1},8,["onClick"])],64)):(0,l.kq)("",!0),i.isGenerate?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",U,[j,(0,l.Wm)(se,{modelValue:i.selectModel,"onUpdate:modelValue":t[7]||(t[7]=e=>i.selectModel=e),onChange:X.changeModel,options:i.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",q,[W,(0,l.Wm)(se,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[8]||(t[8]=e=>i.selectDataSet=e),onChange:X.changeDataSet,options:i.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",T,[I,(0,l.Wm)(ce,{modelValue:i.selectQuery,"onUpdate:modelValue":t[9]||(t[9]=e=>i.selectQuery=e),onChange:X.changeQuery,options:i.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",N,[P,(0,l.Wm)(se,{modelValue:i.selectQueryNum,"onUpdate:modelValue":t[10]||(t[10]=e=>i.selectQueryNum=e),onChange:X.changeQueryNum,options:i.querynumStrings,placeholder:"Select query number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",M,[(0,l.Wm)(ne,{type:"primary",onClick:X.confirm},{default:(0,l.w5)((()=>[(0,l.Uk)("Run Model")])),_:1},8,["onClick"]),(0,l.Wm)(ne,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:X.clean},{default:(0,l.w5)((()=>[(0,l.Uk)("Clean Data")])),_:1},8,["onClick"]),(0,l.Wm)(ne,{style:{"margin-left":"6px"},type:"dashed",onClick:X.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("Generate")])),_:1},8,["onClick"])])],64))])])),_:1})]),(0,l.Wm)(oe,{style:{"background-color":"#00BFFF"}}),(0,l.Wm)(me,{visible:i.modelVisible,"onUpdate:visible":t[11]||(t[11]=e=>i.modelVisible=e),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:X.runModel},{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l.Uk)(" You are running model "),(0,l._)("span",Q,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",V,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",G,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",O,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. ")])])),_:1},8,["visible","onOk"]),"IMDB"==i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",z,[(0,l._)("span",null,"Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(de,{checked:i.checked,"onUpdate:checked":t[12]||(t[12]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(he,{key:0,columns:i.tableSchema,dataSource:i.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),(0,l.Uk)(),F,i.checked?((0,l.wg)(),(0,l.j4)(_e,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,l.kq)("",!0)],64)):"TPCDS"===i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",E,[(0,l._)("span",null," Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(de,{checked:i.checked,"onUpdate:checked":t[13]||(t[13]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(he,{key:0,columns:i.tableSchema,dataSource:i.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),(0,l.Uk)(),H,i.checked?((0,l.wg)(),(0,l.j4)(_e,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,l.kq)("",!0)],64)):((0,l.wg)(),(0,l.iD)("span",B,"Schema will be shown when you select the dataset")),(0,l.Wm)(oe,{style:{"background-color":"#00BFFF"}}),i.isShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[(0,l._)("p",null,[(0,l.Uk)(" Result of running model "),(0,l._)("span",Y,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",L,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",Z,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",A,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. "),(0,l.Wm)(ne,{onClick:t[14]||(t[14]=e=>{X.generateImage()})},{default:(0,l.w5)((()=>[(0,l.Uk)(" image")])),_:1})]),i.isImageShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[J,(0,l.Wm)(_e,{height:225,width:550,src:X.avgImage},null,8,["src"]),(0,l.Wm)(_e,{height:225,width:550,src:X.planImage},null,8,["src"]),(0,l.Wm)(_e,{height:225,width:550,src:X.execImage},null,8,["src"]),R,$,(0,l.Wm)(_e,{height:225,width:350,src:i.var_exec_low},null,8,["src"]),(0,l.Wm)(_e,{height:225,width:350,src:i.var_exec_high},null,8,["src"]),(0,l.Wm)(_e,{height:225,width:350,src:i.var_plan_low},null,8,["src"]),(0,l.Wm)(_e,{height:225,width:350,src:i.var_plan_high},null,8,["src"])],64)):(0,l.kq)("",!0),(0,l.Wm)(he,{columns:i.reponseDataColumns,dataSource:i.displayData,onChange:X.headerChange},{bodyCell:(0,l.w5)((({column:e})=>["operation"===e.key?((0,l.wg)(),(0,l.iD)("a",K,"action")):(0,l.kq)("",!0)])),_:1},8,["columns","dataSource","onChange"])],64)):(0,l.kq)("",!0)])),_:1})])),_:1}),(0,l.Wm)(ke)])),_:1}),(0,l.Wm)(we,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" @seem4999 ")])),_:1})])),_:1})}a(2707);const ee=[{label:"NNGP",value:"NNGP"}],te=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],ae=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],ne=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],le=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ie=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],oe=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"}],se=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],re=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],ce=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],ue=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}];var me=a(7422);const de=me.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}});class he{get1(){return de.get("api1")}get2(){return de.get("api2")}get3(){return de.get("api3")}get4(){return de.get("api4")}getClean(){return de.get("clean")}}const _e=new he;var pe=a(521),ge=a(4134),ke={name:"SelectComponent",setup(){const e=(0,pe.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data(){return{click_msg:"SEEM FYP Project",modelStrings:ee,dataStrings:te,queryStrings:ae,querynumStrings:ne,minStrings:le,maxStrings:ie,tableSchema:se,ImdbSchema:re,TpcdSchema:ce,ForestSchema:ue,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:oe,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg(){return this.click_msg},imgSource4(){return this.var_planImg},avgImage(){return console.log("average image link changed"),this.var_avgImg},planImage(){return this.var_planImg},execImage(){return this.var_execImg}},methods:{run4(){_e.get4().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},clean(){this.isShow=!1,_e.getClean().catch((e=>{console.log(e)}))},runModel(){console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(de.get(`/runModel/${this.selectDataSet}-${this.selectQuery}-${this.selectQueryNum}`).then((e=>{console.log(e.data),this.displayData=e.data,this.isShow=!0})).catch((e=>{console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery(e){this.selectQuery=e},changeQueryNum(e){this.selectQueryNum=e},changeMin(e){this.min_join=e},changeMax(e){this.min_join<=this.max_join?this.max_join=e:(console.log("min: "+this.min_join),console.log("max: "+this.max_join),window.alert("Numbers of maximum join should not be smaller than that of minimum join"))},confirm(){this.modelVisible=!0},headerChange:(e,t,a)=>{(void 0).displayData=(void 0).displayData.sort(),console.log("params: ",e,t,a)},viewTutorial(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage(){const e=this.displayData.map((e=>e.Planning)),t=this.displayData.map((e=>e.NNGP_Planning)),a=this.displayData.map((e=>e.Execution)),n=this.displayData.map((e=>e.NNGP_Execution));me.Z.post("api/image",{plan:e,execution:a,nngp_plan:t,nngp_execution:n}).then((e=>{let t=e.data;setTimeout((()=>{this.isImageShow=!1,this.var_avgImg="",this.var_execImg="",this.var_planImg="",this.var_exec_high="",this.var_exec_low="",this.var_plan_high="",this.var_plan_low=""}),100),setTimeout((()=>{this.var_avgImg=t.average,this.var_execImg=t.execution,this.var_planImg=t.planning,this.var_exec_high=t.high_exec,this.var_exec_low=t.low_exec,this.var_plan_high=t.high_exec,this.var_plan_low=t.low_plan,this.isImageShow=!0}),500),console.log(e)})).catch((e=>{console.log(e)}))},switchMode(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection(){let e=this.train_ratio/100,t=(100-this.train_ratio)/100,a=this.join_ratio/100,n=(100-this.join_ratio)/100,l=this.min_join,i=this.max_join;""===l&&(l=1),""===i&&(i=5),this.selectDataSet&&l<=i?me.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[a],non_join:[n]},min_max:{min:[l],max:[i]}}).then((e=>{console.log(e),this.response_message=e.data.message,this.show_message(this.response_message)})).catch((e=>{console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message(e){ge.ZP.success(e,[1e3])},next(){this.currentStep++},prev(){this.currentStep--}}},ye=a(8998);const we=(0,ye.Z)(ke,[["render",X]]);var ve=we,fe={name:"App",components:{SelectComponent:ve},data:()=>({title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""})};const be=(0,ye.Z)(fe,[["render",i]]);var Se=be,xe=a(1782);a(2467);const Ce=(0,n.ri)(Se).use(xe.ZP);Ce.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,i,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8427)}));n=a.O(n)})();
//# sourceMappingURL=app.4db45469.js.map