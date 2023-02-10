import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function NavMenu() {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)
    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size="sm">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                    <VStack p="2rem">
                        <Link to={"/"}>1</Link>
                        <Link to={"/"}>1</Link>
                        <Link to={"/"}>1</Link>
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={closeMenu}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default NavMenu
