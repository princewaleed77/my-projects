<?php
require_once("incl/header.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    echo $id;

    $query = "select img from projects where id=$id";
    $run_query = mysqli_query($conn, $query);
    $result = mysqli_fetch_assoc($run_query);
    $imgName = $result['img'];
    $file_to_delete = "images/$imgName";
    unlink($file_to_delete);

// --------------------------------------
    $query = "delete from projects where id = $id";
    $run = mysqli_query($conn, $query);
    header("location:index.php");

    // to delete from uploded folder

}