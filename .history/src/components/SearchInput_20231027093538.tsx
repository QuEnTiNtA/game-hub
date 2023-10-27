import { Input, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <Input>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </Input>
  )
}

export default SearchInput