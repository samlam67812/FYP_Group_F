(function(){"use strict";var e={5239:function(e,t,a){a(6992),a(8674),a(7727);var n=a(4220),i=a(9812);function l(e,t,a,n,l,o){const s=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(s)}var o=a(5893);const s={class:"controlPanel",style:{display:"flex","justify-content":"center"}},r={class:"stepContent"},u={class:"stepContent"},c={class:"stepOne"},m=(0,i._)("br",null,null,-1),d=(0,i._)("mark",null,"explore query optimization results.",-1),h=(0,i._)("br",null,null,-1),_=(0,i._)("br",null,null,-1),p=(0,i._)("br",null,null,-1),g={class:"stepContent"},k=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"},[(0,i.Uk)(" Before actually running the nngp model and compare with the PostgreSQL Planner, "),(0,i._)("br"),(0,i.Uk)(" First, you "),(0,i._)("mark",null,[(0,i._)("strong",null,"MUST")]),(0,i.Uk)(" generate sets of training and testing queries for exploration. "),(0,i._)("br"),(0,i._)("mark",null,"Choose Schema"),(0,i.Uk)(": TPCDS and IMDB are provided, Choose schema to view more"),(0,i._)("br"),(0,i._)("mark",null,"min-max numbers of joining "),(0,i.Uk)(" (Numbers of Minimum, Maximum join in query)"),(0,i._)("br"),(0,i._)("mark",null,"Equi-join and Non-equi-join ratio:"),(0,i.Uk)(" (Only provided when minimum join of 0 is selected)"),(0,i._)("br"),(0,i._)("mark",null,"Train and Test query ratio:"),(0,i.Uk)(" (base numbers of query is 3000, if you choose 20% for test ratio)"),(0,i._)("br"),(0,i.Uk)(" You will get only 3000 * 20% = 600 query maximum for test"),(0,i._)("br"),(0,i.Uk)(" After selecting all required parameters, server will generate the query. "),(0,i._)("br")])],-1),y={class:"stepContent"},f={class:"stepContent"},v={class:"stepThree"},w=(0,i._)("br",null,null,-1),b=(0,i._)("br",null,null,-1),S=(0,i._)("br",null,null,-1),x={class:"paraSelect"},C=(0,i._)("p",null,"***Genreate Query for Testing First : ",-1),U={class:"selection"},D=(0,i._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),j={class:"selection"},q=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),T={class:"selection"},W=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),I={class:"slideControl"},M={key:0,class:"slideControl"},N=(0,i._)("br",null,null,-1),P=(0,i._)("p",null,[(0,i._)("mark",null,"Retrain Model before Running"),(0,i.Uk)("Selecting parameters for Testing: ")],-1),Q={class:"selection"},V=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),G={class:"selection"},O=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),z={class:"selection"},F=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),Y={class:"selection"},L=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: (enter multiple of 10)",-1),R={class:"buttonContainer"},E={class:"highlightText"},B={class:"highlightText"},H={class:"highlightText"},Z={class:"highlightText"},A=(0,i._)("p",null," You are retraining model ",-1),$={class:"schemaDisplay"},J=(0,i._)("br",null,null,-1),K={class:"schemaDisplay"},X=(0,i._)("br",null,null,-1),ee={key:3,class:"schemaRemind"},te={class:"highlightText"},ae={class:"highlightText"},ne={class:"highlightText"},ie={class:"highlightText"},le=(0,i._)("p",null,"Q-Error of Running Result",-1),oe=(0,i._)("br",null,null,-1),se=(0,i._)("br",null,null,-1),re=(0,i._)("br",null,null,-1),ue=(0,i._)("br",null,null,-1),ce=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),me=(0,i._)("br",null,null,-1),de=(0,i._)("br",null,null,-1),he=(0,i._)("br",null,null,-1),_e=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1);function pe(e,t,a,n,l,pe){const ge=(0,i.up)("a-layout-header"),ke=(0,i.up)("a-step"),ye=(0,i.up)("a-steps"),fe=(0,i.up)("a-button"),ve=(0,i.up)("a-descriptions-item"),we=(0,i.up)("a-descriptions"),be=(0,i.up)("a-divider"),Se=(0,i.up)("a-select"),xe=(0,i.up)("a-slider"),Ce=(0,i.up)("a-cascader"),Ue=(0,i.up)("a-input-number"),De=(0,i.up)("a-card"),je=(0,i.up)("a-spin"),qe=(0,i.up)("a-modal"),Te=(0,i.up)("a-switch"),We=(0,i.up)("a-table"),Ie=(0,i.up)("a-image"),Me=(0,i.up)("a-col"),Ne=(0,i.up)("a-row"),Pe=(0,i.up)("a-back-top"),Qe=(0,i.up)("a-layout-content"),Ve=(0,i.up)("a-layout-footer"),Ge=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(Ge,{class:"main_page"},{default:(0,i.w5)((()=>[(0,i.Wm)(ge,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((()=>[(0,i._)("h1",null,(0,o.zw)(pe.msg),1)])),_:1}),(0,i.Wm)(Qe,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Ne,{justify:"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(Me,{span:18},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(De,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((()=>[l.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(ye,{current:l.currentStep,"onUpdate:current":t[0]||(t[0]=e=>l.currentStep=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(ke,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(ke,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(ke,{title:"Step 3",description:"Retreiving result"})])),_:1},8,["current"]),(0,i._)("div",r,[0===l.currentStep?((0,i.wg)(),(0,i.j4)(we,{key:0,title:""},{default:(0,i.w5)((()=>[(0,i.Wm)(ve,null,{default:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Uk)(" This project aims to assist researchers to select queries,"),m,(0,i.Uk)(" choose datasets with availiable models to "),d,h,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),_,(0,i.Uk)("Know how to use?"),p,(0,i.Uk)("Just click the "),(0,i.Wm)(fe,{style:{"margin-right":"3px","margin-left":"3px"},onClick:pe.viewTutorial},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])])),_:1})])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",g,[1===l.currentStep?((0,i.wg)(),(0,i.j4)(we,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(ve,null,{default:(0,i.w5)((()=>[k])),_:1})])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",y,[2===l.currentStep?((0,i.wg)(),(0,i.j4)(we,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(ve,null,{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i._)("span",v,[(0,i.Uk)(" After generating query and select the model running parameters"),w,(0,i.Uk)(" You can now see the result in table if everything run properly."),b,(0,i.Uk)(" You can click the "),(0,i.Wm)(fe,null,{default:(0,i.w5)((()=>[(0,i.Uk)("image")])),_:1}),(0,i.Uk)(" button for detail performance in graphs"),S,(0,i.Uk)(" You can also click the "),(0,i.Wm)(fe,{type:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("Plan Tree")])),_:1}),(0,i.Uk)(" button for a better investigation into each query exeuction ")])])])),_:1})])),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),l.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(fe,{style:{"margin-left":"3px"},onClick:pe.viewTutorial},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(l.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"])],64)),(0,i._)("div",x,[(0,i.Wm)(be,{style:{"background-color":"#00BFFF"}}),l.isGenerate?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[C,(0,i._)("div",U,[D,(0,i.Wm)(Se,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=e=>l.selectDataSet=e),onChange:pe.changeDataSet,options:l.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",j,[q,(0,i.Wm)(Se,{modelValue:l.min_join,"onUpdate:modelValue":t[2]||(t[2]=e=>l.min_join=e),onChange:pe.changeMin,options:l.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",T,[W,(0,i.Wm)(Se,{modelValue:l.max_join,"onUpdate:modelValue":t[3]||(t[3]=e=>l.max_join=e),onChange:pe.changeMax,options:l.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",I,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,o.zw)(this.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,o.zw)(100-this.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(xe,{value:l.train_ratio,"onUpdate:value":t[4]||(t[4]=e=>l.train_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),1===this.min_join?((0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,o.zw)(this.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,o.zw)(100-this.join_ratio)+"%",1),(0,i.Uk)("] ")]),N,(0,i.Wm)(xe,{value:l.join_ratio,"onUpdate:value":t[5]||(t[5]=e=>l.join_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])])):(0,i.kq)("",!0),(0,i.Wm)(fe,{type:"primary",ghost:"",onClick:pe.ratioSelection},{default:(0,i.w5)((()=>[(0,i.Uk)("Generate Query ")])),_:1},8,["onClick"]),(0,i.Wm)(fe,{type:"primary",style:{"margin-left":"6px"},onClick:pe.switchMode},{default:(0,i.w5)((()=>[(0,i.Uk)("To Testing")])),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),l.isGenerate?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[P,(0,i._)("div",Q,[V,(0,i.Wm)(Se,{modelValue:l.selectModel,"onUpdate:modelValue":t[6]||(t[6]=e=>l.selectModel=e),onChange:pe.changeModel,options:l.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",G,[O,(0,i.Wm)(Se,{modelValue:l.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=e=>l.selectDataSet=e),onChange:pe.changeDataSet,options:l.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",z,[F,(0,i.Wm)(Ce,{modelValue:l.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=e=>l.selectQuery=e),onChange:pe.changeQuery,options:l.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",Y,[L,(0,i.Wm)(Ue,{value:l.selectQueryNum,"onUpdate:value":t[9]||(t[9]=e=>l.selectQueryNum=e),min:10,max:1e3,step:"10"},null,8,["value"])]),(0,i._)("div",R,[(0,i.Wm)(fe,{type:"dashed",onClick:pe.retrainConfirm},{default:(0,i.w5)((()=>[(0,i.Uk)("Retrain Model")])),_:1},8,["onClick"]),(0,i.Wm)(fe,{style:{"margin-left":"6px"},type:"primary",onClick:pe.confirm},{default:(0,i.w5)((()=>[(0,i.Uk)("Run Query")])),_:1},8,["onClick"]),(0,i.Wm)(fe,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:pe.clean},{default:(0,i.w5)((()=>[(0,i.Uk)("Clean Data")])),_:1},8,["onClick"]),(0,i.Wm)(fe,{style:{"margin-left":"6px"},type:"dashed",onClick:pe.switchMode},{default:(0,i.w5)((()=>[(0,i.Uk)("Back to Generate")])),_:1},8,["onClick"])])],64))])])),_:1})]),l.isLoading?((0,i.wg)(),(0,i.j4)(je,{key:0,tip:"Loading...",style:{"margin-top":"6px"}})):(0,i.kq)("",!0),(0,i.Wm)(be,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(qe,{visible:l.modelVisible,"onUpdate:visible":t[10]||(t[10]=e=>l.modelVisible=e),title:"Query Running","ok-text":"confirm","cancel-text":"cancel",onOk:pe.runModel},{default:(0,i.w5)((()=>[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",E,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",B,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",H,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",Z,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. ")])])),_:1},8,["visible","onOk"]),(0,i.Wm)(qe,{visible:l.retrainVisible,"onUpdate:visible":t[11]||(t[11]=e=>l.retrainVisible=e),title:"Model Retrain","ok-text":"confirm","cancel-text":"cancel",onOk:pe.retrainModel},{default:(0,i.w5)((()=>[A])),_:1},8,["visible","onOk"]),"IMDB"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",$,[(0,i._)("span",null,"Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(Te,{checked:l.checked,"onUpdate:checked":t[12]||(t[12]=e=>l.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(We,{key:0,columns:l.tableSchema,dataSource:l.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),J,l.checked?((0,i.wg)(),(0,i.j4)(Ie,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,i.kq)("",!0)],64)):"TPCDS"===l.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i._)("div",K,[(0,i._)("span",null," Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,o.zw)(l.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(Te,{checked:l.checked,"onUpdate:checked":t[13]||(t[13]=e=>l.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),l.checked?((0,i.wg)(),(0,i.j4)(We,{key:0,columns:l.tableSchema,dataSource:l.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),X,l.checked?((0,i.wg)(),(0,i.j4)(Ie,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",ee,"Schema will be shown when you select the dataset")),(0,i.Wm)(be,{style:{"background-color":"#00BFFF"}}),l.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:4},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",te,(0,o.zw)(l.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",ae,(0,o.zw)(l.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",ne,(0,o.zw)(l.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",ie,(0,o.zw)(l.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(fe,{onClick:t[14]||(t[14]=e=>{pe.generateImage()})},{default:(0,i.w5)((()=>[(0,i.Uk)(" image")])),_:1})]),e.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[le,(0,i.Wm)(Ie,{height:200,width:350,src:l.var_q_errorImg},null,8,["src"]),oe,se,re,ue,ce,(0,i.Wm)(Ie,{height:225,width:550,src:pe.avgImage},null,8,["src"]),(0,i.Wm)(Ie,{height:450,width:550,src:pe.planImage},null,8,["src"]),(0,i.Wm)(Ie,{height:300,width:550,src:pe.execImage},null,8,["src"]),me,de,he,_e,(0,i.Wm)(Ie,{height:150,width:350,src:l.var_exec_low},null,8,["src"]),(0,i.Wm)(Ie,{height:150,width:350,src:l.var_exec_high},null,8,["src"]),(0,i.Wm)(Ie,{height:150,width:350,src:l.var_plan_low},null,8,["src"]),(0,i.Wm)(Ie,{height:150,width:350,src:l.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(We,{columns:l.reponseDataColumns,dataSource:l.displayData,onChange:pe.headerChange},{bodyCell:(0,i.w5)((({column:e,record:t})=>["action"===e.key?((0,i.wg)(),(0,i.j4)(fe,{key:0,type:"primary",onClick:e=>pe.requestPlanTree(t.key)},{default:(0,i.w5)((()=>[(0,i.Uk)("Plan Tree")])),_:2},1032,["onClick"])):(0,i.kq)("",!0)])),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)])),_:1})])),_:1}),(0,i.Wm)(Pe)])),_:1}),(0,i.Wm)(Ve,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" @seem4999 ")])),_:1})])),_:1})}a(2707);const ge=[{label:"NNGP",value:"NNGP"}],ke=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],ye=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],fe=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],ve=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],we=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],be=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"Action",key:"action"}],Se=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],xe=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],Ce=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],Ue=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}];var De=a(7422);const je=De.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}});class qe{get1(){return je.get("api1")}get2(){return je.get("api2")}get3(){return je.get("api3")}get4(){return je.get("api4")}getClean(){return je.get("clean")}}const Te=new qe;var We=a(521),Ie=a(4134),Me={name:"SelectComponent",setup(){const e=(0,We.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data(){return{click_msg:"SEEM FYP Project",modelStrings:ge,dataStrings:ke,queryStrings:ye,querynumStrings:fe,minStrings:ve,maxStrings:we,tableSchema:Se,ImdbSchema:xe,TpcdSchema:Ce,ForestSchema:Ue,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:be,isShow:!1,modelVisible:!1,checked:!0,retrainVisible:!1,var_tpcds:"",var_imdb:"",var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",var_q_errorImg:"",showTutorial:!0,currentStep:0,isRetrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0,isLoading:!1}},components:{},computed:{msg(){return this.click_msg},imgSource4(){return this.var_planImg},avgImage(){return console.log("average image link changed"),this.var_avgImg},planImage(){return this.var_planImg},execImage(){return this.var_execImg}},methods:{run4(){Te.get4().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},clean(){this.isShow=!1,Te.getClean().catch((e=>{console.log(e)}))},runModel(){console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.isRetrain||window.alert("You should retrain model first or else You may get worse running result "),this.selectQuery>this.max_join||this.selectQuery<this.min_join?window.alert(`Numbers of table of join should be bewteen max_join: ${this.max_join} and min_join: ${this.min_join}`):this.selectQueryNum%10===0?this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(this.isLoading=!0,je.get(`/runModel/${this.selectDataSet}-${this.selectQuery}-${this.selectQueryNum}`).then((e=>{console.log(e.data),this.displayData=e.data,this.isShow=!0,this.isLoading=!1})).catch((e=>{console.log(e),this.isLoading=!1})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters")):window.alert("You should input a valid number")},retrainModel(){console.log("selectDataSet: "+this.selectDataSet),this.isRetrain=!0,this.selectDataSet&&(console.log(`/retrainModel/${this.selectDataSet}`),this.isLoading=!0,je.get(`/retrainModel/${this.selectDataSet}`).then((e=>{console.log("The model has been retrained"),console.log(e.data),this.isLoading=!1})).catch((e=>{console.log(e),this.isLoading=!1})),this.retrainVisible=!1,console.log("retrain model"))},changeModel(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery(e){this.selectQuery=e},changeQueryNum(e){this.selectQueryNum=e},changeMin(e){this.min_join=e},changeMax(e){this.max_join=e,this.min_join>this.max_join&&(window.alert("Numbers of maximum join should not be smaller than that of minimum join"),this.max_join=this.min_join)},confirm(){this.modelVisible=!0},retrainConfirm(){this.retrainVisible=!0},headerChange:(e,t,a)=>{(void 0).displayData=(void 0).displayData.sort(),console.log("params: ",e,t,a)},viewTutorial(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage(){const e=this.displayData.map((e=>e.Planning)),t=this.displayData.map((e=>e.NNGP_Planning)),a=this.displayData.map((e=>e.Execution)),n=this.displayData.map((e=>e.NNGP_Execution));De.Z.post("api/image",{plan:e,execution:a,nngp_plan:t,nngp_execution:n}).then((e=>{let t=e.data;this.var_avgImg="",this.var_q_errorImg="",this.var_execImg="",this.var_exec_high="",this.var_exec_low="",this.var_planImg="",this.var_plan_high="",this.var_plan_low="",console.log("the var_img: "+this.var_avgImg),console.log("the image source set to be empty"),this.isImageShow=!1,setTimeout((()=>{this.var_avgImg=t.average,this.var_execImg=t.execution,this.var_planImg=t.planning,this.var_exec_high=t.high_exec,this.var_exec_low=t.low_exec,this.var_plan_high=t.high_plan,this.var_plan_low=t.low_plan,this.var_q_errorImg=t.q_error,this.isImageShow=!0,console.log("Getting image again")}),1e3),console.log("var_q_errorImg: "+this.var_q_errorImg),console.log(e)})).catch((e=>{console.log(e)}))},switchMode(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection(){let e=this.train_ratio/100,t=(100-this.train_ratio)/100,a=this.join_ratio/100,n=(100-this.join_ratio)/100,i=this.min_join,l=this.max_join;""===i&&(i=1),""===l&&(l=5),this.selectDataSet&&i<=l?De.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[a],non_join:[n]},min_max:{min:[i],max:[l]}}).then((e=>{console.log(e),this.response_message=e.data.message,this.show_message(this.response_message),this.isRetrain=!0})).catch((e=>{console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message(e){Ie.ZP.success(e,[2])},next(){this.currentStep++},prev(){this.currentStep--},requestPlanTree(e){De.Z.post("api/planTree",{selectQuery:this.selectQuery,queryNumber:e}).then((e=>{console.log(e);let t=e.data.pdf;window.open(t,"_blank")})).catch((e=>{console.log(e)}))}}},Ne=a(8998);const Pe=(0,Ne.Z)(Me,[["render",pe]]);var Qe=Pe,Ve={name:"App",components:{SelectComponent:Qe},data:()=>({title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""})};const Ge=(0,Ne.Z)(Ve,[["render",l]]);var Oe=Ge,ze=a(1782);a(2467);const Fe=(0,n.ri)(Oe).use(ze.ZP);Fe.mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,l){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],l=e[c][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<o&&(o=l));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,o=n[0],s=n[1],r=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var c=r(a)}for(t&&t(n);u<o.length;u++)l=o[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5239)}));n=a.O(n)})();
//# sourceMappingURL=app.40c30232.js.map