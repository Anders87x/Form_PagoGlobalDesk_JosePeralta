console.log("data");



$.post("controller/servicio.php?op=listarDocumentosC", function(data, status){
    $("#divlistDocuC").html(data);
    console.log(data);
            
});



var tabla;
function mostrarmodal(id_docuc)
{   
    $.post("controller/servicio.php?op=listar",{id_docuc : id_docuc}, function(data, status){
        $("#divdetalle").html(data);
        //console.log(data);
				
	});
    $('#modalDetalle').modal('show');

}