(function() {
    var app = angular.module('store', ['store-products', 'routes']);

    app.controller('StoreController', ['$http', '$routeParams',
        function($http, $routeParams) {
            var store = this;
            store.products = [];
            $http.get('data/productsList.json').success(function(data) {
                store.products = data;
            })
                .error(function(err) {
                    return err;
                });
            store.totalCost = 0;
            store.count = function(price) {
                console.log("it worked");
                store.totalCost += price;
            };
        }
    ]);
    app.controller('SingleGemController', ['$http', '$routeParams',
        function($http, $routeParams) {
            var store = this;
            store.gem = [];
            $http({
                method: 'GET',
                url: 'data/gem_' + $routeParams.productId + '.json',
                cache: true
            }).success(function(single) {
                store.gem = single;
                console.log($routeParams.productId);
                console.log(store.gem);
            });
        }
    ]);
})();



/*
      app.controller('CountryListCtrl', function ($scope, countries){
        countries.list(function(countries) {
          $scope.countries = countries;
        });
      });

      countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
        countries.find($routeParams.countryId, function(country) {
          $scope.country = country;
        });
      });*/