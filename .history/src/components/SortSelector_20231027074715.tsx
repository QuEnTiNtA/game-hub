import { Menu, MenuButton, Button, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by: Relevance
        </MenuButton>
        <MenuList>
            
        </MenuList>
    </Menu>
  )
}

export default SortSelector