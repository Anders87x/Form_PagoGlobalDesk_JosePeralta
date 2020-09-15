var Funciones = (function(pWin) {
    var eliminarNodos = function (pNodoPadre)
    {
        if (pNodoPadre != null) while (pNodoPadre.firstChild) pNodoPadre.removeChild(pNodoPadre.firstChild);
    }
    var currentWindow = null;
    function setCurrentWindow(pWindow){currentWindow = pWindow;}
    function getCurrentWindow() {return currentWindow;}
    function callVentana(pUrl, pTitulo, pDivTituloVentana, pDivBody, h1TituloPagina, pUrlScript, pUrlNameForm, pDivConten) {
        var xhr = new XMLHttpRequest();
        //xhr.responseType = "document";
        xhr.onreadystatechange = function() {
            if (xhr.status === 200 && xhr.readyState === 4) {
                var x = xhr.response;
                //h1TituloPagina.textContent = pTitulo;
                pDivTituloVentana.textContent = pTitulo;
                eliminarNodos(pDivBody);
                pDivBody.appendChild(x.getElementById(pDivConten));

                var script = pWin.document.createElement("script");
                script.type = "text/javascript";
                script.src = pUrlScript;
                script.onload = function() {
                    var xForm = new pWin[pUrlNameForm](pWin);
                    setCurrentWindow(xForm);
                    xForm.cargar();
                    pWin.document.getElementById("divTab").style.visibility = "visible";
                }
                pDivBody.appendChild(script);
            }
        }
        xhr.open("GET", pUrl, true);
        xhr.responseType = "document";
        xhr.send();
    }
    function fnLlenarCombo(pData, pNomComb, filter, pAddTodos)
    {
        var _xData = pData.split('¬');
        var _xCampo = "";
        var _xDataCombo = [];
        for (var j = 0; j < _xData.length; j++) {
            _xCampo = _xData[j].split('¦');
            if (filter === _xCampo[0]) {
                _xDataCombo.push(_xData[j]);
            }
        }
        var combo = document.getElementById(pNomComb);
        var _xLen = _xDataCombo.length;
        var _xDocFrag = document.createDocumentFragment();
        var _xCampos = [];
        var _xOpModel = document.createElement('option');
        var _xOp = null;
        _xOp = _xOpModel.cloneNode(false);
        _xOp.value = "";
        _xOp.textContent = "::Seleccione::";
        _xOp.setAttribute("disabled", "disabled");

        if (pAddTodos !== undefined)
        {
            _xDocFrag.appendChild(_xOp);

            _xOp = _xOpModel.cloneNode(false);
            _xOp.value = "0";
            _xOp.textContent = "::TODOS::";
            _xOp.setAttribute("selected", "selected");
            _xDocFrag.appendChild(_xOp);
        }
        else
        {
            _xOp.setAttribute("selected", "selected");
            _xDocFrag.appendChild(_xOp);
        }

        for (var i = 0; i < _xLen; i++) {
            _xCampos = _xDataCombo[i].split('¦');
            _xOp = _xOpModel.cloneNode(false);
            _xOp.value = _xCampos[2].trim();
            _xOp.textContent = _xCampos[3].trim();
            _xDocFrag.appendChild(_xOp);
        }
        eliminarNodos(combo);
        combo.appendChild(_xDocFrag);
    }
    var getDataTablaMaestraForId = function(pData, pIdTbl) {
        var arrRows = pData.split("¬");
        var len = arrRows.length, i = 0, row, campos;
        var arrFinal = [];
        for (i = 0; i < len; i++) {
            row = arrRows[i];
            campos = row.split("¦");
            if (pIdTbl.toString() === campos[0]) arrFinal.push(row);
        }
        return arrFinal;
    }
    var getDataTablaMaestraObjsForId = function (pData, pIdTbl, pLstFiltros)
    {
        var arrRows = pData.split("¬");
        var len = arrRows.length, row, campos, lenFiltros, item;
        var arrFinal = [];
        for (let i = 0; i < len; i++)
        {
            row = arrRows[i];
            campos = row.split("¦");
            if (pIdTbl.toString() === campos[0]) arrFinal.push(row);
        }
        var lst = [];
        len = arrFinal.length;
        lenFiltros = pLstFiltros.length;

        if (lenFiltros > 0)
        {
            for (let i = 0; i < len; i++)
            {
                item = arrFinal[i].split("¦");
                for (let j = 0; j < lenFiltros; j++)
                {
                    if (item[2] === pLstFiltros[j] && item[4] !== "X") lst.push({ value: item[2], text: item[3] });
                }
            }
        }
        else
        {
            for (let i = 0; i < len; i++)
            {
                item = arrFinal[i].split("¦");
                if (item[4] !== "X") lst.push({ value: item[2], text: item[3] });
            }
        }

        return lst.sort(function (a, b)
        {
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0;
        });
    }
    var cargarComboList = function (pDoc, pCbo, pLista, pText, pValue, pAddTodos) {
        var cbo = pCbo;
        //debugger;
        if (Array.isArray(pLista)) {
            const optModel = document.createElement("ul");
            const span = document.createElement("span");
            span.textContent = "--Seleccione--";
            span.setAttribute("required", "");
            span.setAttribute("id", "spanddl");
            optModel.setAttribute("class", "dropdown");
            var len = pLista.length;
            var obj = null, opt = null,opt2=null;
            for (var i = 0; i < len; i++) {
                obj = pLista[i];
                const li = document.createElement("li");
                li.id = obj.cod;
                const a = document.createElement("a");
                const is = document.createElement("i");
                is.setAttribute("class", obj.icono);
                a.href = "#";
                a.textContent = obj[pText]; + ' \u25BD';
                a.appendChild(is);
                li.appendChild(a);
                optModel.appendChild(li);
               }
            eliminarNodos(cbo);
            cbo.appendChild(span);
            cbo.appendChild(optModel);
       
        }
    }

    var cargarCombo = function (pDoc, pCbo, pLista, pText, pValue, pAddTodos)
    {
        var cbo = pCbo;
        if (Array.isArray(pLista)) {
            var len = pLista.length;
            var optModel = document.createElement('option');
            var obj = null, opt = null;
            var fragment = pDoc.createDocumentFragment();
            opt = optModel.cloneNode();
            opt.value = "";
            opt.textContent = "Seleccione...";
            opt.setAttribute("disabled", "disabled");

            if (pAddTodos !== undefined)
            {
                fragment.appendChild(opt);

                opt = optModel.cloneNode(false);
                opt.value = "0";
                opt.textContent = "::TODOS::";
                opt.setAttribute("selected", "selected");
                fragment.appendChild(opt);
            }
            else {
                opt.setAttribute("selected", "selected");
                fragment.appendChild(opt);
            }

            for (var i = 0; i < len; i++) {
                obj = pLista[i];
                opt = optModel.cloneNode();
                opt.value = obj[pValue];
                opt.textContent = obj[pText];
                fragment.appendChild(opt);
            }
            eliminarNodos(cbo);
            cbo.appendChild(fragment);

        }
    }
    var removeClassValidar = function (pDiv)
    {
        let div = pDiv.querySelectorAll(".validar");
        const  len = div.length;
        for (let i = 0; i < len; i++) div[i].classList.remove("validar");
    }
    var fnValidarFormulario = function(x) {
        var bExito = false;
        var classRequerido = x.getElementsByClassName("requerido");
        var len = classRequerido.length;
        var valor = "";
        var c = 0;
        var clase = "";
        var tipo = "";
        for (var i = 0; i < len; i++) {
            valor = classRequerido.item(i).value;
            tipo = classRequerido.item(i).dataset.tipo;
            clase = classRequerido.item(i).getAttribute("class");
            if (valor.replace(/^\s+|\s+$/g, "").length === 0) {
                clase += " ";
                clase += "validar";
                classRequerido.item(i).setAttribute("class", clase);
                c++;
            } else {
                if (valor.match(/([\<])([^\>]{1,})*([\>])/i) != null) {
                    clase += " ";
                    clase += "validar";
                    classRequerido.item(i).setAttribute("class", clase);
                    c++;
                } else {
                    if (tipo === undefined) {
                        classRequerido.item(i).classList.remove("validar");
                    } else {
                        if (tipo === "numero") {
                            bExito = validarNumero(valor);
                            if (!bExito) {
                                clase += " ";
                                clase += "validar";
                                classRequerido.item(i).setAttribute("class", clase);
                                c++;
                            } else {
                                classRequerido.item(i).classList.remove("validar");
                            }
                        }
                    }
                }
            }
        }

        if (c === 0) bExito = true;
        else bExito = false;

        return bExito;
    }
    function validarNumero(valor) {
        var exito = false;
        if (isNaN(valor)) exito = false;
        else {
            if (valor < 0) exito = false;
            else exito = true;
        }
        return exito;
    }
    function formatNumbertoDecimal(control, num_decimal) {//Jose
        //var celda = control.parentNode;
        //filaActual = celda.parentNode;

        //fn_actualizarGriPadre(filaActual);

        var nums = new Array();
        var simb = ",";
        valor = control.value;
        valor = valor.replace(/,/g, '');
        var numeroLetras = valor.length;




        if (control.value.indexOf('.') > 0) {
            var posicion_decimal = valor.indexOf('.');
            var decimal = valor.substring(posicion_decimal);
            decimal = decimal.replace(".", "");
            decimal = decimal.replace(/D/g, "");
            decimal = decimal.substring(0, num_decimal)
            valor = valor.substring(0, posicion_decimal)

            if (decimal == "") {
                alert("Ingrese la parte decimal")
                return false;
            }
            if (decimal.length == 1) {

                alert("Ingrese la parte decimal de la forma ____.00")
                return false;

            }
        }
        valor = valor.replace(/D/g, "");
        nums = valor.split("");
        var long = nums.length - 1;
        var patron = 3;
        var prox = 2;
        var res = "";
        var puntos = ".00"
        while (long > prox) {
            nums.splice((long - prox), 0, simb);
            prox += patron;

        }
        for (var i = 0; i <= nums.length - 1; i++) {
            res += nums[i];
        }

        if (control.value.indexOf('.') > 0) {
            var enviar = res + "." + decimal
        }

        else {
            var enviar = res + puntos
        }

        control.value = enviar;
        if (control.value == ".00") {
            control.value = "";
            return false;
        }
    }

    var crearCadenaOnlyRow = function(pConfig) {
        var cuenta = pConfig.length;
        var cadena = "";
        var item;

        item = pConfig[0];
        cadena = item[1];
        for (var i = 1; i < cuenta; i++) {
            item = pConfig[i];
            cadena += "¦";
            cadena += item[1];
        }

        return cadena;
    }
    var crearCadenaMultRow = function (pConfigs)
    {
        var cuenta = pConfigs.length;
        var cadenas = "";
        var item;

        item = pConfigs[0];
        cadenas = crearCadenaOnlyRow(item);
        for (var i = 1; i < cuenta; i++) {
            item = pConfigs[i];
            cadenas += "¬";
            cadenas += crearCadenaOnlyRow(item);
        }
        return cadenas;
    }
    var convertToDate = function (pDate)
    {
        var fecha = null;
        var partDate = null;
        if (pDate.toString().indexOf(" ") > -1)
        {
            var arr = pDate.split(" ");
            partDate = arr[0].split("-");
            var partTime = arr[1].split(":");
            partDate = partDate.concat(partTime);

            if (partDate.length === 4) fecha = new Date(partDate[0], Number(partDate[1]) - 1, partDate[2], partDate[3]);
            else if (partDate.length === 5) fecha = new Date(partDate[0], Number(partDate[1]) - 1, partDate[2], partDate[3], partDate[4]);
            else if (partDate.length === 6) fecha = new Date(partDate[0], Number(partDate[1]) - 1, partDate[2], partDate[3], partDate[4], partDate[5]);
        } else {
            partDate = pDate.split("-");
            fecha = new Date(partDate[0], Number(partDate[1]) - 1, partDate[2]);
        }

        return fecha;
    }
    function convertStringToObject(pData) {
        var arrResult = [];
        var pArr = pData.split("¬");
        var arrTitulos = pArr[0].split("¦"); //contiene los titulos
        var arrTypes = pArr[1].split("¦");
        var objx = function() {
            var cuenta2 = arrTitulos.length;
            var type = "";
            for (var x = 0; x < cuenta2; x++) {
                type = arrTypes[x];
                if (type === "Number") this[arrTitulos[x]] = 0;
                else if (type === "String") this[arrTitulos[x]] = "";
                else if (type === "Date") this[arrTitulos[x]] = new Date(1970, 0, 1);
                else if (type === "Boolean") this[arrTitulos[x]] = false;
            }
        }

        var cuenta = pArr.length;
        var obj = null;
        var countTitulos = 0;
        var data = null;
        var xType = "";
        if (cuenta > 2) {
            for (var i = 2; i < cuenta; i++) {
                obj = new objx();
                data = pArr[i].split("¦");
                countTitulos = arrTitulos.length;
                for (var j = 0; j < countTitulos; j++) {
                    xType = arrTypes[j];
                    if (xType === "Number") obj[arrTitulos[j]] = Number(data[j]);
                    else if (xType === "String") obj[arrTitulos[j]] = data[j];
                    else if (xType === "Date") obj[arrTitulos[j]] = convertToDate(data[j]);
                    else if (xType === "Boolean") obj[arrTitulos[j]] = Boolean(data[j]);
                }
                arrResult.push(obj);
            }
        }
        return arrResult;
    }
    var convertCsvToObject = function(pData, pMultiResult) {
        var result = null;
        if (!pMultiResult) {
            result = convertStringToObject(pData);
        } else {
            var detalles = pData.split("ƒ");
            result = [];
            var cuenta = detalles.length;
            for (var i = 0; i < cuenta; i++) result.push(convertStringToObject(detalles[i]));
        }

        return result;
    }
    var getIsoDate = function (pFecha, pIsDate)
    {
        var fecha = "";
        if (pIsDate === undefined)
        {
            let newDate = new Date(pFecha);
            let pAnio = newDate.getFullYear().toString();
            let pMes = (newDate.getMonth() + 1).toString();
            let pDia = newDate.getDate().toString();

            pMes = pMes.length === 1 ? "0" + pMes : pMes;
            pDia = pDia.length === 1 ? "0" + pDia : pDia;

            fecha = pAnio + "-" + pMes + "-" + pDia;
        }
        else if (pIsDate)
        {
            let pAnio = pFecha.getFullYear().toString();
            let pMes = (pFecha.getMonth() + 1).toString();
            let pDia = pFecha.getDate().toString();

            pMes = pMes.length === 1 ? "0" + pMes : pMes;
            pDia = pDia.length === 1 ? "0" + pDia : pDia;

            fecha = pAnio + "-" + pMes + "-" + pDia;
        }
        return fecha;
    }
    function Rnd() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);}
    var fnCrearidAleatorio = function ()
    {
        var fecha = new Date();
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var mili = fecha.getMilliseconds();
        var Random = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

        var iddialogo_ = "";
        iddialogo_ += "tbldlgRnd";
        iddialogo_ += Rnd();
        iddialogo_ += "_";
        iddialogo_ += horas;
        iddialogo_ += "_";
        iddialogo_ += minutos;
        iddialogo_ += "_";
        iddialogo_ += segundos;
        iddialogo_ += "_";
        iddialogo_ += mili;
        iddialogo_ += "_";
        iddialogo_ += Rnd();
        iddialogo_ += "_";
        iddialogo_ += Rnd();

        return iddialogo_;
    }
    function fnEliminarModal(random)
    {
        var _xDialog = document.getElementById("dialog" + random);
        _xDialog.parentNode.removeChild(_xDialog);
    }
    var fnModal = function (titulo, pButonOk)
    {
        if (titulo == undefined) titulo = ".: Listado :.";
        var random = fnCrearidAleatorio();
        var frag = document.createDocumentFragment();

        var divModal = document.createElement('Div');
        var divContent = divModal.cloneNode(false);
        var divFooter = divModal.cloneNode(false);
        divFooter.className = "row";
        var divTitle = divModal.cloneNode(false);
        divTitle.setAttribute("class", "title");
        divTitle.textContent = titulo;

        divContent.setAttribute("id", "divModal_1" + random);
        divContent.setAttribute("class", "windowHelp");
        divContent.style.paddingTop = "1%";
        divContent.style.paddingBottom = "1%";
        let divTblConatiner = divModal.cloneNode(false);
        divTblConatiner.id = "divModal" + random;
        divTblConatiner.className = "table-responsive row";
        divContent.appendChild(divTblConatiner);
        if (pButonOk !== undefined && pButonOk !== null)
        {
            divFooter.innerHTML = "<div class='btn-group pull-right'><button style='' type='button' id='btnSalirDialog" + random + "' class='btn btn-primary'>Salir</button><button style='' type='button' id='btnOkDialog" + random + "' class='btn btn-primary'>'" + pButonOk.text + "'</button></div>";
        }
        else
        {
            divFooter.innerHTML = "<div class='btn-group pull-right'><button style='' type='button' id='btnSalirDialog" + random + "' class='btn btn-primary'>Salir</button></div>";
        }
        divContent.appendChild(divFooter);
        var x = document.createElement("DIALOG");
        x.setAttribute("class", "DialogHelp");
        x.setAttribute("id", "dialog" + random);

        divModal.appendChild(divTitle);
        divModal.appendChild(divContent);
        x.appendChild(divModal);
        frag.appendChild(x);
        document.body.appendChild(frag);

        var btSalir = document.getElementById("btnSalirDialog" + random);
        btSalir.onclick = function () { fnEliminarModal(random); }

        if (pButonOk !== undefined && pButonOk !== null) document.getElementById("btnOkDialog" + random).onclick = pButonOk.onclick;

        var dlgHelper = document.getElementById("dialog" + random);
        dlgHelper.showModal();
        return random;
    }
    var fnModalReporting = function (titulo, pButonOk)
    {
        if (titulo == undefined) titulo = ".: Listado :.";
        var random = fnCrearidAleatorio();
        var frag = document.createDocumentFragment();

        var divModal = document.createElement('Div');
        var divContent = divModal.cloneNode(false);
        var divFooter = divModal.cloneNode(false);
        var divTitle = divModal.cloneNode(false);

        divContent.setAttribute("id", "divModal" + random);
        divContent.setAttribute("class", "windowHelp");
        divContent.style.height = "95%";
        divContent.style.width = "100%";
        divContent.style.padding = "1%";
        var embed = document.createElement('iframe');
        embed.width = "100%";
        embed.height = "100%";
        embed.id = "viewer" + random;
        embed.type = "application/pdf";
        embed.style.overflow = "auto";
        divContent.appendChild(embed);

        divTitle.setAttribute("class", "title");

        let spnTitle = document.createElement('span');
        spnTitle.className = "pull-left";
        spnTitle.textContent = titulo;

        let spnClose = document.createElement('span');
        spnClose.id = "spnClose" + random;
        spnClose.className = "pull-right";
        //spnClose.style.color = "red";
        spnClose.style.fontSize = "18px";
        spnClose.style.cursor = "pointer";
        spnClose.innerHTML = "<i class='fa fa-close'></i>";

        divTitle.appendChild(spnTitle);
        divTitle.appendChild(spnClose);

        divFooter.setAttribute("style", "position:absolute; bottom:9%; right:5%");

        var x = document.createElement("DIALOG");
        x.setAttribute("class", "DialogHelp");
        x.setAttribute("id", "dialog" + random);
        x.style.height = "98%";
        x.style.width = "98%";
        divModal.appendChild(divTitle);
        divModal.appendChild(divContent);
        divModal.appendChild(divFooter);
        divModal.style.height = "98%";
        divModal.style.width = "98%";
        x.appendChild(divModal);

        frag.appendChild(x);
        document.body.appendChild(frag);

        document.getElementById("spnClose" + random).onclick = function () { fnEliminarModal(random); };

        var dlgHelper = document.getElementById("dialog" + random);
        dlgHelper.showModal();
        return random;
    }
    function dataControlRegistro(url)
    {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "text";
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText !== "") {
                    var x = xhr.response.split('¦');

                    var divControl = document.getElementById("frmControl");
                    var dialog = divControl.firstElementChild;
                    dialog.style.display = "block";
                    dialog.showModal();

                    var numReg = divControl.querySelector("#numReg");
                    var uCrea = divControl.querySelector("#uCrea");
                    var fCrea = divControl.querySelector("#fCrea");
                    var uMod = divControl.querySelector("#uMod");
                    var fMod = divControl.querySelector("#fMod");

                    numReg.textContent = x[0];
                    uCrea.value = x[1];
                    fCrea.value = x[2];
                    uMod.value = x[3];
                    fMod.value = x[4];

                    var btnSalir = divControl.querySelector("#btnSalir");
                    btnSalir.onclick = function () {
                        dialog.close();
                        dialog.style.display = "none";
                        numReg.textContent = "";
                        uCrea.value = "";
                        fCrea.value = "";
                        uMod.value = "";
                        fMod.value = "";
                    }

                }
            }
        }
        xhr.open("GET", url, true);
        xhr.send();

    }
    function fnCrearBackDrop(random) {

        var divBackDrop = document.createElement("Div");
        divBackDrop.setAttribute("class", "backdropDel");
        divBackDrop.setAttribute("id", "bDrop" + random);

        return divBackDrop;
    }
    function fnEliminarDialog(random) {
        var _xDialog = document.getElementById("dialog" + random);
        _xDialog.parentNode.removeChild(_xDialog);
        var backDrop = document.getElementById("bDrop" + random);
        backDrop.parentNode.removeChild(backDrop);
    }
    var fnDialog = function (mensaje, eventoEliminarRegistro) {
        random = fnCrearidAleatorio();
        var frag = document.createDocumentFragment();
        var divBackDrop = fnCrearBackDrop(random);


        var divContent = document.createElement('Div');
        divContent.setAttribute("class", "modalDialog");
        divContent.innerHTML = "<div>" +
		                        "<p  style='color:black;text-align: center;vertical-align: middle;line-height: 40px'>¿Desea " + mensaje + "?</p>" +
                                "<button type='button' class='btn btn-primary'  id='btnDelDialog" + random + "'>Eliminar</button><button style='position: absolute;right: 10px;' type='button' id='btnSalirDialog" + random + "' class='btn btn-primary'>Salir</button></div>";

        var x = document.createElement("DIALOG");
        x.setAttribute("open", "open");
        x.setAttribute("class", "DialogMensaje");
        x.setAttribute("id", "dialog" + random);

        x.appendChild(divContent);
        frag.appendChild(divBackDrop);
        frag.appendChild(x);
        document.body.appendChild(frag);

        var btSalir = document.getElementById("btnSalirDialog" + random);
        btSalir.onclick = function () {
            fnEliminarDialog(random);
        }


        if (eventoEliminarRegistro !== undefined && eventoEliminarRegistro !== null) {
            var _xbtEliminar = document.getElementById("btnDelDialog" + random);
            _xbtEliminar.onclick = function () {
                eventoEliminarRegistro(this);
                fnEliminarDialog(random);
            }
        }

    }
    var showPopupAwait = function (pTitulo, pMensaje, pOpen, pDoc)
    {
        var dlgBox = pDoc.getElementById("dlgBox");
        if (pOpen)
        {
            if (dlgBox.open === true) dlgBox.close();

            dlgBox.querySelector("#msgTitle").textContent = pTitulo;
            dlgBox.querySelector("#msgBody").textContent = pMensaje;
            dlgBox.showModal();
        }
        else
        {
            dlgBox.close();
        }
    }
    function clone(obj, pIsObjx)
    {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        if (obj instanceof Date) // Handle Date
        {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        if (obj instanceof Array)// Handle Array
        {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) copy[i] = clone(obj[i]);
            return copy;
        }

        if (obj instanceof Object)// Handle Object
        {
            if (pIsObjx)
            {
                var objx = {};
                for (let attr in obj) if (obj.hasOwnProperty(attr)) objx[attr] = clone(obj[attr]);
                return objx;
            }
            else
            {
                copy = {};
                for (let attr in obj) if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
                return copy;
            }
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    function desencriptar(pMensaje)
    {
        var abecedario = 
        [ 
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
            'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
            'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        var patron =
        [
            '!', '╔', '#', '$', '¤', 'ð', 'ß', 'Î', 'Ï', '*', '+', 'ı', '╩', ':', ';', '╠', '╬', '═',
            '?', '[', ']', '^', '┘', '`', '{', '|', '}', '~', '☺', '☻', '♥', '♦', '♣', '♠', '•', '◘', '○', '◙', '♂',
            '♀', '♪', '♫', '☼', '►', '◄', '↕', '‼', '¶', '§', '▬', '↨', '↑', '↓', '→', '←', '∟', '↔', '▲', '▼', 'Ç',
            'ü', 'æ', 'Æ', 'ô'
        ];

        var oSb = "";
        var texto = []; var caracter; var abc;
        var len = 0; var lenAbc = -1; var pos = -1;

        len = pMensaje.length;
        texto = [len];

        for (let i = 0; i < len; i++) texto[i] = pMensaje[i];

        len = texto.length;
        lenAbc = abecedario.length;
        pos = -1;

        for (let i = 0; i < len; i++)
        {
            caracter = texto[i];
            for (let j = 0; j < lenAbc; j++)
            {
                abc = patron[j];
                if (caracter === abc)
                {
                    pos = j;
                    break;
                }
            }

            oSb += pos > -1 ? abecedario[pos] : caracter;
            pos = -1;
        }

        return oSb;
    }
    var getStrDate = function (pDate, pFormat)
    {
        const anio = pDate.getFullYear().toString();
        const mes = (pDate.getMonth() + 1).toString().padStart(2, "0");
        const dia = pDate.getDate().toString().padStart(2, "0");
        const hora = pDate.getHours().toString().padStart(2, "0");
        const min = pDate.getMinutes().toString().padStart(2, "0");
        const seg = pDate.getSeconds().toString().padStart(2, "0");
        let result = "";
        if (pFormat === "yyyyMMdd") result = anio + mes + dia;
        else if (pFormat === "yyyyMMdd hhmmss") result = anio + mes + dia + hora + min + seg;
        else if (pFormat === "yyyyMM") result = anio + mes;
        else if (pFormat === "yyyy") result = anio + "";
        else if (pFormat === "yyyy-MM-ddThh:mm") result = anio + "-" + mes + "-" + dia + "T" + hora + ":" + min;

        return result;
    }
    function formatNumber(num, pDecs)
    {
        const separador = ","; // separador para los miles
        const sepDecimal = '.'; // separador para los decimales
        num = num.toFixed(pDecs);
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
        return splitLeft + splitRight;
    }
    function inputFilter(textbox, inputFilter)
    {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event)
        {
            textbox.addEventListener(event, function ()
            {
                if (inputFilter(this.value))
                {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                }
                else if (this.hasOwnProperty("oldValue"))
                {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
                else
                {
                    this.value = "";
                }
            });
        });
    }

    return {
        callVentana: callVentana,
        crearCombo: fnLlenarCombo,
        eliminarNodos: eliminarNodos,
        getDataTablaMaestraForId: getDataTablaMaestraForId,
        cargarCombo: cargarCombo,
        validarFormulario: fnValidarFormulario,
        validarNumero: validarNumero,
        crearCadenaOnlyRow: crearCadenaOnlyRow,
        crearCadenaMultRow: crearCadenaMultRow,
        csvToObject: convertCsvToObject,
        getIsoDate: getIsoDate,
        crearModal: fnModal,
        LlamarControlRegistro: dataControlRegistro,
        crearDialog: fnDialog,
        getCurrentWindow: getCurrentWindow,
        showPopupAwait: showPopupAwait,
        fnModalReporting: fnModalReporting,
        removeClassValidar: removeClassValidar,
        clone: clone,
        desencriptar: desencriptar,
        getDataTablaMaestraObjsForId: getDataTablaMaestraObjsForId,
        getStrDate: getStrDate,
        formatNumber: formatNumber,
        formatNumbertoDecimal: formatNumbertoDecimal,
        inputFilter: inputFilter,
        cargarComboList: cargarComboList
    }
});

