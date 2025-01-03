<script setup lang="ts">
const banners: any = ref([])
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

const { data: getData, error: getError, status: getStatus, refresh: getRefresh } = await useAsyncData(
  'banners',
  () => $fetch('/api/v1/portal/pagina/listar', {
    baseURL: 'https://api.yucatanconkal.gob.mx',
    method: 'get',
    params: {page_categories_group_name: 'Boletines'},
    onResponse(resp) {
      if (resp.response?._data.data.pages) {
        banners.value = resp.response?._data.data.pages.data
      }
    }
  })
);
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide
          v-for="(banner, idx) in banners ?? []"
          :key="banner.id"
          class="container"
        >
          <img :src="banner.files[0].url" class="img-fluid img">
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  max-height: 600px;
}
.img {
  padding: 10px 0px;
  object-position: center;
  object-fit: contain;
}
</style>
