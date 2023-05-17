// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()//this is the simple fetch call to receive the date from the built-in API


//     let sizeChoicesHTML = ''//just running a simple for/of loop to generate the html
//     for (const size of sizes) {
//        sizeChoicesHTML +=`<div> 
//        <input type='radio' name='size' value='${size.id}'>${size.carets}</div>`
      
//     }
   
//     return sizeChoicesHTML }

import { setSizesId } from "./TransientState.js"

const documentingSizesChoice = (event) => {
   if(event.target.name === "size"){
       setSizesId(parseInt(event.target.value))
   }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()//this is the simple fetch call to receive the date from the built-in API
   addEventListener("change", documentingSizesChoice)
    let sizeChoicesHTML = ''
   
    const sizeStringArray = sizes.map(
      (size) => {
         return `<div>
         <input type='radio' name='size' value='${size.id}'>${size.carets}</div>`
      }
    )
      sizeChoicesHTML += sizeStringArray.join("")
      return sizeChoicesHTML 

      
    }
   

