console.log("data");



$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 9},function(data, status){
    $("#divlistIntTariAgenfexpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 10},function(data, status){
    $("#divlistIntTarifAgenimpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarWHTarifaExtraBLImpoExpo", {cat_tarif : 11},function(data, status){
    $("#divlistarWHTarifaExtraBLImpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarWHTarifaExtraBLImpoExpo", {cat_tarif : 12},function(data, status){
    $("#divlistarWHTarifaExtraBLExpo").html(data);
    console.log(data);
            
});


$.post("controller/servicio.php?op=listarWHTarifaGastosExtra", {cat_tarif : 13},function(data, status){
    $("#divlistarWHTarifaGastosExtraGene").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarWHTarifaGastosExtra", {cat_tarif : 14},function(data, status){
    $("#divlistarWHTarifaGastosExtraWH").html(data);
    console.log(data);
            
});




/* carga de Imagenes en Sobrestadia WH*/ 
$.post("controller/servicio.php?op=listImagenSobrestadia", {cat_img : 2},function(data, status){
    $("#divlistImagenSobrestadiaWH").html(data);
    console.log(data);
            
});

