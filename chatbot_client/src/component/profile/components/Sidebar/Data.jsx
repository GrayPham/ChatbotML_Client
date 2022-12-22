import { Box, Text, VStack } from '@chakra-ui/react'



function Data({userLogin}) {

  const list = [
    {
      id: 1,
      name: 'ChatBot',
      value: userLogin.payment.length,
      color: 'yellow',
    }
  
  ]
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {console.log(userLogin)}
      {list.map(item => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data
