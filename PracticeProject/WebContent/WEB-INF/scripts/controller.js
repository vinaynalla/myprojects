'use strict'
myApp.controller('HomeController', homeController)

homeController.$inject = [ '$scope','myService' ];

function homeController($scope,myService) {

	$scope.user = {};
	$scope.countryList = ['India','USA','UK'];
	$scope.registerSuccess = false;
	
	$scope.validateFn = function() {
		console.log($scope.user);
		myService.registerUser($scope.user).then(function(response){
			console.log(response);
			$scope.registerSuccess = true;
		},function(error){
			$scope.registerSuccess = false;
			
		});
	}

	$scope.message = 'My Home message';
}

myApp.controller('AboutController', AboutController);
AboutController.$inject = [ '$scope' ];

function AboutController($scope) {
	$scope.message = 'About Page.';
}

myApp.controller('GridCtrl', GridController);
GridController.$inject = [ '$scope' ,'myService' ];

function GridController($scope, myService) {
	
	var vm = this;
	 
	  vm.gridOptions = {
	    enableSorting: true,
	    columnDefs: [
	      { field: 'userId' },
	      { field: 'firstName' },
	      { field: 'gender'},
	      { field: 'email' },
	      { field: 'country' },
	      { field: 'password' },
	      { field: 'dob', type:'date' }
	    ],
	    onRegisterApi: function( gridApi ) {
	      vm.grid1Api = gridApi;
	    }
	  };
	  
	 
	 
	 $scope.getAllUsers = function() {
		 console.log('calling getAllUsers');
			myService.getAllUsers($scope).then(function(response){
				console.log(response);
				$scope.setGridData(response.data);
			},function(error){
				console.log('error gettingAllUsers')
			});
		}
	 
	 $scope.setGridData = function(data) {
		 vm.gridOptions.data = data;
	 }
	 $scope.getAllUsers();
}