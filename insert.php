<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<?php
$name = $_POST['name'];
$email= $_POST['email'];
$subject=$_POST['subject'];
$message =$_POST['message'];
$con = mysqli_connect("localhost","root","","feedback");
$sql="INSERT INTO fb (name,email,subject,message) values ('$name','$email','$subject','$message')";
$r=mysqli_query($con,$sql);
if($r){
    echo "feedback sent successfully";
}

?>
<script>
swal({
  title: "Nice job!",
  text: "Your feedback has been sent.",
  icon: "success",
});
</script>