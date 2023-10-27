import { Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platform'}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector