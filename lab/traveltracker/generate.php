<?php
ini_set('display_errors', 1);

$dirName = uniqid();
mkdir("usermaps/" . $dirName);
$newHTML = fopen("usermaps/" . $dirName . "/index.html", "w") or die("Unable to open file!");
$html = ('<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link href="https://fonts.googleapis.com/css?family=Chewy|Titillium+Web:300,400" rel="stylesheet">
	<link href="../../css/bootstrap.min.css" rel="stylesheet">
	<link href="../../css/style.min.css" rel="stylesheet">
</head>
<body>
  <a href="../../index.html" target="_blank"><h1 id="header">Travel Tracker</h1></a>
  <div id="map"></div>
	<div id="congrats"></div>
	<div id="shareButton">
		<a href="mailto:?body=http://brandonsco.de/portfolio/traveltracker/usermaps/' . $dirName . '">
			<button id="submit" class="btn" type="button">share</button>
		</a>
	</div>
  <ol id="visitedList"></ol>
  <script src="../../js/jquery.min.js"></script>
  <script src="../../js/usermap.min.js"></script>
  <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQW5lXcFvX7xMEAQGJWtyS1JwXljCHor8&callback=initMap"></script>
</body>
</html>');
file_put_contents("usermaps/" . $dirName . "/index.html", $html);
$newJSON = fopen("usermaps/" . $dirName . "/locations.json", "w") or die("Unable to open file!");
$data = $_GET["data"];
file_put_contents("usermaps/" . $dirName . "/locations.json", $data);
echo json_encode($dirName);

$adminJSON = json_decode(file_get_contents("admin.json"));
array_push($adminJSON,$dirName);
file_put_contents("admin.json", json_encode($adminJSON));
?>
