let resultFlipObject = {}
function checkObject_flip(obj) {
    if ( typeof(obj) !== 'object' || obj === null || Array.isArray(obj)) {
        return false }//throw 'Input is not a valid object'
    return true
}
function checkNumber(num){
    if (typeof(num) !== 'number' || isNaN(num) || num === ``) {
        return false; //Throw exception in calling function
    }
    return true
}
function arrayValue(key,array) {
    for(let x of array){
        if(Array.isArray(x)){
            arrayValue(key,x)
        }else if (typeof(x) === 'object'){
            objectValue(key,x)
        }else{
            pushResultFlipObject(x,key)
        }
    }
    return true
}
function objectValue(key,object){
    //if(typeof())
    let tempObj = {}
    for (let x in object){
        tempObj[object[x]] = x
        if(Array.isArray(object[x])){
            //arrayValue(key,x)
            arrayValue(x,object[x])
        }else if (typeof(object[x]) === 'object'){
            //objectValue(key,x)
            objectValue(x,object[x])
        }else{
            pushResultFlipObject(key ,tempObj)
        }
        tempObj = {}
    }
    return true
}
function pushResultFlipObject(key,value){ //Pass the key values after flipping them. this function only pushes into the final resultant object
    //if ( resultFlipObject[key] === 'undefined' ){
    /* if ( !(key in resultFlipObject)){
        resultFlipObject[key] = new Array()
    }
    resultFlipObject[key].push(value) */
    resultFlipObject[key] = value
    return true
}
function flipObject(object) {
    let objres = checkObject_flip(object)
    if(!objres) throw 'Input is not an object'
    let len = Object.keys(object).length
    if(objres && len === 0 ) throw 'Object is Empty'
    resultFlipObject = {} //to clear final ip
    //console.log(object)
    for (let key in object){
        if( object[key] === null || typeof(object[key]) === 'undefined' ) throw 'Invalid Input'
        //console.log(key , object[key])
        //console.log(typeof(object[key]))
        if (Array.isArray(object[key])){
            arrayValue(key,object[key])
        //}else if(checkObject(object[key])){ //Check the return type pf this function before uncommenting
        }else if(typeof(object[key]) === 'object'){
            objectValue(key,object[key])
        }else {
            pushResultFlipObject(object[key],key)
        }
    }

    return resultFlipObject;
}
//console.log(flipObject({ a: 3, b: 7,9 : 'c', c: {k:0,l:90} }))
console.log(flipObject({ b: [12,24,56],9 : 'c', c: {k:0, j:{l:90}} }))
//console.log(flipObject({a:[{1:10}], b:23}))
/* try{
    console.log(flipObject({}))
}catch(e){
    console.log(e)
}
try{
    console.log(flipObject([]))
}catch(e){
    console.log(e)
}
//console.log(flipObject({ a :  })) */