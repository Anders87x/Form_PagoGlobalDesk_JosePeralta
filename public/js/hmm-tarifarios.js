console.log("data");



$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 3},function(data, status){
    $("#divlistIntTariAgenfexpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 4},function(data, status){
    $("#divlistIntTarifAgenimpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 5},function(data, status){
    $("#divlistIntTarifExpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarhmmTarifarioAgenExpo", {cat_tarif : 6},function(data, status){
    $("#divlistIntTarifImpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listImagenSobrestadia", {cat_img : 1},function(data, status){
    $("#divlistImagenSobrestadiaHMM").html(data);
    console.log(data);
            
});


