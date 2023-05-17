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
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", documentingMetalChoice)
    //you must include the eventListener after creating the function above.
    //notice how documentingMetalChoice aligns with function above
    let metalChoicesHTML = ''
const metalStringArray = metals.map(
    (metal) => {
        return `<div>
<input type='radio' name='metal' value='${metal.id}'>${metal.metal}
</div>`
    }
)

metalChoicesHTML += metalStringArray.join("")
return metalChoicesHTML

    }
   

