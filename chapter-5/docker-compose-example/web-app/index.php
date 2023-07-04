<?php

// using DB credentials from environment variables

$conn = new mysqli(
  $_ENV['DB_HOST'], 
  $_ENV['DB_USER'], 
  $_ENV['DB_PASSWORD'], 
  $_ENV['DB_NAME']
);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>