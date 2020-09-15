console.log("data");



$.post("controller/servicio.php?op=listarWHitinerarioplazosExpo", {id_inti : 1},function(data, status){
    $("#divlistIntiWHExpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarWHitinerarioplazosImpo", {id_inti : 2},function(data, status){
    $("#divlistIntiWHImpo").html(data);
    console.log(data);
            
});

