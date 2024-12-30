<script setup lang="ts"></script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MenuGeneral></MenuGeneral>
        <div class="container-fluid blog pb-5 fadeInUp" style="text-align: -webkit-center;z-index: 1;position: relative;padding-top: 100px !important;padding-bottom: 150px !important;background-color: #f6f6f6;">
          <img src="assets/images/concal/union.png" class="img-fluid w-100 rounded-top" alt="Image" style="max-width: 736px !important;position: absolute;right: 0px;opacity: 60%;    bottom: -170px;z-index: 1;">
          <div class="container " style="max-width: 1119px;z-index:2;position:relative;--bs-gutter-x: 5px;" >
            <div class="row ">
                  <div class="col-lg-8 " style="display: flex;justify-content: center;border: black 1px solid;padding: 50px;border-radius: 18px;">
                    <div class="Fase-ContentFase3 u-inline-block u-textLeft u-imagenFondoCover">
                        <h2 class="Fase-TitleFase2">COBRO EN LÍNEA</h2>
                        <!--p class="Fase-SubtitleFase2">y procede al pago de tus boletos</p>-->
                    
                        <figure class="Fase-Bancos">
                            <img src="assets/images/concal/logos.png" alt="Bancos" style="width: 100%;">
                        </figure>

                        <div class="Fase-Total-Compra u-textRight" style="text-align: right;">
                          <!--<p><strong>Subtotal:</strong> $<span class="dtSubtotal">0</span></p>
                          <p><strong>Comisión:</strong> $<span class="dtComision">0</span></p>-->
                          <p><strong>Total </strong> $<span class="dtTotal">0</span></p>
                        </div>                        
                      <form id="CarritoCompras-frmCard" class="Fase-FormCompra u-inline-block u-textLeft" method="POST" action="">
                            <input class="u-box-sizing" type="text" name="txtNombre" id="txtNombre" autocomplete="off" placeholder="Nombre" data-openpay-card="holder_name">
                            <input class="u-box-sizing" type="tel" name="txtTelefono" id="txtTelefono" autocomplete="off" placeholder="Número de Teléfono"  data-openpay-card="card_number">
                            <input class="u-box-sizing" type="email" name="txtEmail" id="txtEmail" autocomplete="off" placeholder="Correo electrónico" data-openpay-card="holder_name">
                            <input class="u-box-sizing" type="number" name="txtTarjeta" id="txtTarjeta" autocomplete="off" placeholder="Número de Tarjeta" data-openpay-card="card_number">
                              <div class="row">
                                 <p style="text-align: left;">Vencimiento</p>
                                <div class="col-md-6" style="text-align: left;">          
                                    <input class="u-box-sizing u-textCenter" type="number" id="txtMes" autocomplete="off" placeholder="MM" data-openpay-card="expiration_month" maxlength="2" min="01" max="12"><label for="" class="u-inline-block"> / </label> <input class="u-box-sizing u-textCenter" type="number" id="txtAnio" autocomplete="off" placeholder="AA" maxlength="2" data-openpay-card="expiration_year">
                                </div>
                                <div class="col-md-6">
                                    <input class="u-box-sizing" type="number" name="txtCvc" id="txtCvc" autocomplete="off" placeholder="Código de Seguridad" data-openpay-card="cvv2">
                                </div>        
                              </div>   
                              <div class="row" style="    padding-top: 30px;">
                                    <div  class="col-md-6">
                                      Transacciones realizadas vía:
                                      <figure>
                                          <img src="assets/images/concal/openpay.png" alt="Logo OpenPay">
                                      </figure>
                                    </div>    
                                    <div  class="col-md-6" style="display: flex;">
                                        <figure class="u-inline-block">
                                            <img src="assets/images/concal/security.png" alt="escudo">
                                        </figure>
                                        <p class="u-inline-block" style="width:80%">Tus pagos se realizan de forma segura con encriptación de 256 bits</p>
                                    </div>
                              </div>          
                              <div>
                                      <a class="button rght" id="pay-button" style="color:white;">Pagar</a>
                              </div>
                      </form>
                    </div>
                  </div>
                    <div class="col-0 col-lg-1"></div>
                    <div class="col-lg-3" style="padding-right: 0px !important;padding-left: 0px !important;" >
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

<style scoped>

@charset "US-ASCII";
@import "http://fonts.googleapis.com/css?family=Lato:300,400,700";
a.button {
    border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    padding: 12px 0;
    width: 100%;
    display: table;
    background: #E51F04;
    background: -moz-linear-gradient(top,  #E51F04 0%, #A60000 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E51F04), color-stop(100%,#A60000));
    background: -webkit-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: -o-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: -ms-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: linear-gradient(top,  #E51F04 0%,#A60000 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E51F04', endColorstr='#A60000',GradientType=0 );
}

#txtMes {
    width: 60px;
    margin-right: 5px;
}

#txtAnio {
    width: 60px;
    margin-right: 25px;
}

#txtCvc {
   width: 100%;
}

input, textarea {
    width: 100%;
    height: 23px;
    color: #ffffff;
    font: 16px 'Raleway-Regular';
    background: none;
    border: 0px;
    border-bottom: 1px solid #ffffff;
    margin: 0px;
    padding: 0px;
    padding-left: 0px;
    margin-bottom: 20px;
}

.Fase-ContentFase3 input {
    color: #527187;
    font-family: 'Raleway-Bold';
    border-bottom: 1px solid #527187;
    margin-bottom: 13px;
}

.Fase-ContentFase3 {
    width: 100%;
max-width:500px;   
}

.Fase-DatosVencimiento label {
    color: #ffffff;
    color: #527187;
}
</style>
