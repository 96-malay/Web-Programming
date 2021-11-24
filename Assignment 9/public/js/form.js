(function () {

function checkPalindrome(string){
    if(!string) throw `Kindly provide valid string to check palindrome`
    if(typeof(string) !== 'string') throw `Kindly provide string input`
    string = string.trim()
    if(string.length === 0) throw `Blank Input`
    if(string.reverse() === string){
        return true
    }else{
        return false
    }
    
}

const staticForm = document.getElementById('myform')

if(staticForm){

    const ipString = document.getElementById('ipString')

    const notPalindrome = document.getElementById('notPalindrome');
    const notPalindromeTextElement = notPalindrome.getElementsByClassName(
      'message'
    )[0];

    const isPalindrome = document.getElementById('isPalindrome');
    const isPalindromeTextElement = isPalindrome.getElementsByClassName(
      'message'
    )[0];


    staticForm.addEventListener('submit', (event)=> {
        event.preventDefault()
        let result = ''
        try{
            notPalindrome.classList.add('hidden')
            isPalindrome.classList.add('hidden')

            ipStringValue = ipString.value
            result = checkPalindrome(ipStringValue)
            if(result){
                isPalindromeTextElement.textContent = `The given string ${ipStringValue} is a palindrome`
                isPalindrome.classList.remove('hidden')
            }else{
                notPalindromeTextElement.textContent = `The given string ${ipStringValue} is not a palindrome`
                notPalindrome.classList.remove('hidden')
            }

        }catch(e){
            notPalindromeTextElement.textContent = e
            notPalindrome.classList.remove('hidden')
        }
        } )

}
})