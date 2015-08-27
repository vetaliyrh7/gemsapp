(function () {
    var app = angular.module('translate', ['pascalprecht.translate']);
    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    }]);
})();
