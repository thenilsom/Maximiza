<?php

require '../vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/teste', function() use ($app){
	$resposta = array('message'=>'sucesso');
	$myJSON = json_encode($resposta);
	echo($myJSON);
});

$app->post('/login', function () use ($app){
  $request = $app->request();
  $body = $request->getBody();
  print $body;
});

$app-> run();

?>
