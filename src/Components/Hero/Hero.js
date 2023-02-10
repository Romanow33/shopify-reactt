import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Hero() {
    return (
        <Box backgroundColor="black" w="100%" h="80vh" position={"relative"}>
            <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549"
                h="60%" m="auto" objectFit="contain" objectPosition={"top"} />
            <Text
                position="absolute"
                bottom="40%"
                w="100%"
                textAlign="center"
                color={"white"}
                fontWeight="bold"
                fontSize="4rem"
                className='scale-up-center'
            >
                Introducing Bath boms
            </Text  >
            <Center>
                <Button backgroundColor="white" color="black" w="10rem"
                    _hover={{ opacity: "70%" }} position="absolute" bottom="20%">
                    Shop Now
                </Button>
            </Center>
        </Box >
    )
}

export default Hero
