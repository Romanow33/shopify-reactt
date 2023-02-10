import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Icon,
    Image,
    Link,
    Box
} from '@chakra-ui/react'
import { MdClose } from "react-icons/md";
function Cart() {
    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)
    console.log(checkout)
    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement='right'
                onClose={closeCart}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your shopping cart</DrawerHeader>

                    <DrawerBody>
                        {
                            checkout?.lineItems?.length ? checkout.lineItems.map((item) => {
                                return (
                                    <Grid templateColumns={"repeat(4, 1fr)"} key={item.id}>
                                        <Flex alignItems={"center"} justifyContent="center">
                                            <MdClose cursor={"pointer"} onClick={() => removeLineItem(item.id)} />
                                        </Flex>
                                        <Flex alignItems={"center"} justifyContent="center">
                                            <Image src={item.variant.image.src} />
                                        </Flex>
                                        <Flex alignItems={"center"} justifyContent="center">
                                            <Text>{item.title}</Text>
                                        </Flex>
                                        <Flex alignItems={"center"} justifyContent="center">
                                            <Text>{item.variant.price.amount}$</Text>
                                        </Flex>
                                    </Grid>
                                )
                            }) :
                                <Box h="100%" w="100%">
                                    <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                        Your Cart is empty
                                    </Text>
                                </Box>
                        }
                    </DrawerBody>

                    <DrawerFooter>

                        <Button colorScheme='blackAlpha' w="100%" >
                            {checkout?.lineItems?.length ? <Link w="100%" href={checkout.webUrl}>
                                Checkout
                            </Link> : <Link w="100%" href="/">Add more products!</Link>}
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
