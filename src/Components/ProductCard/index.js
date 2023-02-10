import React from 'react'
import { MdAddShoppingCart } from "react-icons/md"
import { Box, Button, Grid, Heading, Image, Text, Icon, Flex } from '@chakra-ui/react'

function ProductCard({ product, addItem }) {
    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent={"center"} alignItems="center">
                    <Image src={product.images[0].src}></Image>
                </Flex>
                <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} px="2rem">
                    <Heading pb="2rem">{product.title}</Heading>
                    <Text pb="2rem">
                        ${product.variants[0].price.amount}0 {product.variants[0].price.currencyCode}
                    </Text>
                    <Text pb="2rem" color="gray">{product.description}</Text>

                    <Button backgroundColor="black" color="white" onClick={() => addItem(product.variants[0].id, 1)} _hover={{ opacity: "70%", backgroundColor: "white", color: "black" }}>
                        Add to Cart
                    </Button>
                </Flex>
            </Grid>
        </Box >
    )
}

export default ProductCard
