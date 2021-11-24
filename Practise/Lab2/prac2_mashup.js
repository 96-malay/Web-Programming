function checkChar(char) {
    console.log(typeof(char))
    if (typeof(char) === 'undefined') throw 'Kindly provide a character'
    if( typeof(char) !== 'string' ) throw 'Input character is not  a string'
    if(!char.replace(/\s/g, '').length) throw 'String is empty' //Credit: https://stackoverflow.com/a/10262019
    return true
}

function mashUp(string1,string2,char) {
    
    //check for string 1
    //check for string 2
    checkChar(char)

    str1Length = string1.length
    str2Length = string2.length

    diffLength = str1Length - str2Length

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
}
console.log(mashUp('joe',"Biden","&"))
console.log(mashUp("Patrick", "Hill", "$"))
console.log(mashUp("hello", "world", "#")) //Returns "hweolrllod"  notice that since both string are the same length, we can ignore the 3rd char parameter ))