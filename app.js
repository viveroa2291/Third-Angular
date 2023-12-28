(function () {
    'use strict';

    angular.module('CounterApp', []) 
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout) {
        $scope.onceCounter = 0; 
        $scope.counter = 0;
        $scope.name = "Adan";
        $scope.firstName = "Adan";
        // $scope.fullName = "";

        $scope.showNumberOfWatchers = function () {
            console.log('# of Watchers: ' + $scope.$$watchersCount);
        };
        $scope.setFullName = function () {
            $scope.fullName = $scope.firstName + " " + "Vivero";
        };
        $scope.logFirstName = function () {
            console.log("First name is: ", $scope.firstName);
        };
        $scope.logFullName = function () {
            console.log("Full name is: ", $scope.fullName);
        };
        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };   
        /*
        $scope.upCounter = function () {
            setTimeout(function() {
                $scope.$apply(function () {
                    $scope.counter++;
                    console.log("Counter incremented!");
                })
            }, 2000)
        };
        */
       $scope.upCounter = function () {
        $timeout(function () {
            $scope.counter++;
            console.log("Counter incremented");
        }, 2000)
       };
        $scope.$watch(function () { // Catch the digest loop
            console.log("Digest Loop Fired")
        })
        /*
        $scope.$watch('onceCounter', function(newValue, oldValue ) {
            console.log("onceCounter old value: ", oldValue);
            console.log("onceCounter new value: ", newValue);
        });
        $scope.$watch('counter', function(newValue, oldValue ) {
            console.log("old value: ", oldValue);
            console.log("new value: ", newValue);
        });
        */
    }
})();