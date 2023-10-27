import { Input, InputLeftElement } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <InputLeftElement children></InputLeftElement>;
    <Input borderRadius={20} placeholder='Search games...' variant='filled'></Input>
  )
}

export default SearchInput