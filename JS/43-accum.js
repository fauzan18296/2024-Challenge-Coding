function accum(s) {
	let arrStr = s.split('')
	console.log(arrStr);
	let countStr = ''
	let result = []
	for (let i = 0; i < arrStr.length; i++) {
	result.push(s[i].toUpperCase() + Array(i + 1 ).join(s[i].toLowerCase()))
	}
	console.log(result.join('-'));
	return result.join('-')
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
