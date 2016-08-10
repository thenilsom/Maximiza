<?php

require '../vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->post('/login','testarLogin');

$app->get('/teste', function() use ($app){
	$resposta = array('message'=>'sucesso');
	$myJSON = json_encode($resposta);
	echo($myJSON);
});

	function testarLogin(){
		 $request = \Slim\Slim::getInstance()->request();
		 $produto = json_decode($request->getBody());
		 
		 echo json_encode($produto->nome);
	}


$app-> run();

?>
