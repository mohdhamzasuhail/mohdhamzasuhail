<?php

  $servername = "localhost";
  $username = "root";
  $password = "1358";
  $dbname = "portfolio_visitors";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $name = $_POST['name'];

  if(!isset($name) || trim($name) == '')
    {
       echo "You did not fill out the required fields.";
    }
  else {
    $sql = "INSERT INTO username (name) VALUES ('$name')";

    $result = $conn->query($sql);

    header('Location: portfolio.html');
  }


 ?>
