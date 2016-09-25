/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('menu').controller('menuController',['$location',menuCtrl]);
function menuCtrl($location){
    this.active= $location.path().substring(1);
    this.items=[{
            displayName:'About Me',
            url:'about-me'
        }, {
            displayName:'Useful Links',
            url:'useful-links'
        },{
            displayName:'JS Application',
            url:'js-application'
        }];
}