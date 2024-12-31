<script setup lang="ts">

</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> TRÁMITES Y SERVICIOS<i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> CATASTRO</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 30px;text-align: left;padding-right: 30px !important;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;font-family: JostBold;">Catastro</p>
                           <!-- <form action="/enviar-reporte" method="POST" @submit.prevent="submitForm"> -->
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                  <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                      <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                        Translación de dominio 
                                      </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                      <ul>
                                        <li>Copia de cedula catastral anterior y planos anteriores.</li>
                                        <li>2 formatos F2 escritos por el notario</li>
                                        <li>Copia del INE del propietario del predio.</li>
                                        <li>Solicitud por escrito del servicio solicitado firmado por el propietario del predio, en caso de autorizar a otra persona, mencionarlo en la solicitud anexando copia del INE.</li>
                                        <li>En caso de ser personas morales se solicita copia del poder de autorización.</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                      <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                        Translación de dominio y mejora 
                                      </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                      <ul>
                                        <li>Copia de cedula catastral anterior y planos anteriores.</li>
                                        <li>2 formatos F2 escritos por el notario.</li>
                                        <li>Copia del INE del propietario del predio.</li>
                                        <li>Solicitud por escrito del servicio solicitado firmado por el propietario del predio, en caso de autorizar a otra persona, mencionarlo en la solicitud anexando copia del INE.</li>
                                        <li>En caso de ser personas morales se solicita copia del poder de autorización.</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                      <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"  style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                        Actualización o mejoras del predio
                                      </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                      <ul>
                                        <li>Copia de cedula catastral anterior y planos anteriores.</li>
                                        <li>Copia del INE del propietario del predio.</li>
                                        <li>Planos originales en donde se manifiestan las mejoras realizadas al predio.</li>
                                        <li>Fotografía de la fachada del predio.</li>
                                        <li>Copia de la terminación de obra.</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="accordion-item" style="">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                      <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2"  style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                        Trámite para actualización de plano 
                                      </button>
                                    </h2>
                                    <div id="flush-collapseThree2" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                      <ul>
                                        <li>Copia de cedula catastral anterior y planos anteriores.</li>
                                        <li>Copia del INE del propietario del predio</li>
                                        <li>Solicitud por escrito del servicio solicitado firmado por el propietario del predio, en caso de autorizar a otra persona, mencionarlo en la solicitud anexando copia del INE</li>
                                        <li>En caso de ser personas morales se solicita copia del poder de autorización.</li>
                                      </ul>
                                    </div>
                                  </div>
                                  
                                </div>
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <!-- <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">ATENCIÓN CIUDADANA</p>
                            </div>
                            <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M18 11C18 11.67 18 12.33 18 13C19.2 13 20.76 13 22 13C22 12.33 22 11.67 22 11C20.76 11 19.2 11 18 11Z" fill="#065284"/>
                              <path d="M16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61Z" fill="#065284"/>
                              <path d="M20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6Z" fill="#065284"/>
                              <path d="M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM9.03 10.71L11 9.53V14.47L9.03 13.29L8.55 13H4V11H8.55L9.03 10.71Z" fill="#065284"/>
                              <path d="M15.5 12C15.5 10.67 14.92 9.47 14 8.65V15.34C14.92 14.53 15.5 13.33 15.5 12Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">REPORTES</p>
                            </div>
                            <div  class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;border-top:1px solid #AFAFAF;border-bottom:1px solid #AFAFAF;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  style="margin-left: 16px; margin-right: 16px;">
                              <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H3V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM15 20H6C5.45 20 5 19.55 5 19V18H15V20ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V16H8V5H19V19Z" fill="#065284"/>
                              <path d="M15 7H9V9H15V7Z" fill="#065284"/>
                              <path d="M18 7H16V9H18V7Z" fill="#065284"/>
                              <path d="M15 10H9V12H15V10Z" fill="#065284"/>
                              <path d="M18 10H16V12H18V10Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">QUEJAS</p>
                            </div>
                            <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  style="margin-left: 16px; margin-right: 16px;">
                              <path d="M9.77973 4V5.38C8.94973 5.05 8.05973 4.88 7.16973 4.88C5.37973 4.88 3.58973 5.56 2.21973 6.93L5.54973 10.26H6.65973V11.37C7.51973 12.23 8.63973 12.68 9.76973 12.73V15H6.77973V18C6.77973 19.1 7.67973 20 8.77973 20H18.7797C20.4397 20 21.7797 18.66 21.7797 17V4H9.77973ZM8.66973 10.41V8.26H6.38973L5.34973 7.22C5.91973 7 6.53973 6.88 7.16973 6.88C8.50973 6.88 9.75973 7.4 10.7097 8.34L12.1197 9.75L11.9197 9.95C11.4097 10.46 10.7297 10.75 9.99973 10.75C9.52973 10.75 9.06973 10.63 8.66973 10.41ZM19.7797 17C19.7797 17.55 19.3297 18 18.7797 18C18.2297 18 17.7797 17.55 17.7797 17V15H11.7797V12.41C12.3497 12.18 12.8797 11.84 13.3397 11.38L13.5397 11.18L16.3697 14H17.7797V12.59L11.7797 6.62V6H19.7797V17Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">SUGERENCIAS</p>
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
