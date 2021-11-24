const express = require('express')
const router = express.Router()
const data1 = require('../data')
const mc_data = data1.marvel_characters

router.get('/', async (req,res) => {
    res.render('marvel-characters/searchTerm',{title:"Character Finder",showMainpg:false})
})

router.post('/search', async (req,res) => {
    let title = ''
    const ipData = req.body
    try{
        ipData.searchTerm = ipData.searchTerm.trim()
        await mc_data.validateSearchName(ipData.searchTerm)
        const data = await mc_data.getSearchNameData(ipData.searchTerm)
        title = 'Characters Found'
        res.render('marvel-characters/index', {characters:data,
                                               searchTerm:ipData.searchTerm,
                                               showMainpg:true,
                                               title:title,
                                               hasError:false})
        
    }catch(e){
        title = 'No Characters Found'
        let errorClass = ""
        if(e[0] === 404 ){
            e[1] = `We're sorry, but no results were found for ${ipData.searchTerm}.`
            errorClass = "not-found"
        }
        else{errorClass = "error"}
        res.status(e[0]).render('marvel-characters/index',{errorCode:e[0],
                                                           errorMessage:e[1],
                                                           hasError:true,
                                                           characters:false,
                                                            searchTerm:ipData.searchTerm,
                                                            showMainpg:true,
                                                            title:title,
                                                            errorClass:errorClass})
    }
})
router.get('/characters/:id' , async(req,res) => {
  
    // console.log(req.params.id)
    let title = ''
    try{
        req.params.id = req.params.id.trim()
        await mc_data.validateSearchName(req.params.id)
        const charById = await mc_data.getSearchIdData(req.params.id)
        charById.imageLink = charById.thumbnail.path + '.' +charById.thumbnail.extension
        title = charById.name
        
        res.render('marvel-characters/search_result', {charDataById:charById,
                                                        title:title,
                                                        showMainpg:true,
                                                        hasError:false})

    }catch(e){
        if(e[0] === 404 ){
            e[1] = `We're sorry, but no results were found for ${req.params.id}.`
        }
        title = e[1]
        res.status(e[0]).render('marvel-characters/search_result',{title:title,
                                                                   errorCode:e[0],
                                                                   errorMessage:e[1],
                                                                   hasError:true,
                                                                   showMainpg:true})
    }
    
})


module.exports = router