var Ajax = (function () {
    var verbos = { post: "post", get: "get" }
    var responseType = { arraybuffer: "arraybuffer", blob: "blob", document: "document", json: "json", text: "text" }
    var request = function (pConfig) {
        //verbo, url, async, responType, headers, sendData, success, error, spinner, abort, timeOut, credentialas
        const timeOut = pConfig.timeOut;
        const success = pConfig.success;
        const abort = pConfig.abort;
        const error = pConfig.error;
        const spinner = pConfig.spinner;
        const async = pConfig.async;
        const verbo = pConfig.verbo;
        const url = pConfig.url;
        const responType = pConfig.responType;
        const headers = pConfig.headers;
        const sendData = pConfig.sendData;
        const withCredentials = pConfig.withCredentials;

        var xhr = new XMLHttpRequest();
        if (timeOut !== undefined) xhr.timeout = timeOut; else xhr.timeout = 0;
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200 || this.status === 201) {
                    if (success !== undefined) success(this.response);
                }
                else {
                    if (this.status === 0) {
                        if (abort !== undefined) abort(this);
                    }
                    else {
                        if (error !== undefined) error(this);
                    }
                }
            }
        }

        if (spinner !== undefined)
            xhr.open(verbo, url, async !== undefined ? async : true, "", "", spinner);
        else
            xhr.open(verbo, url, async !== undefined ? async : true, "", "", false);

        if (withCredentials !== undefined && withCredentials === true) xhr.withCredentials = withCredentials

        if (responType !== undefined) xhr.responseType = responType;
        if (headers !== undefined) {
            var cuenta = headers.length;
            for (let i = 0; i < cuenta; i++) xhr.setRequestHeader(headers[i].name, headers[i].value);
        }
        if (verbo === "get") xhr.send(); else if (verbo === "post") xhr.send(sendData);
    }
    return {
        request: request,
        verbos: verbos,
        responseType: responseType
    }
});