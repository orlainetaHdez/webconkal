<script setup lang="ts">

const { data, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response = await $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/pagina/listar', {
      method: 'GET',
      params: {
        page_categories_name: 'tu alcaldesa', // Agregar parámetros aquí en lugar de body
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
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> AYUNTAMIENTO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> TU ALCADESA</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;">
                      <!-- <template v-for="(post,index) in response2.data" :key="index">
                          <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;"></p>
                           <img src="assets/images/concal/image (1).png" class="d-block w-100" alt="..." style="">
                           <p style="font-size: 16px;font-weight: 400;color: #000000;padding-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in consequat lectus, nec maximus orci. Aliquam malesuada sem tortor, ut eleifend quam malesuada eget. Proin mollis est a eros feugiat viverra. Donec laoreet varius tortor convallis bibendum. Mauris neque purus, lobortis id justo nec, sollicitudin luctus arcu. Sed gravida sit amet est maximus rhoncus. Pellentesque eget nunc in diam scelerisque elementum et et risus. Sed sed turpis sed nulla blandit feugiat. Cras aliquet tempor augue, eget mollis quam placerat quis. Vestibulum vehicula lorem purus, porttitor porttitor ex sollicitudin et. Duis bibendum arcu quis massa maximus, ac mattis risus laoreet. Aliquam ultricies ipsum massa, vitae sodales leo ultrices vel.<br><br>Integer ullamcorper ac mi in feugiat. Nulla nec lobortis magna, non volutpat urna. Mauris ac felis vulputate, dictum magna ut, viverra ex. Vivamus congue feugiat dolor sit amet venenatis. Mauris at congue neque. Aenean faucibus accumsan neque, in condimentum nulla. Nullam vel sem quis diam congue luctus a ut lacus. Donec id molestie nunc, ac vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br><br>Duis vel hendrerit arcu. Nunc rutrum, lectus sit amet mattis luctus, odio nisl convallis odio, eu aliquet erat est ac sem. Donec fringilla enim a mauris euismod lobortis. Donec et sapien eu mi mollis fermentum sed non elit. Sed molestie quis lectus eget consequat. Sed nulla arcu, egestas ut felis quis, sollicitudin accumsan ex. Nulla eget semper tellus.</p>
                   
                      </template> -->

                  

                            <template>
                            <div v-if="data && !error">
                              <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;">{{ data.title }}</p>
                              
                              <!-- Check if image exists -->
                              <img 
                                v-if="data.files && data.files.length > 0" 
                                :src="data.files[0].url" 
                                class="d-block w-100" 
                                alt="Image" 
                              />
                              <p v-else class="no-image">No image available.</p> <!-- Fallback for no image -->
                              
                              <!-- Check if html_content exists and is not empty -->
                              <p v-if="data.html_content" style="font-size: 16px;font-weight: 400;color: #000000;padding-top: 20px;" v-html="data.html_content"></p>
                              <p v-else class="no-content">No content available.</p> <!-- Fallback for no content -->
                            </div>
                          </template>
                     

                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">TU ALCADESA</p>
                            </div>
                            <a href="semblanza"><div  class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M14.17 5L19 9.83V19H5V5H14.17ZM14.17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9.83C21 9.3 20.79 8.79 20.41 8.42L15.58 3.59C15.21 3.21 14.7 3 14.17 3ZM7 15H17V17H7V15ZM7 11H17V13H7V11ZM7 7H14V9H7V7Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">SEMBLANZA</p>
                            </div></a>
                            <a href="trayectoria"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;border-top:1px solid #AFAFAF;border-bottom:1px solid #AFAFAF;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M19 15.18V7C19 4.79 17.21 3 15 3C12.79 3 11 4.79 11 7V17C11 18.1 10.1 19 9 19C7.9 19 7 18.1 7 17V8.82C8.16 8.4 9 7.3 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.3 3.84 8.4 5 8.82V17C5 19.21 6.79 21 9 21C11.21 21 13 19.21 13 17V7C13 5.9 13.9 5 15 5C16.1 5 17 5.9 17 7V15.18C15.84 15.59 15 16.69 15 18C15 19.66 16.34 21 18 21C19.66 21 21 19.66 21 18C21 16.7 20.16 15.6 19 15.18ZM6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7ZM18 19C17.45 19 17 18.55 17 18C17 17.45 17.45 17 18 17C18.55 17 19 17.45 19 18C19 18.55 18.55 19 18 19Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">TRAYECTORIA</p>
                            </div></a>
                            <a href="mensaje"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M2.93359 8.5H13.9336V10.5H2.93359V8.5ZM2.93359 6.5H13.9336V4.5H2.93359V6.5ZM2.93359 14.5H9.93359V12.5H2.93359V14.5ZM17.9436 11.37L18.6536 10.66C19.0436 10.27 19.6736 10.27 20.0636 10.66L20.7736 11.37C21.1636 11.76 21.1636 12.39 20.7736 12.78L20.0636 13.49L17.9436 11.37ZM17.2336 12.08L11.9336 17.38V19.5H14.0536L19.3536 14.2L17.2336 12.08Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">MENSAJE</p>
                            </div></a>
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
