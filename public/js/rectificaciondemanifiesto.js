console.log("data");



$.post("controller/servicio.php?op=listarrectificacion", function(data, status){
    $("#divrectificamani").html(data);
    console.log(data);
            
});
