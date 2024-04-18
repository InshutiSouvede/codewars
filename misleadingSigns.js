function gaslighting(shirtWord,yourWord,friendsLetters) { 
    console.log("friend's ",friendsLetters.split(""))
  //   Not fooling him(shirt.includes friend) i.e knows.length>0 ? return true : false
  //   
    const notknow = friendsLetters.split("").filter((el,)=>{
  //     console.log("el ",el, " in shirt", shirtWord.includes(el)," in myw ", yourWord.includes(el))
  //     check indexes as well
       return shirtWord.includes(el) && yourWord.includes(el) && shirtWord.indexOf(el) == yourWord.indexOf(el)|| !shirtWord.includes(el) && !yourWord.includes(el)
    })
    if(friendsLetters.length==0||notknow.length == friendsLetters.length){
      console.log("My friend is not sure about these words: ", notknow)
    return false
    }
    else{
      console.log("the words my friend does not know: ", notknow, "all he said ",friendsLetters )
      return true
    }

  }