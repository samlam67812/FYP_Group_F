(function(){"use strict";var e={1682:function(e,t,a){a(6992),a(8674),a(7727);var n=a(4220),l=a(9812);function i(e,t,a,n,i,o){const s=(0,l.up)("SelectComponent");return(0,l.wg)(),(0,l.j4)(s)}var o=a(5893);const s={class:"controlPanel",style:{display:"flex","justify-content":"center"}},r={class:"stepContent"},c={class:"stepContent"},u={class:"stepOne"},m=(0,l._)("br",null,null,-1),d=(0,l._)("mark",null,"explore query optimization results.",-1),h=(0,l._)("br",null,null,-1),_=(0,l._)("br",null,null,-1),p=(0,l._)("br",null,null,-1),g={class:"stepContent"},k=(0,l._)("div",{class:"stepContent"},[(0,l._)("span",{class:"stepTwo"},[(0,l.Uk)(" Before actually running the nngp model and compare with the PostgreSQL Planner, "),(0,l._)("br"),(0,l.Uk)(" First, you "),(0,l._)("mark",null,[(0,l._)("strong",null,"MUST")]),(0,l.Uk)(" generate sets of training and testing queries for exploration. "),(0,l._)("br"),(0,l._)("mark",null,"Choose Schema"),(0,l.Uk)(": TPCDS and IMDB are provided, Choose schema to view more"),(0,l._)("br"),(0,l._)("mark",null,"min-max numbers of joining "),(0,l.Uk)(" (Numbers of Minimum, Maximum join in query)"),(0,l._)("br"),(0,l._)("mark",null,"Equi-join and Non-equi-join ratio:"),(0,l.Uk)(" (Only provided when minimum join of 0 is selected)"),(0,l._)("br"),(0,l._)("mark",null,"Train and Test query ratio:"),(0,l.Uk)(" (base numbers of query is 3000, if you choose 20% for test ratio)"),(0,l._)("br"),(0,l.Uk)(" You will get only 3000 * 20% = 600 query maximum for test"),(0,l._)("br"),(0,l.Uk)(" After selecting all required parameters, server will generate the query. "),(0,l._)("br")])],-1),y={class:"stepContent"},f={class:"stepContent"},v={class:"stepThree"},w=(0,l._)("br",null,null,-1),b=(0,l._)("br",null,null,-1),S=(0,l._)("br",null,null,-1),x={class:"paraSelect"},C=(0,l._)("p",null,"***Genreate Query for Testing First : ",-1),U={class:"selection"},D=(0,l._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),j={class:"selection"},q=(0,l._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),T={class:"selection"},W=(0,l._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),N={class:"slideControl"},Q={key:0,class:"slideControl"},P=(0,l._)("br",null,null,-1),I=(0,l._)("p",null,[(0,l._)("mark",null,"Retrain Model before Running"),(0,l.Uk)("Selecting parameters for Testing: ")],-1),M={class:"selection"},V=(0,l._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),G={class:"selection"},O=(0,l._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),z={class:"selection"},F=(0,l._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),Y={class:"selection"},R=(0,l._)("span",{class:"Option_query_num_title"},"Choose the number of queries: (enter multiple of 10)",-1),E={class:"buttonContainer"},B={class:"highlightText"},H={class:"highlightText"},Z={class:"highlightText"},A={class:"highlightText"},L=(0,l._)("p",null," You are retraining model ",-1),J={class:"schemaDisplay"},$=(0,l._)("br",null,null,-1),K={class:"schemaDisplay"},X=(0,l._)("br",null,null,-1),ee={key:2,class:"schemaRemind"},te={class:"highlightText"},ae={class:"highlightText"},ne={class:"highlightText"},le={class:"highlightText"},ie=(0,l._)("p",null,"Q-Error of Running Result",-1),oe=(0,l._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),se=(0,l._)("br",null,null,-1),re=(0,l._)("br",null,null,-1),ce=(0,l._)("br",null,null,-1),ue=(0,l._)("p",null,"Top 10 lowest and highest Queries performance",-1);function me(e,t,a,n,i,me){const de=(0,l.up)("a-layout-header"),he=(0,l.up)("a-step"),_e=(0,l.up)("a-steps"),pe=(0,l.up)("a-button"),ge=(0,l.up)("a-descriptions-item"),ke=(0,l.up)("a-descriptions"),ye=(0,l.up)("a-divider"),fe=(0,l.up)("a-select"),ve=(0,l.up)("a-slider"),we=(0,l.up)("a-cascader"),be=(0,l.up)("a-input-number"),Se=(0,l.up)("a-card"),xe=(0,l.up)("a-modal"),Ce=(0,l.up)("a-switch"),Ue=(0,l.up)("a-table"),De=(0,l.up)("a-image"),je=(0,l.up)("a-col"),qe=(0,l.up)("a-row"),Te=(0,l.up)("a-back-top"),We=(0,l.up)("a-layout-content"),Ne=(0,l.up)("a-layout-footer"),Qe=(0,l.up)("a-layout");return(0,l.wg)(),(0,l.j4)(Qe,{class:"main_page"},{default:(0,l.w5)((()=>[(0,l.Wm)(de,{style:{"background-color":"#00BFFF"}},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,o.zw)(me.msg),1)])),_:1}),(0,l.Wm)(We,null,{default:(0,l.w5)((()=>[(0,l.Wm)(qe,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(je,{span:18},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(Se,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,l.w5)((()=>[i.showTutorial?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(_e,{current:i.currentStep,"onUpdate:current":t[0]||(t[0]=e=>i.currentStep=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(he,{title:"Step 1",description:"Introduction"}),(0,l.Wm)(he,{title:"Step 2",description:"Preparation"}),(0,l.Wm)(he,{title:"Step 3",description:"Retreiving result"})])),_:1},8,["current"]),(0,l._)("div",r,[0===i.currentStep?((0,l.wg)(),(0,l.j4)(ke,{key:0,title:""},{default:(0,l.w5)((()=>[(0,l.Wm)(ge,null,{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l._)("span",u,[(0,l.Uk)(" This project aims to assist researchers to select queries,"),m,(0,l.Uk)(" choose datasets with availiable models to "),d,h,(0,l.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),_,(0,l.Uk)("Know how to use?"),p,(0,l.Uk)("Just click the "),(0,l.Wm)(pe,{style:{"margin-right":"3px","margin-left":"3px"},onClick:me.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"]),(0,l.Uk)(" to skip this guidance.")])])])),_:1})])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",g,[1===i.currentStep?((0,l.wg)(),(0,l.j4)(ke,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(ge,null,{default:(0,l.w5)((()=>[k])),_:1})])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",y,[2===i.currentStep?((0,l.wg)(),(0,l.j4)(ke,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(ge,null,{default:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l._)("span",v,[(0,l.Uk)(" After generating query and select the model running parameters"),w,(0,l.Uk)(" You can now see the result in table if everything run properly."),b,(0,l.Uk)(" You can click the "),(0,l.Wm)(pe,null,{default:(0,l.w5)((()=>[(0,l.Uk)("image")])),_:1}),(0,l.Uk)(" button for detail performance in graphs"),S,(0,l.Uk)(" You can also click the "),(0,l.Wm)(pe,{type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("Plan Tree")])),_:1}),(0,l.Uk)(" button for a better investigation into each query exeuction ")])])])),_:1})])),_:1})):(0,l.kq)("",!0)])],64)):(0,l.kq)("",!0),i.showTutorial?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l.Uk)("Guidance will be shown here: "),(0,l.Wm)(pe,{style:{"margin-left":"3px"},onClick:me.viewTutorial},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(i.showTutorial?"Close":"Guidance"),1)])),_:1},8,["onClick"])],64)),(0,l._)("div",x,[(0,l.Wm)(ye,{style:{"background-color":"#00BFFF"}}),i.isGenerate?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[C,(0,l._)("div",U,[D,(0,l.Wm)(fe,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=e=>i.selectDataSet=e),onChange:me.changeDataSet,options:i.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",j,[q,(0,l.Wm)(fe,{modelValue:i.min_join,"onUpdate:modelValue":t[2]||(t[2]=e=>i.min_join=e),onChange:me.changeMin,options:i.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",T,[W,(0,l.Wm)(fe,{modelValue:i.max_join,"onUpdate:modelValue":t[3]||(t[3]=e=>i.max_join=e),onChange:me.changeMax,options:i.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",N,[(0,l._)("span",null,[(0,l.Uk)("Move the slider for train_test ratio: [train: "),(0,l._)("mark",null,(0,o.zw)(this.train_ratio)+"%",1),(0,l.Uk)(", test: "),(0,l._)("mark",null,(0,o.zw)(100-this.train_ratio)+"%",1),(0,l.Uk)("] ")]),(0,l.Wm)(ve,{value:i.train_ratio,"onUpdate:value":t[4]||(t[4]=e=>i.train_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),1===this.min_join?((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("span",null,[(0,l.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,l._)("mark",null,(0,o.zw)(this.join_ratio)+"%",1),(0,l.Uk)(", non-join: "),(0,l._)("mark",null,(0,o.zw)(100-this.join_ratio)+"%",1),(0,l.Uk)("] ")]),P,(0,l.Wm)(ve,{value:i.join_ratio,"onUpdate:value":t[5]||(t[5]=e=>i.join_ratio=e),class:"train_test_ration_title",marks:n.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])])):(0,l.kq)("",!0),(0,l.Wm)(pe,{type:"primary",ghost:"",onClick:me.ratioSelection},{default:(0,l.w5)((()=>[(0,l.Uk)("Generate Query ")])),_:1},8,["onClick"]),(0,l.Wm)(pe,{type:"primary",style:{"margin-left":"6px"},onClick:me.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("To Testing")])),_:1},8,["onClick"])],64)):(0,l.kq)("",!0),i.isGenerate?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[I,(0,l._)("div",M,[V,(0,l.Wm)(fe,{modelValue:i.selectModel,"onUpdate:modelValue":t[6]||(t[6]=e=>i.selectModel=e),onChange:me.changeModel,options:i.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",G,[O,(0,l.Wm)(fe,{modelValue:i.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=e=>i.selectDataSet=e),onChange:me.changeDataSet,options:i.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",z,[F,(0,l.Wm)(we,{modelValue:i.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=e=>i.selectQuery=e),onChange:me.changeQuery,options:i.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,l._)("div",Y,[R,(0,l.Wm)(be,{value:i.selectQueryNum,"onUpdate:value":t[9]||(t[9]=e=>i.selectQueryNum=e),min:10,max:1e3,step:"10"},null,8,["value"])]),(0,l._)("div",E,[(0,l.Wm)(pe,{type:"dashed",onClick:me.retrainConfirm},{default:(0,l.w5)((()=>[(0,l.Uk)("Retrain Model")])),_:1},8,["onClick"]),(0,l.Wm)(pe,{style:{"margin-left":"6px"},type:"primary",onClick:me.confirm},{default:(0,l.w5)((()=>[(0,l.Uk)("Run Query")])),_:1},8,["onClick"]),(0,l.Wm)(pe,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:me.clean},{default:(0,l.w5)((()=>[(0,l.Uk)("Clean Data")])),_:1},8,["onClick"]),(0,l.Wm)(pe,{style:{"margin-left":"6px"},type:"dashed",onClick:me.switchMode},{default:(0,l.w5)((()=>[(0,l.Uk)("Back to Generate")])),_:1},8,["onClick"])])],64))])])),_:1})]),(0,l.Wm)(ye,{style:{"background-color":"#00BFFF"}}),(0,l.Wm)(xe,{visible:i.modelVisible,"onUpdate:visible":t[10]||(t[10]=e=>i.modelVisible=e),title:"Query Running","ok-text":"confirm","cancel-text":"cancel",onOk:me.runModel},{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l.Uk)(" You are running model "),(0,l._)("span",B,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",H,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",Z,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",A,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. ")])])),_:1},8,["visible","onOk"]),(0,l.Wm)(xe,{visible:i.retrainVisible,"onUpdate:visible":t[11]||(t[11]=e=>i.retrainVisible=e),title:"Model Retrain","ok-text":"confirm","cancel-text":"cancel",onOk:me.retrainModel},{default:(0,l.w5)((()=>[L])),_:1},8,["visible","onOk"]),"IMDB"===i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",J,[(0,l._)("span",null,"Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(Ce,{checked:i.checked,"onUpdate:checked":t[12]||(t[12]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(Ue,{key:0,columns:i.tableSchema,dataSource:i.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),(0,l.Uk)(),$,i.checked?((0,l.wg)(),(0,l.j4)(De,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.png"})):(0,l.kq)("",!0)],64)):"TPCDS"===i.selectDataSet?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[(0,l._)("div",K,[(0,l._)("span",null," Dataset: "+(0,o.zw)(this.selectDataSet),1),(0,l._)("span",null,[(0,l.Uk)((0,o.zw)(i.checked?"Hide":"Show")+" Schema ",1),(0,l.Wm)(Ce,{checked:i.checked,"onUpdate:checked":t[13]||(t[13]=e=>i.checked=e),style:{"margin-left":"12px"}},null,8,["checked"])])]),i.checked?((0,l.wg)(),(0,l.j4)(Ue,{key:0,columns:i.tableSchema,dataSource:i.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,l.kq)("",!0),(0,l.Uk)(),X,i.checked?((0,l.wg)(),(0,l.j4)(De,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,l.kq)("",!0)],64)):((0,l.wg)(),(0,l.iD)("span",ee,"Schema will be shown when you select the dataset")),(0,l.Wm)(ye,{style:{"background-color":"#00BFFF"}}),i.isShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[(0,l._)("p",null,[(0,l.Uk)(" Result of running model "),(0,l._)("span",te,(0,o.zw)(i.selectModel),1),(0,l.Uk)(", with dataset "),(0,l._)("span",ae,(0,o.zw)(i.selectDataSet),1),(0,l.Uk)(", joining "),(0,l._)("span",ne,(0,o.zw)(i.selectQuery),1),(0,l.Uk)(" tables with "),(0,l._)("span",le,(0,o.zw)(i.selectQueryNum),1),(0,l.Uk)(" query. "),(0,l.Wm)(pe,{onClick:t[14]||(t[14]=e=>{me.generateImage()})},{default:(0,l.w5)((()=>[(0,l.Uk)(" image")])),_:1})]),e.isImageShow?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[ie,(0,l.Wm)(De,{height:200,width:350,src:i.var_q_errorImg},null,8,["src"]),oe,(0,l.Wm)(De,{height:225,width:550,src:me.avgImage},null,8,["src"]),(0,l.Wm)(De,{height:450,width:550,src:me.planImage},null,8,["src"]),(0,l.Wm)(De,{height:300,width:550,src:me.execImage},null,8,["src"]),se,re,ce,ue,(0,l.Wm)(De,{height:150,width:350,src:i.var_exec_low},null,8,["src"]),(0,l.Wm)(De,{height:150,width:350,src:i.var_exec_high},null,8,["src"]),(0,l.Wm)(De,{height:150,width:350,src:i.var_plan_low},null,8,["src"]),(0,l.Wm)(De,{height:150,width:350,src:i.var_plan_high},null,8,["src"])],64)):(0,l.kq)("",!0),(0,l.Wm)(Ue,{columns:i.reponseDataColumns,dataSource:i.displayData,onChange:me.headerChange},{bodyCell:(0,l.w5)((({column:e,record:t})=>["action"===e.key?((0,l.wg)(),(0,l.j4)(pe,{key:0,type:"primary",onClick:e=>me.requestPlanTree(t.key)},{default:(0,l.w5)((()=>[(0,l.Uk)("Plan Tree")])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])),_:1},8,["columns","dataSource","onChange"])],64)):(0,l.kq)("",!0)])),_:1})])),_:1}),(0,l.Wm)(Te)])),_:1}),(0,l.Wm)(Ne,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" @seem4999 ")])),_:1})])),_:1})}a(2707);const de=[{label:"NNGP",value:"NNGP"}],he=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],_e=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],pe=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],ge=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ke=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ye=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"Action",key:"action"}],fe=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],ve=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],we=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],be=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}];var Se=a(7422);const xe=Se.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}});class Ce{get1(){return xe.get("api1")}get2(){return xe.get("api2")}get3(){return xe.get("api3")}get4(){return xe.get("api4")}getClean(){return xe.get("clean")}}const Ue=new Ce;var De=a(521),je=a(4134),qe={name:"SelectComponent",setup(){const e=(0,De.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data(){return{click_msg:"SEEM FYP Project",modelStrings:de,dataStrings:he,queryStrings:_e,querynumStrings:pe,minStrings:ge,maxStrings:ke,tableSchema:fe,ImdbSchema:ve,TpcdSchema:we,ForestSchema:be,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:ye,isShow:!1,modelVisible:!1,checked:!0,retrainVisible:!1,var_tpcds:"",var_imdb:"",var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",var_q_errorImg:"",showTutorial:!0,currentStep:0,isRetrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg(){return this.click_msg},imgSource4(){return this.var_planImg},avgImage(){return console.log("average image link changed"),this.var_avgImg},planImage(){return this.var_planImg},execImage(){return this.var_execImg}},methods:{run4(){Ue.get4().then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},clean(){this.isShow=!1,Ue.getClean().catch((e=>{console.log(e)}))},runModel(){console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.isRetrain||window.alert("You should retain the model first !!! "),(this.selectQuery>this.max_join||this.selectQuery<this.min_join)&&window.alert(`Numbers of table of join should be bewteen max_join: ${this.max_join} and min_join: ${this.min_join}`),this.selectQueryNum%10===0?this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(xe.get(`/runModel/${this.selectDataSet}-${this.selectQuery}-${this.selectQueryNum}`).then((e=>{console.log(e.data),this.displayData=e.data,this.isShow=!0})).catch((e=>{console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters")):window.alert("You should input a valid number")},retrainModel(){console.log("from retrain model"),console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.isRetrain=!0,this.selectDataSet&&(xe.get(`/retrainModel/${this.selectDataSet}`).then((e=>{console.log(e.data)})).catch((e=>{console.log(e)})),this.retrainVisible=!1,console.log("retrain model"))},changeModel(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery(e){this.selectQuery=e},changeQueryNum(e){this.selectQueryNum=e},changeMin(e){this.min_join=e},changeMax(e){this.max_join=e,this.min_join>this.max_join&&(window.alert("Numbers of maximum join should not be smaller than that of minimum join"),this.max_join=this.min_join)},confirm(){this.modelVisible=!0},retrainConfirm(){this.retrainVisible=!0},headerChange:(e,t,a)=>{(void 0).displayData=(void 0).displayData.sort(),console.log("params: ",e,t,a)},viewTutorial(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage(){const e=this.displayData.map((e=>e.Planning)),t=this.displayData.map((e=>e.NNGP_Planning)),a=this.displayData.map((e=>e.Execution)),n=this.displayData.map((e=>e.NNGP_Execution));Se.Z.post("api/image",{plan:e,execution:a,nngp_plan:t,nngp_execution:n}).then((e=>{let t=e.data;this.var_avgImg="",this.var_execImg="",this.var_exec_high="",this.var_exec_low="",this.var_planImg="",this.var_plan_high="",this.var_plan_low="",console.log("the var_img: "+this.var_avgImg),console.log("the image source set to be empty"),setTimeout((()=>{this.var_avgImg=t.average,this.var_execImg=t.execution,this.var_planImg=t.planning,this.var_exec_high=t.high_exec,this.var_exec_low=t.low_exec,this.var_plan_high=t.high_plan,this.var_plan_low=t.low_plan,this.var_q_errorImg=t.q_error,this.isImageShow=!0,console.log("Getting image again")}),1200),console.log(e)})).catch((e=>{console.log(e)}))},switchMode(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection(){let e=this.train_ratio/100,t=(100-this.train_ratio)/100,a=this.join_ratio/100,n=(100-this.join_ratio)/100,l=this.min_join,i=this.max_join;""===l&&(l=1),""===i&&(i=5),this.selectDataSet&&l<=i?Se.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[e],test:[t]},non_join_query_ratio:{join:[a],non_join:[n]},min_max:{min:[l],max:[i]}}).then((e=>{console.log(e),this.response_message=e.data.message,this.show_message(this.response_message),this.isRetrain=!0})).catch((e=>{console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message(e){je.ZP.success(e,[1.5])},next(){this.currentStep++},prev(){this.currentStep--},requestPlanTree(e){Se.Z.post("api/planTree",{selectQuery:this.selectQuery,queryNumber:e}).then((e=>{console.log(e);let t=e.data.pdf;window.open(t,"_blank")})).catch((e=>{console.log(e)}))}}},Te=a(8998);const We=(0,Te.Z)(qe,[["render",me]]);var Ne=We,Qe={name:"App",components:{SelectComponent:Ne},data:()=>({title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""})};const Pe=(0,Te.Z)(Qe,[["render",i]]);var Ie=Pe,Me=a(1782);a(2467);const Ve=(0,n.ri)(Ie).use(Me.ZP);Ve.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,i,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1682)}));n=a.O(n)})();
//# sourceMappingURL=app.67903084.js.map