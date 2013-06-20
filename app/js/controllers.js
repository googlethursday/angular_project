'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;
	});

	$scope.orderProp = 'age';
}


function jsonp_callback(data) {
	alert(data);
}


function FetchCtrl($scope, $http) {
	
	$scope.loaded = false;
	$scope.method = 'GET';

	$scope.url = "https://rodofumi-googlethursday.rhcloud.com/rest/projectService/json?callback=jsonp_callback";

		$http({
			dataType: 'jsonp',
			method : $scope.method,
			url : $scope.url,
			headers : {
			'Accept' : 'application/json'
			},

		}).success(function(data, status) {
			// bij succesvolle call uitgevoerd
			$scope.status = status;
			$scope.projects = data;
		}).error(function(data, status) {
			// bij fout uitgevoerd
			$scope.projects = "Request failed";
			$scope.status = status;

		});

	$scope.loaded = true;
}