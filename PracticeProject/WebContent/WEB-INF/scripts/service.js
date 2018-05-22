myApp.service('myService',myService);

myService.$inject = ['$http','$q'];

function myService($http,$q){
	var myServiceVm = this;
	myServiceVm.registerUser = registerUser;
	myServiceVm.getAllUsers = getAllUsers;
	
	function registerUser(user){
		var deferred = $q.defer();
	    return $http.post('./user/registerUser',user)
	    .success(function(response, status, headers, config) {
	      // promise is fulfilled
	    	console.log(response);
	      deferred.resolve(response);
	            // promise is returned
	            return deferred.promise;
	      
	    }).
	    error(function(response, status, headers, config) {
	      // the following line rejects the promise 
	      deferred.reject(response);
	            // promise is returned
	            return deferred.promise;
	    });
	}
	
	function getAllUsers(){
		var deferred = $q.defer();
	    return $http.get('./user')
	    .success(function(response, status, headers, config) {
	      // promise is fulfilled
	    	console.log(response);
	      deferred.resolve(response);
	            // promise is returned
	            return deferred.promise;
	      
	    }).
	    error(function(response, status, headers, config) {
	      // the following line rejects the promise 
	      deferred.reject(response);
	            // promise is returned
	            return deferred.promise;
	    });
	}
}