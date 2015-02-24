happinessApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home state with nested views
        .state('home', {
            url: '/home',
            templateUrl: 'html/home.html'
        })

        // nested view with anonymous controller
        .state('home.why', {
            url: '/why',
            templateUrl: 'html/home-why.html',
            controller: function ($scope) {
                $scope.reasons = ['Happiness makes you happy.',
                    'Unhappiness makes you sad.',
                    'Tracking happiness can make you happy.',
                    'Not tracking happiness will make you sad.'];
            }
        })

        // nested view with an in-line template and no controller
        .state('home.what', {
            url: '/what',
            templateUrl: 'html/reasons-data.html',
            controller: 'ReasonsController'
        })

        .state('home.purpose', {
            url: '/purpose',

            templateUrl: 'html/reasons-list.html',
            controller: 'ReasonsController'
        })

        // about state with named views
        .state('about', {
            url: '/about',
            views: {
                '': {templateUrl: 'html/about.html'},
                'columnOne@about': {template: 'We are The Happiness People&#0153;.'},
                'columnTwo@about': {
                    templateUrl: 'html/reasons-data.html',
                    controller: 'ReasonsController'
                }
            }

        })

        .state('averageHappiness', {
            url: '/averageHappiness',
            views: {
                templateUrl: 'html/averageHappiness.html'

            }

        })

        .state('happinessScore', {
            url: '/happinessScore',
            views: {
                templateUrl: 'html/happinessScore.html'

            }

        });

});