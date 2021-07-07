<?php
require_once('incl/header.php');

if(isset($_POST['submit']))
{
    $name = htmlspecialchars(trim($_POST['name']));
    $desc = htmlspecialchars(trim($_POST['desc']));
    $file = $_FILES['file'];
    $url = htmlspecialchars(trim($_POST['url']));
    $repo = htmlspecialchars(trim($_POST['repo']));
    
    echo $url .$repo;

    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileError = $file['error'];

    $ext = pathinfo($fileName, PATHINFO_EXTENSION);
    $fileNewName = uniqid().".".$ext;

    $errors = [];
    if (empty($name)) {
        $errors[] = 'Name is required';

    }elseif (strlen($name)<5 ||strlen($name)>255 ) {
        $errors[]='Length must be (5 - 255)';

    }elseif (!is_string($name) || is_numeric($name)) {
        $errors[] =  'Name must be string';
    }

    if (empty($desc)) {
        $errors[] = 'desc is required';

    }elseif (strlen($desc)<5 ||strlen($desc)>1000 ) {
        $errors[]='Length must be (5 - 1000)';

    }

if ($fileError >0) {
    $errors[] = 'there is an error while uploading the file';

}
if (!filter_var($url,FILTER_VALIDATE_DOMAIN)) {
    $errors[] = 'WEBSITE URL MUST BE VALID URL';
}
if (!filter_var($repo,FILTER_VALIDATE_DOMAIN)) {
    $errors[] = 'github MUST BE VALID URL';
}
if (empty($errors)) {
   $query = "insert into projects (name, description, img, url, repo) values ('$name', '$desc', '$fileNewName','$url','$repo')";
   $run_query = mysqli_query($conn, $query);
   move_uploaded_file($fileTmpName, "images/$fileNewName");
   header("location:index.php");
}else {
    $_SESSION['errors'] = $errors;
    header("location:addProjectForm.php");
}

}