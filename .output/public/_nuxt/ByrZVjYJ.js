import{_ as z,a as k,b as D,c as E}from"./DhSwuYlg.js";import{_ as T}from"./Df5NGfAV.js";import{_ as I}from"./W-fRpguC.js";import{_ as C}from"./il2EDBUK.js";import{u as m}from"./BqaIke34.js";import{d as B,D as x,t as s,v as r,z as d,x as t,B as g,F as p,E as h,G as _,y as i}from"./a5GKq1sd.js";import"./Tt3Oux14.js";const F={class:"container-fluid blog pb-5 fadeInUp",style:{"text-align":"-webkit-center","z-index":"1",position:"relative","padding-top":"20px !important","padding-bottom":"150px !important","background-color":"#f6f6f6"}},O={class:"container",style:{"max-width":"1119px","z-index":"2",position:"relative","--bs-gutter-x":"5px"}},j={class:"row"},A={class:"col-lg-9",style:{"padding-bottom":"10px","text-align":"left"}},G={class:"row"},H={key:0,class:"col-12"},N={style:{display:"flex","justify-content":"left","align-items":"center",height:"112px","max-width":"380px",width:"100%","background-color":"white","border-radius":"16px",overflow:"hidden","margin-top":"20px"}},R=["src"],$={style:{padding:"15px"}},P={style:{"font-size":"16px","font-weight":"700",color:"#022452","text-align":"left","margin-bottom":"0px"}},V={style:{"font-size":"12px","font-weight":"700",color:"#222222","text-align":"left","margin-bottom":"0px"}},q=["href"],M={style:{"font-size":"12px","font-weight":"400",color:"#022452","text-align":"left","margin-bottom":"0px"}},J={style:{"font-size":"12px","font-weight":"400",color:"#022452","text-align":"left","margin-bottom":"0px"}},L={key:1,class:"col-md-6"},Q={style:{display:"flex","justify-content":"left","align-items":"center","max-width":"380px",width:"100%",overflow:"hidden","margin-top":"20px"}},S=["src"],U={style:{padding:"15px"}},W={style:{"font-size":"16px","font-weight":"700",color:"#022452","text-align":"left","margin-bottom":"0px"}},Z={style:{"font-size":"12px","font-weight":"700",color:"#222222","text-align":"left","margin-bottom":"0px"}},K=["href"],X={style:{"font-size":"12px","font-weight":"400",color:"#022452","text-align":"left","margin-bottom":"0px"}},Y={style:{"font-size":"12px","font-weight":"400",color:"#222222","text-align":"left","margin-bottom":"0px"}},tt={class:"col-lg-3",style:{"padding-right":"0px !important","padding-left":"0px !important"}},et={style:{width:"100%","background-color":"#065284","border-radius":"8px","margin-bottom":"30px"}},ot=["href"],it={class:"contTitles",style:{width:"100%","background-color":"#D9D9D9",display:"flex","justify-content":"left","align-items":"center","border-bottom":"1px solid #AFAFAF",cursor:"pointer"}},nt={class:"titlecolumns text-uppercase",style:{"font-size":"14px",color:"#065284","font-weight":"600","margin-bottom":"0px","text-align":"left",padding:"6px"}},ht=B({__name:"directorio",async setup(st){let n,l;const{data:f,error:rt}=([n,l]=x(async()=>m(async()=>{try{const e=(await $fetch("https://api.yucatanconkal.gob.mx/api/v1/portal/directory/hierarchies",{method:"GET",params:{municipal_department_id:1},headers:{}})).data.municipalHierarchies.data;return console.log(e),e}catch(a){throw console.error("Error en el envío del reporte:",a),new Error("Hubo un error al enviar el reporte.")}},"$EZamTqoBQr")),n=await n,l(),n),{data:u,error:at}=([n,l]=x(async()=>m(async()=>{try{const e=(await $fetch("https://api.yucatanconkal.gob.mx/api/v1/portal/directory/departments",{method:"GET",headers:{}})).data.municipalDepartments.data;return console.log(e),e}catch(a){throw console.error("Error en el envío del reporte:",a),new Error("Hubo un error al enviar el reporte.")}},"$Cq83WvOT6h")),n=await n,l(),n);return(a,e)=>{const y=k,w=D,b=T,v=E;return s(),r("div",null,[d(y),d(w),e[5]||(e[5]=t("div",{style:{"min-height":"40px","background-color":"#D9D9D9",display:"flex","justify-content":"center"}},[t("div",{style:{width:"100%","min-height":"40px","max-width":"1182px","align-content":"center"}},[t("p",{style:{"font-weight":"600","font-size":"14px",color:"#022452","margin-bottom":"0px","padding-left":"16px"}},[g("INICIO "),t("i",{class:"fas fa-chevron-right",style:{"padding-left":"8px","padding-right":"8px"}}),g(" DIRECTORIO")])])],-1)),t("div",F,[e[4]||(e[4]=t("img",{src:I,class:"img-fluid w-100 rounded-top",alt:"Image",style:{"max-width":"736px !important",position:"absolute",right:"0px",opacity:"60%",bottom:"-150px","z-index":"1"}},null,-1)),t("div",O,[t("div",j,[t("div",A,[e[0]||(e[0]=t("p",{style:{"font-size":"48px","font-weight":"700",color:"#022452","text-align":"left",width:"90%","font-family":"JostBold"}},"Presidencia Municipal",-1)),t("div",G,[(s(!0),r(p,null,h(_(f),(o,c)=>(s(),r(p,null,[c===0?(s(),r("div",H,[t("div",N,[t("img",{src:o.img_path,style:{width:"112px",height:"112px"}},null,8,R),t("div",$,[t("p",P,i(o.name),1),t("p",V,i(o.position),1),t("a",{href:"mailto:"+o.email},[t("p",M,i(o.email),1)],8,q),t("p",J,"Tel. "+i(o.phone),1)])])])):(s(),r("div",L,[t("div",Q,[t("img",{src:o.img_path,style:{width:"96px",height:"96px","border-radius":"48px"}},null,8,S),t("div",U,[t("p",W,i(o.name),1),t("p",Z,i(o.position),1),t("a",{href:"mailto:"+o.email},[t("p",X,i(o.email),1)],8,K),t("p",Y,"Tel. "+i(o.phone),1)])])]))],64))),256))])]),t("div",tt,[t("div",et,[e[2]||(e[2]=t("div",{style:{height:"49px",width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[t("p",{style:{"font-size":"20px",color:"white","font-weight":"600","margin-bottom":"0px"}},"DIRECTORIO")],-1)),(s(!0),r(p,null,h(_(u),(o,c)=>(s(),r("a",{href:"listado?id="+o.id+"&categoria="+o.name},[t("div",it,[e[1]||(e[1]=t("i",{class:"iconsvg fas fa-chevron-right",style:{"padding-left":"18px","padding-right":"10px",color:"#065284"}},null,-1)),t("p",nt,i(o.name),1)])],8,ot))),256))]),d(b),e[3]||(e[3]=t("img",{src:C,style:{"padding-top":"10px",width:"100%"}},null,-1))])])])]),e[6]||(e[6]=t("img",{src:z,class:"img-fluid w-100 rounded-top",alt:"Image",style:{width:"100%","z-index":"2",height:"34px",position:"relative"}},null,-1)),d(v)])}}});export{ht as default};