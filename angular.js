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
app.controller("showItem",function($scope){
    $scope.total=0;
    $scope.items=item;
    $scope.shopCar=shopCar;
     
    $scope.DelFromShopCarList=function(){
        $scope.total-=this.value.price;
        for(var i=0;i<$scope.shopCar.length;i++){
            if($scope.shopCar[i].id==this.value.id){
                $scope.shopCar[i].amount-=1;
                if($scope.shopCar[i].amount===0){
                    $scope.shopCar.splice(i,1)
                }
            }
        }
    }
     
     
    $scope.addToShopCarList=function(){
 
        var item={
                name:this.value.name,
                price:this.value.price,
                id:this.value.id,
                amount:1,
        };
        var len=shopCar.length;
        var inArr=true;
        for(var i=0;i<len;i++){
            if(shopCar[i].id===this.value.id){
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
})