//-----------------HOME WORK 1.1------------------
// let a = 10
// let b = 10
// console.log(a == b)

// a = 10
// b = "10"
// console.log(a === b)

// const myObj = {};

// console.log(typeof "a")
// console.log(typeof 1)
// console.log(typeof Symbol('гыыыы'))
// console.log(typeof(a == b))
// console.log(typeof c)
// console.log(typeof null)
// console.log(typeof myObj)
// console.log(null)

//-----------------HOME WORK 1.2------------------
// 1 ВАРІАНТ
let age = 15

function canSmoke(age){
	if(age >= 18){
		return("Покупка сигарет успішна")
	}
	if(age >= 100){
		return("Не продам ти старий")
	}
		return("Не продам ти замалий")
}
console.log(canSmoke(age))

// 2 ВАРІАНТ

let agee = 19

let canSmokee = function(agee){
	if(agee >= 18){
		return("Покупка сигарет успішна")
	}
	if(agee >= 100){
		return("Не продам ти старий")
	}
		return("Не продам ти замалий")
}
console.log(canSmokee(agee))

// 3 ВАРІАНТ 

let ageee = 119

let canSmokeee = (ageee) => {
	if(ageee >= 18){
		return("Покупка сигарет успішна")
	}
	if(ageee >= 100){
		return("Не продам ти старий")
	}
		return("Не продам ти замалий")
}
console.log(canSmokeee(ageee))

//--------- allowedTOIn ПЕРЕПУСТКА -----------

const ageAllowe = 72
const name = "John" 
const department = "Police"

let allowedTOIn = (ageAllowe,name,department) => {
	if(ageAllowe === 72 && name === "John" && department === "Police"){
		return("Вхід в систему дозволений")
	}
	return("Вхід в систему закритий")
}
console.log(allowedTOIn(ageAllowe,name,department))