<!DOCTYPE html>
<html lang="en">
	<head>
		<?php require_once("head.php");?>

		<title>Inicio | Globaldesk</title>

		<!-- LINK Y SCRIPT LEAFLET  INICIO-->
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />
		<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
		<!-- LINK Y SCRIPT LEAFLET  FINAL-->



		
   		
		   <style>
					video {
					width: 100%;
					height: auto;
					}

					.modalGlobal {
						width: 100%;
						height: 100vh;
						background: rgba(0, 0, 0, 0.8);

						position: absolute;
						top: 0;
						left: 0;

						display: flex;
						align-items: center;
  						justify-content: center;

						animation: modalGlobal 1s 0.1s forwards;
						visibility: hidden;
						opacity: 0;
					}

					.contenido {
						margin: auto;
						width: 30%;
						height: 90%;
						background: white;
						align-item
					}


					#cerrarx {
						display: none;
					}

					#cerrarx + label {
						position: fixed;
						color: white;
						font-size: 25px;
						z-index: 50;
						background: darkred;
						height: 40px;
						width: 40px;
						line-height: 40px;
						border-radius: 50%;
						right: 10px;
						cursor: pointer;

						animation: modalGlobal 2s 3s forwards;
						visibility: hidden;
						opacity: 0;
					}

					#cerrarx:checked + label, #cerrarx:checked ~ .modalGlobal{
						display: none;
					}

					@keyframes modalGlobal{
						100% {
							visibility: visible;
							opacity: 1;
						}
					}

			</style>


	</head>

			
	<body>
				<!--=====MODAL COMUNICADO======-->
					<input type="checkbox2" id="cerrarx">
					<label for="cerrarx2">X</label>
					<div class="modalGlobaldal2">
						<div class="contenido2">
						<img style="height:100%;" src="public/images/comunicado.jpg" alt="Comunicado">
						</div>
					</div>
				<!--=====FIN MODAL COMUNICADO======-->

		<div class="main-page-wrapper">
			<div id="loader-wrapper">
				<div id="loader"></div>
			</div>

			<?php require_once("header.php");?>

			<!--=====BANNER======-->
			<div id="theme-main-banner" class="banner-one">
				<div data-src="public/images/home/slide-1.jpg">
					<div class="camera_caption">
						<div class="container">
							<p class="wow fadeInUp animated">Somos TRANSTOTAL, un socio en quien confiar.</p>
							<h1 class="wow fadeInUp animated" data-wow-delay="0.2s">Integridad, Excelencia y <br>Entusiasmo.</h1>
							<a href="contactenos.php" class="theme-button-one wow fadeInUp animated" data-wow-delay="0.39s">Contáctenos</a>
						</div>
					</div>
				</div>
				<div data-src="public/images/home/slide-2.jpg">
					<div class="camera_caption">
						<div class="container">
							<p class="wow fadeInUp animated">Somos TRANSTOTAL, un socio en quien confiar.</p>
							<h1 class="wow fadeInUp animated" data-wow-delay="0.2s">Integridad, <br>Excelencia y <br>Entusiasmo.</h1>
							<a href="contactenos.php" class="theme-button-one wow fadeInUp animated" data-wow-delay="0.39s">Contáctenos</a>
						</div>
					</div>
				</div>
				<div data-src="public/images/home/slide-3.jpg">
					<div class="camera_caption">
						<div class="container">
							<p class="wow fadeInUp animated">Somos TRANSTOTAL, un socio en quien confiar.</p>
							<h1 class="wow fadeInUp animated" data-wow-delay="0.2s">Integridad, Excelencia y Entusiasmo.</h1>
							<a href="contactenos.php" class="theme-button-one wow fadeInUp animated" data-wow-delay="0.39s">Contáctenos</a>
						</div>
					</div>
				</div>
			</div>
			<!--=====FIN BANNER======-->

			<!--=====CARRUSEL======-->
			<div class="top-feature section-spacing">
				<div class="top-features-slide">

				</div> <!-- /.top-features-slide -->
			</div>
			<!--=====FIN CARRUSEL======-->

			<!--=====NUESTRA COMPAÑIA======-->
			<div class="about-compnay section-spacing">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-12"><img src="public/images/home/11.jpg" alt=""></div>
						<div class="col-lg-6 col-12">
							<div class="text">
								<div class="theme-title-one">
									<h2>Sobre nuestra compañía</h2>
									<p>Globaldesk es un negocio perteneciente a Transtotal, nuestro fin es dedicarnos a optimizar procesos y procedimientos en lo referido a la atención de clientes en ventanillas y soporte de información a través de contact centers.</p>
									<p>Por otro lado, nos impulsa desarrollar y mantener las relaciones con nuestros clientes en orden de satisfacer sus necesidades de índole documentario, informativo, consulta  entre otros.</p>
								</div> <!-- /.theme-title-one -->
								<ul class="mission-goal clearfix">
									<li>
										<i class="icon flaticon-star"></i>
										<h4>Visión</h4>
									</li>
									<li>
										<i class="icon flaticon-medal"></i>
										<h4>Mision</h4>
									</li>
								  <li>
										<i class="icon flaticon-target"></i>
										<h4>Metas</h4>
									</li>
								</ul> <!-- /.mission-goal -->
							</div> <!-- /.text -->
						</div> <!-- /.col- -->
					</div> <!-- /.row -->
				</div> <!-- /.container -->
			</div>
			<!--=====FIN NUESTRA COMPAÑIA======-->


			<!--=====INICIO VIDEO TAM======-->
			<div class="section-spacing">
				<video autoplay muted loop width="10">
						<source src="public/videos/TRANSTOTAL_12segundos_2.mp4" type="video/mp4">
						Your browser does not support HTML5 video.
					</video>
			</div>
			<!--=====FIN VIDEO TAM======-->
			

			<!--=====OTROS SERVICIO======-->
			<div class="service-style-one section-spacing">
				<div class="container">
					<div class="theme-title-one">
						<h2>Servicios</h2>
						<p>Brindamos los siguientes servicios: </p>
					</div> <!-- /.theme-title-one -->
					<div class="wrapper">
						<div class="row">
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/3.jpg"></div>
									<div class="text">
										<h5><a href="servicios.php">Consultas sobre instrucciones de emisión de B/Ls.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/4.jpg"></div>
									<div class="text">
										<h5><a href="servicios.php">Consultas por importes de fletes y servicios locales.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más.<i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/5.jpg" alt=""></div>
									<div class="text">
										<h5><a href="servicios.php">Consulta y liquidación por sobreestadía de contenedor.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/6.jpg" alt=""></div>
									<div class="text">
										<h5><a href="servicios.php">Emisión de memo de devolución de contenedor.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/7.jpg" alt=""></div>
									<div class="text">
										<h5><a href="servicios.php">Solicitud de rectificación de manifiestos de aduana.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
							<div class="col-xl-4 col-md-6 col-12">
								<div class="single-service">
									<div class="img-box"><img src="public/images/home/8.jpg" alt=""></div>
									<div class="text">
										<h5><a href="servicios.php">Pago de Fletes marítimos, sobreestadía y servicios locales.</a></h5>
										<p></p>
										<a href="servicios.php" class="read-more"> Leer más <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</div> <!-- /.text -->
								</div> <!-- /.single-service -->
							</div> <!-- /.col- -->
						</div> <!-- /.row -->
					</div> <!-- /.wrapper -->
					<div class="contact-text">
						<h4>También puede enviarnos un correo electrónico y nos pondremos en contacto en breve, o llámenos.</h4>
						<h5><a href="mailto:info@globaldesk.pe">info@globaldesk.pe</a>  (o)  <a href="tel:012099770">(+51 1) 209 9770</a></h5>
					</div>
				</div> <!-- /.container -->
			</div>
			<!--=====FIN OTROS SERVICIO======-->

			<!--=====SERVICIO======-->
			<div class="feature-banner section-spacing">
				<div class="opacity">					
					<div class="container">					
						<h2>Brindamos servicios de alta calidad y soluciones innovadoras para el crecimiento confiable</h2>
						<a href="servicios.php" class="theme-button-one">Servicios</a>
					</div> <!-- /.container -->
				</div> <!-- /.opacity -->
			</div>
			<!--=====FIN SERVICIO======-->

			<!--=====EXITO======-->
			<div class="theme-counter section-spacing">
				<div class="container">
					<div class="bg">
						<h6>ÉXITO DE LA COMPAÑÍA</h6>
						<h2>Algunos datos sobre nuestro negocio:</h2>

						<div class="cunter-wrapper">
							<div class="row">
								<div class="col-md-3 col-6">
									<div class="single-counter-box">
				        				<div class="number"><span class="timer" data-from="0" data-to="5" data-speed="1200" data-refresh-interval="5">0</span>+</div>
				        				<p>Años de excelencia</p>
				        			</div> <!-- /.single-counter-box -->
								</div>  <!-- /.col- -->
								<div class="col-md-3 col-6">
									<div class="single-counter-box">
				        				<div class="number"><span class="timer" data-from="0" data-to="100" data-speed="1200" data-refresh-interval="5">0</span>%</div>
				        				<p>Satisfacción del cliente</p>
				        			</div> <!-- /.single-counter-box -->
								</div>  <!-- /.col- -->
								<div class="col-md-3 col-6">
									<div class="single-counter-box">
				        				<div class="number"><span class="timer" data-from="0" data-to="53" data-speed="1200" data-refresh-interval="5">0</span>k</div>
				        				<p>Casos Completados</p>
				        			</div> <!-- /.single-counter-box -->
								</div>  <!-- /.col- -->
								<div class="col-md-3 col-6">
									<div class="single-counter-box">
				        				<div class="number"><span class="timer" data-from="0" data-to="24" data-speed="1200" data-refresh-interval="5">0</span></div>
				        				<p>Consultas</p>
				        			</div> <!-- /.single-counter-box -->
								</div>  <!-- /.col- -->
							</div> <!-- /.row -->
						</div> <!-- /.cunter-wrapper -->
					</div> <!-- /.bg -->
				</div> <!-- /.container -->
			</div>
			<!--=====FIN EXITO======-->

			<!--=====CLIENTE======-->
			<div class="partner-section">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-4 col-12">
							<h6>Nuestros <br>Clientes:</h6>
						</div>
						<div class="col-md-9 col-sm-8 col-12">
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

			<!-- LEAFLET Map -->
			<div class="google-map-two section-spacing"><div class="map-canvas" id="map"></div></div>
			<!--=====FIN MAPA======-->



			<?php require_once("footer.php");?>

			<button class="scroll-top tran3s">
				<i class="fa fa-angle-up" aria-hidden="true"></i>
			</button>

			<?php require_once("js.php");?>

			<script src="public/js/map-script.js"></script>
			

		</div>
	</body>
</html>
