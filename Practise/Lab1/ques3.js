let arr = ['cat', 'act', 'foo', 'foo']
let setip = new Set(arr) //To get unique enteries
let uniqueIpArray = Array.from(setip)
//console.log(setip)
let sortedcopy = [] // To sort ip array items
let result = {}

for (let x of setip){
    sortedcopy.push(x.split('').sort().join(''))
}
console.log(sortedcopy)
const uniqueSorted = new Set(sortedcopy)
console.log(uniqueSorted)
const uniqueSortedArray = Array.from(uniqueSorted)
console.log(uniqueSortedArray)

for(let j of uniqueSortedArray){
    result[j] = new Array()
    for (let k of uniqueIpArray){
        if(k.length == j.length && k.split('').sort().join('') == j){
            result[j].push(k)
        }
    }
}
console.log(result)
// -------------------
/* for (const [k,v] in Object.entries(result)){
    console.log(`${k}`.length,`${v}`.length)
/*     if (v.length < 2 ){
        result[k].pop()
    } 
    
} */
// ---------------------
/*console.log(result.keys.length)
    for(let k = 0; k < result.length; k++){
        console.log(result.k.length)
    } */
    // ---------------------
    for (let k in result){
        console.log(result[k].length)
        if(result[k].length < 2){
            delete result[k]
        }
        
    }
console.log(result)