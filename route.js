angular.module('routing',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{template:'商品列表'})
                .when('/shippingadd',{template:'送货地址'})
                .otherwise({redirectTo:'/'});
            }]);