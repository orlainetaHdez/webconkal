<script setup lang="ts">
const route = useRoute()
const postId = route.query.id

const { data, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response = await $fetch('https://api.yucatanconkal.gob.mx/api/v1/portal/pagina/listar', {
      method: 'GET',
      params: {
        page_id :postId, // Agregar parámetros aquí en lugar de body
      },
      headers: {
      }
    })
   const response2 = response.data.pages.data[0]
    
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
             <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> BOLETINES <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> DETALLE</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 10;position: relative;padding-top: 20px !important;padding-bottom: 0rem !important;background-color: #f6f6f6;">
            <div class="container" style="max-width: 1220px;" >
                <!-- <div style="width: 100%;text-align:left; " >
                 <button style="border-color: transparent;padding: 10px;border-radius:8px;color:white;background-color:#1D95BA;font-size:16px;font-weight:700;" title="MÚSICA">Conkal hoy</button>
                 </div>   -->
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;">
                      
                        <div v-if="data && !error">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;margin-bottom: 0px;font-family: JostBold;">{{ data.title }}</p>
                           <p style="font-size: 12px;font-weight: 700;color:#065284;text-align: left;">{{ data.published_date }}</p>
                           <img :src="data.files[0].url" class="d-block w-100" alt="..." style="width: 820px;">
                           <div style="width: 100%;">
                             <p style="font-size: 12px;font-weight: 400;color: #595959;padding: 10px;background-color: #D9D9D9;font-family: LatoG;">{{ data.subtitle }}</p>
                           </div>
                          <!--template-->
                            <div :key="data.html_content" v-html="data.html_content" style="font-size: 16px;font-weight: 400;color: #000000;padding-top: 10px;font-family: LatoG;"></div>
                          <!--/template-->
                         </div>
                        
                           <!-- <div class="row" >
                              <div class="col-md-3" style="margin-top: 10px;">
                                  <div>
                                      <div class="blog-img">
                                          <a href="#">
                                              <img src="assets/images/concal/prensa/p4.png" class="img-fluid w-100" alt="Image">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-3" style="margin-top: 10px;">
                                  <div>
                                      <div class="blog-img">
                                          <a href="#">
                                              <img src="assets/images/concal/prensa/image 3.png" class="img-fluid w-100 " alt="Image">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-3" style="margin-top: 10px;">
                                  <div  >
                                      <div class="blog-img">
                                          <a href="#">
                                              <img src="assets/images/concal/prensa/image 4.png" class="img-fluid w-100 " alt="Image">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-3" style="margin-top: 10px;">
                                  <div>
                                      <div class="blog-img">
                                          <a href="#">
                                              <img src="assets/images/concal/prensa/image 5.png" class="img-fluid w-100 " alt="Image">
                                          </a>
                                      </div>
                                  </div>
                              </div>        
                            </div> -->
                            
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                      <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">BOLETINES</p>
                            </div>
                           
                            <a href="boletines"><div class="contTitles"  style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;">
                            
                              <p class="titlecolumns"  style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;padding-left: 30px;">TODOS</p>
                            </div></a>
                          </div>
                          <Tramites></Tramites>
                          <img src="assets/images/concal/banner.png" style="padding-top: 10px;width: 100%;">
                    </div>
                </div>
            </div>
    </div>
    <!-- <div class="container-fluid blog pb-5" style="position: relative;z-index: 1;padding-bottom: 20px !important;overflow: hidden;background-color: #f6f6f6;">
            <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: -29px;opacity: 60%;">
      <div class="row" style="padding-bottom: 100px;">
        <div class="container " style="max-width: 1216px;" >
          <div class="col-lg-9" style="padding-top: 30px;z-index: 2;position: relative;" >
            <p class="titulo1 display-4  mb-4 text-uppercase" style="font-weight:700;text-align: left;color:#CB2F80 ;font-size:20px;margin-bottom: 10px !important;">Noticias relacionadas</p>
            <div class="row">
                          <div class="col-sm-12  col-md-4  " data-wow-delay="0.2s" style="cursor: pointer;padding-top: 16px;">
                              <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 0px 20px 0px #00000059;">
                                  <div class="blog-img">
                                      <a href="#">
                                            <div style="height:22px;background-color:#1D95BA;position:absolute;z-index:1;border-radius: 10px 0 10px;display: flex;justify-content: center;align-items: center;">
                                                  <p style="color:white;padding:10px;font-size:12px;margin-bottom: 0px;">Eventos</p>
                                            </div>
                                          <img src="assets/images/concal/prensa/p1.png" class="img-fluid w-100 rounded-top" alt="Image">
                                      </a>
                                  </div>
                                  <div class="text-start"  style="border-radius: 0 0 10px 10px;background: #ffffff;position: relative;z-index: 10;">
                                      <p class="titulo1   display-4  mb-4 " style="padding-top: 16px;font-weight:700;text-align: left;color: #065284;font-size:16px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">Inicia formalmente<br>actividades del Ayuntamiento</p>
                                      <p class="   display-4  mb-4" style="padding-top: 5px;font-weight:400;text-align: left;color: #595959;font-size:10px;padding-left: 10px;padding-right: 10px;margin-bottom: 10px !important;">05 de Septiembre de 2024</p>
                                      <p style="line-height: 16.8px;font-weight: 300;text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra #alcaldesa Linda Pérez Quijano, mediante un homenaje arrancó de manera formal el inicio de las labores del Ayuntamiento de #Conkal para la administración...</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-12 col-md-4  " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                              <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 0px 20px 0px #00000059;">
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
                                      <p style="line-height: 16.8px;font-weight: 300;text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Nuestra alcaldesa Linda Pérez Quijano, arranca su primer día de mandato en reunión con las y los regidores para la planeación de los próximos proyectos que vienen...</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-12 col-md-4  " data-wow-delay="0.4s" style="cursor: pointer;padding-top: 16px;">
                              <div class="blog-item" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 8px;box-shadow: 0px 0px 20px 0px #00000059;">
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
                                      <p  style="line-height: 16.8px;font-weight: 300;text-align: left;font-size:14px !important;padding: 10px;color: #222222;padding-left: 10px;padding-right: 10px;">Reorientar el presupuesto para hacer más eficientes los servicios municipales y la seguridad; en obras públicas, que ayuden a mejorar los espacios públicos y la pavimentación...</p>
                                  </div>
                          </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <img src="assets/images/concal/Plecamaya 1.png" class="img-fluid w-100 rounded-top" alt="Image" style="width:100%;z-index: 2;height: 34px;position: relative;">
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped></style>
