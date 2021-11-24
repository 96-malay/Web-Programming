const md5 = require('blueimp-md5');
const publickey = '03d21d18f5a75c5bdd18ae241c00de0b';
const privatekey = 'e33ccc1726c410a03db739247025082e7925323a';
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);

const axios = require('axios')

function validateSearchName(search) {
    if(!search) throw [400,`Kindly provide search Term`]
    if(typeof(search) !== 'string') throw [400,`input is not a string`]
    if( search.trim().length === 0 ) throw [400,'Blank Input']
    return true
}
async function getSearchNameData(searchName) {
    if (searchName == '0' || searchName == 0) throw  [400,'Invalid Input']
    validateSearchName(searchName)
    const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchName}`;
    const url = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash + '&limit=20';

    const { data } = await axios.get(url)
    if(data.data.results.length === 0) throw [404,`No results found for ${searchName}`]
    return data.data.results
    //console.log(data)
    //https://gateway.marvel.com/v1/public/characters?ts=1592417963445&apikey=a8f9ccf932bf29fd379ef00e11668673&hash=f061194023791a1593a0ea861a27da67
}
async function getSearchIdData(searchId) {
    validateSearchName(searchId)
    const baseUrl = `https://gateway.marvel.com:443/v1/public/characters/${searchId}`;
    const url = baseUrl + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash ;
    try{
        const { data } = await axios.get(url)
        //if(data.data.results.length === 0) throw [404,`No results found for Id: ${searchId}`]
        return data.data.results[0]
    }catch(e){
        throw [e.response.status,e.response.statusText]
    }
    
    //console.log(data)
    //https://gateway.marvel.com/v1/public/characters?ts=1592417963445&apikey=a8f9ccf932bf29fd379ef00e11668673&hash=f061194023791a1593a0ea861a27da67
}
module.exports = {
    getSearchNameData,
    getSearchIdData,
    validateSearchName
}