import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const {data} = usePlatforms();

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id}>Item 1</MenuItem>_}
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector