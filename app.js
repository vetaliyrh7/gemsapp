(function () {
    var app = angular.module('store', ['store-products', 'routes', 'translate', 'pascalprecht.translate']);

    app.controller('StoreController', ['$http', '$routeParams', '$translate', '$scope',
        function ($http, $routeParams, $translate, $scope) {
            var store = this;
            store.products = [];
            $http.get('data/productsList.json').success(function (data) {
                    store.products = data;
                })
                .error(function (err) {
                    return err;
                });
            store.lang = 'en';
            store.totalCost = 0;
            store.count = function (price) {
                console.log("it worked");
                store.totalCost += price;
            };
            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
                store.lang = langKey;
            };
        }
    ]);
    app.controller('SingleGemController', ['$http', '$routeParams',
        function ($http, $routeParams) {
            var store = this;
            store.gem = [];
            $http({
                method: 'GET',
                url: 'data/gem_' + $routeParams.productId + '.json',
                cache: true
            }).success(function (single) {
                store.gem = single;
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
