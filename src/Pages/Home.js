import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import Hero from '../Components/Hero/Hero'
import ImageWithText from '../Components/ImageWithText/ImageWithText'
import RichText from '../Components/RichText/RichText'

export default function Home() {
    const { fetchAllProducts, products } = useContext(ShopContext)
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) {
        return <div>Loading</div>
    }
    return (
        <Box>
            <Hero />
            <RichText
                heading={"The relaxation you've been waiting for."}
                text={"Our Bath bombs guarantee a fun , relaxing, and colorful night "}
            />
            <Grid templateColumns="repeat(3, 1fr)">
                {
                    products.map(product => {
                        return (
                            <Link to={`/product/${product.handle}`} key={product.id}>
                                <Box _hover={{ opacity: "80%" }} textAlign="center" position="relative">
                                    <Image src={product.images[0].src} />
                                    <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                                        {product.title}
                                    </Text>
                                    <Text position="absolute" bottom="10%" w="100%" color="gray.500">
                                        ${product.variants[0].price.amount} {product.variants[0].price.currencyCode}
                                    </Text>
                                </Box>
                            </Link>
                        )
                    }
                    )
                }
            </Grid>
            <RichText
                heading={"Treat your self."}

            />
            <ImageWithText
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
                heading="Heading"
                text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. " />
            <ImageWithText
                reverse
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
                heading="Second Heading"
                text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. " />
        </Box>
    )
}
