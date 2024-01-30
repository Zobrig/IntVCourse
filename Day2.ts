// //-----------------HOME WORK 2.1------------------

// // реалізувати реверс стрінги (вивод в зворотньому порядку)
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// const reversedString = reverse('igor');
// console.log(reversedString);

// // реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)

// function BOBO(name) {
//   const ORIGINAL = name
  
//   return ORIGINAL === ORIGINAL.split('').reverse().join('');
// }

// console.log(BOBO("aba"));
// console.log(BOBO("abc"));

// //вивести тільки парні числа з масиву, вивести в зворотньому порядку

// function getPaired(arr) {
// 	const pairedNumbers = arr.filter(number => number % 2 === 0);

// 	return pairedNumbers.reverse();
// }

// const result = getPaired([1, 2, 3, 4, 5, 6]);
// console.log(result);

//-----------------HOME WORK 2.2------------------

function longestCommonPrefix(strs) {
	if (strs.length === 0) {
			return "";
	}

	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
			let j = 0;
			while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
					j++;
			}

			prefix = prefix.substring(0, j);

			if (prefix === "") {
					break;
			}
	}

	return prefix;
}

// Приклад використання:
const result1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(result1);  // "fl"

const result2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(result2);  // ""
