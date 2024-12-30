<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'

// Este es el hook que se ejecuta cuando el componente es montado
import { defineAsyncComponent } from 'vue'
onMounted(async () => {
  if (process.client) {
    // Cargar Leaflet de manera dinámica
    const L = await import('leaflet');
    await import('leaflet/dist/leaflet.css');  // Cargar los estilos de Leaflet

    const map = L.map('map').setView([21.0741158, -89.5211877], 13);  // Coordenadas de la ubicación

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([21.0741158, -89.5211877]).addTo(map);
    marker.bindPopup("<b>Ayuntamiento</b>").openPopup();
  }
});
</script>

<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<style scoped>
#map {
  height: 300px;
  width: 100%;
}
</style>