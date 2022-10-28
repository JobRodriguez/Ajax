<?php 

require_once '../clases/users.class.php';
require_once '../clases/response.class.php';

$_user = new users;
$_respuestas = new response;

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $datos = $_POST;
    $dataArray = $_user->post($datos);
    if($dataArray > 0){
        header("Location:/APIREST_5TID1/views/users.php"); 
    }
    else{
        header("Location:/APIREST_5TID1/views/users.php?err=1;"); 
    }

}elseif($_SERVER['REQUEST_METHOD'] == "GET"){
    if(isset($_GET['name'])){
        $name = $_GET['name'];
        $user = $_user->buscarUsuarioNombre($name);
        if($user  != 0)
            echo json_encode($user);
        else
            echo 0;
    }else{
        $users = $_user->listaUsuarios();
        
        if($users != 0)
           echo json_encode($users);
        else
            echo 0;
    }

}else{
    echo "Método no permitido";

}
?>