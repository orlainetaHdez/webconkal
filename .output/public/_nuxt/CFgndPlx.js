import{_ as y,a as u,b as w,c as v}from"./BBClA4ds.js";import{_ as b}from"./B2S9xBqj.js";import{_ as M}from"./cPN_8xAU.js";import{d as H,J as D,D as Z,t as s,v as n,z as a,C as g,x as t,E as e,y as p,F as V}from"./B3TC04hQ.js";import{u as A}from"./hA_X_PA_.js";import"./PwtcvzLu.js";const k={class:"container-fluid blog pb-5 fadeInUp",style:{"text-align":"-webkit-center","z-index":"10",position:"relative","padding-top":"20px !important","padding-bottom":"0rem !important","background-color":"#f6f6f6"}},z={class:"container",style:{"max-width":"1220px"}},T={class:"row"},E={class:"col-lg-9",style:{"padding-bottom":"10px","text-align":"left"}},I={key:0},B={style:{"font-size":"48px","font-weight":"700",color:"#022452","text-align":"left",width:"90%","margin-bottom":"0px","font-family":"JostBold"}},F={style:{"font-size":"12px","font-weight":"700",color:"#065284","text-align":"left"}},L=["src"],O={style:{width:"100%"}},N={style:{"font-size":"12px","font-weight":"400",color:"#595959",padding:"10px","background-color":"#D9D9D9","font-family":"LatoG"}},S=["innerHTML"],R={class:"col-lg-3",style:{"padding-right":"0px !important","padding-left":"0px !important"}},j={style:{width:"100%","background-color":"#065284","border-radius":"8px","margin-bottom":"30px"}},G={href:"convocatorias_musica"},U={class:"contTitles",style:{height:"40px",width:"100%","background-color":"#D9D9D9",display:"flex","justify-content":"left","align-items":"center"}},q={class:"iconsvg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-left":"16px","margin-right":"16px"}},J={href:"convocatorias_cultura"},$={class:"contTitles",style:{height:"40px",width:"100%","background-color":"#D9D9D9","border-top":"1px solid #AFAFAF","border-bottom":"1px solid #AFAFAF",display:"flex","justify-content":"left","align-items":"center"}},P={class:"iconsvg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-left":"16px","margin-right":"16px"}},Q={href:"convocatorias_deporte"},X={class:"contTitles",style:{height:"40px",width:"100%","background-color":"#D9D9D9",display:"flex","justify-content":"left","align-items":"center"}},K={class:"iconsvg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-left":"16px","margin-right":"16px"}},n1=H({__name:"detalle_convocatoria",async setup(W){let l,d;const c=D(),m=c.query.id;console.log("sdasdasd "+c.query.page_category_id);const{data:i,error:h}=([l,d]=Z(async()=>A(async()=>{try{const o=(await $fetch("https://api.conkal.tobecorporativo.mx/api/v1/portal/pagina/listar",{method:"GET",params:{page_id:m},headers:{}})).data.pages.data[0];return console.log(o),o}catch(r){throw console.error("Error en el envío del reporte:",r),new Error("Hubo un error al enviar el reporte.")}},"$SDREZLQBXe")),l=await l,d(),l);return(r,o)=>{const f=u,_=w,x=b,C=v;return s(),n("div",null,[a(f),a(_),o[8]||(o[8]=g('<div style="min-height:40px;background-color:#D9D9D9;display:flex;justify-content:center;"><div style="width:100%;min-height:40px;max-width:1182px;align-content:center;"><p style="font-weight:600;font-size:14px;color:#022452;margin-bottom:0px;padding-left:16px;">INICIO <i class="fas fa-chevron-right" style="padding-left:8px;padding-right:8px;"></i> CONVOCATORIAS <i class="fas fa-chevron-right" style="padding-left:8px;padding-right:8px;"></i> DETALLE</p></div></div>',1)),t("div",k,[t("div",z,[t("div",T,[t("div",E,[e(i)&&!e(h)?(s(),n("div",I,[t("p",B,p(e(i).title),1),t("p",F,p(e(i).published_date),1),t("img",{src:e(i).files[0].url,class:"d-block w-100",alt:"...",style:{width:"820px"}},null,8,L),t("div",O,[t("p",N,p(e(i).subtitle),1)]),t("template",null,[(s(),n("div",{key:e(i).html_content,innerHTML:e(i).html_content,style:{"font-size":"16px","font-weight":"400",color:"#000000","padding-top":"10px","font-family":"LatoG"}},null,8,S))])])):V("",!0)]),t("div",R,[t("div",j,[o[6]||(o[6]=t("div",{style:{height:"49px",width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[t("p",{style:{"font-size":"20px",color:"white","font-weight":"600","margin-bottom":"0px"}},"CONVOCATORIAS")],-1)),t("a",G,[t("div",U,[(s(),n("svg",q,o[0]||(o[0]=[t("path",{d:"M21.5 5H16.5V13.18C16.19 13.07 15.85 13 15.5 13C13.84 13 12.5 14.34 12.5 16C12.5 17.66 13.84 19 15.5 19C17.16 19 18.5 17.66 18.5 16V7H21.5V5ZM14.5 5H2.5V7H14.5V5ZM14.5 9H2.5V11H14.5V9ZM10.5 13H2.5V15H10.5V13Z",fill:"#065284"},null,-1)]))),o[1]||(o[1]=t("p",{class:"titlecolumns",style:{"font-size":"14px",color:"#065284","font-weight":"600","margin-bottom":"0px"}},"MÚSICA",-1))])]),t("a",J,[t("div",$,[(s(),n("svg",P,o[2]||(o[2]=[g('<path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 11C22 14.31 19.31 17 16 17H14.23C13.95 17 13.73 17.22 13.73 17.5C13.73 17.62 13.78 17.73 13.86 17.83C14.27 18.3 14.5 18.89 14.5 19.5C14.5 20.88 13.38 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C12.28 20 12.5 19.78 12.5 19.5C12.5 19.34 12.42 19.22 12.36 19.15C11.95 18.69 11.73 18.1 11.73 17.5C11.73 16.12 12.85 15 14.23 15H16C18.21 15 20 13.21 20 11C20 7.14 16.41 4 12 4Z" fill="#065284"></path><path d="M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z" fill="#065284"></path><path d="M9.5 9C10.3284 9 11 8.32843 11 7.5C11 6.67157 10.3284 6 9.5 6C8.67157 6 8 6.67157 8 7.5C8 8.32843 8.67157 9 9.5 9Z" fill="#065284"></path><path d="M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z" fill="#065284"></path><path d="M17.5 13C18.3284 13 19 12.3284 19 11.5C19 10.6716 18.3284 10 17.5 10C16.6716 10 16 10.6716 16 11.5C16 12.3284 16.6716 13 17.5 13Z" fill="#065284"></path>',5)]))),o[3]||(o[3]=t("p",{class:"titlecolumns",style:{"font-size":"14px",color:"#065284","font-weight":"600","margin-bottom":"0px"}},"CULTURA",-1))])]),t("a",Q,[t("div",X,[(s(),n("svg",K,o[4]||(o[4]=[t("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07C4.22 9.82 4.63 8.72 5.23 7.75ZM4.07 13H6.91C6.7 14.26 6.1 15.38 5.23 16.25C4.63 15.28 4.22 14.18 4.07 13ZM11 19.93C9.27 19.71 7.71 18.93 6.51 17.79C7.81 16.55 8.7 14.88 8.93 13H11V19.93ZM11 11H8.93C8.69 9.12 7.81 7.44 6.5 6.2C7.71 5.06 9.27 4.29 11 4.07V11ZM19.93 11H17.09C17.3 9.74 17.9 8.62 18.77 7.75C19.37 8.72 19.78 9.82 19.93 11ZM13 4.07C14.73 4.29 16.29 5.06 17.5 6.2C16.19 7.44 15.31 9.12 15.07 11H13V4.07ZM13 19.93V13H15.07C15.31 14.88 16.19 16.55 17.49 17.79C16.29 18.93 14.73 19.71 13 19.93ZM18.77 16.25C17.9 15.39 17.31 14.26 17.09 13H19.93C19.78 14.18 19.37 15.28 18.77 16.25Z",fill:"#065284"},null,-1)]))),o[5]||(o[5]=t("p",{class:"titlecolumns",style:{"font-size":"14px",color:"#065284","font-weight":"600","margin-bottom":"0px"}},"DEPORTES",-1))])])]),a(x),o[7]||(o[7]=t("img",{src:M,style:{"padding-top":"10px",width:"100%"}},null,-1))])])])]),o[9]||(o[9]=t("img",{src:y,class:"img-fluid w-100 rounded-top",alt:"Image",style:{width:"100%","z-index":"2",height:"34px",position:"relative"}},null,-1)),a(C)])}}});export{n1 as default};