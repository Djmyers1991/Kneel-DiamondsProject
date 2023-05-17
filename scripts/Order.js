import { placeOrder } from "./TransientState.js"

const handleOrderButtonLink = (clickEvent) => {
    if(clickEvent.target.id === 'placeOrder') {
        placeOrder()
    }
}

export const orderButton = () => {
    document.addEventListener("click", handleOrderButtonLink)
    return "<button id='placeOrder'>Create Custom Order</button></article>"

}

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metals&_expand=styles&_expand=sizes")
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
