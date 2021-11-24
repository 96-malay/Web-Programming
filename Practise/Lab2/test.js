// const person= { fname:'John', lname:'Doe', age:25};
/* for(let x of person.age) {
    console.log(x);} 
person.fname = 'hjc';
console.log(person)

let x = ''
console.log(typeof(x)) */
//----------------------------------------
/* function checkNumber(num){
    if (typeof(num) !== 'number' || isNaN(num)) {
        return false; //Throw exception in calling function
    }
    return true
}
console.log(checkNumber(1)) */
//----------------------------------------
/* 
let x = 'g'
console.log(typeof(x))

let c = [1,2,3,4, , , ,]
let arr  = Array.from(c);
console.log(c, arr) */

//--------------------

/* let returnValue = "PHaitlrli$c$k$"
console.log(returnValue)  */

//--------------------

let phno = '123-456-78*0'
let regex = /\d{3}-\d{3}-\d{4}/
let check = regex.test(phno)
console.log(check)