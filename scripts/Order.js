import { placeOrder } from "./TransientState.js"

const handleOrderButtonLink = (clickEvent) => {
    if(clickEvent.target.id === 'placeOrder') {
        placeOrder()
    }
}//we're invoking the function from the transient state. 
//We're creating a click event to run the function as soon 
//as we hit the button we'll create below.

export const orderButton = () => {
    document.addEventListener("click", handleOrderButtonLink)
    return "<button id='placeOrder'>Create Custom Order</button></article>"

}//we're just making a simple event listener. Notice how the function
//will change if handleOrderButtonLInk is run. The parameter of the button
//is the function above.

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metals&_expand=styles&_expand=sizes")//copy and paste for the part in next chapter//
    const orders = await fetchResponse.json()
    
    let ordersHTML = ""
    let orderFullPrice =  0
    const orderStringArray = orders.map(
        (order) => {
            // orderFullPrice.fullPrice = order.styles.price + order.metals.price + order.sizes.price
           orderFullPrice = order.styles?.price + order.metals?.price + order.sizes?.price
            return `<div>Order #${order.id} costs $${orderFullPrice}</div>`
        }
    )
    ordersHTML += orderStringArray.join("")
    return ordersHTML
}
