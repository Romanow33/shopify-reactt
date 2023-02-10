import React, { Component, createContext } from 'react'
import Client from 'shopify-buy'

const ShopContext = createContext();
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
})


class ShopProvider extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false,

    }

    componentDidMount() {

        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout })
    }

    fetchCheckout = async (checkoutId) => {
        client.checkout.fetch(checkoutId).then((checkout) => {
            this.setState({ checkout: checkout })
        })

    }

    addItemToCheckout = async (variantId, quantity) => {
        const itemToAdd = { variantId: variantId, quantity: parseInt(quantity, 10) }
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, itemToAdd)
        this.setState({ checkout: checkout })
        this.openCart()
    }


    removeLineItem = async (lineItemsIdsToRemove) => {
        const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemsIdsToRemove)
        this.setState({ checkout: checkout })

    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({ products: products })
    }

    fethProductsWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        this.setState({ product: product })
    }

    closeCart = () => { this.setState({ isCartOpen: false }) }

    openCart = () => { this.setState({ isCartOpen: true }) }

    closeMenu = () => { this.setState({ isMenuOpen: false }) }

    openMenu = () => { this.setState({ isMenuOpen: true }) }

    render() {
        return (
            <ShopContext.Provider
                value={{
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fethProductsWithHandle: this.fethProductsWithHandle,
                    addItemToCheckout: this.addItemToCheckout,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    closeMenu: this.closeMenu,
                    openMenu: this.openMenu,
                    removeLineItem: this.removeLineItem
                }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }
export default ShopProvider
