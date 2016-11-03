angular.module("formName").directive("personForm", function(){
	
	return {
	restrict: "EAMC",
	controller: "formCtrl",
	templateUrl: "/view/personForm.html"
	}
});