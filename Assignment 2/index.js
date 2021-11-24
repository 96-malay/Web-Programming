const arrayUtil = require("./arrayUtils")
const stringUtil = require("./stringUtils")
const objUtil = require("./objUtils")

console.log(objUtil.computeObjects([{ x: 1, y: 2, z: 3 }, {x: 2, z: 5}], (e) => e * e))

try{ //Should pass
    const avg= arrayUtil.average([[4,3], [2,4,5]])
    console.log(avg)
    }catch(e){
        console.log(e)
    }

try{
    const avg= arrayUtil.average(["guitar", 1, 3, "apple"])
    console.log(avg)
    } catch(e){
        console.log(e)
    }

//console.log('--------ModeSquare--------')

try{
    const modeSquared= arrayUtil.modeSquared([3,3,4,4,5,5])
    console.log(modeSquared)
    }
    catch(e){
        console.log(e)
    }

try{
    const modeSquared= arrayUtil.modeSquared([true])
    console.log(modeSquared)
    }
    catch(e){
        console.log(e)
    }


//console.log('--------Median Element---------')


try{
    const medianElement= arrayUtil.medianElement([1,2,2,3,4,-9,-8,7,3])
    console.log(medianElement)
} 
catch(e){
    console.log(e)
}

try{
    const medianElement= arrayUtil.medianElement([1,2,'error'])
    console.log(medianElement)}
catch(e){
    console.log(e);
}

//console.log('----------merge--------')

try{
    const merge= arrayUtil.merge([1,'a',"B"],[1,5,-5,9,"A","C"])
    console.log(merge);}
catch(e){
    console.log(e);
}
try{
    console.log(arrayUtil.merge([1,3],'hfj'))
}catch(e){
    console.log(e)
}

//console.log('--------Sort string ---------')

try{
    const sortString= stringUtil.sortString('Mala#yS)hah9  89_*&8')
    console.log(sortString)}
catch(e){
    console.log(e);
} 


try{
    const sortString= stringUtil.sortString(123)
    console.log(sortString)}
    catch(e){
        console.log(e);
    } 


//console.log('------- Replace char------')



try{
    const replaceChar= stringUtil.replaceChar("Malay  Shah     ",6)
    console.log(replaceChar)}
catch(e){
    console.log(e);
} 


try{
    const replaceChar= stringUtil.replaceChar("foobar", 7)
    console.log(replaceChar)}
catch(e){
    console.log(e)
} 

    
//console.log('-----mashup------')


    try{
        const mashUp = stringUtil.mashUp("hello", "world", "#")
        console.log(mashUp)}
    catch(e){
        console.log(e)
    } 
    
    try{
        const mashUp = stringUtil.mashUp ("h", "Hello", 4)
        console.log(mashUp)}
    catch(e){
        console.log(e)
    } 

 
//console.log('-------ComputeObjects-------')

const first = { x: 8, y: 9};
const second = { a: 50, x: -8, z: 51 };
const third = { x: 0, y: 45, q: 40 };
    try{
        console.log(objUtil.computeObjects([first,second,third], x => x+ 5))
    }catch(e){
        console.log(e)
    }
    try{
        console.log(objUtil.computeObjects([first,second], null))
    }catch(e){
        console.log(e)
    }

//console.log('-----FlipObject---------')
try{
    console.log(objUtil.flipObject({a:1,b:true,c:1,d:[2,4,6,[10,20]], e:{g:9,l:{r:9},m:[45,98]}}))
}catch(e){
    console.log(e)
}
   /* {
  '1': 'c',
  '2': 'd',
  '4': 'd',
  '6': 'd',
  '10': 'd',
  '20': 'd',
  '45': 'm',
  '98': 'm',
  true: 'b',
  e: { '9': 'g' },
  l: { '9': 'r' }
} */

//console.log(objUtil.flipObject({ a: 3, b: 7, c: { x: 1 } }))
    try{
        console.log(objUtil.flipObject({}))
    }catch(e){
        console.log(e)
    }

//console.log('-----CommonKeys---------')
const first_common = {a: 2, b: {x:9}};
const second_common = {a: 5, b: 4};
const third_common = {a: 2, b: {x: 7, y:10}};
const fourth_common = {a: 2, b: {x: 7, y: 10}};
try{
    console.log(objUtil.commonKeys(third_common,fourth_common))
}catch(e){
    console.log(e)
}

try{
    console.log(objUtil.commonKeys({},{}))
}catch(e){
    console.log(e)
}
/* console.log(objUtil.commonKeys(third_common,second_common))
console.log(objUtil.commonKeys(third_common,first_common))
console.log(objUtil.commonKeys(fourth_common,first_common)) */

   
 