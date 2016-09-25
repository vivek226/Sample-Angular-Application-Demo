/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('technicalReference').controller('techRefController',['$scope',techRefCtrl]);
function techRefCtrl($scope) {
    $scope.items = {
        'HTML5': [{
            siteName: 'tutorialspoint',
            siteUrl: 'http://www.tutorialspoint.com/html5/'
        }, {
            siteName: 'w3schools.com',
            siteUrl: 'http://www.w3schools.com/html/html5_intro.asp'
        }]
        , 'CSS3': [{
            siteName: 'tutorialspoint',
            siteUrl: 'http://www.tutorialspoint.com/css/'
        }, {
            siteName: 'w3schools.com',
            siteUrl: 'http://www.w3schools.com/css/'
        }],
        'Angular JS': [{
            siteName: 'ANGULAR  JS',
            siteUrl: 'https://docs.angularjs.org'
        },{
            siteName: 'airpair.com',
            siteUrl: 'https://www.airpair.com/angularjs'
        },{
            siteName: 'THOUGHTRAM',
            siteUrl: 'http://blog.thoughtram.io/'
        }]
    }
}