<script setup lang="ts">
const { data, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response = await $fetch('https://api.yucatanconkal.gob.mx/api/v1/portal/transparencia/listar', {
      method: 'GET',
    })
   const response2 = response.data.transparency_categories.data
    
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
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> TRANSPARENCIA</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 50px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
            <div class="container" style="max-width: 1170px;z-index:2;position:relative;padding-right: 10px !important;padding-left: 10px !important;" >
                <div class="row">
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                      <div class="accordion accordion-flush" id="accordionFlushExample">

                        <template v-for="(post,index) in data">
                            <div v-if="data && !error">
                              
                              <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                      <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+post.name" aria-expanded="false" :aria-controls="'flush-collapse'+post.name" style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;">
                                        {{ post.name }}
                                      </button>
                                    </h2>
                                    <div v-for="(post2,index) in data.files" :id="'flush-collapse'+post.name" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                      <div class="accordion-body" style="background:#FFF !important;border-bottom:1px solid #AFAFAF;">
                                       <p style="text-align: left;font-size:14px !important;color:#595959;margin-bottom:0px;font-weight:600;">2021</p>
                                      </div>
                                     
                                    </div>
                                  </div>
                             </div>
                        </template>

                                  
                                </div>
                    </div>
                    <div class=" col-lg-9" style="padding-left: 20px;padding-right: 20px;text-align: left;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;font-family: JostBold;">Unidad de Transparencia Municipal</p>
                           <img src="assets/images/concal/transparencia.png" class="d-block w-100" alt="..." style="">
                           <div class="row" style="padding-top:30px;">
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Titular de la Unidad de Transparencia:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">C. Adriana Sarahi Pool Chávez</p>
                             </div>
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Domicilio:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">Calle 22 x 21 y 23 C.P. 97345 Conkal, Yuc.</p>
                             </div>
                           </div>
                           <div class="row" style="padding-top:30px;">
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Correo electónico:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">conkal@transparenciayucatan.org.mx</p>
                             </div>
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Horarios de atención al público:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">Lunes a viernes de 9:00 a.m. a 02:00 p.m.</p>
                             </div>
                           </div>
                           <div>
                             <!--div class="accordion accordion-flush" id="accordionFlushExample2" style="padding-top: 10px;">
                                         <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                           <h2 class="accordion-header" id="flush-headingOne">
                                             <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2" style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                               Días Inhábiles de la Unidad de Transparencia Municipal
                                             </button>
                                           </h2>
                                           <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                                             <div class="accordion-body" style="background:#ffffff !important;">
                                                <p style="text-align: left;font-size:16px !important;color:#065284;font-weight:700;padding-left: 15px;">DÍAS INHÁBILES DE LA UNIDAD DE TRANSPARENCIA MUNICIPAL 2024</p>
                                                <ul style="padding-left: 15px;">
                                                    <li>Lunes 05 de febrero.- Conmemoración del Aniversario de la Promulgación de la Constitución Política de los Estados Unidos Mexicanos.</li>
                                                    <li>Lunes 18 de marzo.- Conmemoración del Aniversario del Natalicio de Benito Juárez García.</li>
                                                    <li>Miércoles 01 de mayo.- Día del Trabajo.</li>
                                                    <li>Lunes 3 de junio.- Conmemoración del aniversario de la entrada en vigor en el Estado de Yucatán de la Ley de Acceso a la Información Pública para el Estado y los Municipios de Yucatán.</li>
                                                </ul>
                                             </div>
                                           </div>
                                         </div>
                                         <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                           <h2 class="accordion-header" id="flush-headingTwo">
                                             <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2"  style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                               Días Inhábiles del Instituto por Respeto a las Tradiciones y Costumbres Populares
                                             </button>
                                           </h2>
                                           <div id="flush-collapseTwo2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2">
                                             <div class="accordion-body" style="background:#ffffff !important;">
                                                <p style="text-align: left;font-size:16px !important;color:#065284;font-weight:700;padding-left: 15px;">DÍAS INHÁBILES DE LA UNIDAD DE TRANSPARENCIA MUNICIPAL 2024</p>
                                                <ul style="padding-left: 15px;">
                                                    <li>Lunes 05 de febrero.- Conmemoración del Aniversario de la Promulgación de la Constitución Política de los Estados Unidos Mexicanos.</li>
                                                    <li>Lunes 18 de marzo.- Conmemoración del Aniversario del Natalicio de Benito Juárez García.</li>
                                                    <li>Miércoles 01 de mayo.- Día del Trabajo.</li>
                                                    <li>Lunes 3 de junio.- Conmemoración del aniversario de la entrada en vigor en el Estado de Yucatán de la Ley de Acceso a la Información Pública para el Estado y los Municipios de Yucatán.</li>
                                                </ul>
                                             </div>
                                           </div>
                                         </div>
                                         <div class="accordion-item" style="border-bottom:1px solid #AFAFAF;">
                                           <h2 class="accordion-header" id="flush-headingThree">
                                             <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2do" aria-expanded="false" aria-controls="flush-collapseThree2do"  style="font-size: 14px;font-weight: 600;color:#065284; background-color: #D9D9D9;">
                                               Períodos Vacacionales Correspondientes al Ejercicio
                                             </button>
                                           </h2>
                                           <div id="flush-collapseThree2do" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample2">
                                             <div class="accordion-body" style="background:#ffffff !important;">
                                                <p style="text-align: left;font-size:16px !important;color:#065284;font-weight:700;padding-left: 15px;">DÍAS INHÁBILES DE LA UNIDAD DE TRANSPARENCIA MUNICIPAL 2024</p>
                                                <ul style="padding-left: 15px;">
                                                    <li>Lunes 05 de febrero.- Conmemoración del Aniversario de la Promulgación de la Constitución Política de los Estados Unidos Mexicanos.</li>
                                                    <li>Lunes 18 de marzo.- Conmemoración del Aniversario del Natalicio de Benito Juárez García.</li>
                                                    <li>Miércoles 01 de mayo.- Día del Trabajo.</li>
                                                    <li>Lunes 3 de junio.- Conmemoración del aniversario de la entrada en vigor en el Estado de Yucatán de la Ley de Acceso a la Información Pública para el Estado y los Municipios de Yucatán.</li>
                                                </ul>
                                             </div>
                                           </div>
                                         </div>
                                         </div-->
                                       </div>
                           </div>
                    </div>
                </div>
            </div>  
        <img src="assets/images/concal/Plecamaya 1.png" class="img-fluid w-100 rounded-top" alt="Image" style="width:100%;z-index: 2;height: 34px;position: relative;">
        <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.accordion-button:not(.collapsed) {
    color: #ffffff !important;
    background-color: #065284 !important;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .125);
}
</style>
