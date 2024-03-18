// Create a MouseClicker component that contains a button with a name attribute set to the "one" string.
// Attach an event handler to the button that prints the name prop to the console when clicked by reading the event.target.name property.

// Add an image inside the button and add an onClick event handler to it that prints the src of the image to the console.
// How can you prevent the name attribute of the button from being printed to the console when the image is clicked?


export const MouseClicker = () => {
    
    const handleClick = (event) => {
        console.log(event.currentTarget.name);
    }
    
    const handleClickImg = (event) => {
        console.log(event.currentTarget.src);
        event.stopPropagation();
    }

    return (
        <div>
            <button name="one" onClick={handleClick}>Click me! <img src="https://c8.alamy.com/compit/2jd98n6/goku-dragon-ball-z-1996-2jd98n6.jpg" alt="" onClick={handleClickImg} width={100} height={100}/></button>
        </div>
    )
}