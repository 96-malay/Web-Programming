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

//--------------------    Keys         ----------------
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
//-----------------     CommonKeys      -----------------
let commonKeysResult = {}
function checkObject_common1(object) {
    if( typeof(object) !== 'object' || object === null || Array.isArray(object)) throw 'Kindly provide valid object as input'
    //if (Object.keys(object).length === 0) throw 'Object is blank'
    return true
}
function objectNest(key,obj) {
    let temp_obj = {}
    if(typeof(obj) === 'object'){
        for(let j in obj){
            temp_obj = {}
            temp_obj[key] = objectNest(j,obj[j])
            //objectNest(j,obj[j])
            return temp_obj
        }
    }else{
        temp_obj = {}
        temp_obj[key] = obj
        return temp_obj
    }
    if(!(key in commonKeysResult)){
        commonKeysResult[key] = new Array()
        commonKeysResult[key].push(obj)
    }else{
        commonKeysResult[key].push(obj)
    }
    return true

    
}
function checkIP(value) {
    if (value === null || typeof(value) === 'undefined') throw 'Invalid value'
    
}
function checkIPKey(value) {
    //console.log(! isNan(value) )
    //console.log(typeof(value))
    if (value === null || typeof(value) === 'undefined') throw 'Invalid value'
    
}
/* function printResultObjects(object1,object2){
    for(j in object1){
        for(h in object2){
            if( j === h && objet1[j] === object2[h]){
                commonKeyObjects[j] = commonKeysResult[k][0][j]
            }
        }
    }
} */


module.exports = {
    flipObject(object) {
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
    },
    computeObjects(array,func) {
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
    },

    commonKeys(obj1, obj2){
        checkObject_common1(obj1)
        checkObject_common1(obj2)
        commonKeysResult = {}
        let temp_objs = {}
        for(let i in obj1){
            checkIP(i)
            checkIPKey(obj1[i])
            if(typeof(obj1[i]) === 'object'){
                temp_objs = {}
                temp_objs = objectNest(i,obj1[i])
                for(let l in temp_objs){
                    if(!(i in commonKeysResult)){
                        commonKeysResult[i] = new Array()
                        commonKeysResult[i].push(temp_objs[i])
                    }else{
                        commonKeysResult[i].push(temp_objs[i])
                    }
                }
                
            }else{
                if(!(i in commonKeysResult)){
                    commonKeysResult[i] = new Array()
                    commonKeysResult[i].push(obj1[i])
                }else{
                    commonKeysResult[i].push(obj1[i])
                }
            }
        }
        for(let i in obj2){
            checkIP(i)
            checkIPKey(obj2[i])
            if(typeof(obj2[i]) === 'object'){
                temp_objs = {}
                temp_objs = objectNest(i,obj2[i])
                for(let l in temp_objs){
                    if(!(i in commonKeysResult)){
                        commonKeysResult[i] = new Array()
                        commonKeysResult[i].push(temp_objs[i])
                    }else{
                        commonKeysResult[i].push(temp_objs[i])
                    }
                }
                
            }else{
                if(!(i in commonKeysResult)){
                    commonKeysResult[i] = new Array()
                    commonKeysResult[i].push(obj2[i])
                }else{
                    commonKeysResult[i].push(obj2[i])
                }
            }
    
        }
        let commonKeyObjects = {}
       //console.log(commonKeysResult)
        for(k in commonKeysResult){
            if(Object.keys(commonKeysResult[k].length >= 2 )){
                if (typeof(commonKeysResult[k][0]) === 'object' && typeof(commonKeysResult[k][1]) === 'object'){
                    
                    //this will go in recursion
                    //let printResult = printResultObjects(commonKeysResult[k][0],commonKeysResult[k][1])
    
                    for(j in commonKeysResult[k][0]){
                        //console.log(commonKeysResult[k][0])
                        for(h in commonKeysResult[k][1]){
                            if( j === h && commonKeysResult[k][0][j] === commonKeysResult[k][1][h]){
                                commonKeyObjects[k] = commonKeysResult[k][0]
                            }
                        }
                    }
                    //this will go in recursion
                    
                    
                }
                if (commonKeysResult[k][0] === commonKeysResult[k][1]){
                    commonKeyObjects[k] = commonKeysResult[k][0]
                }
            }
        }
        return commonKeyObjects
    
    }


};