import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'


const StarShips = () =>  {

    const [starships, setStarships] = useState([])

    useEffect(() => {
  
        const makeApicall = async () => {

        let response= await axios('https://swapi.dev/api/starships/')
        
        console.log(response.data.results);
        setStarships(response.data.results)

        }
        makeApicall()

    }, []);

        const shipsJsx  = starships.map(item => {
            return(
                <div className='container' key={item.name} >
                    <h2  > {item.name}</h2>  
                </div>
            )
        })

  return (
    <div>
        <h1>Star Wars Starships</h1>
        {shipsJsx}
        

    </div>
  )
}

export default StarShips

