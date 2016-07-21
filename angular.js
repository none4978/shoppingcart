var item = [
    {id : '1',name : 'IPHONE6S' ,price : 5000},
    {id : '2',name : 'Udisk',price : 200},
    {id : '3',name : '主板',price : 350},
    {id : '4',name : '鼠标',price : 50},
    {id : '5',name : '键盘' ,price : 39},
    {id : '6',name : '显示器',price : 1018}
];
var shopCar=[];
var app=angular.module("myApp",[]);
app.controller("Item",function($scope){
    $scope.total=0;
    $scope.items=item;
    $scope.shopCar=shopCar;
     
    $scope.DelFromShopCarList=function(){
        $scope.total-=this.x.price;
        for(var i=0;i<$scope.shopCar.length;i++){
            if($scope.shopCar[i].id==this.x.id){
                $scope.shopCar[i].amount-=1;
                if($scope.shopCar[i].amount===0){
                    $scope.shopCar.splice(i,1)
                }
            }
        }
    }
     
     
    $scope.addToShopCarList=function(){
        var item={
                name:this.x.name,
                price:this.x.price,
                id:this.x.id,
                amount:1,
        };
        var len=shopCar.length;
        var inArr=true;
        for(var i=0;i<len;i++){
            if(shopCar[i].id===this.x.id){
                inArr=false;
                shopCar[i].amount+=1;
                break;
            }
        }
         
        if(inArr){
            shopCar.push(item);
        }
         
        $scope.total+=shopCar[i].price;
    }
    
    $scope.opentitle=function(){
    	$scope.title = '商品列表';	
    }
});


app.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
                 + '<div class="title" ng-click="toggle()">{{title}}</div>'
                 + '<div class="body" ng-show="showMe" ng-transclude></div>'
                 + '</div>',
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});
