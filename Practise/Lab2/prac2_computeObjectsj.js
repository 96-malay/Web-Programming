function checkArray(arrayObj) {
    if (!(Array.isArray(arrayObj))) throw 'Input is not an Array'
    if (arrayObj.length === 0 ) throw 'Input is empty Array'
    return true
}
function checkObject_common(object) {
    if( typeof(object) !== 'object' || object === null) throw 'Kindly provide valid object as input'
    if (Object.keys(object).length === 0) throw 'Object is blank'
    return true
}
function checkfunction(func) {
    if (typeof(func) !== 'function') throw 'Function is undefined'
    return true
}
function checkNumber(num){
    if (typeof(num) !== 'number' || isNaN(num) || num === ``) {//throw 'Values must be numbers'
        return false }
    return true
}
function computeObjects(array,func) {
    checkArray(array)
    checkfunction(func)
    
    let sumObj = {}
    for (let obj of array){
        checkObject_common(obj)
        for (let key in obj){
            if ( ! checkNumber(obj[key]) ) throw 'Values must be numbers'
            if( key in sumObj){
                sumObj[key] = sumObj[key] +  obj[key]
            }else{
                sumObj[key] = obj[key]
            }
        }
    }
    //Perform operation on sum of Input objects
    
    for(k in sumObj){
        sumObj[k] = func(sumObj[k])
    }
    return sumObj
}
console.log(computeObjects([{x:30,y:16},{x:39,a:100}], x => x * 02))