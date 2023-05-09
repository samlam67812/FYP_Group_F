(function(){"use strict";var e={678:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(7121),i=n(9812);function o(e,t,n,a,o,l){var r=(0,i.up)("SelectComponent");return(0,i.wg)(),(0,i.j4)(r)}var l=n(5893),r={class:"controlPanel",style:{display:"flex","justify-content":"center"}},s={class:"stepContent"},u={class:"stepContent"},c={class:"stepOne"},m=(0,i._)("br",null,null,-1),d=(0,i._)("mark",null,"explore query optimization results.",-1),_=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),p=(0,i._)("br",null,null,-1),g={class:"stepContent"},f=(0,i._)("div",{class:"stepContent"},[(0,i._)("span",{class:"stepTwo"},[(0,i.Uk)(" Before actually runnning the nngp model and compare with the PostgreSQL Planner, "),(0,i._)("br"),(0,i.Uk)(" First, you might generate sets of training and testing queries for exploration. "),(0,i._)("br"),(0,i.Uk)(" If you do not wish to generate query, you can still use the built in query sets. "),(0,i._)("br"),(0,i._)("mark",null,"Choose Schema"),(0,i.Uk)(": "),(0,i._)("strong",null,"TPCDS / IMDB"),(0,i.Uk)(" provided"),(0,i._)("br"),(0,i._)("mark",null,"min-max numbers of joining "),(0,i.Uk)(" (Numbers of Minimum, Maximum join in query)"),(0,i._)("br"),(0,i.Uk)(" Equi-join and Non-equi-join ratio: (Only provided when minimum join of 0 is selected)"),(0,i._)("br"),(0,i.Uk)(" Train and Test query ratio: ()"),(0,i._)("br"),(0,i.Uk)(" After selecting all required parameters, server will generate the query. "),(0,i._)("br"),(0,i.Uk)(" You can now move to next steps ")])],-1),k={class:"stepContent"},y={class:"paraSelect"},v=(0,i._)("p",null,"Genreate Query for Testing: ",-1),w={class:"selection"},b=(0,i._)("span",{class:"Option_data_title"},"Choose a schema: ",-1),S={class:"selection"},x=(0,i._)("span",{class:"Option_data_title"},"Choose Minimum Join: ",-1),C={class:"selection"},j=(0,i._)("span",{class:"Option_data_title"},"Choose Maximum Join: ",-1),D={class:"slideControl"},U={key:0,class:"slideControl"},T=(0,i._)("br",null,null,-1),q=(0,i._)("p",null,"Selecting parameters for Testing: ",-1),W={class:"selection"},N=(0,i._)("span",{class:"Option_model_title"},"Choose a Model: ",-1),I={class:"selection"},P=(0,i._)("span",{class:"Option_data_title"},"Choose a dataset: ",-1),M={class:"selection"},Q=(0,i._)("span",{class:"Option_query_title"},"Choose the number of table(s) to be joined: ",-1),G={class:"selection"},O=(0,i._)("span",{class:"Option_query_num_title"},"Choose the number of queries: ",-1),V={class:"buttonContainer"},z={class:"highlightText"},F={class:"highlightText"},E={class:"highlightText"},B={class:"highlightText"},H={class:"schemaDisplay"},Y=(0,i._)("br",null,null,-1),Z={class:"schemaDisplay"},A=(0,i._)("br",null,null,-1),L={key:2,class:"schemaRemind"},J={class:"highlightText"},R={class:"highlightText"},K={class:"highlightText"},X={class:"highlightText"},$=(0,i._)("p",null,"Average Planning Time and Execution Time Comparsion",-1),ee=(0,i._)("br",null,null,-1),te=(0,i._)("p",null,"Top 10 lowest and highest Queries performance",-1);function ne(e,t,n,a,o,ne){var ae=this,ie=(0,i.up)("a-layout-header"),oe=(0,i.up)("a-step"),le=(0,i.up)("a-steps"),re=(0,i.up)("a-button"),se=(0,i.up)("a-descriptions-item"),ue=(0,i.up)("a-descriptions"),ce=(0,i.up)("a-divider"),me=(0,i.up)("a-select"),de=(0,i.up)("a-slider"),_e=(0,i.up)("a-cascader"),he=(0,i.up)("a-input-number"),pe=(0,i.up)("a-card"),ge=(0,i.up)("a-modal"),fe=(0,i.up)("a-switch"),ke=(0,i.up)("a-table"),ye=(0,i.up)("a-image"),ve=(0,i.up)("a-col"),we=(0,i.up)("a-row"),be=(0,i.up)("a-back-top"),Se=(0,i.up)("a-layout-content"),xe=(0,i.up)("a-layout-footer"),Ce=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.j4)(Ce,{class:"main_page"},{default:(0,i.w5)((function(){return[(0,i.Wm)(ie,{style:{"background-color":"#00BFFF"}},{default:(0,i.w5)((function(){return[(0,i._)("h1",null,(0,l.zw)(ne.msg),1)]})),_:1}),(0,i.Wm)(Se,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(we,{justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(ve,{span:18},{default:(0,i.w5)((function(){return[(0,i._)("div",r,[(0,i.Wm)(pe,{title:"Parameters Setting For Deep Learning in Databases",bordered:!1,class:"cardContainer"},{default:(0,i.w5)((function(){return[o.showTutorial?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(le,{current:o.currentStep,"onUpdate:current":t[0]||(t[0]=function(e){return o.currentStep=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(oe,{title:"Step 1",description:"Introduction"}),(0,i.Wm)(oe,{title:"Step 2",description:"Preparation"}),(0,i.Wm)(oe,{title:"Step 3",description:"Retreiving result"})]})),_:1},8,["current"]),(0,i._)("div",s,[0===o.currentStep?((0,i.wg)(),(0,i.j4)(ue,{key:0,title:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(se,null,{default:(0,i.w5)((function(){return[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Uk)(" This project aims to assist researchers to select queries,"),m,(0,i.Uk)(" choose datasets with availiable models to "),d,_,(0,i.Uk)("Follow this guidance to investigate performance of NNGP model in optimizing query planning and execution."),h,(0,i.Uk)("Know how to use?"),p,(0,i.Uk)("Just click the "),(0,i.Wm)(re,{style:{"margin-right":"3px","margin-left":"3px"},onClick:ne.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"]),(0,i.Uk)(" to skip this guidance.")])])]})),_:1})]})),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",g,[1===o.currentStep?((0,i.wg)(),(0,i.j4)(ue,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(se,null,{default:(0,i.w5)((function(){return[f]})),_:1})]})),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",k,[2===o.currentStep?((0,i.wg)(),(0,i.j4)(ue,{key:0},{default:(0,i.w5)((function(){return[(0,i.Wm)(se,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" After ")]})),_:1})]})),_:1})):(0,i.kq)("",!0)])],64)):(0,i.kq)("",!0),o.showTutorial?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("Guidance will be shown here: "),(0,i.Wm)(re,{style:{"margin-left":"3px"},onClick:ne.viewTutorial},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(o.showTutorial?"Close":"Guidance"),1)]})),_:1},8,["onClick"])],64)),(0,i._)("div",y,[(0,i.Wm)(ce,{style:{"background-color":"#00BFFF"}}),o.isGenerate?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[v,(0,i._)("div",w,[b,(0,i.Wm)(me,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectDataSet=e}),onChange:ne.changeDataSet,options:o.dataStrings,placeholder:"Select a schema."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",S,[x,(0,i.Wm)(me,{modelValue:o.min_join,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.min_join=e}),onChange:ne.changeMin,options:o.minStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",C,[j,(0,i.Wm)(me,{modelValue:o.max_join,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.max_join=e}),onChange:ne.changeMax,options:o.maxStrings,placeholder:"Select a number."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",D,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for train_test ratio: [train: "),(0,i._)("mark",null,(0,l.zw)(ae.train_ratio)+"%",1),(0,i.Uk)(", test: "),(0,i._)("mark",null,(0,l.zw)(100-ae.train_ratio)+"%",1),(0,i.Uk)("] ")]),(0,i.Wm)(de,{value:o.train_ratio,"onUpdate:value":t[4]||(t[4]=function(e){return o.train_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])]),1===ae.min_join?((0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("span",null,[(0,i.Uk)("Move the slider for Join_Non-Join query ratio: [join: "),(0,i._)("mark",null,(0,l.zw)(ae.join_ratio)+"%",1),(0,i.Uk)(", non-join: "),(0,i._)("mark",null,(0,l.zw)(100-ae.join_ratio)+"%",1),(0,i.Uk)("] ")]),T,(0,i.Wm)(de,{value:o.join_ratio,"onUpdate:value":t[5]||(t[5]=function(e){return o.join_ratio=e}),class:"train_test_ration_title",marks:a.marksSlider,"tooltip-visible":!1,step:5},null,8,["value","marks"])])):(0,i.kq)("",!0),(0,i.Wm)(re,{type:"primary",ghost:"",onClick:ne.ratioSelection},{default:(0,i.w5)((function(){return[(0,i.Uk)("Generate Query")]})),_:1},8,["onClick"]),(0,i.Wm)(re,{type:"primary",style:{"margin-left":"6px"},onClick:ne.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("To Testing")]})),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),o.isGenerate?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[q,(0,i._)("div",W,[N,(0,i.Wm)(me,{modelValue:o.selectModel,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.selectModel=e}),onChange:ne.changeModel,options:o.modelStrings,placeholder:"Select a model."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",I,[P,(0,i.Wm)(me,{modelValue:o.selectDataSet,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.selectDataSet=e}),onChange:ne.changeDataSet,options:o.dataStrings,placeholder:"Select a dataset."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",M,[Q,(0,i.Wm)(_e,{modelValue:o.selectQuery,"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.selectQuery=e}),onChange:ne.changeQuery,options:o.queryStrings,placeholder:"Select query set."},null,8,["modelValue","onChange","options"])]),(0,i._)("div",G,[O,(0,i.Wm)(he,{value:o.selectQueryNum,"onUpdate:value":t[9]||(t[9]=function(e){return o.selectQueryNum=e}),min:50,max:1e4,step:"50"},null,8,["value"])]),(0,i._)("div",V,[(0,i.Wm)(re,{type:"primary",onClick:ne.confirm},{default:(0,i.w5)((function(){return[(0,i.Uk)("Run Model")]})),_:1},8,["onClick"]),(0,i.Wm)(re,{style:{"margin-left":"6px"},danger:"",ghost:"",onClick:ne.clean},{default:(0,i.w5)((function(){return[(0,i.Uk)("Clean Data")]})),_:1},8,["onClick"]),(0,i.Wm)(re,{style:{"margin-left":"6px"},type:"dashed",onClick:ne.switchMode},{default:(0,i.w5)((function(){return[(0,i.Uk)("Back to Generate")]})),_:1},8,["onClick"])])],64))])]})),_:1})]),(0,i.Wm)(ce,{style:{"background-color":"#00BFFF"}}),(0,i.Wm)(ge,{visible:o.modelVisible,"onUpdate:visible":t[10]||(t[10]=function(e){return o.modelVisible=e}),title:"Model Running","ok-text":"confirm","cancel-text":"cancel",onOk:ne.runModel},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[(0,i.Uk)(" You are running model "),(0,i._)("span",z,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",F,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",E,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",B,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. ")])]})),_:1},8,["visible","onOk"]),"IMDB"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",H,[(0,i._)("span",null,"Dataset: "+(0,l.zw)(ae.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(fe,{checked:o.checked,"onUpdate:checked":t[11]||(t[11]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(ke,{key:0,columns:o.tableSchema,dataSource:o.ImdbSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),Y,o.checked?((0,i.wg)(),(0,i.j4)(ye,{key:1,width:750,src:"http://137.189.59.166:8000/imdb.eps"})):(0,i.kq)("",!0)],64)):"TPCDS"===o.selectDataSet?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",Z,[(0,i._)("span",null," Dataset: "+(0,l.zw)(ae.selectDataSet),1),(0,i._)("span",null,[(0,i.Uk)((0,l.zw)(o.checked?"Hide":"Show")+" Schema ",1),(0,i.Wm)(fe,{checked:o.checked,"onUpdate:checked":t[12]||(t[12]=function(e){return o.checked=e}),style:{"margin-left":"12px"}},null,8,["checked"])])]),o.checked?((0,i.wg)(),(0,i.j4)(ke,{key:0,columns:o.tableSchema,dataSource:o.TpcdSchema,pagination:!1},null,8,["columns","dataSource"])):(0,i.kq)("",!0),(0,i.Uk)(),A,o.checked?((0,i.wg)(),(0,i.j4)(ye,{key:1,width:750,src:"http://137.189.59.166:8000/tpcds.png"})):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("span",L,"Schema will be shown when you select the dataset")),(0,i.Wm)(ce,{style:{"background-color":"#00BFFF"}}),o.isShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[(0,i._)("p",null,[(0,i.Uk)(" Result of running model "),(0,i._)("span",J,(0,l.zw)(o.selectModel),1),(0,i.Uk)(", with dataset "),(0,i._)("span",R,(0,l.zw)(o.selectDataSet),1),(0,i.Uk)(", joining "),(0,i._)("span",K,(0,l.zw)(o.selectQuery),1),(0,i.Uk)(" tables with "),(0,i._)("span",X,(0,l.zw)(o.selectQueryNum),1),(0,i.Uk)(" query. "),(0,i.Wm)(re,{onClick:t[13]||(t[13]=function(e){ne.generateImage()})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" image")]})),_:1})]),o.isImageShow?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[$,(0,i.Wm)(ye,{height:225,width:550,src:ne.avgImage},null,8,["src"]),(0,i.Wm)(ye,{height:225,width:550,src:ne.planImage},null,8,["src"]),(0,i.Wm)(ye,{height:225,width:550,src:ne.execImage},null,8,["src"]),ee,te,(0,i.Wm)(ye,{height:150,width:350,src:o.var_exec_low},null,8,["src"]),(0,i.Wm)(ye,{height:150,width:350,src:o.var_exec_high},null,8,["src"]),(0,i.Wm)(ye,{height:150,width:350,src:o.var_plan_low},null,8,["src"]),(0,i.Wm)(ye,{height:150,width:350,src:o.var_plan_high},null,8,["src"])],64)):(0,i.kq)("",!0),(0,i.Wm)(ke,{columns:o.reponseDataColumns,dataSource:o.displayData,onChange:ne.headerChange},{bodyCell:(0,i.w5)((function(n){var a=n.column;return["action"===a.key?((0,i.wg)(),(0,i.j4)(re,{key:0,type:"primary",onClick:t[14]||(t[14]=function(t){return ne.sendKey(e.record.key)})},{default:(0,i.w5)((function(){return[(0,i.Uk)("Testing")]})),_:1})):(0,i.kq)("",!0)]})),_:1},8,["columns","dataSource","onChange"])],64)):(0,i.kq)("",!0)]})),_:1})]})),_:1}),(0,i.Wm)(be)]})),_:1}),(0,i.Wm)(xe,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" @seem4999 ")]})),_:1})]})),_:1})}n(2222),n(2707),n(1249);var ae=[{label:"NNGP",value:"NNGP"}],ie=[{label:"IMDB",value:"IMDB"},{label:"TPCDS",value:"TPCDS"}],oe=[{label:"1 table",value:1},{label:"2 tables",value:2},{label:"3 tables",value:3},{label:"4 tables",value:4},{label:"5 tables",value:5}],le=[{label:"50 queries",value:50},{label:"100 queries",value:100},{label:"200 queries",value:200}],re=[{label:"1",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],se=[{label:"1 ",value:1},{label:"2 ",value:2},{label:"3 ",value:3},{label:"4 ",value:4},{label:"5 ",value:5}],ue=[{title:"Query",dataIndex:"Query",key:"Query"},{title:"Planning Time (in ms)",dataIndex:"Planning",key:"Planning"},{title:"Exectution Time (in ms)",dataIndex:"Execution",key:"Execution"},{title:"NNGP_Planning (in ms)",dataIndex:"NNGP_Planning",key:"NNGP_Planning"},{title:"NNGP_Execution (in ms)",dataIndex:"NNGP_Execution",key:"NNGP_Execution"},{title:"SQL",dataIndex:"SQL",key:"SQL"},{title:"Action",key:"action"}],ce=[{title:"Table",dataIndex:"name",key:"name"},{title:"Attribute",dataIndex:"attribute",key:"attribute"}],me=[{key:"1",name:"cast_info",attribute:"(person_id int, movie_id int, person_role_id int)"},{key:"2",name:"movie_companies",attribute:"(movie_id int, company_id int, company_type_id int)"},{key:"3",name:"movie_info",attribute:"(movie_info_id int, movie_id int, info_type_id int)"},{key:"4",name:"movie_info_idx",attribute:"(movie_info_idx_id int, movie_id int, info_type_id int)"},{key:"5",name:"movie_keyword",attribute:"(movie_id int, keyword int)"},{key:"6",name:"title",attribute:"(movie_id int, kind_id int, product_year int, imdb_id int)"}],de=[{key:"1",name:"customer",attribute:"(customer_sk int, birth_day float, birth_month float, birth_year float)"},{key:"2",name:"item",attribute:"(item_sk int, current_price float, wholesale_cost float, brand_id float, class_id float, category_id float, manufact_id float)"},{key:"3",name:"promotion",attribute:"(promo_sk int, item_sk float, cost float, response_target float)"},{key:"4",name:"store",attribute:"(store_sk int, number_employees int, floor_space int, market_id int, devision_id int, company_id int, tax_percentage float)"},{key:"5",name:"store_sales",attribute:"(item_sk int, customer_sk float, store_sk float, promo_sk float, quantity float, wholesale_cost float, list_price float, sales_price float, ext_discount_amt float, ext_sales_price float, ext_wholesale_cost float, ext_list_price float, ext_tax float, ext_coupon_amt float, net_paid float, net_paid_inc_tax float, net_profit float)"}],_e=[{key:"1",name:"forest",attribute:"(A int, B int, C int, D int, E int, F int, G int, H int, I int, J int);"}],he=n(280),pe=n(6298),ge=n(7422),fe=ge.Z.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),ke=function(){function e(){(0,he.Z)(this,e)}return(0,pe.Z)(e,[{key:"get1",value:function(){return fe.get("api1")}},{key:"get2",value:function(){return fe.get("api2")}},{key:"get3",value:function(){return fe.get("api3")}},{key:"get4",value:function(){return fe.get("api4")}},{key:"getClean",value:function(){return fe.get("clean")}}]),e}(),ye=new ke,ve=n(521),we=n(4134),be=void 0,Se={name:"SelectComponent",setup:function(){var e=(0,ve.iH)({0:"0 %",25:"25 %",50:"50 %",75:"75 %",100:"100 %"});return{marksSlider:e}},data:function(){return{click_msg:"SEEM FYP Project",modelStrings:ae,dataStrings:ie,queryStrings:oe,querynumStrings:le,minStrings:re,maxStrings:se,tableSchema:ce,ImdbSchema:me,TpcdSchema:de,ForestSchema:_e,selectModel:"NNGP",selectDataSet:"",selectQuery:"",selectQueryNum:"",displayData:"",reponseDataColumns:ue,isShow:!1,modelVisible:!1,checked:!0,isImageShow:!1,var_tpcds:"",var_imdb:"",var_avgImg:"",var_planImg:"",var_plan_low:"",var_plan_high:"",var_execImg:"",var_exec_low:"",var_exec_high:"",showTutorial:!0,currentStep:0,isTrain:!1,train_ratio:80,join_ratio:50,min_join:"",max_join:"",generate_query:!1,response_message:"",isGenerate:!0}},components:{},computed:{msg:function(){return this.click_msg},imgSource4:function(){return this.var_planImg},avgImage:function(){return console.log("average image link changed"),this.var_avgImg},planImage:function(){return this.var_planImg},execImage:function(){return this.var_execImg}},methods:{run4:function(){ye.get4().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},clean:function(){this.isShow=!1,ye.getClean().catch((function(e){console.log(e)}))},runModel:function(){var e=this;console.log("selectDataSet: "+this.selectDataSet),console.log("selectQuery: "+this.selectQuery),console.log("selectQueryNum: "+this.selectQueryNum),this.selectDataSet&&this.selectQuery&&this.selectQueryNum?(fe.get("/runModel/".concat(this.selectDataSet,"-").concat(this.selectQuery,"-").concat(this.selectQueryNum)).then((function(t){console.log(t.data),e.displayData=t.data,e.isShow=!0})).catch((function(e){console.log(e)})),this.modelVisible=!1,console.log("running model")):(this.modelVisible=!1,window.alert("Please select all parameters"))},changeModel:function(e){this.selectModel=e,console.log("selectModel: "+this.selectModel)},changeDataSet:function(e){this.selectDataSet=e,console.log(this.selectDataSet),"IMDB"===this.selectDataSet?console.log("using imdb"):"TPCDS"===this.selectDataSet&&console.log("using tbcds")},changeQuery:function(e){this.selectQuery=e},changeQueryNum:function(e){this.selectQueryNum=e},changeMin:function(e){this.max_join?this.min_join>this.max_join&&window.alert("Numbers of minimum join should not be greater than that of maximum join"):this.min_join=e},changeMax:function(e){this.max_join=e,this.min_join>this.max_join&&(window.alert("Numbers of maximum join should not be smaller than that of minimum join"),this.max_join=this.min_join)},confirm:function(){this.modelVisible=!0},headerChange:function(e,t,n){be.displayData=be.displayData.sort(),console.log("params: ",e,t,n)},viewTutorial:function(){this.showTutorial?this.showTutorial=!1:this.showTutorial=!0},generateImage:function(){var e=this,t=this.displayData.map((function(e){return e.Planning})),n=this.displayData.map((function(e){return e.NNGP_Planning})),a=this.displayData.map((function(e){return e.Execution})),i=this.displayData.map((function(e){return e.NNGP_Execution}));ge.Z.post("api/image",{plan:t,execution:a,nngp_plan:n,nngp_execution:i}).then((function(t){var n=t.data;e.var_avgImg="",e.var_execImg="",e.var_exec_high="",e.var_exec_low="",e.var_planImg="",e.var_plan_high="",e.var_plan_low="",console.log("the var_img: "+e.var_avgImg),console.log("the image source set to be empty"),setTimeout((function(){e.var_avgImg=n.average,e.var_execImg=n.execution,e.var_planImg=n.planning,e.var_exec_high=n.high_exec,e.var_exec_low=n.low_exec,e.var_plan_high=n.high_plan,e.var_plan_low=n.low_plan,e.isImageShow=!0,console.log("Getting image again")}),1200),console.log(t)})).catch((function(e){console.log(e)}))},switchMode:function(){this.isGenerate?this.isGenerate=!1:this.isGenerate=!0},ratioSelection:function(){var e=this,t=this.train_ratio/100,n=(100-this.train_ratio)/100,a=this.join_ratio/100,i=(100-this.join_ratio)/100,o=this.min_join,l=this.max_join;""===o&&(o=1),""===l&&(l=5),this.selectDataSet&&o<=l?ge.Z.post("api/ratio",{relation_name:[this.selectDataSet],train_test_ratio:{train:[t],test:[n]},non_join_query_ratio:{join:[a],non_join:[i]},min_max:{min:[o],max:[l]}}).then((function(t){console.log(t),e.response_message=t.data.message,e.show_message(e.response_message)})).catch((function(e){console.log(e)})):window.alert("Select all parameters and make sure your input is valid ")},show_message:function(e){we.ZP.success(e,[1.5])},next:function(){this.currentStep++},prev:function(){this.currentStep--},sendKey:function(e){console.log(e)},requestPlanTree:function(){ge.Z.post("api/planTree",{selectQuery:this.selectQuery,queryNumber:10}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},xe=n(8998);const Ce=(0,xe.Z)(Se,[["render",ne]]);var je=Ce,De={name:"App",components:{SelectComponent:je},data:function(){return{title:"Seem 4999: Deep Learning in Databases",selectedModel:"NNGP",dataset:"",relationNumber:"",numberOfQuery:""}}};const Ue=(0,xe.Z)(De,[["render",o]]);var Te=Ue,qe=n(8e3),We=(n(2467),(0,a.ri)(Te).use(qe.ZP));We.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(678)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.e1c095c5.js.map