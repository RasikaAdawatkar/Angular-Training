angular.module('regularRoutingApp')
.service('Data',function ($http){

	//fetch data
	this.get_data = function(){
		return $http.get('../data/books.json');
	}

	//post data
	this.add = function(){
		var url = //add post url//
		var promise =  $http({
			method:'POST',
			url:url,
			data:{}
		})
		return promise;
	}

	this.update = function(){
		//update code goes here
	}

	this.delete = function(){
		//delete request goes here
	}

})