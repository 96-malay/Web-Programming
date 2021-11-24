const axios = require('axios')

async function getPeopleData(){
    try{
        const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
        return data // this will be the array of people objectsß
    }catch(e){
        //console.log(e)
        return false
    }
    
    
  }


function checkIdString(string) {
    if(typeof(string) === 'undefined') throw 'Kindly provide ID'
    if(typeof(string) !== 'string' || string === null) throw 'Input is not a string'
    if(string.length === 0) throw 'Input string is of 0 length'
    if( ! string.replace(/\s/g,'').length) throw 'Input is the Blank String'
    
    return true
}
function checkStreetName(string) {
    if(typeof(string) === 'undefined') throw 'Kindly provide a Street Name'
    if(typeof(string) !== 'string' || string === null) throw 'Street Name is not a string'
    if(string.length === 0) throw 'Street Name string is of 0 length'
    if( ! string.replace(/\s/g,'').length) throw 'Street Name is the Blank String'
    
    return true
}
function checkstreetSuffix(string) {
    if(typeof(string) === 'undefined') throw 'Kindly provide a Street Suffix'
    if(typeof(string) !== 'string' || string === null) throw 'Street Suffix is not a string'
    if(string.length === 0) throw 'Street Suffix string is of 0 length'
    if( ! string.replace(/\s/g,'').length) throw 'Street Suffix is the Blank String'
    
    return true
}

function checkMonth(month) {
    let numMonth = Number.parseInt(month)
    if(numMonth !== NaN && numMonth != month) throw 'Invalid Month number'
    if( numMonth === NaN) throw 'Kindly provide Month Number'
    if (numMonth <= 0 || numMonth > 12) throw 'Kindly provide valid month number(1-12)'

    return numMonth
    
}

/* 
January – 31 days
February – 28 days in a common year and 29 days in leap years
March – 31 days
April – 30 days
May – 31 days
June – 30 days
July – 31 days
August – 31 days
September – 30 days
October – 31 days
November – 30 days
December – 31 days
 */
function checkDay(day,month) {
    let numDay = Number.parseInt(day)
    let numMonth = Number.parseInt(month)
    let monthDict = {1: 'January',
                     2: 'February',
                     3: 'March',
                     4:'April',
                     5:'May',
                     6:'June',
                     7:'July',
                     8:'August',
                     9:'September',
                     10:'October',
                     11:'November',
                     12:'December'
                }
    let monthDays = {1: 31,
                     2: 29,
                     3: 31,
                     4: 30,
                     5:31,
                     6:30,
                     7:31,
                     8:31,
                     9:30,
                     10:31,
                     11:30,
                     12:31
                }
    if(numDay !== NaN && numDay != day) throw 'Invalid date'
    if( numDay === NaN) throw 'Kindly provide valid day'
    if( numDay > monthDays[numMonth] || numDay <= 0) throw `${monthDict[numMonth]} can not have ${numDay} as date` //'February month can not have given day'
    /* if (numMonth === 2 && ( numDay > 29 || numDay <= 0 )) throw `${monthDict[numMonth]} can not have ${numDay} as date` //'February month can not have given day'
    if(numMonth !== 2){
        if(numMonth % 2 === 0 && (numDay > 30 || numDay <= 0 )) throw `${monthDict[numMonth]} can not have ${numDay} as date`
        if(numMonth % 2 !== 0 && (numDay > 31 || numDay <= 0 )) throw `${monthDict[numMonth]} can not have ${numDay} as date`
    } */
    return numDay
}
async function getPersonById(id) {
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
async function sameStreet(streetName,streetSuffix) {

    checkStreetName(streetName)
    checkstreetSuffix(streetSuffix)
    let data = await getPeopleData()
    if(!data) throw "Something went wrong (URL ERROR)"
    let resultSameStreet = []
    for (let i in data){
        if(data[i]['address']['home']['street_name'].toUpperCase() === streetName.toUpperCase() 
        && data[i]['address']['home']['street_suffix'].toUpperCase() === streetSuffix.toUpperCase()){
            resultSameStreet.push(data[i])
        }else if(data[i]['address']['work']['street_name'].toUpperCase() === streetName.toUpperCase() 
        && data[i]['address']['work']['street_suffix'].toUpperCase() === streetSuffix.toUpperCase()){
            resultSameStreet.push(data[i])
        }
    }
    if(resultSameStreet.length < 2 ) throw 'There are less than 2 people in this street'
    return resultSameStreet

    
}
async function manipulateSsn() {
    let data = await getPeopleData()
    if(!data) throw "Something went wrong (URL ERROR)"
    let resultManipulateSsn = {}
    let highestNum = 0
    let highestFName = ''
    let highestLName = ''
    let lowestFName = ''
    let lowestLName = ''
    let lowestNum = 0
    let sum = 0
    let count = 0
    for(let i in data){
        
        let ssn = parseInt(data[i]['ssn'].toString().replace(/-/g,'').split('').sort().join(''), 10 )
        if( ssn !== NaN){ //SSN can be NaN if it contains anything apart from numbers
            sum += ssn
            count += 1
        }
        
        //console.log(ssn)
        if( highestNum === 0 && lowestNum === 0 && ssn !== NaN ){
            highestNum = ssn
            lowestNum = ssn
            highestFName = data[i]['first_name']
            highestLName = data[i]['last_name']
            lowestFName = data[i]['first_name']
            lowestLName = data[i]['last_name']
        }
        if(highestNum <= ssn && ssn !== lowestNum && ssn !== NaN ) {
            highestNum = ssn
            highestFName = data[i]['first_name']
            highestLName = data[i]['last_name']
        }
        if(lowestNum >= ssn && ssn !== highestNum && ssn !== NaN){
            lowestNum = ssn
            lowestFName = data[i]['first_name']
            lowestLName = data[i]['last_name']
        }
    }
   /*  console.log(highestNum,highestFName,highestLName)
    console.log(lowestNum,lowestFName,lowestLName)
    console.log(sum / data.length) */
    resultManipulateSsn['highest'] = { 'firstName': highestFName , 'lastName' : highestLName}
    resultManipulateSsn['lowest'] = { 'firstName': lowestFName , 'lastName' : lowestLName}
    resultManipulateSsn['average'] = Math.floor(sum / count) //data.length
    return(resultManipulateSsn)
}

async function sameBirthday(month,day) {
    //console.log(month)
    month = checkMonth(month)
    day = checkDay(day,month)
    let resultSameBirthday = []
    let monthDict = {1: 'January',
                     2: 'February',
                     3: 'March',
                     4:'April',
                     5:'May',
                     6:'June',
                     7:'July',
                     8:'August',
                     9:'September',
                     10:'October',
                     11:'November',
                     12:'December'
                }
    let data = await getPeopleData()
    if(!data) throw "Something went wrong (URL ERROR)"
    for(let x in data){
        if( Number.parseInt(data[x]['date_of_birth'].substring(0,2)) === month 
        && Number.parseInt(data[x]['date_of_birth'].substring(3,5)) === day){
            //console.log(data[x])
            resultSameBirthday.push([ data[x]['first_name'] , data[x]['last_name']].join(" "))
            
        }
    }
    if (resultSameBirthday.length === 0) throw `No one has their birthday on ${monthDict[month]} ${day} `
    return resultSameBirthday
    
}
module.exports = {
    getPeopleData,
    getPersonById,
    sameStreet,
    manipulateSsn,
    sameBirthday
};