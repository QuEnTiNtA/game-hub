import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  const sortOrders =

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by: Relevance
        </MenuButton>
        <MenuList>
            <MenuItem onClick={() =>}>Relevance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector