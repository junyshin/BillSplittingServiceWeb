<?php
ob_start();
session_start();
?>

<?
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
?>

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

    $result = mysqli_query($mysqli,"SELECT email, password, firstname, lastname, id FROM users");

    if (isset($_POST['change']) && !empty($_POST['new_password']) && !empty($_POST['new_password_dup'])) {
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

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
	<link rel="icon" href="../images/Iconsmind-Outline-ID-Card.ico" type="image/x-icon" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="magic.js"></script>
    <script src="user.js"></script>
    <title>Settings</title>

    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap-4.0.0-alpha.6/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template -->
    <link href="navbar-top-fixed.css" rel="stylesheet" type="text/css">
  </head>

  <body style="background:#CCC">

    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="Main_Page.html"><div id="username"></div></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="Main_Page.html">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="bill_creation_form.html" onClick="addBill()">Create New Bill</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Settings.php">Settings<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-time">
            <a class="nav-link" href="https://drive.google.com/open?id=0B5Pt9UqIqBILa3JZZzROakpWaXc" target="_blank">Help</a>
          </li>
        </ul>
      </div>
    </nav>

    <div style="position:absolute;top:20%;width:80%;height:60%;left:10%;background:white;z-index:2">
      <div style="position:absolute; top:10%; left:10%; width: 90%; height:90%;">
          <h3>Change Password</h3>
          <p class = "form-signin-heading"><?php echo $msg; ?></p>
          <form class="form-signin" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
              <h4>New Password:</h4>
              <input type="text" name="new_password" placeholder="New password" required autofocus/>
              <input type="text" name="new_password_dup" placeholder="Re-type new password" required/>
              <button type="submit" name="change">Submit</button>
          </form>
          <a href="loginPage.php"><h3>Log out</h3></a>
          <a href="loginPage.php"><h3 style="color:red">Delete Account</h3></a>
      </div>
    </div>
  </body>