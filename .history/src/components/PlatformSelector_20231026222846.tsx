import { Button, Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'

const PlatformSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChev}>Platforms</MenuButton>
    </Menu>
  )
}

export default PlatformSelector