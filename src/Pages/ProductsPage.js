import React, { Suspense, useContext, useEffect } from 'react'
import { Await, useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { ShopContext } from '../Context/ShopContext'

export default function ProductsPage() {
    const { handle } = useParams()
    const { fethProductsWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        if (handle) {
            fethProductsWithHandle(handle)
        }
    }, [fethProductsWithHandle, handle])

    if (!product || Object.values(product).length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <Suspense fallback={<h1>Loading</h1>} >
                <Await
                    resolve={product}
                    errorElement={
                        <div>Could not load reviews 😬</div>
                    }
                    children={(resolvedProduct) => (
                        <ProductCard product={resolvedProduct} addItem={addItemToCheckout} />
                    )}
                />

            </ Suspense>
        )
    }
}

