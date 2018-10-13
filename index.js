function add(numbers){
	
	if(numbers.length == 0) {
		 return 0;
		}
	if(numbers.length == 1) { 
		return parseInt(numbers); 
	}
	if(numbers.includes(",")){
		var numberArrays = numbers.split(",");
		var total = 0;
		
		for(var i = 0; i < numberArrays.length; i++){
			total += parseInt(numberArrays[i]);
		}
	
		return total;
	} 
	else{
		return parseInt(numbers);
	}
}

module.exports = add;