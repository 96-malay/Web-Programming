const average  = function average(arr){

    if (!Array.isArray(arr)) throw 'Input is not an array'
    if (arr.length === 0) throw 'Input is blank array'
    let sum = 0
    let count = 0
    //console.log(arr[0][0])

    arr = Array.from(arr) //To catch the complete length of array. including ,,, ,, in the end

    if (! ( arr[0][0] === undefined ) ){

    for (let i=0; i< arr.length;i++){
        if(! Array.isArray(arr[i])) throw `${i+1}th element of array -> ${arr[i]} is not an array`
        if (arr[i].length === 0) throw `${i+1}th element in the array -> ${arr[i]} is blank array`
        //return (Array.isArray(arr[i]))
        //console.log(`${arr[i].length} length`)
        for(let j=0; j<arr[i].length;j++){
            
            if (typeof(arr[i][j]) !== 'number' || isNaN(arr[i][j])) throw `${j+1}th element in ${i+1}th Array is not a number`
           // if ( arr[i][j] === NaN) throw `${j+1}th element in ${i+1}th Array is not a number`
            sum = sum + arr[i][j]
            count += 1
        }
        
    }
    }else { 
        for(let k = 0; k <arr.length;k++){
            if (typeof(arr[k]) !== 'number' || arr[k] === NaN || arr[k] === ``) throw `${k+1}th element -> ${arr[k]} in Array is not a number`
            sum += arr[k]
            count += 1
        }
    }

    return (Math.round(sum/count))
};

try{
    console.log(average([[1,2,4,'']])) //Returns: error
}catch(e){
    console.log(e)
}
try{
    console.log(average([[1,3],,,])) //Returns: error
}catch(e){
    console.log(e)
}
try{
    console.log(average([[-3,-9,-12]])) //Returns: 
}catch(e){
    console.log(e)
}
try{
    console.log(average([[1,3],[1,3,7.9]])) //Returns: 3
}catch(e){
    console.log(e)
}
try{
    console.log(average([[1], [2], [3]])); // Returns: 2
}catch(e){
    console.log(e)
}
try{
    console.log(average([[1,3], [2,4,5]])); // Returns: 3 
}catch(e){
    console.log(e)
}
try{
    console.log(average([])); // throws an error 
}catch(e){
    console.log(e)
}
try{
    console.log(average("banana")); // throws an error
}catch(e){
    console.log(e)
}
try{
    console.log(average(["guitar", 1, 3, "apple"])); // throws an error 
}catch(e){
    console.log(e)
}
try{
    console.log(average()); // throws an error
}catch(e){
    console.log(e)
}
try{
    console.log(average([[1,2,3],6]));
}catch(e){
    console.log(e)
}
try{
    console.log(average([1,2,3]));
}catch(e){
    console.log(e)
}






