function checkArray(arr){
let type = typeof(arr)
//if (type !== 'array') throw `Input is not an array`
if (!Array.isArray(arr)) throw `Input is not an array`
if ( arr.length === 0 ) throw 'Input is a blank array'

return true
}

function checkNumber(num){
    if (typeof(num) !== 'number' || isNaN(num) || num === ``) {
        return false; //Throw exception in calling function
    }
    return true
}
const getMax = object => { //Credit: https://stackoverflow.com/a/47934466
    return Object.keys(object).filter(x => {
         return object[x] == Math.max.apply(null, 
         Object.values(object));
   });
};

module.exports = {
     average(arr){
       // return('in Array utils')
    //if (!Array.isArray(arr)) throw 'Input is not an array'
    //if (arr.length === 0) throw 'Input is blank array'
    
    checkArray(arr)
    arr = Array.from(arr) //To catch the complete length of array. including ,,, ,, in the end
    let sum = 0
    let count = 0
    //console.log(arr[0][0])
    if (! ( arr[0][0] === undefined ) ){ //it's a 2d array

    for (let i=0; i< arr.length;i++){
        if(! Array.isArray(arr[i])) throw `${i+1}th element of array -> ${arr[i]} is not an array`
        if (arr[i].length === 0) throw `${i+1}th element in the array -> ${arr[i]} is blank array`
        //return (Array.isArray(arr[i]))
        //console.log(`${arr[i].length} length`)
        for(let j=0; j<arr[i].length;j++){
            //if (isNaN(arr[i][j])) throw `${j+1}th element in ${i+1}th Array is not a number`
            if (!checkNumber(arr[i][j])) throw `${j+1}th element in ${i+1}th Array is not a number`
            sum = sum + arr[i][j]
            count += 1
        }
        
    }
    return (Math.round(sum/count))
    }else throw 'Invalid input'
        /* { 
        for(let k = 0; k <arr.length;k++){
            if (!checkNumber(arr[k])) throw `${k+1}th element -> ${arr[k]} in Array is not a number`
            sum += arr[k]
            count += 1
        } */
    //}

    //return (Math.round(sum/count))
    },

    modeSquared(arr){
    //if (!Array.isArray(arr)) throw 'Input is not an array'
    //if (arr.length === 0) throw 'Input is blank array'
    
    checkArray(arr)
    Array.from(arr) //To catch the complete length of array. including ,,, ,, in the end
    let format = `/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`

    
    let dict = {}
    for (let i=0; i < arr.length; i++){
        //console.log(arr[i])
        //Check for special symbols here
        //if (typeof(arr[i]) !== 'number' || arr[i] === `` || arr[i] === NaN )throw `${i+1}th element is not a number`
        if (!checkNumber(arr[i]))throw `${i+1}th element is not a number`
        dict[arr[i]] = (dict[arr[i]] + 1) || 1

    }
    //console.log(dict)
    let sum = 0
    if (getMax(dict).length === arr.length){
        return 0
    }else{
        for(let x of getMax(dict)){
            sum += Math.pow(Number.parseInt(x),2)
        }
    }
    return sum ;
    },

    medianElement(arr){
    
    //if (!Array.isArray(arr)) throw 'Input is not an array'
    //if (arr.length === 0) throw 'Input is blank array'
    checkArray(arr)
    Array.from(arr) //To catch the complete length of array. including ,,, ,, in the end
    let position //original median position 
    let medianValue //to hold the median
    let medianResultObj = {}
    let dict = {}
    let uniq = new Set(arr)
    uniq.forEach(element => {
        if(! checkNumber(element)) throw 'Only Numbers are accepted'
        dict[element] = new Array() //to store each position of each value
    });
    for(let c = 0; c<arr.length; c++){ 
            dict[arr[c]].push(c) //pushes the index of values 
    }
  
    arr = arr.sort((a,b) => { //Sort array in increasing order
        if (a>b) return 1
        if (a<b) return -1
        return 0
    });
    if (arr.length % 2 === 0){
        //Even length
        //get middle 2 elements
         medianValue = ( arr[arr.length/2] + arr[(arr.length/2) -1] ) / 2
       // if(dict[arr[arr.length/2]][0] > dict[arr.charAt((arr.length/2) -1)][0]){
        if(dict[arr[arr.length/2]][0] > dict[arr[(arr.length/2) -1]][0]){
             position = dict[arr[arr.length/2]][0]
        }else if(dict[arr[arr.length/2]][0] <= dict[arr[(arr.length/2) -1]][0]) {
            position = dict[arr[(arr.length/2) -1]][0]
        }
        medianResultObj[medianValue] = position
        return medianResultObj
    }
    if (arr.length % 2 !== 0){
        //Odd length
        //get middle element
         medianValue = arr[Math.floor(arr.length/2)]
         position = dict[medianValue][0]
         medianResultObj[medianValue] = position
        return medianResultObj
    }

    },

    merge(arr1,arr2){
    //Check if ip is array
    //check length
    checkArray(arr1)
    Array.from(arr1) //To catch the complete length of array. including ,,, ,, in the end
    checkArray(arr2)
    Array.from(arr2) //To catch the complete length of array. including ,,, ,, in the end

    let numberarray = []
    let smallAlpha = []
    let capAlpha = []
    arr1.forEach( element => {
        //Check if the char is number or Char. If not then throw error
        //Assuming the ip is proper
        if (typeof(element) === 'number' && !isNaN(element)){
            numberarray.push(element)
        }else if (element <= 'z' && element >= 'a' && element.length === 1){
            smallAlpha.push(element)
        }else if( element <= 'Z' && element >= 'A' && element.length === 1){
            capAlpha.push(element)
        }else {
            throw 'Kindly input Numbers, Small or Capital Alphabets only'
        }

    });
    arr2.forEach( element => {
        //Check if the char is number or Char. If not then throw error
        //Assuming the ip is proper
        if (typeof(element) === 'number' && !isNaN(element)){
            numberarray.push(element)
        }else if (element <= 'z' && element >= 'a'){
            smallAlpha.push(element)
        }else if( element <= 'Z' && element >= 'A'){
            capAlpha.push(element)
        }else {
            throw 'Kindly input Numbers, Small or Capital Alphabets only'
        }

    });
    //smallAlpha = smallAlpha.sort()
    numberarray = numberarray.sort((a,b) => {
        if (a > b) return 1
        if ( a < b ) return -1
        return 0
    })
    let resultarray = Array.prototype.concat(smallAlpha.sort(),capAlpha.sort(),numberarray)
    
    return resultarray;

    }

};