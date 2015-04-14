angular.module('regularRoutingApp')
.service('Data',function ($http){
	this.get_data = function(){
		return $http.get('../data/books.json');
	}

	return this;
})