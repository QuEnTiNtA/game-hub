import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        // prevent the form from being posted to the server.
        if (ref.current)  
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
            <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
        </InputGroup>
    </form>
  )
}

export default SearchInput