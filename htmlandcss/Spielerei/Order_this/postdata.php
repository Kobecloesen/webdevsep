<?php
  if ($_POST['process'] == 1) {    
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];
    if (empty($username) && empty($password)){
      echo "Howdy, stranger";
    }else{
      echo "Hello there, ".$firstname." ".$lastname." ".$email;
    }
  }
?>
