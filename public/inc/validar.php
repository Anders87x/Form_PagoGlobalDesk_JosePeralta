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

       //Reseteo variables a 0, aun no necesario, ya que redirecciono en caso estar correcto.
       //$nombre = $email = $subject = $mensaje = $para = $phone =  NULL;
       $nombre = $email = $subject = $mensaje = $para =  NULL;

       if (isset($_POST['submit'])) {

          //Obtengo valores input formulario usando POST.
          $nombre = $_POST['name'];
          $email = $_POST['email'];
          //$subject = $_POST['subject1'];   
          $mensaje = $_POST['message'];
          $para = 'info@globaldesk.pe';


          //Componentes del correo electronico

          //require'class.phpmailer.php';

          //Nuevo correo electronico.
          $mail = new PHPMailer;
          //Comienzo a armar PHPMailer
          $mail->CharSet = 'UTF-8';
          $mail->isSMTP();
          $mail->Host="smtp.gmail.com";
          $mail->Port=587;
          $mail->SMTPSecure="tls";
          $mail->SMTPAuth=true;
          $mail->Username="contacto.globaldesk@transtotalperu.com";
          $mail->Password="*yn3p9xxj9";

          //Remitente
          $mail->From = "contacto.globaldesk@transtotalperu.com";
          $mail->FromName = "Contacto Globaldesk (Transtotal)";

          //Receptor.
          $mail->addAddress($para, $nombre);
          //Dirección a la que responderá destinatario.
          $mail->addReplyTo("info@globaldesk.pe","Info Globaldesk");

          //BCC ->  incluir copia oculta de email enviado.
          $mail->addBCC("clopez@transtotalperu.com");

          //Escogo si enviar a través de codigo HTML o texto plano.
          $mail->isHTML(true);

          //Asunto.
          $mail->Subject = "Contáctenos Globaldesk: $nombre";
          //Cuerpo email con HTML.
          $mail->Body = "
                  <h3>Recibió un correo de la página Contáctenos Globaldesk</h3>
                  <h4>Detalles:</h4>
                  Nombre: $nombre <br /> 
                  Email: $email <br />
                  Mensaje: $mensaje <br />
                  "; 

          //$mail->send();
          //window.location='contac.html';
        
          //Utilizo SweetAlert 2 para muestra del correo enviado en caso sea satisfactorio
          //Si hay error, muestra un alert.
          
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