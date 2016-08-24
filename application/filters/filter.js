/**
 * Filter.js
 */

var directives = angular.module('appFilters', []);

/**
 * Filtro Responsavel por Formatar CNPJ
 */
directives.filter('cnpj', function() {
	  return function(input) {
	  	var str = input+ '';
	        str=str.replace(/\D/g,'');
	    	str=str.replace(/^(\d{2})(\d)/,'$1.$2');
	    	str=str.replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3');
	    	str=str.replace(/\.(\d{3})(\d)/,'.$1/$2');
	    	str=str.replace(/(\d{4})(\d)/,'$1-$2');
	    return str;
	  };
	});