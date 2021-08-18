const reverse = function(x) {
    if (x === 0){
      return 0
    }
      let strX = x.toString()
    // turns it into a string and reverses it and removes the commas
      let strSplit = strX.split('')
      let reverse = strSplit.reverse()
      let result = reverse.join().replace(/,/g,"")
    // this is the same but for negative numbers
      if(result.includes('-')){
        let rev = result.split('')
        rev.unshift(rev.pop());
        let reve = rev.join().replace(/,/g,"")
        if (reve < -2147483648){
          return 0
        }else{
          return parseInt(reve)
        }
      }
    // The problem has a limit
      if (result > 2147483647){
        return 0
      }else{
        return parseInt(result)
      }
      
    
  };

  reverse(123) //321