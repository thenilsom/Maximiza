/*
 * LoginController.js
 * 
 * 
 * @author Paulo Leonardo de O. Miranda.
 * 
 */
angular.module('app').controller('LoginController', ['$scope', '$http', '$confirm', '$message', 'Credential' , '$location', function($scope, $http, $confirm, $message, credential, $location) {	
	var $modelConfirm = new $confirm();	
	
	$scope.usuario = {};

	/** 
	 * Realiza o logout do Usuário da aplicaçao. 
	 */
	$scope.logout = function() {
		$modelConfirm.addConfirm({msg : 'Deseja realmente sair do sistema?', actionYes : function() {
			$http.post('usuario/logout').success(function(data) {
				credential.invalidate();
				$location.path('/login');
			}).error(function(data) {
				$message.addMsgDanger(data);
			});
		}});
	}
	
	/**
	 * Autentica o Usuário segundo o 'login' e 'senha' informado.
	 */
	$scope.login = function() {

		//autenticacao static TODO: implementar depois autenticação no servidor
		var autenticacao = {};

		var acessRoles = ['ADMIN'];
		var login = 'd';
		var nome = 'Usuario de Testes';
		var token ='b29c7c46-fef2-4f08-8748-3456b93960bd' // gerar codigo random

		autenticacao.acessRoles = acessRoles;
		autenticacao.login = login;
		autenticacao.nome = nome;
		autenticacao.token = token;

		/*
		//seta as credenciais
		credential.init(autenticacao.nome, autenticacao.token, autenticacao.acessRoles);
		$location.path('/principal');
		*/

		/*
		$http.post('usuario/login', $scope.usuario).success(function(data, status, headers, config) {
			credential.init(data.nome, data.token, data.acessRoles);
			
			$location.path('/principal');
		}).error(function(data, status, headers, config) {
			$message.addMsgDanger(data);
		});

		*/

		var usuario = {nome:'arroz', senha: 123, login: 'Leonardo'};
		
        $http({
            url: "php/usuario.php/login",
            data : usuario,
            method: 'POST',
            headers : {'Content-Type':'application/json; charset=UTF-8'}
        }).success(function(retorno){
            console.log(retorno);
        }).error(function(err){
            console.log(err);
        });
    	
	}

}]);