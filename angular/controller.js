angular.module("myApp").controller('controller', function(service, $scope) {
    $scope.data = function() {
        service.getData().then(function(response) {
        $scope.displayMahBrownies = response;
        });
    }
    $scope.update = function(id,desc) {
        service.updateData(id,desc)
    }
    $scope.delete = function(id) {
        service.deleteData(id)
    }
    $scope.add = function(name,desc,price,img) {
        service.addData(name,desc,price,img)
    }
})