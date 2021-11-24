(function () {
    
    function checkPalindrome (str) {
        if(!str) throw `Kindly provide valid string to check palindrome`
        if(typeof(str) !== 'string') throw `Kindly provide string input`
        str = str.trim()
        if(str.length === 0) throw `Blank Input`
        str = str.toLowerCase()
        str = str.replace(/[^\w\s]/gi, '')
        str = str.replace(/\s/g,'')
        if(str.length === 0) throw `Invalid Input`
        return str == str.split('').reverse().join('');
      }
    const staticForm = document.getElementById('static-form');
  
    if (staticForm) {
      
      const phrase = document.getElementById('phrase');

      const errorContainer = document.getElementById('error-container');
      const errorTextElement = errorContainer.getElementsByClassName(
        'text-goes-here'
      )[0];
  
      const resultContainer = document.getElementById('result-container');
      const resultTextElement = resultContainer.getElementsByClassName(
        'text-goes-here'
      )[0];
  
      staticForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        try {
          // hide containers by default
          errorContainer.classList.add('hidden');
          resultContainer.classList.add('hidden');
  
        let ipString = phrase.value;
        let res = checkPalindrome(ipString)
        let myOL = document.getElementById('attempts')
        if(res){
            resultTextElement.textContent = `Input string ${ipString} is a Palindrome`
            resultContainer.classList.remove('hidden');
            let li=document.createElement("li")
            li.innerHTML = ipString
            li.classList.add('is-palindrome')
            myOL.appendChild(li)
        }else{
            errorTextElement.textContent = `Input string ${ipString} is not a Palindrome`
            errorContainer.classList.remove('hidden');
            let li=document.createElement("li")
            li.innerHTML = ipString
            li.classList.add('not-palindrome')
            myOL.appendChild(li)
        }
  
          
        } catch (e) {
          const message = typeof e === 'string' ? e : e.message;
          errorTextElement.textContent = e;
          errorContainer.classList.remove('hidden');
        }
      });
    }
  })();