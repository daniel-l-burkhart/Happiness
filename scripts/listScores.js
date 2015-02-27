var listScores = function($scope, scores) {
           
            $scope.scores = scores;
			$scope.average = averageScore($scope.scores);
            $scope.addScore = function() {
                
                $scope.scores.push({
                    score: $scope.score
                });
              
            };

        };