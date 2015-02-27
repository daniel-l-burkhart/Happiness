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
	function($scope, scores) {
           
            $scope.scores = scores;
			$scope.average = averageScore($scope.scores);
            $scope.addScore = function() {
                
                $scope.scores.push({
                    score: $scope.score
                });
              
            };

        }
]);


var averageScore = function(nums){
	var sum = 0;
	for(var i = 0; i < nums.length; i++){
		sum += parseInt(nums[i].score, 10);
	}
	return sum/nums.length;
};

