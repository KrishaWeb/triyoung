<!DOCTYPE html>
<html>
<head>
	<?php include('include/head.php') ?>
	<style>
		.alllinklist {
			padding: 100px 30px;
		}
		.alllinklist ul li {
			margin-bottom: 10px;
		}
		.alllinklist ul li a{
			position: relative;
			font-size: 15px;
			line-height: 25px;
			padding-left: 25px;
			color: #222222;
			font-weight: 700;
			font-family: 'Raleway', sans-serif;
			letter-spacing: 0.1em;
			transition: all 0.3s ease-in-out;
		}
		.alllinklist ul li a:hover {
			color: #623394;
		}
		.alllinklist ul li a:before {
			content: "\f105";
			font-family: "FontAwesome";
			font-size: 18px;
			line-height: 25px;
			position: absolute;
			left: 0;
			top: -2px;
			color: #090909;
		}
	</style>
</head>
<body>
<?php include('include/header.php') ?>

<div class="alllinklist">
	<div class="container">
		<ul>
			<li><a target="_blank" href="index.php">Home</a></li>
			<li><a target="_blank" href="about.php">About Us</a></li>
			<li><a target="_blank" href="services.php">services</a></li>
			<li><a target="_blank" href="blog.php">blog</a></li>
			<li><a target="_blank" href="blog-detail.php">blog-detail</a></li>
			<li><a target="_blank" href="team-detail.php">team-detail</a></li>
			<li><a target="_blank" href="faq.php">faq</a></li>
			<li><a target="_blank" href="contact.php">contact</a></li>
			<li><a target="_blank" href="404.php">404</a></li>
			<li><a target="_blank" href="thank-you.php">thank you</a></li>
		</ul>
	</div>
</div>

	<?php include('include/footer.php'); ?>
	<?php include('include/script.php'); ?>

</body>
</html>