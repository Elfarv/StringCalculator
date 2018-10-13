function add(numbers){
	
	if(numbers.length == 0) {
		 return 0;
		}
	if(numbers.length == 1) { 
		return parseInt(numbers); 
	}
	var temp = numbers.replace(/\n/, ",");
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
		
	for(var i = 0; i < numberArray.length; i++){
		total += parseInt(numberArray[i]);
	}

	return total;
}

module.exports = add;