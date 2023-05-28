

import { setSizesId } from "./TransientState.js"

const documentingSizesChoice = (event) => {
   if(event.target.name === "size"){
       setSizesId(parseInt(event.target.value))
   }
}//this is the function that allows us to change the transient state.
//Again what is so crucial is that we're calling the function from the transient state
//to say that whatever we click will become our transient state.

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()//this is the simple fetch call to receive the date from the built-in API
   addEventListener("change", documentingSizesChoice)//again we must call the function to tell the computer what we want the data to chagne to.
    let sizeChoicesHTML = ''
   
    const sizeStringArray = sizes.map(
      (size) => {
         return `<div>
         <input type='radio' name='size' value='${size.id}'>${size.carets}</div>`
      }
    )//radio = button
      sizeChoicesHTML += sizeStringArray.join("")
      return sizeChoicesHTML 

      
    }
   

    // export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()//this is the simple fetch call to receive the date from the built-in API


//     let sizeChoicesHTML = ''//just running a simple for/of loop to generate the html
//     for (const size of sizes) {
//        sizeChoicesHTML +=`<div> 
//        <input type='radio' name='size' value='${size.id}'>${size.carets}</div>`
      
//     }
   
//     return sizeChoicesHTML }

