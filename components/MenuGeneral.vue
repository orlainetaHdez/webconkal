<script setup lang="ts">
     import('~/assets/css/style.css')
</script>

<template>
    <div style="min-height: 44px;background-color: #022452;">
            <div style="width: 100%;min-height: 44px;">
            <div class="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0" style="text-align: -webkit-center; background-color: #1D95BA;">
                <nav class="navbar navbar-expand-lg navbar-light" style="max-width: 1230px;;min-height: 44px;padding-top:0px;padding-bottom:0px;">
                    <a href="index" class="navbar-brand p-0">
    
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style="margin-bottom: 10px; margin-top: 10px;">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse" style="min-height: 44px;">
                        <div class="navbar-nav mx-auto py-0" style="min-height: 44px;">
                            <div class="nav-item dropdown" style="min-height: 44px;justify-content: center;align-items: center;text-align: center;">
                                <a href="#" class="nav-link dropdown-toggle linkhover" data-bs-toggle="dropdown" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">AYUNTAMIENTO</a>
                                <div class="dropdown-menu m-0">
                                    <!-- <a href="#" class="dropdown-item">Ayuntamiento</a> -->
                                    <a href="alcaldesa" class="dropdown-item">Conoce tu alcaldeza</a>
                                    <a href="turismo" class="dropdown-item">Turismo</a>
                                </div>
                            </div>     
                            <a href="directorio" class="nav-item nav-link linkhover" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">DIRECTORIO</a>              
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle linkhover" data-bs-toggle="dropdown" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">ATENCIÓN CIUDADANA</a>
                                <div class="dropdown-menu m-0">
                                    <a href="reporte" class="dropdown-item">Reporte</a>
                                    <a href="martes_ciudadano" class="dropdown-item">Martes ciudadano</a>
                                    <!-- <a href="reportes" class="dropdown-item">Reportes</a> -->
                                    <!-- <a href="#" class="dropdown-item">Quejas y sugerencias</a> -->
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle linkhover" data-bs-toggle="dropdown" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">TRÁMITES Y SERVICIOS</a>
                                <div class="dropdown-menu m-0">
                                    <a href="catastro" class="dropdown-item">Catastro</a> 
                                    <a href="desarrollo_urbano" class="dropdown-item">Desarrollo urbano</a>
                                 <a href="agua" class="dropdown-item">Agua potable</a>
                                    <a href="basura" class="dropdown-item">Basura</a>
                                    <a href="predial" class="dropdown-item">Predial</a>
                                </div>
                            </div>        
                            <a href="listado_convocatorias" class="nav-item nav-link linkhover"  style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">CONVOCATORIAS</a>
                            <a href="transparencia" class="nav-item nav-link linkhover" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">TRANSPARENCIA</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle linkhover" data-bs-toggle="dropdown" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">SALA DE PRENSA</a>
                                <div class="dropdown-menu m-0">
                                 <a href="noticias" class="dropdown-item">Noticias</a>
                                    <!-- <a href="#" class="dropdown-item">Gaceta</a>
                                    <a href="#" class="dropdown-item">Discursos</a> -->
                                </div>
                            </div>
                            <a href="contacto" class="nav-item nav-link linkhover" style="font-family: PenumbraSemibold;min-height: 44px;display: flex;justify-content: center;align-items: center;">CONTACTO</a>
                        </div>
                    </div>
                </nav>
              </div>
              </div>
        </div>
</template>

<style scoped>
   .sticky-top .navbar-light .navbar-nav .nav-link {
              padding: 0px 0;
              color: white !important;
        
        }

        .navbar-light .navbar-nav .nav-link {
            position: relative;
            margin-right: 30px;
            padding: 0px 0;
            /* letter-spacing: 1px; */
            font-family: PenumbraSemibold !important;
            line-height: 20.23px;
            /* color: var(--bs-dark); */
            font-size: 13px;
            transition: .5s;
        }
</style>
