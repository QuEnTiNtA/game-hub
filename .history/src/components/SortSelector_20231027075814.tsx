import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'},
  ]

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by: Relevance
        </MenuButton>
        <MenuList>
            {sortOrders.map(order => <MenuItem key={order.value} value={order.value}}></MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector