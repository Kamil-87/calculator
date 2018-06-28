var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimal = document.getElementById('decimal'),
	CE = document.getElementById('CE'),
	C = document.getElementById('C');	

for (var i = 0; i < numbers.length; i++) {
	var number = numbers[i];
	number.addEventListener('click', function(e){
		console.log('клик по кнопке с номером!');
	});
};

for (var i = 0; i < operations.length; i++) {
	var operation = operations[i];
	operation.addEventListener('click', function(e){
		console.log('клик по кнопке с операцией!');
	});
};

CE.addEventListener('click', function(e){
		console.log('клик по кнопке с CE!');
});

C.addEventListener('click', function(e){
		console.log('клик по кнопке с C!');
});

decimal.addEventListener('click', function(e){
		console.log('клик по кнопке с decimal!');
});


function numberPress() {

};

function operation() {

};

function decimal() {

};

function clear() {

};

