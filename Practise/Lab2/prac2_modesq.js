const getMax = object => { //Credit: https://stackoverflow.com/a/47934466
    return Object.keys(object).filter(x => {
         return object[x] == Math.max.apply(null, 
         Object.values(object));
   });
};

const modeSquared = function(arr){
    if (!Array.isArray(arr)) throw 'Input is not an array'
    if (arr.length === 0) throw 'Input is blank array'
    let format = `/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`

    
    let dict = {}
    arr = Array.from(arr)
    for (let i=0; i < arr.length; i++){
        //console.log(arr[i])
        //Check for special symbols here
        if (typeof(arr[i]) !== 'number' || arr[i] === `` || arr[i] === NaN )throw `${i+1}th element is not a number`
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
    
}

//console.log(modeSquared([45,``, ,,98]))
console.log(modeSquared([1,2,,,,]))
console.log(modeSquared([1,1,2,2,2,3,3,3,4,4,4,5,6,7]))
console.log(modeSquared([1,2,3,4]))
try{
    console.log(modeSquared([[],2,3,3,``,,]))
}catch (e){
    console.log(e)
}

console.log(modeSquared([]))