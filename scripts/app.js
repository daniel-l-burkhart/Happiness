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
	function($scope, scores) {
           
            $scope.scores = scores.scores;

            $scope.addScore = function() {
                
                $scope.scores.push({
                    score: $scope.score,
                
                });
               
            };


        }
]);

