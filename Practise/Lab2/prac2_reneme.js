let earlierChar
let nextChar
let charDict = {}
function checkString(str){
    if(!typeof(str) === 'undefined') throw 'Kindly provide string as input' 
    if(!typeof(str) === 'string') throw 'Given input is not a string'
    if(str.length === 0) throw 'Given string is of 0 length'
    if(!str.replace(/\s/g, '').length) throw 'String is empty' //Credit: https://stackoverflow.com/a/10262019
    //console.log(str.length)
    return str.length
}
function checkIdx(idx) {
    if( typeof(idx) !== 'number' || isNaN(idx) ) throw 'Kindly provide numeric Index'
    return true
}
function modifyChar(string,index) {
    //console.log(earlierChar,nextChar)

    if(charDict[earlierChar] === true && charDict[nextChar] === false){
        charDict[earlierChar] = false
        charDict[nextChar] = true
        return string.substring(0,index) + earlierChar + string.substring(index+1)    
    }
    if(charDict[earlierChar] === false && charDict[nextChar] === true){
        charDict[earlierChar] = true
        charDict[nextChar] = false
        return string.substring(0,index) + nextChar + string.substring(index+1)    
    }
    
}

//console.log(checkString('   yh   '))
function replaceChar(string,idx) {
    const strLength = checkString(string)
    //Check for idx
    checkIdx(idx)
    if(idx <= 0 || idx > strLength-2 || idx % 1 !== 0) throw 'Invalid Index'

//-----------Initialization------------------
    earlierChar = ''
    nextChar = ''
    charDict = {}
//--------------------------------------------

    let indexedValue = string.charAt(idx)
    earlierChar = string.charAt(idx-1)
    nextChar = string.charAt(idx+1)
    //console.log(earlierChar,nextChar)

    //Initializing replacement characters
    charDict[earlierChar] = true
    charDict[nextChar] = false
    let index = -1
    for(let i = 0; i<strLength; i++){
         index = string.indexOf(indexedValue, (index +1))
         if(index === -1) //traversed complete string and required char is not found
         break
         if (index !== idx && index !== -1){
            string = modifyChar(string,index)
        }
    }
    return string
}
console.log(replaceChar('daddy',2))
console.log(replaceChar('Daddy',2))
console.log(replaceChar('Foobar',3))
console.log(replaceChar('   fofofo   ',3))// Check this case
console.log(replaceChar('Dddxyzdxy',3.2))// Check this case