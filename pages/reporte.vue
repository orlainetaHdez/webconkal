<script setup lang="ts">
   const { data:tipos }= await useAsyncData( () => $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/reporte-ciudadano/tipos'), {
       // lazy: true
})
console.log(tipos);
const response = tipos.value.data.reportTypes

console.log(response);
import { reactive } from 'vue'

const form = reactive({
  report_type_id: '',
  description: '',
  citizen_name: '',
  citizen_last_name: '',
  phone: '',
  email: ''
})

const submitForm = async () => {
  console.log(form)
  // Validación de campos
  if (!form.description || !form.citizen_name || !form.phone || !form.email) {
    alert('Por favor completa todos los campos requeridos.')
    return
  }

  const { data, error } = await useAsyncData('sendReport', async () => {
    try {
      const response = await $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/reporte-ciudadano/crear', {
        method: 'POST',
        body: form,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      })
      return response
    } catch (err) {
      console.error('Error en el envío del reporte:', err)
      throw new Error('Hubo un error al enviar el reporte.')
    }
  })

  if (error.value) {
    alert(error.value.message)
  } else {
    alert('Reporte enviado con éxito')
  }
}

</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> ATENCIÓN CIUDADANA<i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> REPORTE</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 30px;text-align: left;padding-right: 30px !important;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;font-family: JostBold;">Reporte</p>
                           <!-- <form action="/enviar-reporte" method="POST" @submit.prevent="submitForm"> -->
                          <template>
                            <form @submit.prevent="submitForm">
                           <div  class="row">
                             <div  class="col-12" style="margin-top:20px;">
                               <label for="frutas" style="width:100%;">Tipo:</label>
                               <select v-model="form.report_type_id" id="report_type_id" name="frutas" style="width:100%;height:40px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;">
                                <template v-for="(post,index) in response.data">
                                  <option :value="post.id" >{{ post.name }}</option>
                                </template>         
                               </select>
                             </div>
                               <div  class="col-12" style="margin-top:20px;">
                                 <label for="frutas" style="width:100%;">Tu Reporte:</label>
                                 <textarea v-model="form.description" required id="description" name="description" rows="4" placeholder="Escribe aquí..."  style="width:100%;height:116px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;"></textarea>
                               </div>
                               <div  class="col-12" style="margin-top:20px;">
                                 <label for="frutas" style="width:100%;">Nombre:</label>
                                 <input v-model="form.citizen_name" required type="text" id="citizen_name" name="citizen_name" placeholder="Escribe tu nombre aquí..." style="width:100%;height:40px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;">
                              </div>
                              <div  class="col-12" style="margin-top:20px;">
                                <label for="frutas" style="width:100%;">Apellidos:</label>
                                <input v-model="form.citizen_last_name" required type="text" id="citizen_lastname" name="citizen_lastname" placeholder="Escribe tu(s) apellido(s) aquí..." style="width:100%;height:40px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;">
                             </div>
                             <div  class="col-12" style="margin-top:20px;">
                               <label for="frutas" style="width:100%;">Teléfono:</label>
                               <input v-model="form.phone" type="text" id="phone" name="phone" placeholder="Escribe tu teléfono aquí..." style="width:100%;height:40px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;" required>
                            </div>
                            <div  class="col-12" style="margin-top:20px;">
                              <label for="frutas" style="width:100%;">Email:</label>
                              <input v-model="form.email" type="email" id="email" name="email" placeholder="Escribe tu email aquí..." style="width:100%;height:40px;border:1px solid #D9D9D9;border-radius:10px;padding-left: 15px;margin-top: 5px;" required>
                            </div>

                            
                           </div>
                           <button type="submit" style="background-color: #CB2F80; height: 40px; width: 290px; display: flex; justify-content: center; align-items: center; border-radius: 8px; border: none; cursor: pointer; margin-top: 30px;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z" fill="white"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px; font-weight: 600; color: #ffffff; margin-bottom: 0px; padding-left: 10px;">ENVIAR REPORTE</p>
                            </button>
                          </form>
                        </template>
                           <!-- <div class="contTitles2"  style="background-color: #CB2F80;height:40px;width:290px;display:flex;justify-content: center;align-items: center;border-radius:8px;margin-top:30px;">
                             <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z" fill="white"/>
                             </svg>
                             <p class="titlecolumns" style="font-size: 14px;font-weight: 600;color:#ffffff;margin-bottom:0px;padding-left:10px;">ENVIAR REPORTE</p>
                           </div> -->
                           
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">ATENCIÓN CIUDADANA</p>
                            </div>
                            <a href="reportes"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M18 11C18 11.67 18 12.33 18 13C19.2 13 20.76 13 22 13C22 12.33 22 11.67 22 11C20.76 11 19.2 11 18 11Z" fill="#065284"/>
                              <path d="M16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61Z" fill="#065284"/>
                              <path d="M20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6Z" fill="#065284"/>
                              <path d="M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM9.03 10.71L11 9.53V14.47L9.03 13.29L8.55 13H4V11H8.55L9.03 10.71Z" fill="#065284"/>
                              <path d="M15.5 12C15.5 10.67 14.92 9.47 14 8.65V15.34C14.92 14.53 15.5 13.33 15.5 12Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">REPORTES</p>
                            </div></a>
                            <a href="martes_ciudadano"><div  class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;border-top:1px solid #AFAFAF;border-bottom:1px solid #AFAFAF;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  style="margin-left: 16px; margin-right: 16px;">
                              <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H3V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM15 20H6C5.45 20 5 19.55 5 19V18H15V20ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V16H8V5H19V19Z" fill="#065284"/>
                              <path d="M15 7H9V9H15V7Z" fill="#065284"/>
                              <path d="M18 7H16V9H18V7Z" fill="#065284"/>
                              <path d="M15 10H9V12H15V10Z" fill="#065284"/>
                              <path d="M18 10H16V12H18V10Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">MARTES CIUDADANO</p>
                            </div></a>
                            <!-- <div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
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
