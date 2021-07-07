<?php

require_once('incl/header.php');

if(!isset($_SESSION['email']))
{
    header("location:login.php");
}
$query='SELECT * FROM projects';
$run_query=mysqli_query($conn,$query);
$projects=mysqli_fetch_all($run_query,MYSQLI_ASSOC);
?>

<?php if(isset($_SESSION['email'])) { ?>
<a class="btn btn-primary m-3" href="addProjectForm.php">addProduct</a>
<?php } ?>
<?php if(!isset($_SESSION['email'])) { ?>
<a class="btn btn-primary m-3" href="login.php">Login</a>
<?php } ?>
<?php if(isset($_SESSION['email'])) { ?>
<a class="btn btn-danger m-3" href="logout.php">Logout</a>
<?php } ?>
<div class="container mt-5">
 <div class="row py-5">
 <?php 
 foreach ($projects as $project) {
     ?>
 
   <div class="col-md-4 p-4">
   
   <img class="img-fluid" src="images/<?php echo $project['img']?>">
       
    <h1><?php echo $project['name']?></h1>
    <a  class="btn btn-primary" href="showproject.php?id=<?php echo $project['id']?>">View-Detalis</a>
    
    <?php if(isset($_SESSION['email'])) {?>
    <a class="btn btn-success" href="edit.php?id=<?php echo $project['id']?>">Edit</a>
    <a class="btn btn-danger" href="delete.php?id=<?php echo $project['id']?>">Delete</a>
    <?php }?>
   </div>
   <?php }?>
   
 </div>
</div>
