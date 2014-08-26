'use strict';











/* Controllers */

var banana = angular.module('myApp.controllers', [])

banana.controller('MyCtrl1', ['$scope','$http', function($scope, $http) {
    //this == controller
    $http.get('/api/dates').success(function(data){
      this.dates = data;
    }.bind(this));

    this.date = {};



    this.addPost = function(controller){
      console.log(controller.date)
      console.log(this)
      this.dates.push(controller.date)
      controller.date = {};
    };

    $scope.orderProp = '-day'
  }])


  banana.controller('MyCtrl2', ['$scope', function($scope) {

  }]);
  // .controller('DateController', function(){
  //   this.date = {};
  //   this.addNewDate = function(product){
  //     console.log(this.product)
  //   };
  // });
