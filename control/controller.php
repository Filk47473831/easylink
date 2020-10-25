<?php
include("../../eezeelink_db.php");
include("../../eezeelink.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  if(isset($_POST['getLink'])) {
    echo getLink($_POST['getLink']);
  }
  
}