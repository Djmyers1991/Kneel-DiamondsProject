import { MetalOptions } from './Metals.js'
import { Orders, orderButton } from './Order.js'
import { SizeOptions } from './Sizes.js'
import { StyleOptions } from './Styles.js'

const container = document.querySelector("#container")

const render = async () => {//don't forget the async. It must wait for the function to run//
    const metalOptionsHTML = await MetalOptions()//when running the functions from an api, you must include await
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const placeOrderButton= await orderButton()
    const visibleOrders = await Orders()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}

            </section>

            <section class="choices__styles options" class="boxchoices">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderButton}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${visibleOrders}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newSubmission", type => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
}) //ask Steve why different from Indiana Jeans and what this means. 
//this portion shows the state of the data has changed  when you click the create custom button// 
render() //call the function outside as well!