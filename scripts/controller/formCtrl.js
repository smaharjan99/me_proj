'use strict';

angular.module("formName").controller("formCtrl", ["$scope", function($scope){
	 
	 

	 $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            dob:"",
            state:"",
            gender:""
        };
        $scope.personArray =[];

        $scope.personForm = {
       		addPerson: function () {
           	var personObj = {
               firstName: $scope.personModel.firstName,
               lastName: $scope.personModel.lastName,
               address: $scope.personModel.address,
               phoneNumber: $scope.personModel.phoneNumber,
               dob: $scope.personModel.dob,
               state: $scope.personModel.state,
               gender: $scope.personModel.gender
           }
           //if($scope.required = true{
           $scope.personArray.push(personObj);
       	//}

       }
   };

   $scope.myTable = {
            sortBy: 'firstName',
            sortOrder: false,
            toggleOrder: function (name) {
                if ($scope.myTable.sortBy != name) {
                    $scope.myTable.sortOrder = false;
                    $scope.myTable.sortBy = name;
                } else {

                    $scope.myTable.sortOrder = !$scope.myTable.sortOrder;
                }
            }
        };
}]);