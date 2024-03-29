import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch isChecked></Switch>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch