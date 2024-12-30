<script setup lang="ts">
   const { data, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response = await $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/pagina/listar', {
      method: 'GET',
      params: {
        page_categories_name: 'noticias', // Agregar parámetros aquí en lugar de body
      },
      headers: {
      }
    })
   const response2 = response.data.pages.data
    
    console.log(response2)
    return response2
  } catch (err) {
    // Manejo de errores
    console.error('Error en el envío del reporte:', err)
    throw new Error('Hubo un error al enviar el reporte.')
  }
})
</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
   
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> SALA DE PRENSA <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> NOTICIAS</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 0rem !important;overflow: hidden;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: -77px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1220px;z-index: 2;position: relative;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;margin-bottom: 0px;">Noticias</p>
                           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                                <div class="carousel-indicators">
                                  <button  v-for="(post,index) in data" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :class="{'active':index===0,'s':index!==0}" aria-current="true" aria-label="Slide 1" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button>
                               
                                  <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button>
                                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button>
                                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
                                </div>
                                 <div class="carousel-inner" style="border-radius: 18px">
                                 <div style="width:110px;height:39px;background-color:#1D95BA;position:relative;z-index:1;border-radius: 10px 0 10px;">
                                 <p style="color:white;padding:10px;">Conkal hoy</p>
                                </div>
                                 <!-- <div class="carousel-item active" style="border-radius: 12px;top: -39px;">
                                   <a href="entrada"><img src="assets/images/concal/slider/slider1.png" class="d-block w-100" alt="..." style="width: 820px;border-radius: 10px;"></a>
                                   <div class="carousel-caption d-none d-md-block" style="left: 5%;right: none;text-align: left;">
                                     <p style="font-size: 32px;color: #ffffff;font-weight: 600;">Toma de protesta Administración 2024-2027</p>
                                     <p style="font-size: 14px;color: #ffffff;">24 DE SEPTIEMBRE DE 2024</p>
                                   </div>
                                 </div>
                                 <div class="carousel-item " style="border-radius: 12px;top: -39px;">
                                   <img src="assets/images/concal/slider/slider2.png" class="d-block w-100" alt="..." style="width: 820px;border-radius: 10px;">
                                   <div class="carousel-caption d-none d-md-block" style="left: 5%;right: none;text-align: left;">
                                     <p style="font-size: 32px;color: #ffffff;font-weight: 600;">Reunión con equipo de trabajo para planeación</p>
                                     <p style="font-size: 14px;color: #ffffff;">24 DE SEPTIEMBRE DE 2024</p>
                                   </div>
                                 </div> -->

                                 <template v-for="(post,index) in data">
                                        <!-- <div v-if="post && !error"> -->
                                            <!-- <div  > -->
                                                <div v-if="index ===0" class="carousel-item active" style="border-radius: 12px;top: -39px;">
                                                    <img :src="post.files[0].url" class="d-block w-100" alt="..." style="width: 820px;border-radius: 10px;">
                                                    <div class="carousel-caption d-none d-md-block" style="left: 5%;right: none;text-align: left;">
                                                        <p style="font-size: 32px;color: #ffffff;font-weight: 600;">{{ post.title }}</p>
                                                        <p style="font-size: 14px;color: #ffffff;">{{ post.subtitle }}</p>
                                                    </div>
                                                </div>
                                            <!-- </div>   -->
                                            <!-- <div v-else  > -->
                                                <div v-else  class="carousel-item " style="border-radius: 12px;top: -39px;">
                                                    <img :src="post.files[0].url" class="d-block w-100" alt="..." style="width: 820px;border-radius: 10px;">
                                                    <div class="carousel-caption d-none d-md-block" style="left: 5%;right: none;text-align: left;">
                                                        <p style="font-size: 32px;color: #ffffff;font-weight: 600;">{{ post.title }}</p>
                                                        <p style="font-size: 14px;color: #ffffff;">{{ post.subtitle }}</p>
                                                    </div>
                                                </div>
                                            <!-- </div>          -->
                                        <!-- </div> -->
                                 </template>

                               </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style="width:auto;opacity:1;">
                                  <span class="" aria-hidden="true" style="background-color:#CB2F80;width: 34px;height: 44px;display: flex;justify-content: center;align-items: center;">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.795 18L16.205 16.59L11.625 12L16.205 7.41L14.795 6L8.79499 12L14.795 18Z" fill="white"/>
                                      </svg>
                                  </span>
                                 <!-- <span class="visually-hidden">Previous</span>-->
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style="width:auto;opacity:1;">
                                  <span class="" aria-hidden="true"  style="background-color:#CB2F80;width: 34px;height: 44px;display: flex;justify-content: center;align-items: center;">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.205 6L8.79504 7.41L13.375 12L8.79504 16.59L10.205 18L16.205 12L10.205 6Z" fill="white"/>
                                        </svg>
                                  </span>
                                 <!-- <span class="visually-hidden">Next</span>-->
                                </button>
                            </div>

                            <div class="row" style="padding-top:10px;">
                              <template v-for="(post,index) in data">
                                <div class="col-sm-12  col-md-4  " data-wow-delay="0.2s" style="cursor: pointer;padding-top: 16px;">
                                  <a :href="'detalle_noticia?id='+post.id">  <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 0px 20px 0px #00000059;">
                                                  <div class="blog-img">
                                                     
                                                            <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Noticias</p>
                                                            </div>
                                                          <img :src="post.files[0].url" class="img-fluid w-100 rounded-top" alt="Image">
                                                     
                                                  </div>
                                                  <div class="text-start"  style="    height: 202px;border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                      <p class="titulo1   display-4  mb-4 " style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">{{ post.title }}</p>
                                                      <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">{{ post.subtitle }}</p>
                                                      <p style="line-height: 16.8px;font-weight: 300;text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra #alcaldesa Linda Pérez Quijano, mediante un homenaje arrancó de manera formal el inicio de las labores del Ayuntamiento de #Conkal para la administración...</p>
                                                  </div>
                                              </div></a> 
                                    </div>        
                                </template>


                                    <!-- <div class="col-sm-12  col-md-4  " data-wow-delay="0.2s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Eventos</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p1.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start"  style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Inicia formalmente actividades del Ayuntamiento</p>
                                                <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra #alcaldesa Linda Pérez Quijano, mediante un homenaje arrancó de manera formal el inicio de las labores del Ayuntamiento de #Conkal para la administración...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4  " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Actividades</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p2.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start" style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                 <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Reunión con equipo de trabajo para planeación</p>
                                                 <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra alcaldesa Linda Pérez Quijano, arranca su primer día de mandato en reunión con las y los regidores para la planeación de los próximos proyectos que vienen...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Gobierno</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p3.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start" style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                 <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Toma de protesta Administración 2024-2027</p>
                                                 <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Reorientar el presupuesto para hacer más eficientes los servicios municipales y la seguridad; en obras públicas, que ayuden a mejorar los espacios públicos y la pavimentación...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12  col-md-4  " data-wow-delay="0.2s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Eventos</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p1.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start"  style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Inicia formalmente actividades del Ayuntamiento</p>
                                                <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra #alcaldesa Linda Pérez Quijano, mediante un homenaje arrancó de manera formal el inicio de las labores del Ayuntamiento de #Conkal para la administración...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4  " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Actividades</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p2.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start" style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                 <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Reunión con equipo de trabajo para planeación</p>
                                                 <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra alcaldesa Linda Pérez Quijano, arranca su primer día de mandato en reunión con las y los regidores para la planeación de los próximos proyectos que vienen...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                                        <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 20px;box-shadow: 0px 0px 20px 0px #00000059;">
                                            <div class="blog-img">
                                                <a href="#">
                                                  <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Gobierno</p>
                                                 </div>
                                                    <img src="assets/images/concal/prensa/p3.png" class="img-fluid w-100 rounded-top" alt="Image">
                                                </a>
                                            </div>
                                            <div class="text-start" style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                                 <p class="titulo1   display-4  mb-4" style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Toma de protesta Administración 2024-2027</p>
                                                 <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                                <p class="" style="text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Reorientar el presupuesto para hacer más eficientes los servicios municipales y la seguridad; en obras públicas, que ayuden a mejorar los espacios públicos y la pavimentación...</p>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                    </div>
                    <div class="col-lg-3  "  style="padding-right: 0px !important;padding-left: 0px !important;"  >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">SALA DE PRENSA</p>
                            </div>
                            <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M22 3L20.33 4.67L18.67 3L17 4.67L15.33 3L13.67 4.67L12 3L10.33 4.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V3ZM11 19H4V13H11V19ZM20 19H13V17H20V19ZM20 15H13V13H20V15ZM20 11H4V8H20V11Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">NOTICIAS</p>
                            </div>
                            <!-- <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;border-top:1px solid #AFAFAF;border-bottom:1px solid #AFAFAF;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M21 4C19.89 3.65 18.67 3.5 17.5 3.5C15.55 3.5 13.45 3.9 12 5C10.55 3.9 8.45 3.5 6.5 3.5C4.55 3.5 2.45 3.9 1 5V19.65C1 19.9 1.25 20.15 1.5 20.15C1.6 20.15 1.65 20.1 1.75 20.1C3.1 19.45 5.05 19 6.5 19C8.45 19 10.55 19.4 12 20.5C13.35 19.65 15.8 19 17.5 19C19.15 19 20.85 19.3 22.25 20.05C22.35 20.1 22.4 20.1 22.5 20.1C22.75 20.1 23 19.85 23 19.6V5C22.4 4.55 21.75 4.25 21 4ZM21 17.5C19.9 17.15 18.7 17 17.5 17C15.8 17 13.35 17.65 12 18.5V7C13.35 6.15 15.8 5.5 17.5 5.5C18.7 5.5 19.9 5.65 21 6V17.5Z" fill="#065284"/>
                              <path d="M17.5 9.5C18.38 9.5 19.23 9.59 20 9.76V8.24C19.21 8.09 18.36 8 17.5 8C15.8 8 14.26 8.29 13 8.83V10.49C14.13 9.85 15.7 9.5 17.5 9.5Z" fill="#065284"/>
                              <path d="M13 11.49V13.15C14.13 12.51 15.7 12.16 17.5 12.16C18.38 12.16 19.23 12.25 20 12.42V10.9C19.21 10.75 18.36 10.66 17.5 10.66C15.8 10.66 14.26 10.96 13 11.49Z" fill="#065284"/>
                              <path d="M17.5 13.33C15.8 13.33 14.26 13.62 13 14.16V15.82C14.13 15.18 15.7 14.83 17.5 14.83C18.38 14.83 19.23 14.92 20 15.09V13.57C19.21 13.41 18.36 13.33 17.5 13.33Z" fill="#065284"/>
                              </svg>

                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">GACETA</p>
                            </div>
                            <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M9.00049 13.5C11.2105 13.5 13.0005 11.71 13.0005 9.5C13.0005 7.29 11.2105 5.5 9.00049 5.5C6.79049 5.5 5.00049 7.29 5.00049 9.5C5.00049 11.71 6.79049 13.5 9.00049 13.5ZM9.00049 7.5C10.1005 7.5 11.0005 8.4 11.0005 9.5C11.0005 10.6 10.1005 11.5 9.00049 11.5C7.90049 11.5 7.00049 10.6 7.00049 9.5C7.00049 8.4 7.90049 7.5 9.00049 7.5ZM9.00049 15.5C6.33049 15.5 1.00049 16.84 1.00049 19.5V21.5H17.0005V19.5C17.0005 16.84 11.6705 15.5 9.00049 15.5ZM3.00049 19.5C3.22049 18.78 6.31049 17.5 9.00049 17.5C11.7005 17.5 14.8005 18.79 15.0005 19.5H3.00049ZM15.0805 7.55C15.9205 8.73 15.9205 10.26 15.0805 11.44L16.7605 13.13C18.7805 11.11 18.7805 8.06 16.7605 5.86L15.0805 7.55ZM20.0705 2.5L18.4405 4.13C21.2105 7.15 21.2105 11.69 18.4405 14.87L20.0705 16.5C23.9705 12.61 23.9805 6.55 20.0705 2.5Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">DISCURSOS</p>
                            </div> -->
                          </div>
                            <Tramites></Tramites>
                            <img src="assets/images/concal/banner.png" style="padding-top: 10px;width: 100%;">
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/images/concal/Plecamaya 1.png" class="img-fluid w-100 rounded-top" alt="Image" style="width:100%;z-index: 2;height: 34px;position: relative;">
        <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped></style>
