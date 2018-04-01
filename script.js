//Input array
var inputArray= [10, 8, 12, 36];

//Double the value of array
var doubleArray=inputArray.map(function(x){
	return 2*x;
});

console.log("Array value after making it double " + doubleArray);

//Filtering the value of array
var filterArray=doubleArray.filter(function(x){
	return x>20;
});

console.log("Value greater than 20 is " + filterArray);

//Sum of filtered value
var sumOfArray=filterArray.reduce(function(sum,value){
	return sum + value;
},0);
