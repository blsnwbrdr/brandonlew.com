<?php
$scores = json_decode(file_get_contents("scores.json"));
$data = json_decode($_GET["data"]);
array_push($scores,$data);
file_put_contents("scores.json", json_encode($scores))
?>