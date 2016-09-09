<?php
    $uname = $_GET['username'];
    $pw = $_GET["password"];
    if($uname == "admin" && $pw == "123"){
        echo "{'flag':'1'}";
    }else{
         echo "{'flag':'2'}";
    }
?>