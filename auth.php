<?php 
require_once 'clases/auth.class.php';
require_once 'clases/response.class.php';

$_auth = new auth;
$_respuestas = new response;

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $postData = $_POST;

   $dataArray = $_auth->logIn(json_encode($postData));
   $response = $dataArray['response'];
    $data = $dataArray['user'];
    $status = $response['status'];

   if($status = "ok"){
        session_start();
             $_SESSION['NombreCompleto'] = $data['Name'] . " " .$data['Lastname'];
        $_SESSION['Nombre'] = $data['Name'];
        $_SESSION['userId'] = $data['userId'];
        $_SESSION['personId'] = $data['personId'];
        $_SESSION['Lastname'] = $data['Lastname'];
        $_SESSION['RFC'] = $data['RFC'];
        $_SESSION['user'] = $data['user'];
        $_SESSION['userType'] = $data['userType'];
        $_SESSION['userActive'] = $data['userActive'];
        echo true;
        //header("Location:/APIREST_5TID1/views/users.php"); // 5TID1/APIREST -> APIREST_5TID1
    }else{
        echo false;
        //echo "<script>alert('$response');</script>";
        //header("Location:/APIREST_5TID1/index.php"); // 5TID1/APIREST -> APIREST_5TID1

    }
}else{
    echo "Método no permitido";

}


?>