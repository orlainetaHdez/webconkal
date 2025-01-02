<script setup lang="ts">

const { data : directorio, error } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response2 = await $fetch('https://administrador.yucatanconkal.gob.mx/api/v1/portal/directory/hierarchies', {
      method: 'GET',
      params: {
        municipal_department_id: 1, // Agregar parámetros aquí en lugar de body
      },
      headers: {
      }
    })

const response = response2.data.municipalHierarchies.data
    
    console.log(response)
    return response
  } catch (err) {
    // Manejo de errores
    console.error('Error en el envío del reporte:', err)
    throw new Error('Hubo un error al enviar el reporte.')
  }
})


const { data : directorioP, error:edirectorioP } = await useAsyncData(async () => {
  try {
    // Realizando la solicitud GET con parámetros en la URL (query string)
    const response3 = await $fetch('https://administrador.yucatanconkal.gob.mx/api/v1/portal/directory/departments', {
      method: 'GET',
      headers: {
      }
    })

const response4 = response3.data.municipalDepartments.data
    
    console.log(response4)
    return response4
  } catch (err) {
    // Manejo de errores
    console.error('Error en el envío del reporte:', err)
    throw new Error('Hubo un error al enviar el reporte.')
  }
})


/*
   const { data: directorio }= await useAsyncData( () => $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/directory/hierarchies?municipal_department_id=1'), {
       // lazy: true
    })

const response = directorio.value.data.municipalHierarchies*/
/*
const { data:directorioP }= await useAsyncData( () => $fetch('https://api.conkal.tobecorporativo.mx/api/v1/portal/directory/departments'), {
       // lazy: true
})

const response2 = directorioP.value.data.municipalDepartments*/
</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> DIRECTORIO</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;font-family: JostBold;">Presidencia Municipal</p>
                           <div class="row">
                            <template v-for="(post,index) in directorio">
                              <div v-if="index ===0"  class="col-12" > 
                                <div  style="display:flex;justify-content: left;align-items: center;height:112px;/*max-width:419px;*/max-width:380px;width:100%; background-color:white;border-radius: 16px;overflow: hidden;margin-top:20px;">
                                    <img :src="post.img_path" style="width: 112px;height: 112px;">
                                    <div style="padding: 15px;">
                                    <p style="font-size: 16px;font-weight: 700;color:#022452;text-align: left;margin-bottom:0px;">{{ post.name }}</p>
                                      <p style="font-size: 12px;font-weight: 700;color:#222222;text-align: left;margin-bottom:0px;">{{ post.position }}</p>
                                      <a :href="'mailto:' + post.email"><p style="font-size: 12px;font-weight: 400;color:#022452;text-align: left;margin-bottom:0px;">{{ post.email }}</p></a>
                                      <p style="font-size: 12px;font-weight: 400;color:#022452;text-align: left;margin-bottom:0px;">Tel.  {{ post.phone }}</p>
                                    </div>
                                  </div>         
                              </div>
                              <div v-else  class="col-md-6">
                                  <div  style="display:flex;justify-content: left;align-items: center;max-width:380px;width:100%;overflow: hidden;margin-top:20px;/* background-color:white;border-radius: 16px;*/">
                                      <img :src="post.img_path"  style="width: 96px;height: 96px;border-radius:48px;">
                                      <div style="padding: 15px;">
                                        <p style="font-size: 16px;font-weight: 700;color:#022452;text-align: left;margin-bottom:0px;">{{ post.name }}</p>
                                        <p style="font-size: 12px;font-weight: 700;color:#222222;text-align: left;margin-bottom:0px;">{{ post.position }}</p>
                                        <a :href="'mailto:' + post.email"><p style="font-size: 12px;font-weight: 400;color:#022452;text-align: left;margin-bottom:0px;">{{ post.email }}</p></a>
                                        <p style="font-size: 12px;font-weight: 400;color:#222222;text-align: left;margin-bottom:0px;">Tel.  {{ post.phone }}</p>
                                      </div>
                                    </div>
                              </div>
                            </template>
                      </div>
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">DIRECTORIO</p>
                            </div>
                            <template v-for="(post2,index) in directorioP">
                              <div class="contTitles" style="width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;border-bottom:1px solid #AFAFAF;cursor: pointer;">
                                <i class="iconsvg fas fa-chevron-right" style="padding-left: 18px;padding-right: 10px;color:#065284;"></i>
                                  <p class="titlecolumns text-uppercase" style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;text-align: left;padding: 6px;">{{ post2.name }}</p>
                                </div>
                            </template>
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
