<?php
require_once("incl/header.php");
// guard to prevent go to another page using address bar
if(!isset($_SESSION['email']))
{
    header("location:index.php");
}
// ---------------------------------
if(isset($_SESSION['errors']))
{
    print_r($_SESSION['errors']);
}
unset($_SESSION['errors']);
?>
<div class="container py-5">
 <form  action="handel-addProjectForm.php" method="post" enctype="multipart/form-data">
 <label class="mt-2">Name* :</label>
 <input class="form-control" name="name" type="text" placeholder="Enter project Name">
 <label class="mt-2">Description* :</label>
 <textarea class="form-control" name="desc" id="" placeholder="Please Enter Description" ></textarea>
  <label class="mt-2">Img *:</label>
  <input type="file" name="file" class="form-control">
  <label class="mt-2">Website-URL :</label>
 <input class="form-control" name="url" type="text" placeholder="Enter webtsite url">
 <label class="mt-2">Repo-URL :</label>
 <input class="form-control" name="repo" type="text" placeholder="Enter github url">

 <button class="btn btn-success mt-4" type="submit" name="submit">Add</button>
 </form>

</div>

<?php
require_once("incl/footer.php");
?>