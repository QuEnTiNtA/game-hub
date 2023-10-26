import { Grid } from '@chakra-ui/react'

function App() {
  return <Grid templateAreas='"nav nav" "aside main"'>
    <GridItem area='nav' bg='coral'></GridItem>
  </Grid>
}

export default App
