"use strict"

//задача 1
function getArrayParams(...arr) {

	let min = arr[0];
	let max = arr[0];
	let avg = 0;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum = sum + arr[i];
	}
	avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	}
}


//задача 2 

function summElementsWorker(...arr) { 

	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = arr[i] + sum;
	}
	return sum;
}




function differenceMaxMinWorker(...arr) { 

	if (arr.length === 0) {
		return 0;
	}

	let max = arr[0];
	let min = arr[0];
	let difference = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} 
		if (arr[i] < min) {
			min = arr[i];
		}
			
		difference = max - min;
	}


	return difference;

}

function differenceEvenOddWorker(...arr) { 
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) { 

	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement = countEvenElement + 1;
		}
	}

	return sumEvenElement / countEvenElement;
}


//задача 3
function makeWork(arrOfArr, func) {

	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 0; i < arrOfArr.length; i++) {

		let max = func(...arrOfArr[i]);

		if (maxWorkerResult < max) {
			maxWorkerResult = max;
		}
		
	}
	return maxWorkerResult;
}
