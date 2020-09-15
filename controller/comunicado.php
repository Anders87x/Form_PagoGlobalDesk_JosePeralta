<?php
    require_once("../config/conexion.php");
    require_once("../models/Comunicado.php");
    $comunicado = new Comunicado();

    switch($_GET["op"]){

        case "comunicado_lista":
            $datos=$comunicado->get_comunicado();
            foreach ($datos as $row) {
                ?>
                    <div class="modal fade" id="myModal<?php echo $row['id_com']; ?>" role="dialog">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>					
                                </div>
                                <div class="modal-body">
                                    <div><img src="http://mantenedor.globaldesk.pe/<?php echo $row['ruta_com']; ?>" alt="" style="margin: auto;"></div>					
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php
            }
        break;
        
    }
?>