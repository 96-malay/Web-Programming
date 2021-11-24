// Test case by Me //

//console.log("start of app")
const arrayUtil = require('./arrayUtils');

/////////// CHECK THIS TEST CASE ///////////
try{
    console.log(arrayUtil.average([[,,3]])) //Check
} catch(e){
    console.log(e)
}
/////////// CHECK THIS TEST CASE ///////////
/* try{
    console.log(arrayUtil.average([[true,NaN],[1,3,7.9]])) //Returns: error
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average([[1], [2], [3]])); // Returns: 2
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average([[1,3], [2,4,5]])); // Returns: 3 
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average([])); // throws an error 
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average("banana")); // throws an error
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average(["guitar", 1, 3, "apple"])); // throws an error 
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average()); // throws an error
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.average([[1,2,3],6]));
}catch(e){
    console.log(e)
}

try{
    console.log(arrayUtil.average([1,2,3]));
}catch(e){
    console.log(e)
}

 *//* --------------------------------End Of Average test cases-------------------------------------------------- */

/* --------------------------------     Mode test cases     -------------------------------------------------- */
/* try{
    console.log(arrayUtil.modeSquared([]))
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared())
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared([1,2,3,,]))
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared(['@',   ]))
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared([true,2,3]))
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared([1,2,3],[4,5,6]))
} catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.modeSquared([[1,4,7],[2,4,7]]))
} catch(e){
    console.log(e)
}
 */
/* --------------------------------    End of Mode test cases     -------------------------------------------------- */

/* --------------------------------    Median test cases     -------------------------------------------------- */

/* 
try{
    console.log(arrayUtil.medianElement([5, 6, 7])) // Returns: {'6': 1}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([9,9,9,9,9,9,9,9,9])) // Returns: {'9': 0}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([6,6,6,6,6,6])) // Returns: {'6': 0}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([6])) // Returns: {'6': 0}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([,,,])) // Returns: error
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([5, , 7])) // Returns: {'6': 1}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([4,7.9,7.9])) // Returns: {'6': 1}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([' ','jk'])) // Returns: {'6': 1}
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement(5, 6, 7))// throws error
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([]))// throws error
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement())// throws error
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement("test"))// throws error
}catch (e){
    console.log(e)
}
try{
    console.log(arrayUtil.medianElement([1,2,"nope"]))// throws error
}catch (e){
    console.log(e)
}
 */
/* --------------------------------    End of Median test cases     -------------------------------------------------- */

/* --------------------------------    Merge test cases     -------------------------------------------------- */
/*
try{
    console.log(arrayUtil.merge([9,3,'A'],['dd','z',890,'J']))
}catch(e){
    console.log(e)
}
 try{
    console.log(arrayUtil.merge([1, 2, 3], [3, 1, 2]))
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge([1, 2, 3, 'g'], ['d','a', 's']))
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge(['A', 'B', 'a'], [1, 2, 'Z']))
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge([null, null, null], [null, null, null]))
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge([],['ab', 'ts']))
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge())
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge())
}catch(e){
    console.log(e)
}
try{
    console.log(arrayUtil.merge())
}catch(e){
    console.log(e)
}
 */
/* --------------------------------    Merge test cases ends    -------------------------------------------------- */

/* ----------------------------------         STRINGS         ---------------------------------------------------- */
const stringUtil = require('./stringUtils');

/* --------------------------------    replaceChar test cases    -------------------------------------------------- */
/* try{
    console.log(stringUtil.replaceChar('daddy',2))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar('Daddy',2))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar('Foobar',3))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar('   fofofo   ',3))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar('      ',3))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar( '',3))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar(3,3))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.replaceChar( ))
}catch(e){
    console.log(e)
} */
/* console.log(replaceChar('daddy',2))
console.log(replaceChar('Daddy',2))
console.log(replaceChar('Foobar',3))
console.log(replaceChar('   fofofo   ',3))// Check this case */
/* --------------------------------    replaceChar test cases ends  -------------------------------------------------- */

/* --------------------------------    mashUp test cases    -------------------------------------------------- */
/* 
try{
    console.log(stringUtil.mashUp("Patrick", "Hill", "$"))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp("hello", "world", "#"))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp("Hi", "There", "@"))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp("Patrick", ""))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp( ))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp("John"))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp("h", "Hello", 4 ))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp( "h","e"))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.mashUp( ))
}catch(e){
    console.log(e)
} */
/* --------------------------------    End of mashUp test cases    -------------------------------------------------- */
/* try{
    console.log(stringUtil.sortString( '123 FOO BAR!'))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.sortString( ["Hello", "World"]))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.sortString( true ))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.sortString( ''))
}catch(e){
    console.log(e)
}
try{
    console.log(stringUtil.sortString( 'sRFRV%#F%&TRHG^1234TRH  iv'))
}catch(e){
    console.log(e)
} */
/* --------------------------------    End of stringUtils cases    -------------------------------------------------- */

const objUtils = require('./objUtils');
//const stringUtil = require('./stringUtils');
/* try{
    console.log(objUtils.flipObject())
}catch(e){
    console.log(e)
} */
/* try{
    console.log(objUtils.computeObjects( { a:1, b:[1,1,2] },{ a:1, b:[1,2] } ))
}catch(e){
    console.log(e)
} */