<?php
    require_once("../config/conexion.php");
    require_once("../models/Servicio.php");
    $servicio = new Servicio();

    switch($_GET["op"]){
        case "listar":
            $datos=$servicio->get_documento_por_id($_POST["id_docuc"]);
            foreach($datos as $row){
                ?>

                    <tr>
                        <td><?php echo $row['id_docuD']?></td>
                        <td><?php echo $row['nom_docuD']?></td>
                        <?php
                        echo '<td> <div class="btn-group">
                         <a class="btn btn-info" href="http://mantenedor.globaldesk.pe/'.$row["ruta_docuD"].'" target="_blank"><i class="fa fa-file-pdf-o"></i></a>
                            </div>  
                            </td>'?>
                        
                    </tr>
                <?php
            }
        break;

        case "listarfactura":
            $datos=$servicio->get_mostrar_documentacion();
            foreach($datos as $row){
                ?>
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="single-case-block">
                            <h5 class="wow fadeInUp animated" data-wow-delay="0.3s"><?php echo $row['nom_fyp']?></h5>
                            <div class="wow fadeInUp animated" data-wow-delay="0.1s"><?php echo $row['fec_ini_fyp']?></i></div>
                            <img class="wow fadeInUp animated" data-wow-delay="0.1s" src="public/images/portfolio/cartas1.jpg" alt="">
                            <div class="hover-content">
                                <div class="text clearfix">
                                    <div class="float-left">
                                        <h5><a href="http://mantenedor.globaldesk.pe/<?php echo $row['rut_fyp']?>" target="_blank"><?php echo $row['nom_fyp']?></a></h5>
                                        <p>Ir a documento.</p>
                                    </div>
                                    <a href="http://mantenedor.globaldesk.pe/<?php echo $row['rut_fyp']?>" class="details float-right" target="_blank"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div> <!-- /.text -->
                            </div> <!-- /.hover-content -->
                        </div> <!-- /.single-case-block -->
                    </div>
                <?php
            }
        break;

        case "listarrectificacion":
            $datos=$servicio->get_mostrar_rectificación();
            foreach($datos as $row){
                ?>
                    <div class="col-xl-4 col-md-6 col-12">
						<div class="single-service">
							<div class="img-box"><img src="public/images/portfolio/recti_pdf.png" alt=""></div>
                                <div class="text">
                                    <p style="font-size: 16px;"><?php echo $row['nom_fyp']?></p>
                                    <a href="http://mantenedor.globaldesk.pe/<?php echo $row['rut_fyp']?>" target="_blank" class="read-more">IR A DOCUMENTO <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                </div> <!-- /.text -->
                            </div> <!-- /.single-service -->
                        </div> <!-- /.col- -->
                    </div>
                <?php
            }
        break;


       


        case "listarDocumentosC":
            $datos=$servicio->get_mostrar_DocumentosC_por_id();
            foreach($datos as $row){
                ?>
                    
                    <div class="col-lg-3 col-sm-6 col-12">
							<div class="team-member">
								<div class="image-box">
									<img src="<?php echo $row['ico_docuC']?>" alt="">
									<div class="overlay">
										<div class="hover-content">
                                        <button class="btn btn-primary btnCargarModal" onClick="mostrarmodal('<?php echo $row['id_docuC']?>');" >VER DOCUMENTOS</button>
										</div>
									</div>
								</div>	
									<div class="text">
											<h6><strong><?php echo $row['nom_docuC']?></strong></h6>
									</div> <!-- /.text -->					
							</div>
						</div>


                <?php
            }
        break;


        case "listarContenedorC":
            $datos=$servicio->get_mostrar_DocumentosC_contenedor();
            foreach($datos as $row){
                ?>
                    
                    <div class="col-lg-3 col-sm-6 col-12">
							<div class="team-member">
								<div class="image-box">
									<img src="<?php echo $row['ico_docuC']?>" alt="">
									<div class="overlay">
										<div class="hover-content">
                                        <button class="btn btn-primary btnCargarModal" onClick="mostrarmodal('<?php echo $row['id_docuC']?>');" >VER DOCUMENTOS</button>
										</div>
									</div>
								</div>	
									<div class="text">
											<h6><strong><?php echo $row['nom_docuC']?></strong></h6>
									</div> <!-- /.text -->					
							</div>
						</div>


                <?php
            }
        break;




        
        case "listarDocumentosWH":
            $datos=$servicio->get_mostrar_DocumentosWH();
            foreach($datos as $row){
                ?>
                    
                    <div class="col-lg-3 col-sm-6 col-12">
							<div class="team-member">
								<div class="image-box">
									<img src="<?php echo $row['ico_docuC']?>" alt="">
									<div class="overlay">
										<div class="hover-content">
                                        <button class="btn btn-primary btnCargarModal" onClick="mostrarmodal('<?php echo $row['id_docuC']?>');" >VER DOCUMENTOS</button>
										</div>
									</div>
								</div>	
									<div class="text">
											<h6><strong><?php echo $row['nom_docuC']?></strong></h6>
									</div> <!-- /.text -->					
							</div>
						</div>


                <?php
            }
        break;


        case "listarContenedoresWH":
            $datos=$servicio->get_mostrar_ContenedorWH();
            foreach($datos as $row){
                ?>
                    
                    <div class="col-lg-3 col-sm-6 col-12">
							<div class="team-member">
								<div class="image-box">
									<img src="<?php echo $row['ico_docuC']?>" alt="">
									<div class="overlay">
										<div class="hover-content">
                                        <button class="btn btn-primary btnCargarModal" onClick="mostrarmodal('<?php echo $row['id_docuC']?>');" >VER DOCUMENTOS</button>
										</div>
									</div>
								</div>	
									<div class="text">
											<h6><strong><?php echo $row['nom_docuC']?></strong></h6>
									</div> <!-- /.text -->					
							</div>
						</div>


                <?php
            }
        break;


        case "listarhmmTarifarioAgenExpo":

            $datos=$servicio->get_Listar_por_cat($_POST["cat_tarif"]);
            foreach($datos as $row){
                ?>
                    <tr>
                        <td><?php echo $row['exportacion']?></td>
                        <td><?php echo $row['porcnt']?></td>
                        <td><?php echo $row['porbl']?></td>
                        <td><?php echo $row['observaciones']?></td>
                    </tr>
                <?php
            }
        break;


        case "listarhmmitinerarioplazosHMMExpo":
            $datos=$servicio->get_mostrar_itinerarioExpo();
            foreach($datos as $row){
                ?>
                        <tr>        
                            <td><?php echo $row['Motonave']?></td>
                            <td><?php echo $row['Itinerario']?></td>
                            <td><?php echo $row['ETA']?></td>
                            <td><?php echo $row['ETD']?></td>
                            <td><?php echo $row['EnvMatrizPlazoMax']?></td>
                            <td><?php echo $row['VGMCartaTempPlazoMax']?></td>
                            <td><?php 
                            if ($row['PlazoBLSChiJap'] =="0000-00-00 00:00:00" ){
                                echo "-";
                            }else{
                                echo $row['PlazoBLSChiJap'];
                            }
                            ?></td>
                            <td><?php echo $row['PlazoBLSMex']?></td>
                            <td><?php 
                            if ($row['PlazoBLSOtrosAsia'] =="0000-00-00 00:00:00" ){
                                echo "-";
                            }else{
                                echo $row['PlazoBLSOtrosAsia'];
                            }
                            ?></td>
                            <td><?php echo $row['PlazoCanBookixContenedor']?></td>
                        </tr>
                <?php
            }
        break;

        case "listarhmmitinerarioplazosHMMIMpo":
            $datos=$servicio->get_ListaritinerarioplazosImpo();
            foreach($datos as $row){
                ?>
                    <tr>
                        <th><?php echo $row['Motonave']?></th>
                        <th><?php echo $row['terminal']?></th>
                        <th><?php echo $row['linea']?></th>
                        <th><?php echo $row['Itinerario']?></th>
                        <th><?php echo $row['transporte']?></th>
                        <th><?php echo $row['agente']?></th>
                        <th><?php echo $row['manifiesto']?></th>
                        <th><?php echo $row['ETA']?></th>
                        <th><?php echo $row['PlazoDirecCancVBSada']?></th>
                    </tr>
                <?php

            } 
        break;

        case "listarWHitinerarioplazosExpo":
            $datos=$servicio->get_mostrar_itinerarioWHExpo();
            foreach($datos as $row){
                ?>
                        <tr>        
                            <td><?php echo $row['Motonave']?></td>
                            <td><?php echo $row['Itinerario']?></td>
                            <td><?php echo $row['ETA']?></td>
                            <td><?php echo $row['ETD']?></td>
                            <td><?php echo $row['EnvMatrizPlazoMax']?></td>
                            <td><?php echo $row['VGMCartaTempPlazoMax']?></td>
                            <!--<td><?php //echo $row['PlazoBLSMex']?></td>
                            <td><?php //echo $row['PlazoBLSOtrosAsia']?></td>-->
                            <td><?php echo $row['PlazoBLSChiJap']?></td>
                            <td><?php echo $row['PlazoBLSMex']?></td>
                        </tr>
                <?php
            }
        break;
        
        case "listarWHitinerarioplazosImpo":
            $datos=$servicio->get_mostrar_itinerarioWHImpo();
            foreach($datos as $row){
                ?>
                    <tr>
                        <th><?php echo $row['Motonave']?></th>
                        <th><?php echo $row['terminal']?></th>
                        <th><?php echo $row['linea']?></th>
                        <th><?php echo $row['Itinerario']?></th>
                        <th><?php echo $row['transporte']?></th>
                        <th><?php echo $row['agente']?></th>
                        <th><?php echo $row['manifiesto']?></th>
                        <th><?php echo $row['ETA']?></th>
                        <th><?php echo $row['PlazoDirecCancVBSada']?></th>
                    </tr>
                <?php

            } 
        break;

        case "listarcomunicadosvencidos":
            $datos=$servicio->get_listar_comunicados_venc();
            //var_dump($datos);
            foreach($datos as $row){
                ?>
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="single-case-block">
                        <h5 class="wow fadeInUp animated" data-wow-delay="0.3s"><?php echo $row['nom_com']?></h5>
                        <div class="wow fadeInUp animated" data-wow-delay="0.1s"><i class="fa fa-calendar-o" aria-hidden="true"><?php echo $row['fec_ini']?></i></div>
                        <img class="wow fadeInUp animated" data-wow-delay="0.1s" src="public/images/portfolio/cartas1.jpg" alt="">
                        <div class="hover-content">
                            <div class="text clearfix">
                                <div class="float-left">
                                    <h5><a href="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_com']?>" target="_blank"><?php echo $row['nom_com']?></a></h5>
                                    <p>Ir a comunicado.</p>
                                </div>
                                <a href="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_com']?>" class="details float-right" target="_blank"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div> <!-- /.text -->
                        </div> <!-- /.hover-content -->
                    </div> <!-- /.single-case-block -->
                </div> <!-- /.col- -->
                <?php
            } 
        break;


        case 'listarcomunicadosvencidos2':
            $datos=$servicio->get_listar_comunicados_venc();
            foreach($datos as $row){
                ?>
                        <tr>        
                            <td><?php echo $row['fec_ini']?></td>
                            <td><?php echo $row['nom_com']?></td>
                            <td>
                            <a class="btn btn-info" href="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_com']?>" target="_blank"><i class="fa fa-file-pdf-o"></i></a>
                            </td>
                        </tr>                    
                    
            <?php
            }
            break;

        case "listarcomunicadosActivos":
                $datos=$servicio->get_listar_comunicados_activos();
                foreach($datos as $row){
                    ?>
                            <tr>        
                                <td>
                                <a href="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_com']?>" target="_blank">
                                <u><?php echo $row['fec_ini']?><u></td>
                                <td><?php echo $row['nom_com']?></td>
                                <!--
                                <td>
                                <a class="btn btn-info" href="<?php echo $row['ruta_com']?>" target="_blank"><i class="fa fa-file-pdf-o"></i></a>
                                </td>
                                -->
                            </tr>                    
                <?php
                }
        break;

        
            
        case "listImagenSobrestadia":
            $datos=$servicio->get_img_por_cat($_POST["cat_img"]);
            foreach($datos as $row){
                ?>
                    <br>
                    <p style="text-align:center;"> <strong><?php echo $row['nom_img']?></strong> </p>
                    <!-- ===================IMAGEN whl - SOBRESTADÍA IMPORTACIÓN========================== -->																			
                    <div>
                        <img src="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_img']?>"  style="margin: auto; width:70%;">
                    </div>
                <?php
            }
        break;


        case "listarWHTarifaExtraBLImpoExpo":

            $datos=$servicio->get_Listar_por_cat($_POST["cat_tarif"]);
            foreach($datos as $row){
                ?>
                    <tr>
                        <td><?php echo $row['exportacion']?></td>
                        <td><?php echo $row['porbl']?></td>
                        <td><?php echo $row['observaciones']?></td>
                    </tr>
                <?php
            }
        break;

        case "listarWHTarifaGastosExtra":

            $datos=$servicio->get_Listar_por_cat($_POST["cat_tarif"]);
            foreach($datos as $row){
                ?>
                    <tr>
                        <td><?php echo $row['exportacion']?></td>
                        <td><?php echo $row['monto']?></td>
                        <td><?php echo $row['observaciones']?></td>
                    </tr>
                <?php
            }
        break;

        
    }
?>