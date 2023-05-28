// Set up the transient state data structure and provide initial valuess
/* Add a new module into your application that will store the transient state 
as the customers make their choices. 
Remember that initial state should be established to look exactly 
like how the data will be stored in your API, 
but with default values.
Boolean values should default to false
Integer values should defualt to 0
String values should default to an empty string ""
Then write a setter function to update the value of each property. 
Make sure you export those functions for use in other modules.*/


const transientState = {
    
    "stylesId": 0,
    "sizesId": 0,
    "metalsId":0,
    "totalPrice": 0

}//here we are changing all the temporary states of the relative foreignkeys
//this makes sense to me that the temporary state will be replaced via the functions below
// Functions to modify each property of transient state

export const setStylesId = (selectedStylesId) => {
transientState.stylesId = selectedStylesId
console.log(transientState)
}
//in the above function I'm setting a variable equal to setStylesId
//The parameter is selectedStylesId. I'm setting the object property
//of transientStatestylesId to whatever is clicked or selected.
// Function to convert transient state to permanent state
//whatever is selected in the various functions will be imported to the state above.

export const setSizesId = (selectedSizeId) => {
transientState.sizesId = selectedSizeId
console.log(transientState)

}

export const setMetalsId = (selectedMetalId) => {
    transientState.metalsId = selectedMetalId
    console.log(transientState)
    
    }
    
 

    export const placeOrder = async () => {
        const postOptions = {
            method: "POST",//means create
            headers: {
                "Content-Type": "application/json"
            }, //not sure what all this means if I'm being honest. Ask Steve/Tiana during self-assessment.
            body: JSON.stringify(transientState)//we need to turn our transient state into a string so we can access it
        }

        const response = await fetch("http://localhost:8088/orders", postOptions)
        const customEvent = new CustomEvent("newSubmission")
document.dispatchEvent(customEvent) //not sure what these are doing. Ask Steve/Tiana during self-assessment to explain.

    }


