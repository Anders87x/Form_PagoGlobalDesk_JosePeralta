console.log("data");



$.post("controller/servicio.php?op=listarhmmitinerarioplazosHMMExpo", {id_inti : 1},function(data, status){
    $("#divlistitinerarioHMMExpo").html(data);
    console.log(data);
            
});

$.post("controller/servicio.php?op=listarhmmitinerarioplazosHMMIMpo", {id_inti : 2},function(data, status){
    $("#divlistIntiHMMImpo").html(data);
    console.log(data);
            
});

