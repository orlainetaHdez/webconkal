<script setup lang="ts">
    const { data, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response = await $fetch('https://api.yucatanconkal.gob.mx/api/v1/portal/pagina/listar', {
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

const { data:convocatoria, error:errorconv } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response3 = await $fetch('https://api.yucatanconkal.gob.mx/api/v1/portal/pagina/listar', {
      method: 'GET',
      params: {
        page_categories_group_name: 'convocatorias', // Agregar parámetros aquí en lugar de body
      },
      headers: {
      }
    })
   const response4 = response3.data.pages.data
    
    console.log(response4)
    return response4
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
      <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 30px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -308px;z-index: 1;">   
            <div class="container" style="max-width:1119px;position:relative;z-index:2;" >
                <div class="row">
                    <div class="col-m col-lg-9" style="padding-bottom: 10px;text-align: left;">
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                                <div class="carousel-indicators">
                               <button  v-for="(post,index) in data" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :class="{'active':index===0,'s':index!==0}" aria-current="true" aria-label="Slide 1" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button>
                                 <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 2" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button>
                                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style="width:10px;height:10px;background:#CB2F80;border-radius:5px;border:0px;margin-top: -56px;"></button> -->
                                     <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
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
                                 </div> -->
                                 <!-- <div class="carousel-item " style="border-radius: 12px;top: -39px;">
                                   <img src="assets/images/concal/slider/slider2.png" class="d-block w-100" alt="..." style="width: 820px;border-radius: 10px;">
                                   <div class="carousel-caption d-none d-md-block" style="left: 5%;right: none;text-align: left;">
                                     <p style="font-size: 32px;color: #ffffff;font-weight: 600;">Reunión con equipo de trabajo para planeación</p>
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
                    </div>
                    <div class="col-lg-3" style="--bs-gutter-x: 5px;">           
                         <Tramites></Tramites>
                         <TheBanners/>
                    </div>
              </div>
              <p class="titulo1 display-4  mb-4 text-uppercase" style="font-weight:700;text-align: left;color:#CB2F80 ;font-size:20px;margin-bottom: 10px !important;padding-top: 20px;">Sala de prensa</p>
              <div class="row">


                <template v-for="(post,index) in data">

                    <div class="col-sm-12  col-md-3  " data-wow-delay="0.2s" style="cursor: pointer;padding-top: 16px;">
                              <a :href="'detalle_noticia?id='+post.id"><div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 0px 20px 0px #00000059;">
                                  <div class="blog-img">
                                      <a href="#">
                                            <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Noticias</p>
                                            </div>
                                          <img :src="post.files[0].url" class="img-fluid w-100 rounded-top" alt="Image">
                                      </a>
                                  </div>
                                  <div class="text-start"  style="height: 90px;border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                      <p class="titulo1   display-4  mb-4 " style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">{{ post.title }}</p>
                                      <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">{{ post.subtitle }}</p>
                                      <!-- <p style="line-height: 16.8px;font-weight: 300;text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;font-family: LatoG;">Nuestra #alcaldesa Linda Pérez Quijano, mediante un homenaje arrancó de manera formal el inicio de las labores del Ayuntamiento de #Conkal para la administración...</p> -->
                                  </div>
                              </div></a>
                    </div>        
                 </template>
                  </div>
            </div>
      </div>
      <img src="assets/images/concal/Plecamaya 1.png" class="img-fluid w-100 rounded-top" alt="Image" style="width:100%;z-index: 2;height: 34px;position: relative;">
      <div class="container-fluid py-5" style="min-height:442px;display: flex;justify-content: center;align-items: center;background: linear-gradient(rgba(6, 82, 132, 0.7), rgba(6, 82, 132, 0.7)), url(images/fondohistorias.png); position: relative; z-index: 2; background-size: cover; background-repeat: no-repeat; background-position: center; background-color: #065284;">
        <!-- <img src="assets/images/concal/fondohistorias.png"> -->
        <div class="container" style="max-width: 1119px;">
            <div class="text-center">
                <p style="font-family: PenumbraSemibold; font-size: 32px; font-weight: 700; text-align: center; color: #ffffff;">
                    TU AYUNTAMIENTO</p>
            </div>
            <div class="container mt-3">
              <KeenSlider />
            </div>
        </div>
      </div>
      <div class="container-fluid py-5" style="background-color: #f6f6f6;">
        <div class="container" style="padding-bottom: 30px !important;max-width:1119px;">
            <div style="display: inline-flex;width: 100%;padding-left: 22px;padding-right: 22px;">
                <div style="width: -webkit-fill-available;">
                    <p style="font-family: Satoshi Variable; font-size: 20px; font-weight: 700; text-align: left; color: #CB2F80;">
                        CONVOCATORIAS</p>
                </div>
                <div style="width: -webkit-fill-available;">
                    <a href="listado_convocatorias">
                        <button style="border: none; color: #065284; background-color: transparent; float: right; font-size: 12px; font-weight: 700; display: flex; align-items: center;">
                            VER TODAS
                            <svg width="24" height="24" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg" style="padding-left: 5px;">
                                <path d="M8 0.5L6.59 1.91L12.17 7.5H0V9.5H12.17L6.59 15.09L8 16.5L16 8.5L8 0.5Z"
                                    fill="#1D95BA" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class=" row">
                <template v-for="(post2,index) in convocatoria">
                    <div class="slide col-sm-6 col-md-6 col-lg-3">
                        <a :href="'detalle_convocatoria?id='+post2.id"><div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 3px 10px -4px #00000059;">
                            <div class="blog-img">
                               
                                    <img :src="post2.files[0].url" class="img-fluid w-100 rounded-top" alt="Image" style="max-height: 126px;">
                             
                            </div>
                            <div class="text-start">
                                <p class="titulo1 display-4 mb-4"
                                    style="padding: 16px 10px 3px; font-weight: 700; text-align: center; color: #065284; font-size: 16px;">
                                    {{ post2.title }}</p>
                            </div>
                        </div></a>
                    </div> 
                </template>


                    
            </div>
        </div>
      </div>

    <div class="container-fluid" style="background: linear-gradient(rgba(29, 149, 186, 0.1), rgba(29, 149, 186, 0.1)) ,url(images/Framemaya.png);position: relative; z-index: 2; background-size: inherit; background-repeat: no-repeat; background-position: center; background-color: #1D95BA;text-align: center;min-height: 281px; display: flex;
    justify-content: center;align-items: center;">
        <div id="contenidonumber" style="max-width:1004px;width:100%;min-height: 165px;padding: 36px;border-radius: 16px;background: linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65));margin-top: 10px;margin-bottom: 10px;">
            <p style=" font-size: 20px; font-weight: 700; text-align: center; color: #022452;font-family: JostBold; ">
                NÚMEROS DE EMERGENCIA</p>
            <div class="row" style="display: flex;justify-content:left;">
                <div class="col-md-4" style="height: 40px;border-radius: 8px;display: flex;overflow: hidden;width: max-content;margin: 10px;padding: 0px;">
                    <div style="width: 54px;height: 40px;background-color: #CB2F80;display: flex;justify-content: center;align-items: center;">
                        <img src="assets/images/concal/emergencia/crisis_alert.png" style="width: 24px;">
                    </div>
                    <div style="width: -webkit-fill-available;height: 40px; background-color: white;text-align: left;    padding-right: 10px;">
                        <p style="margin-left: 10px;font-size: 16px;font-weight:700; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: JostBold; ">
                            911</p>
                        <p style="font-weight: 700;margin-left: 10px;font-size: 12px; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: LatoG; ">
                            EMERGENCIAS</p>
                    </div>
                </div>

                <div style="height: 40px;border-radius: 8px;display: flex;overflow: hidden;width: max-content;margin: 10px;padding: 0px;">
                    <div style="width: 54px;height: 40px;background-color: #CB2F80;display: flex;justify-content: center;align-items: center;">
                        <img src="assets/images/concal/emergencia/wifi_calling_3.png" style="width: 24px;">
                    </div>
                    <div style="width: -webkit-fill-available;height: 40px; background-color: white;text-align: left;    padding-right: 10px;">
                        <p style="margin-left: 10px;font-size: 16px;font-weight:700; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: JostBold; ">
                            089</p>
                        <p style="font-weight: 700;margin-left: 10px;font-size: 12px; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: LatoG; ">
                            DENUNCIA</p>
                    </div>
                </div>

                <div style="height: 40px;border-radius: 8px;display: flex;overflow: hidden;width: max-content;margin: 10px;padding: 0px;">
                    <div style="width: 54px;height: 40px;background-color: #CB2F80;display: flex;justify-content: center;align-items: center;">
                        <img src="assets/images/concal/emergencia/local_police.png" style="width: 24px;">
                    </div>
                    <div style="width: -webkit-fill-available;height: 40px; background-color: white;text-align: left;    padding-right: 10px;">
                        <p style="margin-left: 10px;font-size: 16px;font-weight:700; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: JostBold; ">
                            999 930 3200</p>
                        <p style="font-weight: 700;margin-left: 10px;font-size: 12px; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: LatoG; ">
                            SEG. PÚBLICA</p>
                    </div>
                </div>

                <div style="height: 40px;border-radius: 8px;display: flex;overflow: hidden;width: max-content;margin: 10px;padding: 0px;">
                    <div style="width: 54px;height: 40px;background-color: #CB2F80;display: flex;justify-content: center;align-items: center;">
                        <img src="assets/images/concal/emergencia/local_fire_department.png" style="width: 24px;">
                    </div>
                    <div style="width: -webkit-fill-available;height: 40px; background-color: white;text-align: left;    padding-right: 10px;">
                        <p style="margin-left: 10px;font-size: 16px;font-weight:700; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: JostBold; ">
                            999 930 3200</p>
                        <p style="font-weight: 700;margin-left: 10px;font-size: 12px; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: LatoG; ">
                            BOMBEROS</p>
                    </div>
                </div>
                <div style="height: 40px;border-radius: 8px;display: flex;overflow: hidden;width: max-content;margin: 10px;padding: 0px;">
                    <div style="width: 54px;height: 40px;background-color: #CB2F80;display: flex;justify-content: center;align-items: center;">
                        <img src="assets/images/concal/emergencia/female.png" style="width: 24px;">
                    </div>
                    <div style="width: -webkit-fill-available;height: 40px; background-color: white;text-align: left;    padding-right: 10px;">
                        <p style="margin-left: 10px;font-size: 16px;font-weight:700; color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: JostBold; ">
                            999 930 3200</p>
                        <p style="margin-left: 10px;font-size: 12px;color: #022452;padding-bottom: 0px;margin-bottom: 0px;font-family: LatoG; font-weight: 700;;">
                            ATENCIÓN A LA MUJER</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
    
@font-face{
    font-family: "JostBold";
    src: url(".assets/fonts/Jost/static/Jost-Bold.ttf") format("truetype");
    /*src: url("./fonts/posterama/bf8e6666252f4d6e781c1afacd6fb995.eot?#iefix")format("embedded-opentype"),
        url("./fonts/posterama/bf8e6666252f4d6e781c1afacd6fb995.woff")format("woff"),
        url("./fonts/posterama/bf8e6666252f4d6e781c1afacd6fb995.woff2")format("woff2"),
        url("./fonts/posterama/bf8e6666252f4d6e781c1afacd6fb995.ttf")format("truetype"),
        url("./fonts/posterama/bf8e6666252f4d6e781c1afacd6fb995.svg#Posterama 1927")format("svg");
    font-weight:normal;
    font-style:normal;
    font-display:swap;*/
}

  
</style>
