// alert('arrow function')

var cl = console.log;

//Hoisting >> All decl moves to the top of the scope

cl(add(2,2));
//1.function declaration
function add(x,y){
	return x+y;
}


// 2.function expression
var add2 = function(x,y){
	returnx+y;
}
cl(add(4,4));

// Arrow function / Lambda function / Fattya arrow functions
// es6 arrow function provides us an alternative way of writing function with shorter syntax

// var add3 = function(x,y){				//function expression
	// return x+y;
// } 

// var add3 = (x,y) => {					//arrow fun
	// return x+y;
// }
// cl(add(8,8));

var add3 = (x,y) => x+y;					//more shorter syntax
cl(add3(16,16));	

var add4 = (x,y) => x+y;
cl(add4(10,10));


// var add5 = (x,y) => {
	// cl(x+y);
// }
// add5(7,7);	

 var add5 = (x,y) => cl(x+y);
add5(50,50);

var add6 = (x,y) => cl(x+y);
add6(15,15); 

var sub = (x,y) => x-y;
cl(sub(80,5));

var sub1 = (x,y) => cl(x-y);
sub1(100,10);

var MultiplyBy2 = x => x*2;
cl(MultiplyBy2(13));

var multiplyBy2 = x => x*2;
cl(multiplyBy2(30));

var divideBy2 = x => x/2;
cl(divideBy2(66));

// we can't use "this" keyword in arrow function
// Example for the same

var person = {
	
	fname : "john",
	lname : "cena",
	age : 45,
	fullname : function(){
		cl(this);
		return `${this.fname} ${this.lname}`
	
	}
} 
cl(person.fullname());


