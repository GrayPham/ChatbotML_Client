import React, {useState,useEffect,useRef} from "react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import userAPI from "../../../../../../../../api/user";
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  IconButton,
  useClipboard,
  Textarea,
  InputGroup,
  InputRightAddon
} from '@chakra-ui/react'

function ExternalLink({token}) {
  const userLogin =JSON.parse( localStorage.getItem("user"));
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData]= useState()
  const { hasCopied, onCopy } = useClipboard(data)
  const handleOnClick = async (e) => {
    e.preventDefault();
    console.log("Token clicked", token)
    const dataDetail = await userAPI.getPaymentDetail(userLogin.id,token.paymentID)
    setData(dataDetail)
    onOpen()
  }
  const htmldata = useRef(null)
  useEffect(() => {
    if (hasCopied) {
      htmldata.current.focus()
      htmldata.current.select()
    }
  })
  return (<>
    <IconButton
      colorScheme="blue"
      icon={<ExternalLinkIcon />}
      aria-label="Up"
      onClick={handleOnClick}
    />
    <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxH="5000px" maxW="1200px">
          <ModalHeader>Customer's Invoice</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Text>Payment ID: 12389123423948</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="red">HTML</Badge>

            </HStack>
            <InputGroup margin="5px 5px 5px 5px" padding="5px 5px 5px 5px">
            <Textarea height="400px"
                ref={htmldata}
                type="url"
                color="brand.blue"
                value={data}
                userSelect="all"
                isReadOnly
                _focus={{ borderColor: 'brand.blue' }}
              />
              <InputRightAddon bg="transparent" px={0} overflow="hidden" >
                <Button onClick={onCopy} variant="link">
                  <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </Button>
              </InputRightAddon>
            </InputGroup>
          </ModalBody>

          <ModalFooter >
            <Button backgroundColor="red" marginRight="5px" onClick={onClose}>Close</Button>
            <Button onClick={onCopy}>Copy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ExternalLink;
