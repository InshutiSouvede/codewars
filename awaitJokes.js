async function sayJoke(apiUrl, jokeId){
  let data = await fetch(apiUrl)    
  data = await data.json()
  if(!data.jokes){
    throw new Error("No jokes at url: "+apiUrl)
  }
  data = data.jokes.filter((el)=>el.id === jokeId)
  if(data.length==0){
    throw new Error(`No jokes found id: ${jokeId}`)
  }
  return {
    saySetup:()=>{      
    return data[0].setup
    },
    sayPunchLine:()=>{      
    return data[0].punchLine
    }
  }


}