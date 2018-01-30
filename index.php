<?php 
	include 'includes/config.php';
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<meta name="description" content="">
		<meta name="author" content="">
		<title>Art Event</title>

		<link href="assets/css/lib/bootstrap/css/bootstrap.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link href="assets/css/carousel.css" rel="stylesheet">
		<link href="assets/css/cards.css" rel="stylesheet">
		<link href="assets/css/index.css" rel="stylesheet">
		<link href="assets/css/plans.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="assets/css/login.css">
		<style type="text/css">
			.container{
				width: 100% !important;
			}
		</style>
	</head>
	<body>
		<!-- NAVBAR START -->
		<?php 
			include 'includes/navbar.php';
		?>
		<!-- NAVBAR END -->
		<section class="wrapper" data-ng-view>
		</section>
		<script src="assets/js/lib/jquery/jquery.js"></script>
		<script src="assets/js/require.js" data-main="assets/js/lib/main.js"></script>
		<script src="assets/js/common_utils.js"></script>
  </body>
</html>
