// A function
function sum(a, b) {
	return a + b
}

// Asign a function to a variable
const sum = function sum(a, b) {
	return a + b
}

// Anonymous function assigned to a variable
const sum = function(a, b) {
	return a + b
}

const sum = (a, b) => {
	return a + b
}

// One line arrow functions

const sum = (a, b) => a + b

// Objects

const calculator = {
	state: 0,
	
	sum(a) {
		return this.state += a
	}
}

// To run it: calculator.sum(4)

// Using a Class

class Calculator {
	state = 0
}

const calculator = new Calculator()

// With # we make state private
// only the methos can access to the #state
class CalculatorPrivate {
	#state = 0,
	
	sum(a) {
		this.state += a
	}
	
	state() {
		return this.#state
	}
	
	clear() {
		this.#state = 0
	}
}