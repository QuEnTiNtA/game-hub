import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode}
  return (
    <HStack>
        <Switch></Switch>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch