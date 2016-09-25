/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('menu').config(['$routeProvider',menuConfig]);
function menuConfig($routeProvider){
    $routeProvider.when('/about-me',{
        templateUrl : 'app/components/aboutMe/aboutMe.html',
        controller: 'aboutMeController'
    }).when('/useful-links',{
        templateUrl : 'app/components/technicalReference/technicalReference.html',
        controller:'techRefController'
    }).when('/js-application',{
        templateUrl : 'app/components/jsApplication/jsApplication.html',
        controller: 'jsApplicationController',
        controllerAs: 'pigLatin'
    });
};