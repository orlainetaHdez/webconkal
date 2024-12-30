
<script setup lang="ts">

     
      
const currentDate = ref(getCurrentDate()); // Llamar a la función para obtener la fecha

// Función para obtener la fecha formateada
function getCurrentDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'short' });
  const year = today.getFullYear();
  
  return `${day < 10 ? '0' + day : day} ${month}. ${year}`;
}
         import('~/assets/css/bootstrap.min.css')
        // import('~/assets/css/carrouseldestino.css')
      
          useHead({
            link: [
            // {
            //     rel: 'stylesheet',
            //     href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',
            //     crossorigin: ''
            //   },
              // { 
              //   rel: 'stylesheet',
              //   href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'  // Example: Adding a Google Font
              // },
              {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css'
              }
            
              // {
              //   rel: 'stylesheet',
              //   href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
              // }
            ],
            script: [
              {
                src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js',
                tagPosition: 'bodyClose'
              },
              {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
                  tagPosition: 'bodyClose'
              },
              {
                src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
                  tagPosition: 'bodyClose'
              },
              {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js',
                  tagPosition: 'bodyClose'
              },
              // {
              //   src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
              //     tagPosition: 'bodyClose'
              // },
              {
                src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
                  tagPosition: 'bodyClose'
              }
            ]
          });  
</script>

<template>
  <div>
    <div style="min-height: 102.13px;background-color: #022452;overflow-x: hidden;">
            <div style="display: flex;align-items: center;justify-content: center;width: 100%;">
              <div class="row" style="width: 100%;max-width: 1155px;display: flex;justify-content: center;align-items: center;">
                <div class="col-md-4" style="padding-right:0px; padding-left: 0px;">
                  <div style="display: flex;justify-content: left;">
                     <div style="justify-content: center;">
                        <div class="team-icon d-none d-xl-flex justify-content-center me-3" style="padding-top:15px;display:flex !important;width: fit-content;">
                                 <a href="#" class="btn btn-square btn-light rounded-circle mx-1" target="_blank" style="padding: 0;display: flex;align-items: center;justify-content: center;font-weight: normal;background-color: #CB2F80;"><i class="fab fa-facebook-f" style="color:#ffffff;width: 24px;"></i></a>
                                  <!-- <a href="#" class="btn btn-square btn-light rounded-circle mx-1"  target="_blank"><i class="fab fa-twitter" style="color:#00496c;"></i></a> -->
                                 <a class="btn btn-square btn-light rounded-circle mx-1" href=""  style="padding: 0;display: flex;align-items: center;justify-content: center;font-weight: normal;background-color: #CB2F80;"><i class="fab fa-instagram" style="color:#ffffff;width: 24px;"></i></a>
                                 <a href="#" class="btn btn-square btn-light rounded-circle mx-1"  target="_blank"  style="padding: 0;display: flex;align-items: center;justify-content: center;font-weight: normal;background-color: #CB2F80;"><i class="fab fa-youtube" style="color:#ffffff;width: 24px;"></i></a>
                                 <a href="#" class="btn btn-square btn-light rounded-circle mx-1"  target="_blank"  style="padding: 0;display: flex;align-items: center;justify-content: center;font-weight: normal;background-color: #CB2F80;"><i class="fab fa-tiktok" style="color:#ffffff;width: 24px;"></i></a>
                        </div>
                        <div class="busqueda-container" style="background-color: white;width: 177px; border-radius: 48px;height: 32px;margin-top: 10px;">
                          <i class="fas fa-search icono-lupa" onclick="buscarTexto()"></i>
                            <input type="text" id="busqueda" placeholder="Buscar..." style="width: 140px; border-radius: 48px;height: 32px;font-size: 12px; background-color: transparent;border-color: transparent;color: black;outline: none;">
                        </div>
                      </div>
                  </div>
                </div>
                 <div class="col-md-8" style="padding-right:0px; padding-left: 0px;">
                    <div class="row">
                        <div class="col-md-5" style="padding-bottom: 10px;">
                          <a href="/"><img src="assets/images/concal/Logotipo.png" alt="Logo" style="width: 100%;max-width: 239px;"> </a>
                        </div>
                        <div class="col-md-7">
                          <div class="row" style="display: flex;justify-content: center;align-items: center;">
                             <div class="col-4" style="display: flex;justify-content: center;align-items: center;">
                               <div class="contenido">
                                 <div  style="display: flex;">
                                  <img src="assets/images/concal/PhoneCall.png" alt="Logo" width="16px;" height="16px;">
                                   <p style="font-size: 12px;color: #D9D9D9;padding-left: 14px;margin-bottom: 0px !important;">999 912 4050</p>
                                 </div>
                                 <div  style="display: flex;">
                                  <img src="assets/images/concal/MapPinLine.png" alt="Logo" width="16px;" height="16px;">
                                   <p style="font-size: 12px;color: #D9D9D9;padding-left: 14px;margin-bottom: 0px !important;">22 s/n, Centro, 97000 Conkal, Yuc.</p>
                                 </div>
                               </div>
                             </div>
                             <div class="col-4" style="display: flex;justify-content: center;align-items: center;border-left: solid;border-right: solid;">
                              <div class="contenido" style="display: flex;">
                              <img src="assets/images/concal/clock.png" alt="Logo" width="16px;" height="16px;">
                               <p style="font-size: 12px;color: #D9D9D9;margin-bottom: 0px !important;padding-left: 12px;">Lun - Vie<br>9 AM - 5 PM</p>
                              </div>
                             </div>
                             <div class="col-4" style="display: flex;justify-content: center;align-items: center;">
                              <div class="contenido"  style="display: flex;">
                              
                                <img src="assets/images/concal/CloudSun.png" alt="Logo" width="16px;" height="16px;"> 
                                <template>
                                   <p style="font-size: 12px;color: #D9D9D9;padding-left: 14px;margin-bottom: 0px !important;">{{ currentDate }}</p>
                                </template>
                              </div>
                             </div>
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
        .busqueda-container {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        #busqueda {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            flex: 1;
        }
        .icono-lupa {
            margin-left: 10px;
            cursor: pointer;
        }
        .contenido {
            text-align:left; /* Alinear texto a la derecha */
        }

     
</style>
