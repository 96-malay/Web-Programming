//console.log("hi")

let people = require('./people')
let stocks = require('./stocks')

async function main() {
    try{
        const listShareholders = await stocks.listShareholders()
        console.dir(listShareholders,{depth:null})
    }catch(e){
        console.log(e)
    } 
/*     try{
        const topShareHolder = await stocks.topShareHolder('Deltic Timber Corporation')
        console.log(topShareHolder)
    }catch(e){
        console.log(e)
    } */

    /* try{
        const listShareholders = await stocks.listShareholders(undefined)
        console.dir(listShareholders,{depth:null})
    }catch(e){
        console.log(e)
    } 
    try{
        const listShareholders = await stocks.listShareholders()
        console.dir(listShareholders,{depth:null})
    }catch(e){
        console.log(e)
    } 

    try{
        //float 
        const sameBirthday = await people.sameBirthday(9.9,30)
        console.log(sameBirthday)
    }catch(e){
        console.log(e)
    }

    try{
        const getPersonById = await people.getPersonById('20035a09-3820-4f49-bb8f-d947cebee537')
        console.log(getPersonById)
    }catch(e){
        console.log(e)
    }
    try{
        const getPersonById = await people.getPersonById(1000)
        console.log(getPersonById)
    }catch(e){
        console.log(e)
    }
    
   
    const sameStreet = await people.sameStreet("Sutherland", "Point")
    console.dir(sameStreet,{depth:null})
     try{
        
        const sameStreet = await people.sameStreet("Annamark", "Road")
        
        console.dir(sameStreet,{depth:null})
    }catch(e){
        console.log(e)
    }
    try{
        
        const sameStreet = await people.sameStreet(123, "hilL")
        console.dir(sameStreet,{depth:null})
    }catch(e){
        console.log(e)
    }
    
    try{
        
        const manipulateSsn = await people.manipulateSsn()
        console.log(manipulateSsn)
    }catch(e){
        console.log(e)
    }
    /* ---------------------   people.manipulateSsn()  ----------------------- 
    try{
        //float 
        const sameBirthday = await people.sameBirthday(9,30)
        console.log(sameBirthday)
    }catch(e){
        console.log(e)
    }
    try{
        //float 
        const sameBirthday = await people.sameBirthday("9",'30')
        console.log(sameBirthday)
    }catch(e){
        console.log(e)
    }
    try{
        //float 
        const sameBirthday = await people.sameBirthday(9,31)
        console.log(sameBirthday)
    }catch(e){
        console.log(e)
    }
    
try{
    //float 
    const topShareHolder = await stocks.topShareHolder('     ')
    console.log(topShareHolder)
}catch(e){
    console.log(e)
} 
try{
    //float 
    const topShareHolder = await stocks.topShareHolder()
    console.log(topShareHolder)
}catch(e){
    console.log(e)
} 
try{
    //float 
    const topShareHolder = await stocks.topShareHolder(1234)
    console.log(topShareHolder)
}catch(e){
    console.log(e)
} 
try{
    //float 
    const topShareHolder = await stocks.topShareHolder('123jsnvlfs')
    console.log(topShareHolder)
}catch(e){
    console.log(e)
}  

try{
    const topShareHolder = await stocks.topShareHolder('ECA Marcellus Trust I')
    console.log(topShareHolder)
}catch(e){
    console.log(e)
}

try{
    const listStocks = await stocks.listStocks('Grenville','Pawelke')
    console.dir(listStocks,{depth:null})
}catch(e){
    console.log(e)
}

try{
    const listStocks = await stocks.listStocks('    ',987)
    console.dir(listStocks,{depth:null})
}catch(e){
    console.log(e)
}

try{
    const getStockById = await stocks.getStockById('    ')
    console.dir(getStockById,{depth:null})
}catch(e){
    console.log(e)
}
try{
    const getStockById = await stocks.getStockById(57890)
    console.dir(getStockById,{depth:null})
}catch(e){
    console.log(e)
}
try{
    const getStockById = await stocks.getStockById('f652f797-7ca0-4382-befb-2ab8be914ff0')
    console.dir(getStockById,{depth:null})
}catch(e){
    console.log(e)
} */

}
main()
