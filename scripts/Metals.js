// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()

//     let metalChoicesHTML = ''
//     for (const metal of metals) {
//         metalChoicesHTML += `<div>
//     <input type='radio' name='metal' value='${metal.id}'>${metal.metal}
//     </div>`//The input type is what makes it have cool dope little circle things//
//     }
   
//     return metalChoicesHTML

// }

import { setMetalsId } from "./TransientState.js"

const documentingMetalChoice = (event) => {
    if(event.target.name === "metal"){
        setMetalsId(parseInt(event.target.value))
    }
}//all we're doing in this function is invoking the function in transient state
//if we click on a metal, we are importing and replacing that value into our transient state.

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()//here, we're simply fetching the data that we need from the api we've created.
    document.addEventListener("change", documentingMetalChoice)
    //you must include the eventListener after creating the function above.
    //you must let it know what you'd like to change the transient state to.
    //notice how documentingMetalChoice aligns with function above
    let metalChoicesHTML = ''
const metalStringArray = metals.map(
    (metal) => {
        return `<div class="metal">
<input type='radio' name='metal' value='${metal.id}'>${metal.metal}
</div>`
    }
)
//radio is the button click thing
metalChoicesHTML += metalStringArray.join("")//you must eliminate the commas in the find method
return metalChoicesHTML

    }
   

