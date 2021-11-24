const axios = require('axios')
async function getPeopleData(){
    try{
        const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
        return data // this will be the array of people objectsß
    }catch(e){
        //console.log(e)
        throw 'Resource not found'
    }
    
    
  }
  function checkIdString(string) {
    if(typeof(string) === 'undefined') throw 'Kindly provide ID'
    //No need to check type is string or not since every parameter will be converted into string while passing here. But still...
    if(typeof(string) !== 'string' || string === null) throw 'Input is not a string'
    if(string.length === 0) throw 'Input string is of 0 length'
    if( ! string.replace(/\s/g,'').length) throw 'Input is the Blank String'
    
    return true
}
async function getPersonById(id) {
    id = id.trim()
    checkIdString(id)
    let x = await getPeopleData()
    if(!x) throw "Something went wrong (URL ERROR)"
    for (let i in x){
        //console.log(x[i]['id']) 
        if(x[i]['id'] == id){

            //console.log(x[i]['id']) 
            return  (x[i]) 
        }
        
    }
    throw 'Person Not Found'
    
}
module.exports = {
    getPersonById,
    getPeopleData

}