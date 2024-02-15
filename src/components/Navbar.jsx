import React from 'react'
import {
    Container,
    Box,
    Avatar,
    Button,
    HStack,
    VStack,
    Image,
    Input,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Link,
    MenuDivider,
    useColorModeValue
  } from '@chakra-ui/react';

import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <Box
    py="2"
    top="0"
    position="absolute"
    width="100%"
    zIndex="1"
  >
    <Container maxW="1280px" px={4} mx="auto">
      <HStack spacing={4}>
        <Image
          alt="dev logo"
          w={'107px'}
          h={'83px'}
          src={logo}
        />
       
        <Spacer />
        <HStack spacing={3}>
          <Button  bg="#E23744"
          
              border="1px solid"
              borderColor="gray.300"
              textAlign="center"
              p="14px 34px 14px 34px"
              margin="0 auto"
             
              borderRadius="135px 135px 135px 135px"
              lineHeight={1.18}
              
              boxShadow="md"
              fontWeight="700"
              color="white"
              zIndex={55555555}>
            Get In Touch
          </Button>
         
          {/* <Menu isLazy>
            <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
              <Avatar size="sm" src={'https://avatars2.githubusercontent.com/u/37842853?v=4'} />
            </MenuButton>
            <MenuList
              zIndex={5}
              border="2px solid"
              borderColor={useColorModeValue('gray.700', 'gray.100')}
              boxShadow="4px 4px 0"
            >
              <Link href="https://dev.to/m_ahmad" _hover={{ textDecoration: 'none' }} isExternal>
                <MenuItem>
                  <VStack justifyContent="start" alignItems="left">
                    <Text fontWeight="500">Muhammad Ahmad</Text>
                    <Text size="sm" color="gray.500" mt="0 !important">
                      @m_ahmad
                    </Text>
                  </VStack>
                </MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem>
                <Text fontWeight="500">Dashboard</Text>
              </MenuItem>
              <MenuItem>
                <Text fontWeight="500">Create Post</Text>
              </MenuItem>
              <MenuItem>
                <Text fontWeight="500">Reading List</Text>
              </MenuItem>
              <MenuItem>
                <Text fontWeight="500">Settings</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Text fontWeight="500">Sign Out</Text>
              </MenuItem>
            </MenuList>
          </Menu> */}
        </HStack>
      </HStack>
    </Container>
  </Box>
  )
}

export default Navbar