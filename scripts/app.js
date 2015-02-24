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

happinessApp.factory('scores', [function(){
    var o = {
        scores: []
    };
    return o;
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
    happyScores,

    $scope.addScore = function(currentScore){
        $scope.scores.push(currentScore);
    }

]);

