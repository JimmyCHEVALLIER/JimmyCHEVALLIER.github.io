<?php
session_start();
if ( isset( $_SESSION['user_id'] ) ) {
} else {
	echo "<script type='text/javascript'>  window.location='login.php'; </script>";
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body style="position: relative; display: block;">
		<a style="position: relative;float: right;margin-right: 8px;" href="logout.php">Logout</a>
		<div class="container">
			<div class="page-header">
				<h1>- UGA -
				<h1>Projet de veille concurrentielle - Hoomano</h1>
			</div>
			<div class="row">
				<div class="span8">
					<div id="canvas">
					</div>
				</div>
				<div class="span4">
					<div class="well sidebar-nav">
						<div class="sidebar-inner">

							<div class="btn-group">
								<a data-toggle="dropdown" href="#" class="btn dropdown-toggle">
									<span class="language-top">
										<i class="icon-font"></i>
										<span> </span>
										<span>Choisir un type d'acteur</span>
									</span>
									<span> </span>
									<span class="caret">
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="#" id="startup" class="language-select">Stratup</a>
									</li>
									<li>
										<a href="#" id="pme" class="language-select">PME</a>
									</li>
									<li>
										<a href="#" id="constructeur" class="language-select">Constructeur</a>
									</li>
									<li>
										<a href="#" id="equipementier" class="language-select">Equipementier</a>
									</li>
									<li>
										<a href="#" id="collaboration" class="language-select">Collaboration</a>
									</li>
									<li>
										<a href="#" id="editeur_logiciels" class="language-select">Editeur logiciels</a>
									</li>
									<li class="divider"></li>
									<li>
										<a href="#" class="language-reset"> 
											<i class="icon-font"></i>
											<span> </span>
											<span>Choisir un type d'acteur</span>
										</a>
									</li>
								</ul>
							</div>

							<p></p>
							<div class="btn-group">
								<a data-toggle="dropdown" href="#" class="btn dropdown-toggle">
									<span class="country-top">
										<i class="icon-globe"></i>
										<span> </span>
										<span>Choisir un pays</span>
									</span>
									<span> </span>
									<span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="#" id="cn" class="country-select"> 
											<img src="img/flags/cn.png"> Chine
										</a>
									</li>
									<li>
										<a href="#" id="kr" class="country-select"> 
											<img src="img/flags/kw.png"> Corée du Sud
										</a>
									</li>
									<li>
										<a href="#" id="fr" class="country-select"> 
											<img src="img/flags/fr.png"> France
										</a>
									</li>
									<li>
										<a href="#" id="ir" class="country-select"> 
											<img src="img/flags/ir.png"> Irelande
										</a>
									</li>
									<li>
										<a href="#" id="jp" class="country-select"> 
											<img src="img/flags/jp.png"> Japon
										</a>
									</li>
									<li>
										<a href="#" id="ch" class="country-select"> 
											<img src="img/flags/ch.png"> Suisse
										</a>
									</li>
									<li>
										<a href="#" id="us" class="country-select"> 
											<img src="img/flags/us.png"> USA
										</a>
									</li>
									<li class="divider"></li>
									<li>
										<a href="#" class="country-reset"> 
											<i class="icon-globe"></i>
											<span> </span>
											<span>Choisir un pays</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="hero-unit init-info">
				<h3>Sélectionnez une entreprise dans notre cadran de Gartner pour afficher plus d'informations</h3>
			</div>
			<div class="row init-hidden">
				<div class="span12">
					<ul class="thumbnails">
					</ul>
				</div>
			</div>
			<div class="row init-hidden">
				<div class="span12">
					<ul class="breadcrumb">
						<li>
							<span id="name"></span>
							<span class="divider">|</span>
						</li>
						<li>
							<span id="link"></span>
							<span class="divider">|</span>
						</li>
						<li>
							<span id="flag"></span>
							<span class="divider">|</span>
						</li>
						<li>
							<span id="product"></span>
							<span class="divider">|</span>
						</li>
						<li>
							<span id="language"></span>
						</li>
					</ul>
				</div>
			</div>
			<div class="row init-hidden">
				<div class="span12">
					<p id="description"></p>
					<h3 id="title_strengths">Forces</h3>
					<div id="strengths"></div>
					<h3 id="title_cautions">Faiblesses</h3>
					<div id="cautions"></div>
					<h3 id="title_neutral">Informations manquantes</h3>
					<div id="neutral"></div>
					<h3>Note moyenne</h3>
					<div id="conclusion"></div>
					
				</div>
			</div>
				<hr>
				<div class="row">
					<div class="span12"></div>
					<p class="pull-right">
						Etudiants
						<span>| </span>
						<span>Jimmy CHEVALLIER</span>
						<span>| </span>
						<span>William GRAVER</span>
					</p>
				</div>
		</div>
		<script src="js/jquery.min.js"></script>
		<script src="js/d3.v2.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>