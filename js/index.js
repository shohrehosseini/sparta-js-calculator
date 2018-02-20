//Show message that user can choose the type of calculator.//
alert ("Hello and welcome to Sparta-js-Calculator!")
var chosen_calculator = prompt("Which calculator do you want to use? (b)asic and (a)dvanced");

//Define all variables.
var basic_calculator = "b";
var advanced_calculator = "a";

var basic_operation = "basic_operation";
var advanced_operation = "advanced_operation";

var additon = 1;
var multiplication = 2;
var division = 3;
var subtraction = 4;
var power = 5;
var square = 6;

//Ask the user for the numbers to operate on based on their selected calculator//
if (chosen_calculator == "b") {
	var basic_operation = prompt ("Which operation do you want to run? (1)Additon, (2)Multiplication, (3)Division or (4)Subtraction")
	var first_number = prompt ("Type your first number");
	var second_number = prompt ("Type your second number");
	if (basic_operation == 1) {
		function addNumbers (first_number, second_number) {
			var result_addition = first_number + second_number;
			return result_addition;
		}
	}
} else {
	var advanced_operation = prompt ("Which operation do you want to run? (5)Power, (6)Square root")
	var number = prompt ("Type your number");
}

/*
if (chosen_calculator = "b" && basic_operation = 1) {
	function addnum (first_number, second_number){
	var sum = first_number + second_number
	return sum
	break;	
	}
}
*/












