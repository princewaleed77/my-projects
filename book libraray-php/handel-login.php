<?php

require_once('incl/header.php');


if(isset($_POST['submit']))
 {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "select * from users where email = '$email'";
    $run_query = mysqli_query($conn,$query);
    // echo mysqli_num_rows($run_query);
    if(mysqli_num_rows($run_query)>0) {
        $user = mysqli_fetch_assoc($run_query);
        $iscorrect = password_verify($password,$user['password']);
        if($iscorrect)
        {
            $_SESSION['email'] = $email;
            header("location:index.php");

        }else{
            $_SESSION['errors'] = "password is not correct";
            header("location:login.php");
        }
    }else
    {
        $_SESSION['errors'] = "email is not found";
        header("location:login.php");
    }
}else
{
    header("location:login.php");
}
?>