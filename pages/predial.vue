<script setup lang="ts"></script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
    <div style="min-height: 40px;background-color: #D9D9D9;display: flex;justify-content: center;">
            <div style="width: 100%;min-height: 40px;max-width: 1182px;align-content: center;">
            <p style="font-weight: 600;font-size: 14px;color: #022452;margin-bottom: 0px;padding-left: 16px;">INICIO <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> TRÁMITES Y SERVICIOS <i class="fas fa-chevron-right" style="padding-left: 8px;padding-right: 8px;"></i> PREDIAL</p>
            </div>
    </div>
    <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 20px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -150px;z-index: 1;">
            <div class="container" style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
                <div class="row">
                    <div class=" col-lg-9" style="padding-bottom: 10px;text-align: left;">
                           <p style="font-size: 48px;font-weight: 700;color:#022452;text-align: left;width: 90%;">Predial</p>
                           <img src="assets/images/concal/imageAgua.png" class="d-block w-100" alt="..." style="padding-bottom: 30px;">
                           <h3>Requisitos de Pago de Predial</h3>
                           <ul>
                            <li>Cedula catastral vigente 2022, 2023 y 2024 (no se aceptan provisionales)</li>
                            <li>Ultimo comprobante de pago predial </li>
                            <!-- <li>Copia de pago predial vigente</li>
                            <li>Cedula catastral del año en curso</li> -->
                             </ul>
                           <!-- <p style="font-size: 16px;font-weight: 400;color: #000000;padding-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in consequat lectus, nec maximus orci. Aliquam malesuada sem tortor, ut eleifend quam malesuada eget. Proin mollis est a eros feugiat viverra. Donec laoreet varius tortor convallis bibendum. Mauris neque purus, lobortis id justo nec, sollicitudin luctus arcu. Sed gravida sit amet est maximus rhoncus. Pellentesque eget nunc in diam scelerisque elementum et et risus. Sed sed turpis sed nulla blandit feugiat. Cras aliquet tempor augue, eget mollis quam placerat quis. Vestibulum vehicula lorem purus, porttitor porttitor ex sollicitudin et. Duis bibendum arcu quis massa maximus, ac mattis risus laoreet. Aliquam ultricies ipsum massa, vitae sodales leo ultrices vel.<br><br>Integer ullamcorper ac mi in feugiat. Nulla nec lobortis magna, non volutpat urna. Mauris ac felis vulputate, dictum magna ut, viverra ex. Vivamus congue feugiat dolor sit amet venenatis. Mauris at congue neque. Aenean faucibus accumsan neque, in condimentum nulla. Nullam vel sem quis diam congue luctus a ut lacus. Donec id molestie nunc, ac vestibulum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br><br>Duis vel hendrerit arcu. Nunc rutrum, lectus sit amet mattis luctus, odio nisl convallis odio, eu aliquet erat est ac sem. Donec fringilla enim a mauris euismod lobortis. Donec et sapien eu mi mollis fermentum sed non elit. Sed molestie quis lectus eget consequat. Sed nulla arcu, egestas ut felis quis, sollicitudin accumsan ex. Nulla eget semper tellus.</p> -->
                    </div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
                          <div style="width: 100%;background-color: #065284;border-radius: 8px;margin-bottom: 30px;">
                            <div style="height: 49px;width: 100%;display: flex;justify-content: center;align-items: center;">
                              <p style="font-size: 20px;color: white;font-weight: 600;margin-bottom: 0px;">TRÁMITES Y SERVICIOS</p>
                            </div>
                            <a href="agua"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M12 2C6.67 6.55 4 10.48 4 13.8C4 18.78 7.8 22 12 22C16.2 22 20 18.78 20 13.8C20 10.48 17.33 6.55 12 2ZM12 20C8.65 20 6 17.43 6 13.8C6 11.46 7.95 8.36 12 4.66C16.05 8.36 18 11.45 18 13.8C18 17.43 15.35 20 12 20ZM7.83 14C8.2 14 8.5 14.26 8.57 14.62C8.98 16.84 10.85 17.6 12.21 17.49C12.64 17.47 13 17.81 13 18.24C13 18.64 12.68 18.97 12.28 18.99C10.15 19.12 7.66 17.9 7.09 14.87C7.01 14.42 7.37 14 7.83 14Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns"  style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">AGUA POTABLE</p>
                            </div></a>
                            <a href="basura"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;border-top:1px solid #AFAFAF;border-bottom:1px solid #AFAFAF;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  style="margin-left: 16px; margin-right: 16px;">
                              <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="#065284"/>
                              </svg>
                              <p class="titlecolumns"  style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">BASURA</p>
                            </div></a>
                            <a href="predial"><div class="contTitles" style="height: 40px;width: 100%;background-color: #D9D9D9;display: flex;justify-content: left;align-items: center;cursor: pointer;">
                              <svg class="iconsvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 16px; margin-right: 16px;">
                              <path d="M19 9.8V4.5H16V7.1L12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L19 9.8ZM17 18.5H15V12.5H9V18.5H7V10.69L12 6.19L17 10.69V18.5Z" fill="#065284"/>
                              <path d="M10 10.5H14C14 9.4 13.1 8.5 12 8.5C10.9 8.5 10 9.4 10 10.5Z" fill="#065284"/>
                              </svg>

                              <p class="titlecolumns"  style="font-size: 14px;color: #065284;font-weight: 600;margin-bottom: 0px;">PREDIAL</p>
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
