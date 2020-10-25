<?php include("../eezeelink_db.php");
include("../eezeelink.php");
if(substr($_SERVER['REQUEST_URI'],1) !== "") { followLink(substr($_SERVER['REQUEST_URI'],1)); } ?>
<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <title>eeZee link</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="eeZee Link" />
  <meta name="keywords" content="eeZee Link" />
  <meta name="author" content="Chris Groves">
  <meta name="date" content="2020-10-25" />
  <meta name="Referrer-Policy" value="no-referrer" />
  <meta name="robots" content="noindex,nofollow">
  <meta property="og:description" content="eeZee Link" />
  <meta property="og:title" content="eeZee Link">
  <meta property="og:url" content="https://eezee.link" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="eeZee Link" />

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  
  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <div class="one-full column" style="margin-top: 25%">
        <h4>eeZee link</h4>
        <p>Get an easy to read, easy to share link.</p>
        <input autofocus class="u-full-width" type="text" placeholder="paste url here ( must begin with http )" id="linkInput">
      </div>
    </div>
    <div class="row">
      <div id="result" class="one-full column" style="margin-top: 4%"></div>
    </div>
  </div>

  <!-- Footer
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="footer">
    <div class="row">
      <div class="one-full column">
		  <p><small>&copy; Copyright Chris Groves 2020</small></p>
      </div>
    </div>
  </div>
	
<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
<!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script src="js/clipboard.js"></script>
<script src="js/script.js"></script>
	
</body>
</html>
