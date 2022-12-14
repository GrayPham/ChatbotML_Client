import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Payment from './Payment'

const Content = ({userLogin}) => {
  const tabs = ['Account Settings', 'Payment']

  
  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
    {console.log(userLogin)}
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings userLogin ={userLogin} />
          </TabPanel>
          <TabPanel>
            <Payment userLogin={userLogin.payment} />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Box>
  )
}

export default Content
