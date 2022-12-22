import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import Table from './components/Table/Table'

function Payment({userLogin}) {
  return (

    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {
      userLogin.length === 0 ? alert("You have no transactions!!!"): ""
      }
      <Table userLogin={userLogin}/>
    </FormControl>
  )
}

export default Payment
