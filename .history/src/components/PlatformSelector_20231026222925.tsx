import { Button, Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const PlatformSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
        <MenuList>
            <MenuItem></MenuItem>
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector