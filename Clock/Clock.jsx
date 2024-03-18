import { useEffect, useState } from "react"

export const Clock = () => {
    
   const [data, setData] = useState(new Date())

   useEffect(() => {
    console.log('Setting up clock interval');

    const intervalID = setInterval(() => {
        console.log('Updating data...');

        setData(new Date())
    }, 1000)

    return () => {
        console.log('Clearing clock interval')

        clearInterval(intervalID)
    } 
}, [])

return <div><h2>Current time: {data.toLocaleTimeString()}</h2></div>
}

