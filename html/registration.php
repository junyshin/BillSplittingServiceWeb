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
  <script src="user.js"></script>
  <title>Login Page</title>

  <link rel="stylesheet" type="text/css" href="../assets/css/login.css">
  <script type="../assets/js/login_registration.js"></script>
    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap-4.0.0-alpha.6/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  </head>

  <body style="background:#CCC">
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

      $msg = '';

      if (isset($_POST['register']) && !empty($_POST['email']) && !empty($_POST['password'])  && !empty($_POST['firstname']) && !empty($_POST['lastname'])) {
          $email_reg = $_POST['email'];
          $password_reg = $_POST['password'];
          $firsname_reg = $_POST['firstname'];
          $lastname_reg = $_POST['lastname'];
          $repassword_reg = $_POST['retypepassword'];

          $result = mysqli_query($mysqli,"SELECT email, id FROM users");

          while ($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
              if ($_POST['email'] == $row[0]){
                  $exitvalue = 0;
                  break;
              }else {
                  $exitvalue = 1;
              }
          }

          if ($exitvalue == 0){
              $msg = "This email exist already. Please choose another";
          }else {

              if ($password_reg == $repassword_reg){
                  $sql = "INSERT INTO users (firstname, lastname, email, password)
                  VALUES ('$firsname_reg', '$lastname_reg', '$email_reg', '$password_reg')";

                  if (mysqli_query($mysqli, $sql)) {
                      $msg = "New record created successfully";

                      $result = mysqli_query($mysqli,"SELECT email, id FROM users");
                      while ($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
                          if ($email_reg == $row[0]){
                              $userId = $row[1];
                              $exitvalue = 1;
                              break;
                          }
                      }
                  } else {
                      $msg = "Error: " . $sql . "<br>" . mysqli_error($mysqli);
                      exit();
                  }
              }else {
                  $msg = $msg . "\nNot the same password. Please try again";
              }

          }
      }

      mysqli_close($mysqli);
      ?>

  <script type="text/javascript">
      var userEmail = "<?php echo $email_reg; ?>";
      var userName = "<?php echo $firsname_reg . " " . $lastname_reg; ?>";
      var userId = <?php echo $userId; ?>;
      var jumpToo = <?php echo $exitvalue; ?>;
      if (jumpToo == 1) window.location.href = 'Main_Page.html';
  </script>


    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Bill Splitting Service</a>
      <a class="navbar-brand" href="#"><img style="border-radius:50%;height:40px" src="../images/dollarsign.png"></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="loginPage.php">Main Page<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>

  <div class="spacer" style="height:60px"><p></p></div>

  <div class="container" action="">
        <div class="card card-container">
            <p class = "form-signin-heading"><?php echo $msg; ?></p>
            <img id="profile-img" class="profile-img-card" src="../images/unknown-user.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
                <input type="text" name="firstname" class="form-control" placeholder="First name" required autofocus>
                <input type="text" name="lastname" class="form-control" placeholder="Last name" required>
                <input type="email" name="email" class="form-control" placeholder="Email address" required>
                <input type="password" name="password" class="form-control" placeholder="Password" required>
                <input type="password" name="retypepassword" class="form-control" placeholder="Re-type Password" required>
                <button class="btn btn-lg btn-primary btn-block btn-signin" name="register" type="submit">Sign in</button>
            </form><!-- /form -->
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
