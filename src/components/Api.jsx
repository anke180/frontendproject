import { useEffect, useState } from 'react'
import "/src/App.css"

function App() {
  const [data, setData] = useState([]);

  useEffect (() => {
      fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
      .then((responce) => responce.json())
      .then((json) => setData(json))
  }, [])

  return (
  <>
  //we moeten een for each maken voor alle namen en id's 
      <div>
          <p>{data.id} {data.name}</p>
      </div>
      {/* <div>
          {data.sprites?.front_default}
      </div> */}
  </>
  )
}

export default App