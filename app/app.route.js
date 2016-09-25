/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('myDemoApp').config(['$routeProvider',appConfig]);
function appConfig($routeProvider){
    $routeProvider.otherwise({redirectTo: '/about-me'});
};