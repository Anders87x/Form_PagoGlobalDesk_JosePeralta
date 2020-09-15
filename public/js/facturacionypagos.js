console.log("data");



$.post("controller/servicio.php?op=listarfactura", function(data, status){
    $("#divfactpago").html(data);
    console.log(data);
            
});
