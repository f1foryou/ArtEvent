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

		<link href="assets/css/carousel.css" rel="stylesheet">
		<link href="assets/css/cards.css" rel="stylesheet">
		<link href="assets/css/index.css" rel="stylesheet">
		<link href="assets/css/plans.css" rel="stylesheet">
		<link href="assets/css/gallery.css" rel="stylesheet">
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
		<footer>
			<p class="pull-right"><a href="#">Back to top</a></p>
			<p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
		</footer>		
		<!-- /.container -->
		<script src="assets/js/lib/jquery/jquery.js"></script>
		<script src="assets/js/require.js" data-main="assets/js/lib/main.js"></script>
  </body>
</html>

