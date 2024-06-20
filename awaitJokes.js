async function sayJoke(apiUrl, jokeId){
    try{
      let data = await fetch(apiUrl)    
      data = await data.json()
      if(!data.jokes){
        throw new Error("No jokes at url: "+apiUrl)
      }
      data = data.jokes.filter((el)=>el.id === jokeId)
      if(data.length==0){
        throw new Error(`No jokes found id: ${jokeId}`)
      }
      return Promise.resolve({
        saySetup:()=>{      
        return data[0].setup
        },
        sayPunchLine:()=>{      
        return data[0].punchLine
        }
      })
    }catch(err){
      //pass rejected msg
      throw new Error(err.message)
    }
   
    
  }