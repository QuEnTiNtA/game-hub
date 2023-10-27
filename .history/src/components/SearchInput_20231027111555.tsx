import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        // prevent the form from being posted to the server.
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
            <Input borderRadius={20} placeholder='Search games...' variant='filled' />
        </InputGroup>
    </form>
  )
}

export default SearchInput