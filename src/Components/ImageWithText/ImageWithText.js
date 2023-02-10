import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'

function ImageWithText({ reverse, image, heading, text }) {

    const reverseSection = reverse ? "row-reverse" : "row"

    return (
        <Box>
            <Flex flexDir={["column", reverseSection]} w="100%">
                <Image src={image} objectFit="cover" w={["100%", "50%"]} />
                <Flex w={["100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center" p="2rem">
                    <Heading p="2rem">
                        {heading && heading}
                    </Heading>
                    <Text p="2rem">
                        {text && text}
                    </Text>
                    <Button
                        w="10rem"
                        backgroundColor="black"
                        color="white"
                    >
                        Bun Now
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ImageWithText
