function sortString(string) {
    //check string validations
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
console.log(sortString('123 FOO BAR!'))
console.log(sortString(["Hello", "World"]))
console.log(sortString())
console.log(sortString(''))