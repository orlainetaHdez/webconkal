<script setup lang="ts">
//import Map from '~/components/Map.vue';
</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> CONTACTO</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;padding-right: 30px !important;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;">Contacto</p>
                            <Map />      
                            <div class="row" style="padding-top:30px;">
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Te atendemos en:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">Calle 22 x 21 y 23 C.P. 97345 Conkal, Yuc.</p>
                             </div>
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Línea de Atención:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">+52 999 912 4050</p>
                             </div>
                           </div>
                           <div class="row" style="padding-top:30px;">
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Correo electrónico:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">conkal@transparenciayucatan.org.mx</p>
                             </div>
                             <div class="col-md-6">
                               <p style="font-size:16px; font-weight:600;color:#065284;margin-bottom:5px;">Horarios de atención al público:</p>
                               <p style="font-size:16px; font-weight:400;color:#222222;">Lunes a viernes de 9:00 a.m. a 02:00 p.m.</p>
                             </div>
                           </div>
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;margin-top: 25px;" >
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
