//let ip = [num1,num2,num3] // Should I consider Negative number in input?
let ip = [2,5,6] // Should I consider Negative number in input?
let avg = (2+5+6) / 3
let multiply = 1 //To Calculate & Save Factorial of each number
let total = 0 //Sum of Factorial of each Number
for (let x of ip){
    //CAlculate Factorial
    for (let i = x; i >0; i--){ 
        multiply = i * multiply
//            console.log(x,multiply)            
    }
    total = total + multiply
    multiply = 1 //reset multiply variable for next iteration
}
    console.log(Math.floor(total/ avg ))
//return (Math.floor( total / avg))
