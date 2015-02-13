var app = angular.module('MyApp', []);


app.controller('BookView', function ($scope) {
    $scope.refresh = function(){
        console.log("BookView", "refresh");
    };
});

app.controller('TypeFilterController', function ($scope) {
    $scope.refresh = function(){
        console.log("TypeFilterController", "refresh");
    };

});

app.controller('FilterB', function ($scope) {
    $scope.refresh = function(){
        console.log("FilterB", "refresh");
    };
});

app.controller('BookFilter', function ($scope) {
    var obj = {};
    $scope.obj = obj;

    $scope.obj.refresh = function(){
        console.log("BookFilter", "refresh");
        return 1;
    };
});

app.controller('TextFilter', function ($scope) {
    var obj = {};
    obj.label = "foo";

    $scope.obj = obj;

    $scope.onClick = function(){
        $scope.obj.label = new Date();
    };

//    $scope.refresh = function(){
//        console.log("TextFilter", "refresh");
//    }

    $scope.$watch("obj.label", function(){
        console.log("TextFilter", "refresh");
    });
});





