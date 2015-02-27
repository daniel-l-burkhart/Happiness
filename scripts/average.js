var averageScore = function(nums){
	var sum = 0;
	for(var i = 0; i < nums.length; i++){
		sum += parseInt(nums[i].score, 10);
	}
	return sum/nums.length;
};