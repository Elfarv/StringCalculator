function add(numbers){
	
	if(numbers.length == 0) {
		 return 0;
		}
	if(numbers.length == 1) { 
		return parseInt(numbers); 
	}
	var temp = numbers.replace(/\n/g, ",");
	if(numbers.includes(",")){
		var numberArray = temp.split(",");

		return sum(numberArray)
	} 
	else{
		return parseInt(numbers);
	}
}

function sum(numberArray){
	var total = 0;
	var negativeNumber = [];

		
	for(var i = 0; i < numberArray.length; i++){
		if(numberArray[i] < 0){
			negativeNumber.push(numberArray[i]);
		}
		else{
			
			total += parseInt(numberArray[i]);
		}
	}

	if(negativeNumber.length > 0){
		return (`Negatives not allowed:${negativeNumber}`);
	}
	return total;
}

module.exports = add;