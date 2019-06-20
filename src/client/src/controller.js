let serverURL = "http://localhost:8090/";
angular.module("myapp", [])
.controller("MainController", ($scope,$http)=> {

   $scope.tempArray = [];
   $scope.temperature;
   $http.get(serverURL+"getData")
   .then((response)=>{ 
      $scope.tempArray = response.data.result;
      $scope.aggregatedData = response.data.aggregatedData;
   });

   $scope.submitTempForm = function () {
      
    $http.post(serverURL+"save",{"temp": $scope.temperature,"date":new Date()})
    .then((response)=>{ 
      $scope.aggregatedData = response.data.aggregatedData;
      $scope.tempArray = response.data.result;
      $scope.temperature = "";
   }).catch((e)=>{
      console.log(e.data.errors.temp.message);
   });
}

$scope.deleteRecord = function(id){
$http.delete(serverURL+"deleteRecord/"+id)
   .then(function(response){ 
      $scope.tempArray = response.data.result;
      $scope.aggregatedData = response.data.aggregatedData;
      $scope.temperature = "";
   });
}
  
});