<?php

$studentID = $_POST['studentID'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$projectTitle = $_POST['projectTitle'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$timeSlot = $_POST['timeSlot'];

$servername = "localhost";
$username = "root";
$password = "";
$database = "project3";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error) {
    echo "connection failed";
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into students(studentID, firstName, lastName, projectTitle, email, phoneNumber, timeSlot) values(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $studentID, $firstName, $lastName, $projectTitle, $email, $phoneNumber, $timeSlot);
    $stmt->execute();
    echo "registration success";
    $stmt->close();
    $conn->close();
}

?>
