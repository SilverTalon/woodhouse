"use strict";angular.module("woodhouse",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",resolve:{weather:["weatherService",function(a){return a.getWeather()}],calendar:["calendarService",function(a){return a.getToday()}]}}).when("/apps",{templateUrl:"app/apps/apps.html",controller:"AppsController",controllerAs:"main",resolve:{weather:["weatherService",function(a){return a.getWeather()}],apps:["appsService",function(a){return a.getApps()}]}}).otherwise({redirectTo:"/"})}]),angular.module("woodhouse").controller("NavbarController",["$location",function(a){var e=this;e.isMenuActive=function(){return"/"!==a.path()}}]),angular.module("woodhouse").directive("clock",["dateFilter","$timeout",function(a,e){return{restrict:"E",scope:{timeFormat:"@",dateFormat:"@",template:"@"},templateUrl:function(a,e){return"app/time/time-"+e.template+".html"},controller:["$element","$attrs",function(n,t){var o,r=this;r.time="",r.date="";var i=function(){var n=Date.now();t.timeFormat&&(r.time=a(n,t.timeFormat)),t.dateFormat&&(r.date=a(n,t.dateFormat)),o=e(i,1e3)};n.bind("$destroy",function(){e.cancel(o)}),i()}],controllerAs:"clock"}}]),angular.module("woodhouse").service("weatherService",["$http",function(a){this.getWeather=function(){return a.get("/json/weather.json")}}]),angular.module("woodhouse").controller("MainController",["weather","calendar",function(a,e){var n=this;n.weather=a.data,n.calendar=e,n.menuURL="#/apps"}]),angular.module("woodhouse").service("calendarService",["$http",function(a){this.getCalendar=function(){return a.get("/json/calendar.json")},this.getToday=function(){var e=a.get("/json/calendar.json").then(function(a){return _.has(a.data,"today")?a.data.today:{}});return e}}]),angular.module("woodhouse").service("appsService",["$http",function(a){this.getApps=function(){return a.get("/json/apps.json")}}]),angular.module("woodhouse").controller("AppsController",["weather","apps",function(a,e){var n=this;n.weather=a.data,n.apps=e.data,n.menuURL="#/"}]),angular.module("woodhouse").run(["$templateCache",function(a){a.put("app/apps/apps.html",'<div ng-include="" ng-controller="NavbarController as navbar" src="\'components/navbar/navbar.html\'"></div><div class="apps container"><div class="row"><div class="col-sm-2 col-md-2" ng-repeat="app in main.apps | orderBy:\'rank\'"><div class="thumbnail"><i class="fa" ng-class="app.icon"></i></div><div class="caption"><h3 ng-bind="app.name"></h3></div></div></div></div>'),a.put("app/main/main.html",'<div ng-include="" ng-controller="NavbarController as navbar" src="\'components/navbar/navbar.html\'"></div><div class="container"><div class="row"><div class="col-xs-4 col-xs-offset-4 widget"><clock time-format="hh:mm" date-format="EEE MMM dd" template="home"></clock></div></div><div class="row"><div class="col-xs-6 col-xs-offset-4 widget calendar" ng-repeat="event in main.calendar"><span class="user" ng-bind="event.assigned_to[0]"></span> <span>-</span> <span class="event" ng-bind="event.name"></span> <span>@</span> <span class="event" ng-bind="event.time | date:\'hh:mm\'"></span></div></div></div>'),a.put("app/time/time-home.html",'<div class="clock home"><p class="date" ng-bind="clock.date"></p><p class="time" ng-bind="clock.time"></p></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top"><div class="container-fluid"><div class="collapse navbar-collapse"><ul class="nav navbar-nav pull-right"><li class="weather"><span ng-bind="main.weather.current_observation.temp_f"></span>&deg; <i class="fa fa-moon-o"></i></li><li><a ng-href="{{main.menuURL}}" ng-class="{\'active\': navbar.isMenuActive()}"><i class="fa fa-th-large"></i></a></li></ul></div></div></nav>')}]);