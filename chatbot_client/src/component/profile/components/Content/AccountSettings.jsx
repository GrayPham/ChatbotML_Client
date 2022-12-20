import { FormControl, FormLabel, Grid, Input, Select,Box, Button } from '@chakra-ui/react'
import Actions from './Actions'
import React from 'react';
import { useForm } from 'react-hook-form';

function AccountSettings({userLogin}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    criteriaMode: "all"
});
const submitForm = async (values) => {
  console.log(values);
  alert("Update successful");
};
  return (
    <form onSubmit={handleSubmit(submitForm)} style={{display: 'block'  }}>
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >

      <FormControl id="firstName">
        <FormLabel>User Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder={userLogin.username} {...register("username",{ required: true })} />
      </FormControl>
      <FormControl id="Email">
        <FormLabel>Email</FormLabel>
        <Input focusBorderColor="brand.blue" type="email" placeholder={userLogin.email}  {...register("email",{ required: true })}  />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={userLogin.phone}
          {...register("phone",{ required: true })}
        />
      </FormControl>
      <FormControl id="address">
        <FormLabel>Adress</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={userLogin.address}
          {...register("address",{ required: true })}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="***********"
          {...register("password",{ required: true })}
        />
      </FormControl>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button type="submit">Update</Button>
      </Box>



    </Grid>
</form>
  )
}

export default AccountSettings
