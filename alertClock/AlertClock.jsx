import { Button } from "./Button"

export function AlertClock() {
   
    function handleShowtime() {
        const now = new Date ()
        alert (`The currrent time is ${now.toLocaleTimeString()}`)
    }
   
    return (
        <div>
            <p>Click the button below to show the current time</p>
            <Button onClick={handleShowtime} title="Click me!"/>
        </div>
    )
}


{/* <div>
<p>Click the button below to show the current time</p>
<button onClick={handleButtonClick}>Click me!</button>
</div> */}