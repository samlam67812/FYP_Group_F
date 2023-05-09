(function(){"use strict";var e={1682:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(7121),i=n(9812);function l(e,t,n,a,l,o){var r=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(r)}var o=n(5893),r={class:"controlPanel",style:{display:"flex","justify-content":"center"}},s={class:"stepContent"},u={class:"stepContent"},c={class:"stepOne"},m=(0,i._)("br",null,null,-1),d=(0,i._)("mark",null,"explore query optimization results.",-1),_=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),p=(0,i._)("br",null,null,-1),g={class:"stepContent"},f=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"},[(0,i.Uk)(" Before actually running the nngp model and compare with the PostgreSQL Planner, "),(0,i._)("br"),(0,i.Uk)(" First, you "),(0,i._)("mark",null,[(0,i._)("strong",null,"MUST")]),(0,i.Uk)(" generate sets of training and testing queries for exploration. "),(0,i._)("br"),(0,i._)("mark",null,"Choose Schema"),(0,i.Uk)(": TPCDS and IMDB are provided, Choose schema to view more"),(0,i._)("br"),(0,i._)("mark",null,"min-max numbers of joining "),(0,i.Uk)(" (Numbers of Minimum, Maximum join in query)"),(0,i._)("br"),(0,i._)("mark",null,"Equi-join and Non-equi-join ratio:"),(0,i.Uk)(" (Only provided when minimum join of 0 is selected)"),(0,i._)("br"),(0,i._)("mark",null,"Train and Test query ratio:"),(0,i.Uk)(" (base numbers of query is 3000, if you choose 20% for test ratio)"),(0,i._)("br"),(0,i.Uk)(" You will get only 3000 * 20% = 600 query maximum for test"),(0,i._)("br"),(0,i.Uk)(" After selecting all required parameters, server will generate the query. "),(0,i._)("br")])],-1),k={class:"stepContent"},y={class:"stepContent"},v={class:"stepThree"},w=(0,i._)("br",null,null,-1),b=(0,i._)("br",null,null,-1),S=(0,i._)("br",null,null,-1),x={class:"paraSelect"},C=(0,i._)("p",null,"***Genreate Query for Testing First : ",-1),U={class:"selection"},D=(0,i._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),j={class:"selection"},q=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),T={class:"selection"},W=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),N={class:"slideControl"},Q={key:0,class:"slideControl"},P=(0,i._)("br",null,null,-1),I=(0,i._)("p",null,[(0,i._)("mark",null,"Retrain Model before Running"),(0,i.Uk)("Selecting parameters for Testing: ")],-1),M={class:"selection"},V=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),G={class:"selection"},O=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),z={class:"selection"},F=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),Y={class:"selection"},R=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: (enter multiple of 10)",-1),E={class:"buttonContainer"},B={class:"highlightText"},H={class:"highlightText"},Z={class:"highlightText"},A={class:"highlightText"},L=(0,i._)("p",null," You are retraining model ",-1),J={class:"schemaDisplay"},K=(0,i._)("br",null,null,-1),X={class:"schemaDisplay"},$=(0,i._)("br",null,null,-1),ee={key:2,class:"schemaRemind"},te={class:"highlightText"},ne={class:"highlightText"},ae={class:"highlightText"},ie={class:"highlightText"},le=(0,i._)("p",null,"Q-Error of Running Result",-1),oe=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),re=(0,i._)("br",null,null,-1),se=(0,i._)("br",null,null,-1),ue=(0,i._)("br",null,null,-1),ce=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1);function me(e,t,n,a,l,me){var de=this,_e=(0,i.up)("a-layout-header"),he=(0,i.up)("a-step"),pe=(0,i.up)("a-steps"),ge=(0,i.up)("a-button"),fe=(0,i.up)("a-descriptions-item"),ke=(0,i.up)("a-descriptions"),ye=(0,i.up)("a-divider"),ve=(0,i.up)("a-select"),we=(0,i.up)("a-slider"),be=(0,i.up)("a-cascader"),Se=(0,i.up)("a-input-number"),xe=(0,i.up)("a-card"),Ce=(0,i.up)("a-modal"),Ue=(0,i.up)("a-switch"),De=(0,i.up)("a-table"),je=(0,i.up)("a-image"),qe=(0,i.up)("a-col"),Te=(0,i.up)("a-row"),We=(0,i.up)("a-back-top"),Ne=(0,i.up)("a-layout-content"),Qe=(0,i.up)("a-layout-footer"),Pe=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(Pe,{class:"main_page"},{default:(0,i.w5)((function(){return[(0,i.Wm)(_e,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((function(){return[(0,i._)("h1",null,(0,o.zw)(me.msg),1)]})),_:1}),(0,i.Wm)(Ne,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(Te,{justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(qe,{span:18},{default:(0,i.w5)((function(){return[(0,i._)("div",r,[(0,i.Wm)(xe,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((function(){return[l.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(pe,{current:l.currentStep,"onUpdate:current":t[0]||(t[0]=function(e){return l.currentStep=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(he,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(he,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(he,{title:"Step 3",description:"Retreiving result"})]})),_:1},8,["current"]),(0,i._)("div",s,[0===l.currentStep?((0,i.wg)(),(0,i.j4)(ke,{key:0,title:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(fe,null,{default:(0,i.w5)((function(){return[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Uk)(" This project aims to assist researchers to select queries,"),m,(0,i.Uk)(" choose datasets with availiable models to "),d,_,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,i.Uk)("Know how to use?"),p,(0,i.Uk)("Just click the "),(0,i.Wm)(ge,{style:{"margin-right":"3px","margin-left":"3px"},onClick:me.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])]})),_:1})]})),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",g,[1===l.currentStep?((0,i.wg)(),(0,i.j4)(ke,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(fe,null,{default:(0,i.w5)((function(){return[f]})),_:1})]})),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",k,[2===l.currentStep?((0,i.wg)(),(0,i.j4)(ke,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(fe,null,{default:(0,i.w5)((function(){return[(0,i._)("div",y,[(0,i._)("span",v,[(0,i.Uk)(" After generating query and select the model running parameters"),w,(0,i.Uk)(" You can now see the result in table if everything run properly."),b,(0,i.Uk)(" You can click the "),(0,i.Wm)(ge,null,{default:(0,i.w5)((function(){return[(0,i.Uk)("image")]})),_:1}),(0,i.Uk)(" button for detail performance in graphs"),S,(0,i.Uk)(" You can also click the "),(0,i.Wm)(ge,{type:"primary"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Plan Tree")]})),_:1}),(0,i.Uk)(" button for a better investigation into each query exeuction ")])])]})),_:1})]})),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),l.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(ge,{style:{"margin-left":"3px"},onClick:me.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"])],64)),(0,i._)("div",x,[(0,i.Wm)(ye,{style:{"background-color":"#00BFFF"}}),l.isGenerate?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[C,(0,i._)("div",U,[D,(0,i.Wm)(ve,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.selectDataSet=e}),onChange:me.changeDataSet,options:l.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",j,[q,(0,i.Wm)(ve,{modelValue:l.min_join,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.min_join=e}),onChange:me.changeMin,options:l.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",T,[W,(0,i.Wm)(ve,{modelValue:l.max_join,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.max_join=e}),onChange:me.changeMax,options:l.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",N,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,o.zw)(de.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,o.zw)(100-de.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(we,{value:l.train_ratio,"onUpdate:value":t[4]||(t[4]=function(e){return l.train_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),1===de.min_join?((0,i.wg)(),(0,i.iD)("div",Q,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,o.zw)(de.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,o.zw)(100-de.join_ratio)+"%",1),(0,i.Uk)("] ")]),P,(0,i.Wm)(we,{value:l.join_ratio,"onUpdate:value":t[5]||(t[5]=function(e){return l.join_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])])):(0,i.kq)("",!0),(0,i.Wm)(ge,{type:"primary",ghost:"",onClick:me.ratioSelection},{default:(0,i.w5)((function(){return[(0,i.Uk)("Generate Query ")]})),_:1},8,["onClick"]),(0,i.Wm)(ge,{type:"primary",style:{"margin-left":"6px"},onClick:me.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("To Testing")]})),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),l.isGenerate?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[I,(0,i._)("div",M,[V,(0,i.Wm)(ve,{modelValue:l.selectModel,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.selectModel=e}),onChange:me.changeModel,options:l.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",G,[O,(0,i.Wm)(ve,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.selectDataSet=e}),onChange:me.changeDataSet,options:l.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",z,[F,(0,i.Wm)(be,{modelValue:l.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.selectQuery=e}),onChange:me.changeQuery,options:l.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",Y,[R,(0,i.Wm)(Se,{value:l.selectQueryNum,"onUpdate:value":t[9]||(t[9]=function(e){return l.selectQueryNum=e}),min:10,max:1e3,step:"10"},null,8,["value"])]),(0,i._)("div",E,[(0,i.Wm)(ge,{type:"dashed",onClick:me.retrainConfirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Retrain Model")]})),_:1},8,["onClick"]),(0,i.Wm)(ge,{style:{"margin-left":"6px"},type:"primary",onClick:me.confirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Run Query")]})),_:1},8,["onClick"]),(0,i.Wm)(ge,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:me.clean},{default:(0,i.w5)((function(){return[(0,i.Uk)("Clean Data")]})),_:1},8,["onClick"]),(0,i.Wm)(ge,{style:{"margin-left":"6px"},type:"dashed",onClick:me.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Back to Generate")]})),_:1},8,["onClick"])])],64))])]})),_:1})]),(0,i.Wm)(ye,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(Ce,{visible:l.modelVisible,"onUpdate:visible":t[10]||(t[10]=function(e){return l.modelVisible=e}),title:"Query Running","ok-text":"confirm","cancel-text":"cancel",onOk:me.runModel},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",B,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",H,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",Z,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",A,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. ")])]})),_:1},8,["visible","onOk"]),(0,i.Wm)(Ce,{visible:l.retrainVisible,"onUpdate:visible":t[11]||(t[11]=function(e){return l.retrainVisible=e}),title:"Model Retrain","ok-text":"confirm","cancel-text":"cancel",onOk:me.retrainModel},{default:(0,i.w5)((function(){return[L]})),_:1},8,["visible","onOk"]),"IMDB"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",J,[(0,i._)("span",null,"Dataset: "+(0,o.zw)(de.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(Ue,{checked:l.checked,"onUpdate:checked":t[12]||(t[12]=function(e){return l.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(De,{key:0,columns:l.tableSchema,dataSource:l.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),K,l.checked?((0,i.wg)(),(0,i.j4)(je,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",X,[(0,i._)("span",null," Dataset: "+(0,o.zw)(de.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(Ue,{checked:l.checked,"onUpdate:checked":t[13]||(t[13]=function(e){return l.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(De,{key:0,columns:l.tableSchema,dataSource:l.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),$,l.checked?((0,i.wg)(),(0,i.j4)(je,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",ee,"Schema will be shown when you select the dataset")),(0,i.Wm)(ye,{style:{"background-color":"#00BFFF"}}),l.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",te,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",ne,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",ae,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",ie,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(ge,{onClick:t[14]||(t[14]=function(e){me.generateImage()})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" image")]})),_:1})]),e.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[le,(0,i.Wm)(je,{height:200,width:350,src:l.var_q_errorImg},null,8,["src"]),oe,(0,i.Wm)(je,{height:225,width:550,src:me.avgImage},null,8,["src"]),(0,i.Wm)(je,{height:450,width:550,src:me.planImage},null,8,["src"]),(0,i.Wm)(je,{height:300,width:550,src:me.execImage},null,8,["src"]),re,se,ue,ce,(0,i.Wm)(je,{height:150,width:350,src:l.var_exec_low},null,8,["src"]),(0,i.Wm)(je,{height:150,width:350,src:l.var_exec_high},null,8,["src"]),(0,i.Wm)(je,{height:150,width:350,src:l.var_plan_low},null,8,["src"]),(0,i.Wm)(je,{height:150,width:350,src:l.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(De,{columns:l.reponseDataColumns,dataSource:l.displayData,onChange:me.headerChange},{bodyCell:(0,i.w5)((function(e){var t=e.column,n=e.record;return["action"===t.key?((0,i.wg)(),(0,i.j4)(ge,{key:0,type:"primary",onClick:function(e){return me.requestPlanTree(n.key)}},{default:(0,i.w5)((function(){return[(0,i.Uk)("Plan Tree")]})),_:2},1032,["onClick"])):(0,i.kq)("",!0)]})),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)]})),_:1})]})),_:1}),(0,i.Wm)(We)]})),_:1}),(0,i.Wm)(Qe,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" @seem4999 ")]})),_:1})]})),_:1})}n(2222),n(2707),n(1249);var de=[{label:"NNGP",value:"NNGP"}],_e=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],he=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],pe=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],ge=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],fe=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ke=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"Action",key:"action"}],ye=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],ve=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],we=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],be=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}],Se=n(280),xe=n(6298),Ce=n(7422),Ue=Ce.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),De=function(){function e(){(0,Se.Z)(this,e)}return(0,xe.Z)(e,[{key:"get1",value:function(){return Ue.get("api1")}},{key:"get2",value:function(){return Ue.get("api2")}},{key:"get3",value:function(){return Ue.get("api3")}},{key:"get4",value:function(){return Ue.get("api4")}},{key:"getClean",value:function(){return Ue.get("clean")}}]),e}(),je=new De,qe=n(521),Te=n(4134),We=void 0,Ne={name:"SelectComponent",setup:function(){var e=(0,qe.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data:function(){return{click_msg:"SEEM FYP Project",modelStrings:de,dataStrings:_e,queryStrings:he,querynumStrings:pe,minStrings:ge,maxStrings:fe,tableSchema:ye,ImdbSchema:ve,TpcdSchema:we,ForestSchema:be,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:ke,isShow:!1,modelVisible:!1,checked:!0,retrainVisible:!1,var_tpcds:"",var_imdb:"",var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",var_q_errorImg:"",showTutorial:!0,currentStep:0,isRetrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg:function(){return this.click_msg},imgSource4:function(){return this.var_planImg},avgImage:function(){return console.log("average image link changed"),this.var_avgImg},planImage:function(){return this.var_planImg},execImage:function(){return this.var_execImg}},methods:{run4:function(){je.get4().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},clean:function(){this.isShow=!1,je.getClean().catch((function(e){console.log(e)}))},runModel:function(){var e=this;console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.isRetrain||window.alert("You should retain the model first !!! "),(this.selectQuery>this.max_join||this.selectQuery<this.min_join)&&window.alert("Numbers of table of join should be bewteen max_join: ".concat(this.max_join," and min_join: ").concat(this.min_join)),this.selectQueryNum%10===0?this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(Ue.get("/runModel/".concat(this.selectDataSet,"-").concat(this.selectQuery,"-").concat(this.selectQueryNum)).then((function(t){console.log(t.data),e.displayData=t.data,e.isShow=!0})).catch((function(e){console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters")):window.alert("You should input a valid number")},retrainModel:function(){console.log("from retrain model"),console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.isRetrain=!0,this.selectDataSet&&(Ue.get("/retrainModel/".concat(this.selectDataSet)).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.retrainVisible=!1,console.log("retrain model"))},changeModel:function(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet:function(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery:function(e){this.selectQuery=e},changeQueryNum:function(e){this.selectQueryNum=e},changeMin:function(e){this.min_join=e},changeMax:function(e){this.max_join=e,this.min_join>this.max_join&&(window.alert("Numbers of maximum join should not be smaller than that of minimum join"),this.max_join=this.min_join)},confirm:function(){this.modelVisible=!0},retrainConfirm:function(){this.retrainVisible=!0},headerChange:function(e,t,n){We.displayData=We.displayData.sort(),console.log("params: ",e,t,n)},viewTutorial:function(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage:function(){var e=this,t=this.displayData.map((function(e){return e.Planning})),n=this.displayData.map((function(e){return e.NNGP_Planning})),a=this.displayData.map((function(e){return e.Execution})),i=this.displayData.map((function(e){return e.NNGP_Execution}));Ce.Z.post("api/image",{plan:t,execution:a,nngp_plan:n,nngp_execution:i}).then((function(t){var n=t.data;e.var_avgImg="",e.var_execImg="",e.var_exec_high="",e.var_exec_low="",e.var_planImg="",e.var_plan_high="",e.var_plan_low="",console.log("the var_img: "+e.var_avgImg),console.log("the image source set to be empty"),setTimeout((function(){e.var_avgImg=n.average,e.var_execImg=n.execution,e.var_planImg=n.planning,e.var_exec_high=n.high_exec,e.var_exec_low=n.low_exec,e.var_plan_high=n.high_plan,e.var_plan_low=n.low_plan,e.var_q_errorImg=n.q_error,e.isImageShow=!0,console.log("Getting image again")}),1200),console.log(t)})).catch((function(e){console.log(e)}))},switchMode:function(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection:function(){var e=this,t=this.train_ratio/100,n=(100-this.train_ratio)/100,a=this.join_ratio/100,i=(100-this.join_ratio)/100,l=this.min_join,o=this.max_join;""===l&&(l=1),""===o&&(o=5),this.selectDataSet&&l<=o?Ce.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[t],test:[n]},non_join_query_ratio:{join:[a],non_join:[i]},min_max:{min:[l],max:[o]}}).then((function(t){console.log(t),e.response_message=t.data.message,e.show_message(e.response_message),e.isRetrain=!0})).catch((function(e){console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message:function(e){Te.ZP.success(e,[1.5])},next:function(){this.currentStep++},prev:function(){this.currentStep--},requestPlanTree:function(e){Ce.Z.post("api/planTree",{selectQuery:this.selectQuery,queryNumber:e}).then((function(e){console.log(e);var t=e.data.pdf;window.open(t,"_blank")})).catch((function(e){console.log(e)}))}}},Qe=n(8998);const Pe=(0,Qe.Z)(Ne,[["render",me]]);var Ie=Pe,Me={name:"App",components:{SelectComponent:Ie},data:function(){return{title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""}}};const Ve=(0,Qe.Z)(Me,[["render",l]]);var Ge=Ve,Oe=n(8e3),ze=(n(2467),(0,a.ri)(Ge).use(Oe.ZP));ze.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,l){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],l=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,l<o&&(o=l));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,l,o=a[0],r=a[1],s=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(a);u<o.length;u++)l=o[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1682)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.81cfba74.js.map