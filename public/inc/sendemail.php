
<?php

    $to = "clopez@transtotalperu.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Mensaje de prueba de p�gina web Globaldesk - Opci�n: Cont�ctenos";

    $fields = array();
    $fields{"name"}     = "Name";
    $fields{"email"}    = "Email";
    $fields{"phone"}    = "Phone";
    $fields{"message"}  = "Message";

    $body = "Here is the message you got:\n\n"; 
    foreach($fields as $a => $b){   
        $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); 
    }

    $send = mail($to, $subject, $body, $headers);
  

?>
