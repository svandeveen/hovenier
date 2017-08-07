(function () {
    'use strict'; 
    
    angular.module("app").controller("TestController", TestController);
    
    function TestController() {
        var vm = this;
        
        vm.test = "HEllo World!!!";
    }
})();