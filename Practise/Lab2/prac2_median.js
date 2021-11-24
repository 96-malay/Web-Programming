


const medianElement = function(arr){
    if (!Array.isArray(arr)) throw 'Input is not an array'
    if (arr.length === 0) throw 'Input is blank array'
    let position //original median position 
    let medianValue //to hold the median
    let medianResultObj = {}
    let dict = {}
    let uniq = new Set(arr)
    uniq.forEach(element => {
        //Check for number . elements should be numbers only
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

}
console.log(medianElement([1,2,6,2,4]))
console.log(medianElement([4,6,7]))
console.log(medianElement([7,6,5,8,9,4]))
console.log(medianElement([6,6,6,6,6,6,6,6,6,6]))
console.log(medianElement([7,6,5,8,9,4]))
