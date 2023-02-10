import { Box, Flex, Text, Icon, Image, Badge } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { MdMenu, MdShoppingCart } from "react-icons/md"
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    return (
        <Flex backgroundColor="black" flexDir="row" justifyContent="space-between" padding={"2rem"}>
            <Icon fill="white" as={MdMenu} w={30} h={30} onClick={openMenu}></Icon>
            <Link to="/ ">
                <Image src="https://static.vecteezy.com/system/resources/previews/010/469/342/non_2x/an-letter-logo-design-on-black-background-an-creative-initials-letter-logo-concept-an-letter-design-an-white-letter-design-on-black-background-a-n-a-n-logo-vector.jpg" w={100} h={100} />
            </Link>
            <Box>
                <Icon fill="white" as={MdShoppingCart} w={30} h={30}
                    onClick={openCart}
                ></Icon>
                {checkout.lineItems?.length > 0 && <Badge color={"black"}>{checkout.lineItems?.length}</Badge>}
            </Box>
        </Flex  >
    )
}

export default NavBar
