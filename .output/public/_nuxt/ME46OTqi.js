import{_ as u,a as y,b as w,c as v}from"./BeWh14BE.js";import{_ as b}from"./lNn92lko.js";import{_ as D}from"./-e3r01l8.js";import{d as k,J as E,D as z,t as r,v as l,z as s,C as c,x as t,G as e,y as p,H as L}from"./d_NWJy9P.js";import{u as T}from"./V5J4wuP_.js";import"./BegDMJKu.js";const I={class:"container-fluid blog pb-5 fadeInUp",style:{"text-align":"-webkit-center","z-index":"10",position:"relative","padding-top":"20px !important","padding-bottom":"0rem !important","background-color":"#f6f6f6"}},N={class:"container",style:{"max-width":"1220px"}},C={class:"row"},B={class:"col-lg-9",style:{"padding-bottom":"10px","text-align":"left"}},G={key:0},O={style:{"font-size":"48px","font-weight":"700",color:"#022452","text-align":"left",width:"90%","margin-bottom":"0px","font-family":"JostBold"}},S={style:{"font-size":"12px","font-weight":"700",color:"#065284","text-align":"left"}},H=["src"],V={style:{width:"100%"}},j={style:{"font-size":"12px","font-weight":"400",color:"#595959",padding:"10px","background-color":"#D9D9D9","font-family":"LatoG"}},A=["innerHTML"],M={class:"col-lg-3",style:{"padding-right":"0px !important","padding-left":"0px !important"}},Q=k({__name:"detalle_boletines",async setup(J){let i,d;const m=E().query.id,{data:n,error:_}=([i,d]=z(async()=>T(async()=>{try{const o=(await $fetch("https://api.yucatanconkal.gob.mx/api/v1/portal/pagina/listar",{method:"GET",params:{page_id:m},headers:{}})).data.pages.data[0];return console.log(o),o}catch(a){throw console.error("Error en el envío del reporte:",a),new Error("Hubo un error al enviar el reporte.")}},"$EOGrsheSLN")),i=await i,d(),i);return(a,o)=>{const g=y,f=w,x=b,h=v;return r(),l("div",null,[s(g),s(f),o[2]||(o[2]=c('<div style="min-height:40px;background-color:#D9D9D9;display:flex;justify-content:center;"><div style="width:100%;min-height:40px;max-width:1182px;align-content:center;"><p style="font-weight:600;font-size:14px;color:#022452;margin-bottom:0px;padding-left:16px;">INICIO <i class="fas fa-chevron-right" style="padding-left:8px;padding-right:8px;"></i> BOLETINES <i class="fas fa-chevron-right" style="padding-left:8px;padding-right:8px;"></i> DETALLE</p></div></div>',1)),t("div",I,[t("div",N,[t("div",C,[t("div",B,[e(n)&&!e(_)?(r(),l("div",G,[t("p",O,p(e(n).title),1),t("p",S,p(e(n).published_date),1),t("img",{src:e(n).files[0].url,class:"d-block w-100",alt:"...",style:{width:"820px"}},null,8,H),t("div",V,[t("p",j,p(e(n).subtitle),1)]),(r(),l("div",{key:e(n).html_content,innerHTML:e(n).html_content,style:{"font-size":"16px","font-weight":"400",color:"#000000","padding-top":"10px","font-family":"LatoG"}},null,8,A))])):L("",!0)]),t("div",M,[o[0]||(o[0]=c('<div style="width:100%;background-color:#065284;border-radius:8px;margin-bottom:30px;"><div style="height:49px;width:100%;display:flex;justify-content:center;align-items:center;"><p style="font-size:20px;color:white;font-weight:600;margin-bottom:0px;">BOLETINES</p></div><a href="boletines"><div class="contTitles" style="height:40px;width:100%;background-color:#D9D9D9;display:flex;justify-content:left;align-items:center;"><p class="titlecolumns" style="font-size:14px;color:#065284;font-weight:600;margin-bottom:0px;padding-left:30px;">TODOS</p></div></a></div>',1)),s(x),o[1]||(o[1]=t("img",{src:D,style:{"padding-top":"10px",width:"100%"}},null,-1))])])])]),o[3]||(o[3]=t("img",{src:u,class:"img-fluid w-100 rounded-top",alt:"Image",style:{width:"100%","z-index":"2",height:"34px",position:"relative"}},null,-1)),s(h)])}}});export{Q as default};