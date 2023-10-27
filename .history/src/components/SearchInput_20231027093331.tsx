import { Input } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <InputLeftElement></InputLeftElement>
    <Input borderRadius={20} placeholder='Search games...' variant='filled'></Input>
  )
}

export default SearchInput