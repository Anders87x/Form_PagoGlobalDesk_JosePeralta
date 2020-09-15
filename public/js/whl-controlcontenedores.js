console.log("data");



$.post("controller/servicio.php?op=listarContenedoresWH", function(data, status){
    $("#divlistContWH").html(data);
    console.log(data);
            
});



var tabla;
function mostrarmodal(id_docuc)
{   
    $.post("controller/servicio.php?op=listar",{id_docuc : id_docuc}, function(data, status){
        $("#divdetalleContWH").html(data);
        //console.log(data);
				
	});
    $('#modalDetalle').modal('show');

}