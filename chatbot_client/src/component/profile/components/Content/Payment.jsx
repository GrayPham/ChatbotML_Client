import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import Table from './components/Table/Table'

function Payment({userLogin}) {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >

      <Table userLogin={userLogin}/>
    </FormControl>
  )
}

export default Payment
