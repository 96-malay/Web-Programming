const questionOne = function questionOne(arr=[]) {
    // Implement question 1 here
    let result = {};
    if (arr.length == 0){
        return(result)
    }
    else{
    for (let x of arr){

    //console.log(x)
    //console.log(arr[x])
    let flag = 0
        let res = Math.abs(Math.pow(x,2) - 7 )
//        console.log(res)
        for (let i = 2; i <= Math.sqrt(res); i++)
        {
            if (res % i === 0)
            {
//                console.log("False")
                flag =1
                result[res] = "False"
                break
            }
        }
        if (flag == 0){
//            console.log("True")
            result[res] = "True"
            
        }
        
    
};
//console.log(result)
return(result)
}
}

const questionTwo = function questionTwo(arr=[]) { 
    // Implement question 2 here
//    return("question2")
if (arr.length == 0){
    return ([])
}
else{
    let setss = new Set(arr)
    const arrayRes = Array.from(setss)
    return (arrayRes)
    //let arrays = new Array(setss)
    //return(arrays[0])
    
}
}

const questionThree = function questionThree(arr=[]) {
    // Implement question 3 here
    //return("question3")
    if(arr.length == 0){
        return ({})
    }
    else{
    let setip = new Set(arr) //To get unique enteries
    let uniqueIpArray = Array.from(setip) //Convert into Array to match the values later in for loop
    //console.log(setip)
    let sortedcopy = [] // To sort ip array items
    let result = {} //To Store Final Output

    for (let x of setip){ 
        sortedcopy.push(x.split('').sort().join('')) //sort the qnique items in given Input
    }
    //console.log(sortedcopy)
    const uniqueSorted = new Set(sortedcopy) //Unique Sorted values
    //console.log(uniqueSorted)
    const uniqueSortedArray = Array.from(uniqueSorted) //Array of Unique Sorted Values . To be used in For Loop
    //console.log(uniqueSortedArray)

    for(let j of uniqueSortedArray){ 
        result[j] = new Array() //create array for storing anagrams 
        for (let k of uniqueIpArray){
            if(k.length == j.length && k.split('').sort().join('') == j){ //Sorting the unique input values
                result[j].push(k) //if it's an anagram then add in result
            }
        }
    }
    //console.log(result)
    // -------------------
    /* for (const [k,v] in Object.entries(result)){
        console.log(`${k}`.length,`${v}`.length)
    /*     if (v.length < 2 ){
            result[k].pop()
        } 
        
    } */
    // ---------------------
    /*console.log(result.keys.length)
        for(let k = 0; k < result.length; k++){
            console.log(result.k.length)
        } */
        // ---------------------
        for (let k in result){
//            console.log(result[k].length)
            if(result[k].length < 2){
                delete result[k]
            }
            
        }
    //console.log(result)
    return (result)
    }
}

const questionFour = function questionFour(num1, num2, num3) {
    // Implement question 4 here

    let ip = [num1,num2,num3] // Should I consider Negative number in input?
    let avg = ( num1 + num2 + num3 ) / 3
     if (avg > 0){ //Average could be 0 if input numbers are negative

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
//    console.log(Math.floor(total/ avg ))
    return (Math.floor( total / avg))
} else{
    return(0)
} 
}

module.exports = {
    firstName: "Malay", 
    lastName: "Shah", 
    studentId: "10474653",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};