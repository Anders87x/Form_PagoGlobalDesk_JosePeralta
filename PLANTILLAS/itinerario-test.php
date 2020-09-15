<!DOCTYPE html>
<html lang="en">
	<head>
        <?php require_once("head.php");?>

        <title>Itinerario | Globaldesk</title>

	</head>

	<body>
		<div class="main-page-wrapper">

			<div id="loader-wrapper">
				<div id="loader"></div>
			</div>

			<?php require_once("header.php");?>

			<!--
			=============================================
				Banner Wan Hai Lines
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

				
			<div class="faq-page section-spacing">
				<div class="container">				
					<div class="faq-panel" style="margin-top:45px;">
					
							<!-- MENSAJE -->
								<div class="alert alert-success">
									<p style="text-align: center;">Los plazos documentarios están sujetos a variación dependiendo del ETA de la nave.</p>
								</div>
							<!-- FIN DE MENSAJE -->



						<br>



						<!-- INICIO acordeon / EXPORTACIÓN -->
						<div class="panel-group theme-accordion" id="accordion">
							<div class="panel">

								<div class="panel-heading">
									<h6 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">EXPORTACIÓN
										</a>
									</h6>
								</div>

								<div id="collapseThree" class="panel-collapse collapse">
									<div class="panel-body">
										<div class="panel-group" id="accordion2"> <!-- 1 -->

											<div class="panel panel-default">
												<div class="panel-heading">
													<h6 class="panel-title">
														<a data-toggle="collapse" data-parent="#accordion2" href="#collapseThreeOne">PLAZOS HYUNDAI MERCHANT MARINE
														</a><i class="indicator glyphicon glyphicon-chevron-down  pull-left" style="margin-right: 10px; color: black;"></i>
													</h6>
												</div>
												<div id="collapseThreeOne" class="panel-collapse collapse">
													<div class="panel-body">
														
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>

							</div> <!-- /panel -->
						</div> <!-- /panel-group -->

						<!-- FIN acordeon / EXPORTACIÓN -->





					</div> <!-- /faq-panel -->
				</div> <!-- /container -->
			</div> <!-- /faq-page section-spacing -->



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
			
			<script>
				//..-------------------------------- TABLA EXPORTACIÓN HMM
				$(document).ready(function(){
					$("#search").keyup(function(){
					_this = this;
					// Show only matching TR, hide rest of them
					$.each($("#mytable tbody tr"), function() {
						if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
						$(this).hide();
						else
						$(this).show();
						});
            		});
				  });
				  //..-------------------------------- TABLA EXPORTACIÓN WHL
				  $(document).ready(function(){
					$("#search1").keyup(function(){
					_this = this;
					// Show only matching TR, hide rest of them
					$.each($("#mytable1 tbody tr"), function() {
						if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
						$(this).hide();
						else
						$(this).show();
						});
            		});
				  });
				  //..-------------------------------- TABLA IMPORTACION HMM/WHL
				  $(document).ready(function(){
					$("#search2").keyup(function(){
					_this = this;
					// Show only matching TR, hide rest of them
					$.each($("#mytable2 tbody tr"), function() {
						if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
						$(this).hide();
						else
						$(this).show();
						});
            		});
          		});
			</script>

			<?php require_once("footer.php");?>

			<?php require_once("js.php");?>

		</div> <!-- /fin main-page-wrapper -->
	</body>
	
</html>
