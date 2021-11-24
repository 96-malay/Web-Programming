let arr = [3,4,5,9];
let result = {};
let flag = 0
for (let x of arr){

    //console.log(x)
    //console.log(arr[x])
    
    let res = Math.abs(Math.pow(x,2) - 7 )
    console.log(res)
    for (let i = 2; i <= Math.sqrt(res); i++)
    {
        if (res % i === 0)
        {
            console.log("False")
            flag =1
            result[res] = "False"
            break
        }
    }
    if (flag == 0){
        console.log("True")
        result[res] = "True"
        flag = 1
    }
    
};
console.log(result)