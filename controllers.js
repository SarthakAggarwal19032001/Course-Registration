var controllers=angular.module("controllers",[]);
controllers.controller("registerctrl",function($scope){
    $scope.heading="Course Registration";
    $scope.apply=false;
    $scope.getcourses=function(){
        if ($scope.trainingmode=="VCR"){
            $scope.courses=[{coursename:"HTML"},
        {coursename:"CSS"},
        {coursename:"JS"}];
        }
        else if($scope.trainingmode=="CR"){
            $scope.courses=[{coursename:"AngularJS"},
        {coursename:"BackboneJS"}];
        }
    };
    $scope.message="";
    $scope.save=function(){
        if($scope.gender=="male"){
            $scope.message="Mr." + $scope.name + " has opted for "+ $scope.levelselected +" level training on "+ $scope.courseselected + "in"+$scope.trainingmode+" mode. ";
            $scope.message +="He can be contacted at:" +$scope.contactnumber;
        }
        else if($scope.gender=="female")
        $scope.message="Ms. "+$scope.name+ " has opted for "+$scope.levelselected + 'level training on '+$scope.courseselected + "in "+$scope.trainingmode+  " mode." ;
    };
});