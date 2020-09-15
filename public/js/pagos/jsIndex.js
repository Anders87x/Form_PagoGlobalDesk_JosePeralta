void ((pWin, pDoc) =>
{
    const $$ = {
        txtNroBl: pDoc.getElementById("txtNroBl"),
        ddlLinea: pDoc.getElementById("ddlLinea"),
        ddlServicio: pDoc.getElementById("ddlServicio"),
        btnBuscar: pDoc.getElementById("btnBuscar"),
        txtNave: pDoc.getElementById("txtNave"),
        txtViaje: pDoc.getElementById("txtViaje"),
        txtCodeBank: pDoc.getElementById("txtCodeBank"),
        txtTransfBancaria: pDoc.getElementById("txtTransfBancaria"),
        lnkTranfBancaria: pDoc.getElementById("lnkTranfBancaria"),
        inpFileTranfBancaria: pDoc.getElementById("inpFileTranfBancaria"),
        ddlMoneda: pDoc.getElementById("ddlMoneda"),
        txtImporte: pDoc.getElementById("txtImporte"),
        txtMandato: pDoc.getElementById("txtMandato"),
        lnkMandato: pDoc.getElementById("lnkMandato"),
        inpFileMandato: pDoc.getElementById("inpFileMandato"),
        txtFacturacion: pDoc.getElementById("txtFacturacion"),
        lnkFacturacion: pDoc.getElementById("lnkFacturacion"),
        inpFileFacturacion: pDoc.getElementById("inpFileFacturacion"),
        txtNroRuc: pDoc.getElementById("txtNroRuc"),
        txtRazonSocial: pDoc.getElementById("txtRazonSocial"),
        txtDireccion: pDoc.getElementById("txtDireccion"),
        txtEmailPagador: pDoc.getElementById("txtEmailPagador"),
        txtEmailRespuesta: pDoc.getElementById("txtEmailRespuesta"),
        btnGuardar: pDoc.getElementById("btnGuardar"),
        btnNuevo: pDoc.getElementById("btnNuevo"),
        imgTranfBancaria: pDoc.getElementById("imgTranfBancaria"),
        imgMandato: pDoc.getElementById("imgMandato"),
        imgFacturacion: pDoc.getElementById("imgFacturacion"),
        imgCaptcha: pDoc.getElementById("imgCaptcha"),
        txtCodeCaptcha: pDoc.getElementById("txtCodeCaptcha"),
        lnkNewCaptcha: pDoc.getElementById("lnkNewCaptcha"),
        spnTranfBancaria: pDoc.getElementById("spnTranfBancaria"),
        spnMandato: pDoc.getElementById("spnMandato"),
        spnFacturacion: pDoc.getElementById("spnFacturacion"),
        divEmailRespuesta: pDoc.getElementById("divEmailRespuesta"),
        divEmailPagador: pDoc.getElementById("divEmailPagador"),
        urlBase: globales.urlBase,
        httpClient: new Ajax(),
        utilJs: new Funciones(pWin),
        maestros: StaticMasters,
        urlImage: null,
        txtFechaDeposito: pDoc.getElementById("txtFechaDeposito"),
        ddlTipoDocumento: pDoc.getElementById("ddlTipoDocumento"),
        txtShipperRUC: pDoc.getElementById("txtShipperRUC"),
        txtRazonSocialShipper: pDoc.getElementById("txtRazonSocialShipper"),
        txtNroRucTerceroPagador: pDoc.getElementById("txtNroRucTerceroPagador"),
        txtRazonSocialTerceroPagador: pDoc.getElementById("txtRazonSocialTerceroPagador"),
        chkDeshabilitar: pDoc.getElementById("chkDeshabilitar"),
    
    }
    function valiadarClick(pIdBtn)
    {
        const btnLastClick = pWin.sessionStorage.getItem(pIdBtn);
        if (btnLastClick === null)
        {
            pWin.sessionStorage.setItem(pIdBtn, (new Date().getTime()));
            return true;
        }
        else
        {
            const lastClick = Number(btnLastClick);
            const currentTime = (new Date().getTime());
            const difSegundos = Math.round((currentTime - lastClick) / 1000);

            if (difSegundos > $$.maestros.tiempoEntreClicks)
            {
                pWin.sessionStorage.setItem(pIdBtn, (new Date().getTime()));
                return true;
            }
            else return false;
        }
    }
    function errHttpClient(e)
    {
        Swal.fire({icon: 'error', title: 'Oops...', text: 'Something went wrong!'});
        console.log(e.responseText);
    }
    function cargarCombos()
    {
        //debugger;
        $$.utilJs.cargarComboList(pDoc, $$.ddlTipoDocumento, $$.maestros.tipoDocumento, "nom", "cod");
        $$.utilJs.cargarCombo(pDoc, $$.ddlMoneda, $$.maestros.monedas, "nom", "cod");
        $$.utilJs.cargarCombo(pDoc, $$.ddlLinea, $$.maestros.lineas, "nom", "cod");
        $$.utilJs.cargarCombo(pDoc, $$.ddlServicio, $$.maestros.conceptos, "nom", "cod");
       // $$.utilJs.cargarCombo(pDoc, $$.ddlTipoDocumento, $$.maestros.tipoDocumento, "nom", "cod");
    }
    function disableInput() {

        $$.txtRazonSocial.disabled = true;
        $$.txtDireccion.disabled = true
        $$.txtShipperRUC.disabled = true;
        $$.txtRazonSocialShipper.disabled = true;
        $$.txtRazonSocialTerceroPagador.disabled = true;
        $$.txtNroRucTerceroPagador.disabled = true
        
    }
    function limpiarCajas()
    {
        $$.txtNroBl.value = "";
        $$.ddlLinea.value = "";
        $$.ddlServicio.value = "";
        $$.txtNave.value = "";
        $$.txtViaje.value = "";
        $$.txtCodeBank.value = "";
        $$.txtTransfBancaria.value = "";
        $$.inpFileTranfBancaria.value = "";
        $$.ddlMoneda.value = "";
        $$.txtImporte.value = "";
        $$.txtMandato.value = "";
        $$.inpFileMandato.value = "";
        $$.txtFacturacion.value = "";
        $$.inpFileFacturacion.value = "";
        $$.txtNroRuc.value = "";
        $$.txtRazonSocial.value = "";
        $$.txtDireccion.value = "";
        $$.txtEmailPagador.value = "";
        $$.txtEmailRespuesta.value = "";
        $$.txtCodeCaptcha.value = "";
        $$.spnTranfBancaria.textContent = "Seleccionar archivo";
        $$.spnMandato.textContent = "Seleccionar archivo";
        $$.spnFacturacion.textContent = "Seleccionar archivo";
        $$.lnkTranfBancaria.classList.add("addClassBefore");
        $$.lnkMandato.classList.add("addClassBefore");
        $$.lnkFacturacion.classList.add("addClassBefore");
        $$.spnTranfBancaria.classList.add("spnFile");
        $$.spnMandato.classList.add("spnFile");
        $$.spnFacturacion.classList.add("spnFile");     
        removeClassArchivo([$$.spnTranfBancaria, $$.spnMandato, $$.spnFacturacion]);
        document.getElementById("spanddl").innerHTML = '--Seleccione--';
        $$.ddlTipoDocumento.classList.remove("validaCaja");
        $$.ddlServicio.classList.remove("validaCaja");
        $$.txtNroBl.classList.remove("validaCaja");
        $$.txtShipperRUC.value = "";
        $$.txtRazonSocialShipper.value = "";    
        $$.txtNroRucTerceroPagador.value = "";   
        $$.txtRazonSocialTerceroPagador.value = "";   
                            //$$.txtDireccion.value = parts[2];
    }
    function removeClassArchivo(pCtls) {
        for (let ctl of pCtls) ctl.classList.toggle("addClassBefore", false);
        for (let ctl of pCtls) ctl.classList.toggle("addClass", false);
    }
    function removeClassArch(pCtls) {
        for (let ctl of pCtls) ctl.classList.toggle("addClassBefore", false);
        
    }
    function limpiar()
    {
        limpiarCajas();
        setImages();
    }
    function pintarDataConsultarBl(pRow, pServicio)
    {
       // debugger;
        limpiarCajas();
        $$.txtNroBl.value = pRow.var_blNum;
        $$.ddlLinea.value = pRow.int_rowIdLinea;
        $$.txtNave.value = pRow.var_naveBl;
        $$.txtViaje.value = pRow.var_viajeBl;
        $$.txtShipperRUC.value = pRow.var_nroRuc;
        $$.txtRazonSocialShipper.value = pRow.var_razonSocial;
      //  $$.txtEmailRespuesta.value = pRow.emailRpta;
        $$.ddlServicio.value = pServicio;
        $$.txtCodeBank.value = pRow.var_codeBank;
        if ($$.ddlServicio.value === "1") {
            $$.ddlMoneda.value = "2";
            $$.ddlMoneda.selected = true
            $$.ddlMoneda.disabled = true;
        }
        else {
            $$.ddlMoneda.value = "";
            $$.ddlMoneda.disabled = false;
        }

     //   $$.txtNroRuc.value = pRow.nroRuc;
       // $$.txtRazonSocial.value = pRow.razonSocial;
      //  $$.txtDireccion.value = pRow.direccionFiscal;
    }
    function setClassValidate(pCtls)
    {
        for (let ctl of pCtls)
        {
            ctl.classList.toggle("validar", false);
            if (ctl.value.trim() === "") ctl.classList.add("validar");
        }
    }
    function removeClassValidate(pCtls)
    {
        for (let ctl of pCtls) ctl.classList.toggle("validar", false);
    }
    function getCsv()
    {
       //debugger;
        const fila = [];
        let txtImporteDecimal = $$.txtImporte.value;
        //let spanValue = document.getElementById("spanddl").value
        let fechaDeposito = new Date($$.txtFechaDeposito.value) 
        var fechaDepositoFormat = fechaDeposito.getDate() + '/' + (fechaDeposito.getMonth() + 1) + '/' + fechaDeposito.getFullYear()
        //(date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
        fila.push(["blNum", $$.txtNroBl.value]);
        fila.push(["rowIdLinea", $$.ddlLinea.value]);
        fila.push(["rowIdServicio", $$.ddlServicio.value]);
        fila.push(["naveBl", $$.txtNave.value]);
        fila.push(["viajeBl", $$.txtViaje.value]);
        fila.push(["codeBank", $$.txtCodeBank.value]);
        fila.push(["transfBancaria", $$.txtTransfBancaria.value]);
        fila.push(["rutaArchivoTransf", "@rootTranf"]);
        fila.push(["idMoneda", $$.ddlMoneda.value]);
        fila.push(["importeCancelar", Number(txtImporteDecimal.replace(/[^0-9.-]+/g, ""))]);
        fila.push(["mandatoElectronico", $$.txtMandato.value]);
        fila.push(["rutaArchivoMandato", "@rootMan"]);
        fila.push(["facturacionTerceros", $$.txtFacturacion.value]);
        fila.push(["rutaArchivoFacturacion", "@rootFact"]);
        fila.push(["nroRuc", $$.txtNroRuc.value]);
        fila.push(["razonSocial", $$.txtRazonSocial.value]);
        fila.push(["direccion", $$.txtDireccion.value]);
        fila.push(["emailPagador", $$.txtEmailPagador.value]);
        fila.push(["emailRpta", $$.txtEmailRespuesta.value]);
        fila.push(["estado", "1"]);
        fila.push(["date_FechaDeposito", fechaDepositoFormat]);
        fila.push(["var_txtShipperRUC", $$.txtShipperRUC.value]);
        fila.push(["var_txtRazonSocialShipper", $$.txtRazonSocialShipper.value]);
        fila.push(["int_TipoDocumento", document.getElementById("spanddl").value]);
        fila.push(["var_txtNroRucTerceroPagador", $$.txtNroRucTerceroPagador.value]);
        fila.push(["var_txtRazonSocialTerceroPagador", $$.txtRazonSocialTerceroPagador.value]);
         return $$.utilJs.crearCadenaOnlyRow(fila);
    }
    function validarCaptcha()
    {
        return new Promise((resolve, reject) =>
        {
            const url = $$.urlBase + `captcha/validate/${$$.txtCodeCaptcha.value}`;
            $$.httpClient.request(
            {
                verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                success: rpta =>
                {
                    resolve(Number(rpta) === 1 ? true : false);
                },
                error: errHttpClient
            });
        });
    }
    function registraPagoBl(e)
    {
        //debugger;
        const valClicks = valiadarClick($$.btnGuardar.id);
       // validarStyleBoostrap([document.getElementById("spanddl")], e);
        if (!valClicks)
        {
            Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
            return;
        }
        e.preventDefault();
        Swal.fire({
            title: "Confirme por favor", text: "¿Está seguro de registrar el BL?", icon: "question",
            showCancelButton: true, cancelButtonColor: "#d33", cancelButtonText: "NO",
            confirmButtonColor: "#3085d6", confirmButtonText: "SI"
        }).then((result) =>
        {
            if (result.value)
            {
                //debugger;
                const inputs =
                [$$.txtNroBl, $$.ddlLinea, $$.ddlServicio, $$.txtNave, $$.txtViaje, $$.txtCodeBank,
                $$.txtTransfBancaria, $$.ddlMoneda, $$.txtImporte, $$.txtMandato, $$.txtFacturacion,
                $$.txtNroRuc, $$.txtRazonSocial, $$.txtDireccion, $$.txtEmailPagador, $$.txtEmailRespuesta,
                        $$.txtCodeCaptcha, $$.txtFechaDeposito, $$.txtShipperRUC, $$.txtRazonSocialShipper];

                const fileTransf = $$.inpFileTranfBancaria.files[0];
                const fileMandato = $$.inpFileMandato.files[0];
                const fileFact = $$.inpFileFacturacion.files.length > 0 ? $$.inpFileFacturacion.files[0] : null;

                let msgError = "";
                if (fileTransf === undefined) msgError = " Adjunto de Transferencia Bancaria es oblogatorio<br/>";
                if (fileMandato === undefined) msgError = "Adjunto de Mandato es oblogatorio<br/>";
               // if (fileFact === undefined) msgError = "N° B/L es obligatorio<br/>";
              
                if ($$.ddlTipoDocumento.firstChild.textContent === "--Seleccione--") msgError = "Seleccione el Tipo Documento<br/>";
                if ($$.txtNroBl.value.trim() === "") msgError = "N° B/L es obligatorio<br/>";
                if ($$.ddlLinea.value.trim() === "") msgError += "Línea es obligatorio<br/>";
                if ($$.ddlServicio.value.trim() === "") msgError += "Servicio pagar es obligatorio<br/>";
                if ($$.txtNave.value.trim() === "") msgError += "Nave es obligatorio<br/>";
                if ($$.txtViaje.value.trim() === "") msgError += "Viaje es obligatorio<br/>";
             //   if ($$.txtCodeBank.value.trim() === "") msgError += "Codebank es obligatorio<br/>";
                //if ($$.txtTransfBancaria.value.trim() === "") msgError += "Transferencia es obligatorio<br/>";
                if ($$.inpFileTranfBancaria.value.trim() === "") msgError += "PDF transferencia es obligatorio<br/>";
                if ($$.ddlMoneda.value.trim() === "") msgError += "Moneda es obligatorio<br/>";
                if ($$.txtImporte.value.trim() === "") msgError += "Importe es obligatorio<br/>";
                //if ($$.txtMandato.value.trim() === "") msgError += "Mandato es obligatorio<br/>";
                if ($$.inpFileMandato.value.trim() === "") msgError += "PDF mandato es obligatorio<br/>";
                //if ($$.txtFacturacion.value.trim() === "") msgError += "Facturación tercero es obligatorio<br/>";
                //if ($$.inpFileFacturacion.value.trim() === "") msgError += "PDF Facturación es obligatorio<br/>";
                if ($$.txtNroRuc.value.trim() === "") msgError += "Nro RUC es obligatorio<br/>";
                if ($$.txtRazonSocial.value.trim() === "") msgError += "Razón social es obligatorio<br/>";
                if ($$.txtDireccion.value.trim() === "") msgError += "Dirección es obligatorio<br/>";
                if ($$.txtEmailPagador.value.trim() === "") msgError += "Email pagador es obligatorio<br/>";
                if ($$.txtEmailRespuesta.value.trim() === "") msgError += "Email respuesta es obligatorio<br/>";
                if ($$.txtCodeCaptcha.value.trim() === "") msgError += "Código captcha es obligatorio<br/>";
                if ($$.chkDeshabilitar.checked== true & ($$.txtNroRucTerceroPagador.value.trim() === "" || $$.txtRazonSocialTerceroPagador.value.trim() === "")) msgError += "Por favor complete los datos del Tercero Pagador<br/>";




                if ($$.txtEmailPagador.value.toLowerCase().indexOf("gmail") > -1 ||
                    $$.txtEmailPagador.value.toLowerCase().indexOf("hotmail") > -1) msgError += "El Email no puede ser gmail o hot mail<br/>";
                if ($$.txtEmailRespuesta.value.toLowerCase().indexOf("gmail") > -1 ||
                    $$.txtEmailRespuesta.value.toLowerCase().indexOf("hotmail") > -1) msgError += "El Email no puede ser gmail o hot mail<br/>";
                if (fileTransf == !undefined) {
                    if (Math.round(fileTransf.size / 1024) > $$.maestros.sizeLimitFile) msgError += "El archivo de tranferencia no puede pesar mas de 300 kbs<br/>";
                }
                if (fileMandato == !undefined) {
                    if (Math.round(fileMandato.size / 1024) > $$.maestros.sizeLimitFile) msgError += "El archivo de mandato no puede pesar mas de 300 kbs<br/>";
                }
                if (fileFact !== null)
                {
                    if (Math.round(fileFact.size / 1024) > $$.maestros.sizeLimitFile) msgError += "El archivo de facturación no puede pesar mas de 300 kbs<br/>";
                }

                if (msgError === "") //registar bl
                {
                    removeClassValidate(inputs);

                    const frm = new FormData();
                    frm.method = "post";
                    frm.append("flTransf", fileTransf, fileTransf.name);
                    frm.append("flMandato", fileMandato, fileMandato.name);
                    if (fileFact !== null) frm.append("flFacturacion", fileFact, fileFact.name);
                    frm.append("trama", getCsv());
                    frm.append("numBl", $$.txtNroBl.value);
                    frm.append("linea", $$.ddlLinea.options[$$.ddlLinea.selectedIndex].text);
                    frm.append("servicio", $$.ddlServicio.options[$$.ddlServicio.selectedIndex].text);
                    frm.append("ruc", $$.txtNroRuc.value);

                    validarCaptcha().then(codeValidate =>
                    {
                        if (codeValidate)
                        {
                            const url = $$.urlBase + "registerBl/save";
                            $$.httpClient.request(
                            {
                                verbo: $$.httpClient.verbos.post,
                                url: url,
                                sendData: frm,
                                spinner: true,
                                success: function (pData)
                                {
                                    const response = pData.split("ƒ");
                                    if (response[0] === "1")
                                    {
                                        Swal.fire({ icon: 'success', title: 'Exito', html: "Su registro se realizó correctamente." });
                                        pWin.sessionStorage.removeItem("imgCaptcha");
                                        nuevoRegistro();
                                    }
                                },
                                error: err =>
                                {
                                    const dataErr = err.responseText.replace(/ƒ/gi, "<br/>");
                                    Swal.fire({ icon: 'error', title: 'No se pudo guardar', html: dataErr });
                                    getImgCaptcha(false);
                                    $$.txtCodeCaptcha.value = "";
                                }
                            });
                        }
                        else
                        {
                            Swal.fire({ icon: 'error', title: 'Valide por favor', html: "Código de validación incorrecto." }); 
                            getImgCaptcha(false);
                            $$.txtCodeCaptcha.value = "";
                        }
                    });
                }
                else
                {
                    setClassValidate(inputs);
                    Swal.fire({ icon: 'error', title: 'Valide por favor', html: msgError });
                }
            }
        });
    }
    function validarEmail() {
        const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        const txtEmailRespuesta = $$.txtEmailRespuesta.value;
        if (!email_regex.test(txtEmailRespuesta)) {
            $$.divEmailRespuesta.style.display = 'block';

        }
        else {
            $$.divEmailRespuesta.style.display = 'none';
        }
    }
    function validarEmailPagador() {

        const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        const txtEmailPagador = $$.txtEmailPagador.value;
        if (!email_regex.test(txtEmailPagador)) {
            $$.divEmailPagador.style.display = 'block';

        }
        else {
            $$.divEmailPagador.style.display = 'none';
        }

    }
    function validarBoostrap(e)
    {
        validarStyleBoostrap([$$.txtNroBl],e)
    }
    function validarCajas(ctl) {
        if (ctl.id == "txtNroBl" && ctl.value == "") {
            document.getElementById("busquedaBL").style.display = 'block';
            $$.txtNroBl.classList.remove("validaCaja");
        }
        else if (ctl.id == "txtNroBl" && ctl.value != "") {
            document.getElementById("busquedaBL").style.display = 'none';
            $$.txtNroBl.classList.add("validaCaja");
        }
        else if (ctl.id == "ddlServicio" && ctl.value == "") {
            document.getElementById("busquedaServ").style.display = 'block';
            $$.ddlServicio.classList.remove("validaCaja");
        }
        else if (ctl.id == "ddlServicio" && ctl.value != "") {

            document.getElementById("busquedaServ").style.display = 'none';
            $$.ddlServicio.classList.add("validaCaja");
        }
    }
    function validarStyleBoostrap(pCtls,event) {
            for (let ctl of pCtls) {
                ctl.classList.toggle("valida", false);
                if (ctl.innerHTML == "--Seleccione--") {
                    ctl.classList.add("valida");
                    validarCajas(ctl);
                }
                else if(ctl.value.trim() === "") {
                ctl.classList.add("valida");
                validarCajas(ctl);
            }
            else {

                validarCajas(ctl);
            }
        }
        event.preventDefault()
        event.stopPropagation()
    }
    function buscarBl(e)
    {
      // debugger;
        const valClicks = valiadarClick($$.btnBuscar.id);
        if (!valClicks)
        {
            Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
            return;
        }
        validarStyleBoostrap([$$.txtNroBl, $$.ddlServicio], e)
        let blNum = $$.txtNroBl.value.replace("/", "_");
         blNum = $$.txtNroBl.value.replace("?", "°");
        const servicio = $$.ddlServicio.value;
        let msgError = "";
          if (blNum.trim() === "") msgError = "'N° B/L' es obligatorio<br/>";
        //if (linea.trim() === "") msgError += "'Línea' es obligatorio<br/>";
        if (servicio.trim() === "") msgError += "'Servicio pagar' es obligatorio";

        if (msgError === "") //buscar bl
        {
            //removeClassValidate([$$.txtNroBl, $$.ddlLinea, $$.ddlServicio]);
            removeClassValidate([$$.txtNroBl, $$.ddlServicio]);
            const url = $$.urlBase + `registerBl/search/${blNum}/${servicio}`;
            $$.httpClient.request(
            {
                verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                success: function (pData)
                {
                    const result = pData.split("ƒ");
                    if (result[0] === "0") //el registro del bl no existe
                    {
                        const data = $$.utilJs.csvToObject(result[1]);
                        if (data.length === 0)
                            Swal.fire({
                                icon: 'warning',
                                title: 'Estimado Cliente',
                                html:
                                    '<p style="text-align: left ! important ">El B/L de ingresado, no se encuentra en nuestra base de datos.Esto puede deberse a que ha sido ingresado incorrectamente. De no ser así para más información y asistencia, por favor escribanos al siguiente correo:<a href="" style="text-align: left ! important">consultasweb@transtotalperu.com</a> indicando la línea naviera y su N° de B/L.</p>'
                            
                            });
                        else
                            pintarDataConsultarBl(data[0], servicio);
                    }
                    else if (result[0] === "1") //el registro del bl
                    {
                        const data = $$.utilJs.csvToObject(result[1]);
                        const estadoBl = data[0].estado;
                        const strEstadoBl = estadoBl === 1 ? "EN PROCESO" : "";
                        //const htmlBl = `Su BL ${blNum} se encuentra en estado<br/>${strEstadoBl}`;
                        //Swal.fire({ icon: 'error', title: 'Valide por favor', html: htmlBl });
                        Swal.fire({
                            title: 'ATENCIÓN!',
                             html:
                                 `Su registro de pago por el N° B/L <b>${blNum}</b> se encuentra en <b>${strEstadoBl}</b> `,
                            imageUrl: 'Images/jpg/reloj.jpg',
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                        })


                    }
                },
                error: errHttpClient
            });
        }
        else {
          //  setClassValidate([$$.txtNroBl, $$.ddlServicio]);
            Swal.fire({ icon: 'error', title: 'Valide por favor', html: msgError });
        }
    }
    function setImages()
    {
        $$.imgFacturacion.setAttribute("src", ImageIcons.uploadCloudGray);
        $$.imgMandato.setAttribute("src", ImageIcons.uploadCloudGray);
        $$.imgTranfBancaria.setAttribute("src", ImageIcons.uploadCloudGray);
        $$.imgCaptcha.setAttribute("src", ImageIcons.spinnerCaptcha);
    }
    function setFile()
    {
        const idLnk = this.id.replace("lnk", "inpFile");
        pDoc.getElementById(idLnk).click();
    }
    function selectFile(event) {
        
        const inpFile = this;
        let msgError = "";
        let id = inpFile.id.replace("inpFile", "img");
        if (inpFile.value !== "") {
            pDoc.getElementById(id).setAttribute("src", ImageIcons.uploadCloudGreen);

            if (Math.round(inpFile.files[0].size / 1024) > $$.maestros.sizeLimitFile) msgError += "El archivo de  no puede pesar mas de 300 kbs<br/>";
            if (msgError === "") {
                if (id == "imgTranfBancaria") {
                    $$.lnkTranfBancaria.classList.add("addClass");
                    $$.spnTranfBancaria.classList.remove("spnFile");
                    $$.spnTranfBancaria.classList.add("addClass");
                    
                    removeClassArch([$$.lnkTranfBancaria]);
                    removeClassArchivo([$$.spnTranfBancaria]);
                }
                else if (id == "imgMandato") {
                    $$.lnkMandato.classList.add("addClass");
                    $$.spnMandato.classList.remove("spnFile");
                    $$.spnMandato.classList.add("addClass");
                    removeClassArchivo([$$.spnMandato]);
                    removeClassArch([$$.lnkMandato])
                }
                else if (id == "imgFacturacion") {
                    $$.lnkFacturacion.classList.add("addClass");
                    $$.spnFacturacion.classList.remove("spnFile");
                    $$.spnFacturacion.classList.add("addClass");
                    removeClassArchivo([$$.spnFacturacion]);
                    removeClassArch([$$.lnkFacturacion])
                }
                id = id.replace("img", "spn");
                pDoc.getElementById(id).textContent = "Archivo Cargado";
            }
            else {

         
                Swal.fire({ icon: 'error', title: 'Informe', html: msgError });
            }

           
            }
        event.preventDefault();
    }
    function setValorMoneda(e) {

        const servicioValue = $$.ddlServicio.value;
        validarStyleBoostrap([$$.ddlServicio],e);
        if (servicioValue === "1") {
            $$.ddlMoneda.value = "2";
            $$.ddlMoneda.selected = true
            $$.ddlMoneda.disabled = true;
        }
        else {
            $$.ddlMoneda.value = "";
            $$.ddlMoneda.disabled = false;
        }


    }
    function nuevoRegistro()
    {
        const valClicks = valiadarClick($$.btnNuevo.id);
        if (!valClicks)
        {
            Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
            return;
        }

        limpiar();
        getImgCaptcha(false);
        $$.txtNroBl.focus();
    }
    function getImgCaptcha(pValExits)
    {
        const url = $$.urlBase + "captcha/getImage";
        if (!pValExits)
        {
            $$.httpClient.request(
            {
                    verbo: $$.httpClient.verbos.get, url: url, spinner: false, responType: $$.httpClient.responseType.blob,
                    withCredentials: false, // cambiar en produccion a true
                success: rpta =>
                {
                    var reader = new FileReader();
                    reader.onload = e =>
                    {
                        const dataBase64 = e.target.result;
                        pWin.sessionStorage.setItem("imgCaptcha", dataBase64);
                        $$.imgCaptcha.setAttribute("src", dataBase64);
                    }
                    reader.readAsDataURL(rpta);
                },
                error: errHttpClient
            });
        }
        else
        {
            const imgBase64 = pWin.sessionStorage.getItem("imgCaptcha");
            if (imgBase64 !== null)
                $$.imgCaptcha.setAttribute("src", imgBase64);
            else
            {
                $$.httpClient.request(
                {
                    verbo: $$.httpClient.verbos.get, url: url, spinner: false, responType: $$.httpClient.responseType.blob,
                    success: rpta =>
                    {
                        var reader = new FileReader();
                        reader.onload = e =>
                        {
                            const dataBase64 = e.target.result;
                            pWin.sessionStorage.setItem("imgCaptcha", dataBase64);
                            $$.imgCaptcha.setAttribute("src", dataBase64);
                        }
                        reader.readAsDataURL(rpta);
                    },
                    error: errHttpClient
                });
            }
        }
    }
    function newCaptcha(e)
    {
        $$.imgCaptcha.setAttribute("src", ImageIcons.spinnerCaptcha);
        getImgCaptcha(false);
        e.preventDefault();
    }
    function formatNumber() {
      //  debugger;
        let value = this;
        $$.utilJs.formatNumbertoDecimal(value, 2);
    }
    function buscarClienteCV(event) {
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        paste = paste.toUpperCase();
        const totalRuc = paste.length;
        $$.txtNroRuc.value = paste;
        if (totalRuc == 11) {
            const nroRuc = paste;
            if (nroRuc !== "") {
                const valClicks = valiadarClick("buscarRUC");
                if (!valClicks) {
                    Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
                    return;
                }

                const url = $$.urlBase + `registerBl/searchClient/${nroRuc}`;
                $$.httpClient.request(
                    {
                        verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                        success: function (pData) {
                            if (pData !== "") {
                                const parts = pData.split("|");
                                $$.txtNroRuc.value = parts[0];
                                $$.txtRazonSocial.value = parts[1];
                                $$.txtDireccion.value = parts[2];
                                $$.txtRazonSocial.disabled = true;
                              //  $$.txtNroRuc.disabled = true;
                            }
                            else {
                                $$.txtRazonSocial.focus();
                                $$.txtRazonSocial.disabled = false;
                                $$.txtDireccion.disabled = false;
                                $$.txtNroRuc.disabled = false;
                                const htmlCliente = `el numero de RUC ingresado  <b>${$$.txtNroRuc.value}</b>, no se encuentra en nuestros registros, agradeceremos llenar el formulario adjunto para poder hacer el registro del mismo en nuestro sistema.`;
                                Swal.fire({ icon: 'warning', title: 'Estimado Cliente', html: htmlCliente });

                            }
                        },
                        error: errHttpClient
                    });
            }
        }
        //const selection = window.getSelection();
        //if (!selection.rangeCount) return false;
        //selection.deleteFromDocument();
        //selection.getRangeAt(0).insertNode(document.createTextNode(paste));

        event.preventDefault();

    }
    function buscarCliente(e)
    {
        const totalRuc = $$.txtNroRuc.value.length;
        $$.txtRazonSocial.value = "";
        $$.txtDireccion.value ="";
        if (e.keyCode === 13 || totalRuc==11)
        {
            const nroRuc = $$.txtNroRuc.value.trim();
            if (nroRuc !== "")
            {
                const valClicks = valiadarClick("buscarRUC");
                if (!valClicks)
                {
                    Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
                    return;
                }

                const url = $$.urlBase + `registerBl/searchClient/${nroRuc}`;
                $$.httpClient.request(
                {
                    verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                    success: function (pData)
                    {
                        if (pData !== "") {
                            const parts = pData.split("|");
                            $$.txtNroRuc.value = parts[0];
                            $$.txtRazonSocial.value = parts[1];
                            $$.txtDireccion.value = parts[2];
                            $$.txtRazonSocial.disabled = true;
                            $$.txtDireccion.disabled = true;
                        }
                        else {
                            $$.txtRazonSocial.focus();
                            $$.txtRazonSocial.disabled = false;
                            $$.txtDireccion.disabled = false;
                            const htmlCliente = `Este Cliente  ${$$.txtNroRuc.value} no se encuentra en nuestros registros, por favor ingresar los campos;<br/>Razon Social y dirección`;
                            Swal.fire({ icon: 'error', title: 'Infomre', html: htmlCliente });

                             }
                        },
                    error: errHttpClient
                });
            }
        }
    }

    function buscarPagadorCV(event) {
        //debugger;
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        paste = paste.toUpperCase();
        const totalRuc = paste.length;
        $$.txtNroRucTerceroPagador.value = paste;
        if (totalRuc == 11) {
        const nroRuc = paste;
        if (nroRuc !== "") {
            const valClicks = valiadarClick("buscarRUC");
            if (!valClicks) {
                Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
                return;
            }

            const url = $$.urlBase + `registerBl/searchClient/${nroRuc}`;
            $$.httpClient.request(
                {
                    verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                    success: function (pData) {
                        if (pData !== "") {
                            const parts = pData.split("|");
                            $$.txtNroRucTerceroPagador.value = parts[0];
                            $$.txtRazonSocialTerceroPagador.value = parts[1];
                            //$$.txtDireccion.value = parts[2];
                            $$.txtRazonSocialTerceroPagador.disabled = true;
                          //  $$.txtNroRucTerceroPagador.disabled = true;
                        }
                        else {
                            $$.txtRazonSocialTerceroPagador.focus();
                            $$.txtRazonSocialTerceroPagador.disabled = false;
                            $$.txtNroRucTerceroPagador.disabled = false;
                            const htmlCliente = `Este Cliente  ${$$.txtNroRucTerceroPagador.value} no se encuentra en nuestros registros, por favor ingresar los campos;<br/>Razon Social y dirección`;
                            Swal.fire({ icon: 'error', title: 'Infomre', html: htmlCliente });

                        }
                    },
                    error: errHttpClient
                });
            }
        }
        //const selection = window.getSelection();
        //if (!selection.rangeCount) return false;
        //selection.deleteFromDocument();
        //selection.getRangeAt(0).insertNode(document.createTextNode(paste));

        event.preventDefault();
      
    }

    function buscarPagador(e) {
       // debugger;
        const totalRuc = $$.txtNroRucTerceroPagador.value.length;
        $$.txtRazonSocialTerceroPagador.value = "";
        //$$.txtNroRucTerceroPagador.value = "";
        if (e.keyCode === 13 || totalRuc == 11) {
            const nroRuc = $$.txtNroRucTerceroPagador.value.trim();
            if (nroRuc !== "") {
                const valClicks = valiadarClick("buscarRUC");
                if (!valClicks) {
                    Swal.fire({ icon: 'info', title: 'Espere', html: `Debe esperar ${$$.maestros.tiempoEntreClicks} segundos para dar click de nuevo.` });
                    return;
                }

                const url = $$.urlBase + `registerBl/searchClient/${nroRuc}`;
                $$.httpClient.request(
                    {
                        verbo: $$.httpClient.verbos.get, url: url, spinner: true,
                        success: function (pData) {
                            if (pData !== "") {
                                const parts = pData.split("|");
                                $$.txtNroRucTerceroPagador.value = parts[0];
                                $$.txtRazonSocialTerceroPagador.value = parts[1];
                                //$$.txtDireccion.value = parts[2];
                                $$.txtRazonSocialTerceroPagador.disabled = true;
                                $$.txtNroRucTerceroPagador.disabled = true;
                            }
                            else {
                                $$.txtRazonSocialTerceroPagador.focus();
                                $$.txtRazonSocialTerceroPagador.disabled = false;
                                $$.txtNroRucTerceroPagador.disabled = false;
                                const htmlCliente = `Este Cliente  ${$$.txtNroRucTerceroPagador.value} no se encuentra en nuestros registros, por favor ingresar los campos;<br/>Razon Social y dirección`;
                                Swal.fire({ icon: 'error', title: 'Infomre', html: htmlCliente });

                            }
                        },
                        error: errHttpClient
                    });
            }
        }
    }
    function iniciarControles() {
         var date_less = new Date();
        $$.txtFechaDeposito.value = $$.utilJs.getIsoDate(date_less, true);
    }
    function DropDown(e) {
        var s = $$.ddlTipoDocumento;
        if (s.className == "wrapper-dropdown-3 form-control active") {
            s.className = "wrapper-dropdown-3 form-control"
        } else {
            s.className = "wrapper-dropdown-3 form-control active"
        }

        parent = document.querySelector('.wrapper-dropdown-3');
        opts = parent.children[1];//parent.children[1].children;
             
        opts.addEventListener("click", buscarLiTipoDocumento(e), false);
      
    } 
    function buscarLiTipoDocumento(event) {
     
        if (event.target.text != undefined) {
            document.getElementById("spanddl").value = event.target.parentElement.id;
            document.getElementById("spanddl").innerText = event.target.text;
        }
  
        document.getElementById("ids").style.display = 'none'
        $$.ddlTipoDocumento.classList.remove("valida");
        $$.ddlTipoDocumento.classList.add("validaCaja");
        var s = $$.ddlTipoDocumento;
        if (s.className == "wrapper-dropdown-3 form-control active") {
            s.className = "wrapper-dropdown-3 form-control"
        }
        else if (s.className == "wrapper-dropdown-3 form-control validaCaja") {

            s.className = "wrapper-dropdown-3 form-control";
        }
            else {
            s.className = "wrapper-dropdown-3 form-control active"
        }

        event.preventDefault()
        event.stopPropagation()
  

    }

    function desHabilitarTerceroPagador() {

        if (this.checked) {
            Swal.fire({
                title: 'Mensaje',
                html:
                    '<p style="text-align: center ! important ">Si habilita esta opcion es necesario que complete  los datos del  <b>tercero pagador</b> al cual, el pago sera registrado </p>',
                icon: 'warning',
                showCancelButton: true,
               // confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.value) {
                    //Swal.fire(
                    //    //'Deleted!',
                    //    //'Your file has been deleted.',
                    //    //'success'
                    //)
                    $$.txtRazonSocialTerceroPagador.disabled = false;
                    $$.txtNroRucTerceroPagador.disabled = false;
                    $$.txtRazonSocialTerceroPagador.value = "";
                    $$.txtNroRucTerceroPagador.value = "";
                }
                else {
                    this.checked = false;
                    
                }
            })

        } else {
            $$.txtRazonSocialTerceroPagador.disabled = true;
            $$.txtNroRucTerceroPagador.disabled = true;// alert("deshabilitado")
            $$.txtRazonSocialTerceroPagador.value = "";
            $$.txtNroRucTerceroPagador.value = "";
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
            Swal.fire({
                position: 'top',
                icon: 'warning',
                html:
                    'El pago sera registrado a <b>shipper</b>, ' ,
                //title: 'El pago sera registrado al shipper',
                showConfirmButton: false,
                timer: 5000
            })
            // Checkbox is not checked..
        }
    }
    function init()
    {
        
        cargarCombos();
        setImages();
        disableInput();
        iniciarControles();
        getImgCaptcha(true);
        $$.btnBuscar.addEventListener("click", buscarBl, false);
        $$.btnGuardar.addEventListener("click", registraPagoBl, false);
        $$.lnkTranfBancaria.addEventListener("click", setFile, true);
        $$.lnkFacturacion.addEventListener("click", setFile, true);
        $$.lnkMandato.addEventListener("click", setFile, true);
        $$.inpFileTranfBancaria.addEventListener("change", selectFile, true);
        $$.inpFileFacturacion.addEventListener("change", selectFile, true);
        $$.inpFileMandato.addEventListener("change", selectFile, true);
        $$.btnNuevo.addEventListener("click", nuevoRegistro, false);
        $$.lnkNewCaptcha.addEventListener("click", newCaptcha ,false);
        $$.utilJs.inputFilter($$.txtImporte, x => { return /^-?\d*[.,]?\d{0,2}$/.test(x); });
        $$.utilJs.inputFilter($$.txtNroRuc, x => { return /^-?\d*$/.test(x); });
        $$.txtNroRuc.addEventListener("keyup", buscarCliente, false);
        $$.txtEmailRespuesta.addEventListener("keyup", validarEmail, false);
        $$.txtEmailPagador.addEventListener("keyup", validarEmailPagador, false);
        $$.txtImporte.addEventListener("blur", formatNumber, false);
        $$.ddlServicio.addEventListener("change", setValorMoneda, false);
        $$.txtNroBl.addEventListener("keyup", validarBoostrap, false);
        $$.chkDeshabilitar.addEventListener("change", desHabilitarTerceroPagador, false);
        $$.txtNroRucTerceroPagador.addEventListener("keyup", buscarPagador, false);
        $$.utilJs.inputFilter($$.txtNroRucTerceroPagador, x => { return /^-?\d*$/.test(x); });
        $$.txtNroRucTerceroPagador.addEventListener("paste", buscarPagadorCV, false);
        $$.txtNroRuc.addEventListener("paste", buscarClienteCV, false);
        $$.ddlTipoDocumento.addEventListener("click", DropDown, false);
    //     DropDown($$.ddlTipoDocumento);
    }

    (
        function ()
        {
            init();
        }
    )();
})(window, window.document);