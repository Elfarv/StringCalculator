function add(numbers){
	
	if(numbers.length == 0) {
		 return 0;
		}
	if(numbers.length == 1) { 
		return parseInt(numbers); 
	}
	if(numbers.includes(",")){
		var numberArrays = numbers.split(",");
		return parseInt(numberArrays[0]) + parseInt(numberArrays[1]);
	} 
	else{
		return parseInt(numbers);
	}
}

module.exports = add;