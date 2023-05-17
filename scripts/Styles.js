// export const StyleOptions = async () => {
//     const response = await fetch("http://localhost:8088/styles")
//     const styles = await response.json()

//     let styleChoicesHTML = ''
//     for (const style of styles) {
//        styleChoicesHTML += `<div>
//        <input data type="radio" name="style" value="${style.id}">${style.style}</div>`
//     }
   
//     return styleChoicesHTML
// }
import { setStylesId } from "./TransientState.js"

const documentingStylesChoice = (event) => {
    if(event.target.name === "style"){
        setStylesId(parseInt(event.target.value))
    }
}
export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    
    document.addEventListener("change", documentingStylesChoice)

let styleChoicesHTML = ''
const divStyleArray = styles.map(
    (style) =>
    { return `<div>
       <input data type="radio" name="style" value="${style.id}">${style.style}</div>`
    }
)
   
    styleChoicesHTML += divStyleArray.join("")
    return styleChoicesHTML 
}
