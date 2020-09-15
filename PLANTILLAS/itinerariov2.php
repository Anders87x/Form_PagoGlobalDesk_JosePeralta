<!DOCTYPE html>
<html lang="en">
	<head>
        <?php require_once("head.php");?>

        <title>Itinerario | Globaldesk</title>

	</head>

	<body>
		<div class="main-page-wrapper"> <!-- Inicio main-page-wrapper -->

            <!-- ==== Inicio loader-wrapper ==== -->
			<div id="loader-wrapper">
				<div id="loader"></div>
			</div>
            <!-- ==== Inicio loader-wrapper ==== -->

            
			<?php require_once("header.php");?>

            <!--
			=============================================
				Banner ITINERARIO
			==============================================
			-->
			<div class="theme-inner-banner section-spacing">
				<div class="overlay">
					<div class="container">
						<h2>SERVICIOS</h2>
					</div> <!-- /.container -->
				</div> <!-- /.overlay -->
			</div> <!-- /.theme-inner-banner -->

				<div class="theme-title-one">
						<h2>ITINERARIO</h2>
				</div> <!-- /.theme-title-one -->

            <!--
			=============================================
				ACORDEON IMPORTACIÓN - EXPORTACIÓN
			==============================================
			-->


                <div class="faq-page section-spacing">  <!--- inicio section-spacing -->
                    <div class="container"> <!--- inicio container -->		
                        <div class="faq-panel" style="margin-top:45px;"> <!--- inicio faq-panel -->

                            <!-- MENSAJE LINEAL-->
                            <div class="alert alert-success">
                                <p style="text-align: center;">Los plazos documentarios están sujetos a variación dependiendo del ETA de la nave.</p>
                            </div>
                            <!-- FIN DE MENSAJE LINEAL -->

                                <br>


                                <!-- ==== INICIO DE ACORDEON EXPORTACIÓN ==== -->

                                <div class="panel-group theme-accordion" id="accordion"> <!-- inicio panel-group theme-accordion-->
                                    
                                    <div id="collapse1" class="panel-collapse collapse"><!-- COLLAPSE 1-->
                                        <div class="panel-body"> <!-- inicio panel body-->

                                            <div class="panel-group"> <!-- inicio panel group-->
                                                <div class="panel panel-default"> <!-- inicio panel default-->

                                                    <div class="panel-heading"><!-- inicio panel-heading-->
                                                        <h7 class="panel-title">
                                                            <a data-toggle="collapse" href="#collapse12">PLAZOS HYUNDAI MERCHANT MARINE</a>
                                                        </h7>
                                                    </div><!-- fin panel-heading-->

                                                    <div id="collapse12" class="panel-collapse collapse"> <!-- inicio collapse12-->
											            <br>
										                <div class="container table-responsive">
                                                            <div class="form-group" style="margin-bottom: 0rem;"><!-- boton busqueda collapse12-->
                                                                <img src="public/images/portfolio/plazos_hmm.jpg" alt="Logo Hyundai" style="display: inline;"> 
                                                                <input type="text" class="form-control pull-right" style="width:20%; margin-right: 20px" id="search" placeholder="Buscar">
                                                                    <br>
                                                                        <!-- ************  TABLA **************** -->
                                                                        TEST!!
                                                            </div> <!-- fin boton busqueda collapse12-->

                                                        </div> <!-- fin container table-responsive collapse12-->
                                                    </div><!-- fin collapse12-->

                                                </div><!-- fin panel default-->
                                            </div><!-- fin panel group-->

                                        </div> <!-- fin panel body-->
                                    </div><!-- COLLAPSE 1-->

                                </div> <!-- fin panel-group theme-accordion-->

                                <!-- ==== FIN DE ACORDEON EXPORTACIÓN ==== -->

                                
                            
                        </div> <!--- fin faq-panel -->
                    </div> <!--- fin container -->
                </div> <!--- fin section-spacing -->



            	<!--=====CLIENTE======-->
                <div class="partner-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 col-sm-4 col-12">
                                    
                                </div>
                                <div class="col-12">
                                    <div class="partner-slider">
                                        <div class="item"><img src="public/images/logo/p-1.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-2.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-3.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-4.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-5.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-6.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-7.png" alt=""></div>
                                        <div class="item"><img src="public/images/logo/p-8.png" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
			    <!--=====FIN CLIENTE======-->


            <?php require_once("footer.php");?>

            <?php require_once("js.php");?>



        </div> <!-- /fin main-page-wrapper -->
	</body>
	
</html>