<script setup lang="ts">
defineProps({
  titulo:{required:false},
})
</script>

<template>
  <div class="contTitles2" style="background-color: #CB2F80;height:40px;width:227px;display:flex;justify-content: center;align-items: center;border-radius:8px;margin-top:40px;">
      <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:10px;">
        <path d="M16.5 1H4.5C3.4 1 2.5 1.9 2.5 3V17H4.5V3H16.5V1ZM15.5 5H8.5C7.4 5 6.51 5.9 6.51 7L6.5 21C6.5 22.1 7.39 23 8.49 23H19.5C20.6 23 21.5 22.1 21.5 21V11L15.5 5ZM8.5 21V7H14.5V12H19.5V21H8.5Z" fill="white"></path>
      </svg>
      <p class="titlecolumns" style="font-size: 14px;font-weight: 600;color:#ffffff;margin-bottom:0px;" >{{ titulo }}</p>
  </div>
</template>

<style scoped>
 .contTitles2:hover {
  background-color: red !important;
 }
</style>
