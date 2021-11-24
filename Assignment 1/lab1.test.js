const lab1 = require("./lab1");

console.log(lab1.questionOne([4,6,25])); 
console.log(lab1.questionOne([2])); 
// should return and output: {'3': true} 
console.log(lab1.questionOne([5, 3, 10])); 
//returns and outputs: {'18': false, '2': true, '93': false}
console.log(lab1.questionOne([])); 
// returns and outputs: {}
console.log(lab1.questionOne()); 
// returns and outputs: {}


console.log(lab1.questionTwo([1,2,3,2,1])); 
// should return and output: [1, 2, 3] 
console.log(lab1.questionTwo([1, 1, 1, 1, 1, 1])); 
//returns and outputs: [1]
console.log(lab1.questionTwo([1, '1', 1, '1', 2])); 
// returns and outputs: [1, '1', 2] 
console.log(lab1.questionTwo([3, 'a', 'b', 3, '1'])); 
// returns and outputs: [3, 'a', 'b', '1']
console.log(lab1.questionTwo([])); 
//returns and outputs: []
console.log(lab1.questionTwo()); 


console.log(lab1.questionThree(["bar", "car", "car", "arc"])); 
// should return and output: { acr: ["car", "arc"] }
console.log(lab1.questionThree(["cat", "act", "foo", "bar"])); 
// returns and outputs: { act: ["cat", "act"] }
console.log(lab1.questionThree(["race", "care", "foo", "foo", "foo"]));
// returns and outputs: { acer: ["race", "care"] } 
console.log(lab1.questionThree(["foo", "bar", "test", "Patrick", "Hill"]));
console.log(lab1.questionThree(['cat','act','tac','arc']));
// returns and outputs: {}
console.log(lab1.questionThree([])); 
// returns and outputs: {}


console.log(lab1.questionFour(1, 3, 2)); 
//returns and outputs: 4
console.log(lab1.questionFour(2, 5, 6)); 
//returns and outputs: 194
console.log(lab1.questionFour(3,3,3)); 
//returns and outputs: 6
console.log(lab1.questionFour(5,5,-10)); 
//returns and outputs: 0. Since sum of all 3 number is 0, Avg will be 0. Hence we need to throw the exception
console.log(lab1.questionFour()); 
//returns and outputs: 0. Since there is no Input, result can not be calculated