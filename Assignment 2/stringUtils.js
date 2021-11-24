/* -----------------------------for replaceChar() ----------------------------------------- */
let earlierChar
let nextChar
let charDict = {}
function checkString(str){
    if(typeof(str) === 'undefined') throw 'Kindly provide string as input' 
    //console.log(typeof(str))
    if(! (typeof(str) === 'string')) throw 'Given input is not a string'
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
/* -----------------------------for replaceChar() ----------------------------------------- */

/* -------------------------------      For mashUp()    s--------------------------------------- */
function checkChar(char) {
    //console.log(typeof(char))
    if (typeof(char) === 'undefined') throw 'Kindly provide a character'
    if( typeof(char) !== 'string' ) throw 'Input character is not  a string'
    if(!char.replace(/\s/g, '').length) throw 'String is empty' //Credit: https://stackoverflow.com/a/10262019
    return true
}
/* -------------------------------      For mashUp()    s--------------------------------------- */

module.exports = {

    replaceChar(string,idx) {
        const strLength = checkString(string)
        //Check for idx
        checkIdx(idx)
        //if(idx === 0 || idx >= strLength-2) throw 'Invalid Index'
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
    },
    mashUp(string1,string2,char){
    //check for string 1
    let str1Length = checkString(string1)
    //check for string 2
    let str2Length = checkString(string2)
    checkChar(char)

    //str1Length = string1.length
    //str2Length = string2.length

    let diffLength = str1Length - str2Length

    if(diffLength < 0){
        for(let i = str1Length; i< str2Length; i++){
            string1 = string1.concat(char)
        }

    }else if(diffLength > 0){
        for(let i = str2Length; i< str1Length; i++){
            string2 = string2.concat(char)
        }
    }
    let resultString =  ""
    if(string1.length === string2.length){
        for(let j = 0 ; j< string1.length; j++){
            resultString = resultString.concat(string1.charAt(j),string2.charAt(j))
        }
        
    }

    return (resultString)
    },

    sortString(string){
    //check string validations
    let len = checkString(string)
    let numberarray = []
    let smallAlpha = []
    let capAlpha = []
    let spaces = []
    let specialSymbols = []
    //String.from(string)

    /* string.forEach(element => {
        if(element >= 'a' && element <= 'z')
    }); */
    let element
    for (let k=0;k<string.length;k++){
        element = string.charAt(k)
        //if (typeof(element) === 'number' && !isNaN(element)){
        if (element >= '0' && element <= '9' && !isNaN(element)){
            numberarray.push(element)
        }else if (element <= 'z' && element >= 'a'){
            smallAlpha.push(element)
        }else if( element <= 'Z' && element >= 'A'){
            capAlpha.push(element)
        }else if(element === ' ' ){
            spaces.push(element)
        }else if (typeof(element) === 'string' ){
            specialSymbols.push(element)
        }else{
            throw 'Invalid Input character'
        }
    }
    numberarray = numberarray.sort((a,b) => {
        if (a > b) return 1
        if ( a < b ) return -1
        return 0
    })
    let resultStr = Array.prototype.concat(capAlpha.sort(),smallAlpha.sort(),specialSymbols,numberarray,spaces).join('')
    return resultStr

    }
}