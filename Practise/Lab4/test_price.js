let x = '$$$$'
let priceRegex = `\/\${1,${x.length}}\/`
console.log(priceRegex.test('$$8$'))