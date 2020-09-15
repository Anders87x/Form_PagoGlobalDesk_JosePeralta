<head>
    <!-- Scripts y link Sweet Alert 2 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.css"/>
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.js"></script>
</head>


<?php

    require "PhpMailer/Exception.php";
    require "PhpMailer/PHPMailer.php";
    require "PhpMailer/SMTP.php";

    use PhpMailer\PhpMailer\PhpMailer;
    use PhpMailer\PhpMailer\Exception;

       //Reseteamos variables a 0.
       $nombre = $email = $subject = $mensaje = $para = NULL;

       if (isset($_POST['submit'])) {

          //Obtengo valores input formulario usando POST.
          $nombre = $_POST['name'];
          $email = $_POST['email'];
          //$subject = $_POST['subject1'];   
          $mensaje = $_POST['message'];
          $para = 'clopez@transtotalperu.com';


          //Compones nuestro correo electronico

          //Incluimos libreria PHPmailer (deberas descargarlo).
          //require'class.phpmailer.php';

          //Nuevo correo electronico.
          $mail = new PHPMailer;
          //Caracteres.
          $mail->CharSet = 'UTF-8';

          $mail->isSMTP();
          $mail->Host="smtp.gmail.com";
          $mail->Port=587;
          $mail->SMTPSecure="tls";
          $mail->SMTPAuth=true;
          $mail->Username="clopez@transtotalperu.com";
          $mail->Password="UtherTam1!.";

          //De dirección correo electrónico y el nombre
          $mail->From = "info@tudominio.com";
          $mail->FromName = "Nombre de dominio";

          //Dirección de envio y nombre.
          $mail->addAddress($para, $nombre);
          //Dirección a la que responderá destinatario.
          $mail->addReplyTo("info@tudominio.com","Tunombre");

          //BCC ->  incluir copia oculta de email enviado.
          $mail->addBCC("copia@tudominio.com");

          //Enviar codigo HTML o texto plano.
          $mail->isHTML(true);

          //Titulo email.
          $mail->Subject = "Test con Formulario";
          //Cuerpo email con HTML.
          $mail->Body = "
                  <h1>Envio libreria PHPMailer</h1>

                  Nombre: $nombre<br /> 
                  Email: $email <br />
                 Mensaje: $mensaje <br />

          "; 

        //Comprobamos el envio.
        if(!$mail->send()) {                   
          echo '
          <script type="text/javascript">
              $(document).ready(function() {
          swal({ 
            position: "top-end",
            title: "Hubo un problema :(, vuelva a intentar.",
            showConfirmButton: true,
            allowOutsideClick: false,
            type: "error",
            }).then(function() {
              // Redirect the users
              window.location.href = "/WEB_GLOBALDESK/contactenos.php";
              })});
          </script>
          ';
        } else {
          echo '
          <script type="text/javascript">
              $(document).ready(function() {
          swal({ 
            position: "top-end",
            title: "Mensaje enviado correctamente.",
            showConfirmButton: true,
            allowOutsideClick: false,
            type: "success",
            }).then(function() {
              // Redirect the users
              window.location.href = "/WEB_GLOBALDESK/contactenos.php";
              })});
          </script>
          ';
        } 
      }
    ?>