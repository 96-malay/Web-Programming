function merge (arr1, arr2){
    //Check if ip is array
    //check length
    /* let con = arr1.concat(arr2)
    console.log(con) */
    //return [...con].sort((a, b) => a.localeCompare(b)).join("");
    //return con.sort()

    let numberarray = []
    let smallAlpha = []
    let capAlpha = []
    arr1.forEach( element => {
        //Check if the char is number or Char. If not then throw error
        //Assuming the ip is proper
        if (typeof(element) === 'number' && !isNaN(element)){
            numberarray.push(element)
        }else if (element <= 'z' && element >= 'a' && element.length === 1){
            smallAlpha.push(element)
        }else if( element <= 'Z' && element >= 'A' && element.length === 1){
            capAlpha.push(element)
        }else {
            throw 'Kindly input Numbers, Small or Capital Alphabets only'
        }

    });
    arr2.forEach( element => {
        //Check if the char is number or Char. If not then throw error
        //Assuming the ip is proper
        if (typeof(element) === 'number' && !isNaN(element)){
            numberarray.push(element)
        }else if (element <= 'z' && element >= 'a' ){ //&& element.length === 1
            smallAlpha.push(element)
        }else if( element <= 'Z' && element >= 'A' ){ //&& element.length === 1
            capAlpha.push(element)
        }else {
            throw 'Kindly input Numbers, Small or Capital Alphabets only'
        }

    });
    //smallAlpha = smallAlpha.sort()
    numberarray = numberarray.sort((a,b) => {
        if (a > b) return 1
        if ( a < b ) return -1
        return 0
    })
    let resultarray = Array.prototype.concat(smallAlpha.sort(),capAlpha.sort(),numberarray)
    
    return resultarray;

}
console.log(merge([10,-9,-1,0,3,'A'],['dd','z',890,'J']))
console.log(merge(["abc",'ABC',2,55,7],['ab','a','aa']))
console.log(merge(["aA1",'ABC',2,55,7],['ab','a','a','aa']))