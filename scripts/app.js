var happinessApp = angular.module('HappinessApp', ['ui.router']);

//var happinessScore = angular.module('HappinessScore', ['ui.router']);

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
            id: 'Least Important',
            description: "Because we care"
        }
    ];
	return value;
}]);

happinessApp.factory('scores', [function(){
    var scores = [];
	
    
    return scores;
}]);

happinessApp.controller('ReasonsController', 
	[
		'$scope',
		'reasons',
		listReasons
	]
);

happinessApp.controller('ScoreController', [
    '$scope',
    'scores',
	listScores
]);




