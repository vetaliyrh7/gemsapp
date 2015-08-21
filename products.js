(function () {
    var app = angular.module('store-products', []);
    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
        };
    });
    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: function () {
                this.tab = 1;
                this.toggle = false;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
    app.directive('productReview', ['$http',
        function ($http) {
            return {
                restrict: 'E',
                templateUrl: 'templates/product-review.html',
                controller: function () {
                    this.review = {};
                    this.addReview = function (product) {
                        product.reviews.push(this.review);
                        $http.post('/api/reviews', {
                            stars: this.review.stars,
                            body: this.review.body,
                            author: this.review.author
                        }).success(function (data, status, headers, config) {
                            console.log(data);
                        }).error(function (data, status, headers, config) {
                            console.log("Error" + " " + data);
                        });
                        this.review = {};
                    };
                },
                controllerAs: 'reviewCtrl'
            };
        }
    ]);
})();
