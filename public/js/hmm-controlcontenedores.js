console.log("data");



$.post("controller/servicio.php?op=listarContenedorC", function(data, status){
    $("#divlistConteC").html(data);
    console.log(data);
            
});



var tabla;
function mostrarmodal(id_docuc)
{   
    $.post("controller/servicio.php?op=listar",{id_docuc : id_docuc}, function(data, status){
        $("#divdetalleConte").html(data);
        //console.log(data);
				
	});
    $('#modalDetalle').modal('show');

}