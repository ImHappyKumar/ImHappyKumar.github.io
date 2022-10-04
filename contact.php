<?php
// Database Connection Code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','contact');

// get the post records
$txtName = $_POST['txtName'];
$txtPhone = $_POST['txtPhone'];
$txtEmail = $_POST['txtEmail'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`id`, `name`, `phone`, `email`, `message`) VALUES ('0', '$txtName', '$txtPhone', '$txtEmail', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Message Sent.";
}
else
{
    echo "Oops! Something went wrong.";
}
?>