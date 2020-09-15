console.log("data");

/*
$.post("controller/servicio.php?op=listarcomunicadosvencidos", function(data, status){
    $("#divlistComuVenc").html(data);
    console.log(data);
            
});
*/

// inicio actualizacion lpo 26/04/20
$.post("controller/servicio.php?op=listarcomunicadosvencidos2", function(data, status){
    $("#divlistComuVenc").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarcomunicadosActivos", function(data, status){
    $("#divlistComuActivos").html(data);
    console.log(data);
            
});
// fin actualizacion lpo 26/04/20


