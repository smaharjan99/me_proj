angular.module("formName").directive("mainForm", function(){
	
	return{
	restrict: "EAMC",
	controller: "formCtrl",
	templateUrl: "/view/mainForm.html"
}
});