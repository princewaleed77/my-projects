<?php 
require_once("incl/header.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];

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

    // second query for image 
    $query = "select img from projects where id = $id";
    $query_run  = mysqli_query($conn, $query);
    $img = mysqli_fetch_assoc($query_run);
    print_r($img);
    $oldImgName = $img['img'];
    echo $oldImgName;


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

if (!filter_var($url,FILTER_VALIDATE_DOMAIN)) {
    $errors[] = 'WEBSITE URL MUST BE VALID URL';
}
if (!filter_var($repo,FILTER_VALIDATE_DOMAIN)) {
    $errors[] = 'github MUST BE VALID URL';
}
if (empty($errors)) {
    if (empty($fileName)) {
        $query = "update projects set name = '$name', description = '$desc', img = '$oldImgName', url = '$url', repo = '$repo' where id = $id";
        $run_query = mysqli_query($conn, $query);
        header("location:index.php");
    }else {
            $query = "update projects set name = '$name', description = '$desc', img = '$fileNewName', url = '$url', repo = '$repo' where id = $id";
            $run_query = mysqli_query($conn, $query);
            move_uploaded_file($fileTmpName, "images/$fileNewName");
            header("location:index.php");
        
        }
    }else {
            print_r($errors);
        }



}
