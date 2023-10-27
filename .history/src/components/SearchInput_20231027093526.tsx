import { Input, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputLeftElement children={<BsSearch />}></InputLeftElement>
    <Input borderRadius={20} placeholder='Search games...' variant='filled' />
  )
};

export default SearchInput