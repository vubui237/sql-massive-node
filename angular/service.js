angular.module("myApp").service("service", function($http) {
    this.getData = function() {
        return $http({
            method: "GET",
            url: 'http://localhost:3000/api/products'
        }).then(function(response) {
            return response.data;
        })
    }
    this.updateData = function(id,desc) {
        return $http({
            method: "PUT",
            url: 'http://localhost:3000/api/product/' + id + "?desc=" + desc
        })
    }
    this.deleteData = function(id) {
        return $http({
            method: "DELETE",
            url: 'http://localhost:3000/api/product/' + id
        })
    }
    this.addData = function(name,desc,price,img) {
        return $http({
            method: "POST",
            url: 'http://localhost:3000/api/product/',
            data: {"name" : name, "description" : desc, "price" : price, "imageurl" : img}
        })
    }
})


