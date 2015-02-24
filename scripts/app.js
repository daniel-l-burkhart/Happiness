var happinessApp = angular.module('HappinessApp', ['ui.router']);

happinessApp.factory('reasons', [function() {
	var value = [
        {
            id: 'Most Important',
            description: "Increase happiness"
        },
        {
            id: 'Next important',
            description: "Decrease unhappiness"
        },
        {
            id: 'Lease Important',
            description: "Because we care"
        }
    ];
	return value;
}]);

happinessApp.controller('ReasonsController', 
	[
		'$scope',
		'reasons',
		listReasons
	]
);