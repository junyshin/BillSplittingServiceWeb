<?php
ob_start();
session_start();
?>

<?
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
  <link rel="icon" href="../images/Iconsmind-Outline-ID-Card.ico" type="image/x-icon" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="magic.js"></script>
  <title>Login Page</title>

  <link rel="stylesheet" type="text/css" href="../assets/css/login.css">
  <script type="../assets/js/login_registration.js"></script>
    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap-4.0.0-alpha.6/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  </head>

  <body style="background:#CCC">

  <div class = "container">
      <?php

      $localhost = "mydatabill.chohqvcgbmpc.us-east-2.rds.amazonaws.com";
      $mysql_user = "hcibillteam";
      $mysql_password = "Elgordo21";
      $mydb = "billdata";

      $mysqli = mysqli_connect($localhost, $mysql_user, $mysql_password, $mydb);

      /* check connection */
      if (mysqli_connect_errno()) {
          printf("Connect failed: %s\n", mysqli_connect_error());
          exit();
      }

      $result = mysqli_query($mysqli,"SELECT email, password FROM users");

      $msg = '';

      if (isset($_POST['login']) && !empty($_POST['email']) && !empty($_POST['password'])){
          $exitvalue = 0;
          while ($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
              if ($_POST['email'] == $row[0] && $_POST['password'] == $row[1]){
                  $msg = 'You have entered valid email and password';
                  $exitvalue = 1;
                  header("Location: Main_Page.html");
                  break;
              }else {
                  $exitvalue = 0;
              }
          }
          if ($exitvalue == 0){
              $msg = 'You have not entered a invalid email and/or password';
          }
      }

      mysqli_close($conn);
      ?>
  </div> <!-- /container -->

    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Bill Splitting Service</a>
      <a class="navbar-brand" href="#"><img style="border-radius:50%;height:40px" src="../images/dollarsign.png"></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
         </ul>
      </div>
    </nav>

  <div class="spacer" style="height:60px"><p></p></div>

  <div class="container">
        <div class="card card-container">
            <p class = "form-signin-heading"><?php echo $msg; ?></p>
            <img id="profile-img" class="profile-img-card" src="../images/unknown-user.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin" role="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
                <input type="email" name="email" class="form-control" placeholder="Email address" required autofocus>
                <input type="password" name="password" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" name="login">Sign in</button>
            </form><!-- /form -->
            <a href="registration.php" class="forgot-password">
                Create an account
            </a>
        </div><!-- /card-container -->
    </div><!-- /container -->


  <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
