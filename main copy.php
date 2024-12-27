<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "project3";

$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$studentID = $_POST['studentID'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$projectTitle = $_POST['projectTitle'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$timeSlot = $_POST['timeSlot'];


$sql = "INSERT INTO students (studentID, firstName, lastName, projectTitle, email, phoneNumber, timeSlot)
        VALUES ('$studentID', '$firstName', '$lastName', '$projectTitle', '$email', '$phoneNumber', '$timeSlot')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
