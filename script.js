let art = [5,8,10,7,9,11]

console.log(art)

//Splice 
// art.splice(3,3,17,19,111)
console.log("First operation ")
 art.splice(3,3,17,19,111)
console.log(art)

console.log("Second operation ")
art.unshift(100)
console.log(art)

console.log("Third operation ")
art.splice(6,0,200)
console.log(art)

console.log("Fourth operation ")
art.push(1000)
console.log(art)

console.log("Fifth position")
// finfing middle element in an array
let mid_element = (art.length - 1) / 2; 
art[mid_element] = 0
console.log(art)