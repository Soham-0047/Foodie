import React from 'react'
import {
    chakra,
    Container,
    Stack,
    HStack,
    Text,
    useColorModeValue,
    Button,
    Image,
    Skeleton,
    Box,
    Link,
    Icon,
    Flex,
    Spacer
  } from '@chakra-ui/react';

import heroim from "../assets/hero.jpg"
import vector from "../assets/Vector.png"

const Hero = () => {
  return (
    <>
    <Container maxW="100%" px={{ base: 6, md: 3 }}>
      <Flex direction={{ base: 'column-reverse', md: 'row' }} justify="space-between" gap={{lg:'125'}}>
        <Box direction="column" spacing={10} justify="space-between" maxW={{base:"100%",md:"50%"}} marginTop="15%">
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign={{base:"center",md:"left"}}>
          Discover the  <br/>
          <chakra.span color="#E23744"> Best</chakra.span> Food <br/> and Drinks
            
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign={{base:"center",sm:"left"}}
            lineHeight="1.375"
            fontWeight="400"
            color=" #444957;
            "
            marginTop="2rem"
          >
            TemplatesKart provides the best ChakraUI templates. Focus on your business, not on the
            boilerplate.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              color="white"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              
            >
              <chakra.span> Explore ComponentsKart </chakra.span>
              {/* <Icon as={MdBolt} h={4} w={4} ml={1} /> */}
            </chakra.button>
            <Box
              bg="#E23744"
              d="flex"
              justifyContent="center"
              w={{ base: 'auto', sm: 'auto' }}
              border="1px solid"
              borderColor="gray.300"
              p="14px 34px 14px 34px"
              margin="0 auto"
              marginTop={{base:"0",md:"5rem"}}
              borderRadius="135px 135px 135px 135px"
              lineHeight={1.18}
              position={{base:"relative",md:"absolute"}}
              boxShadow="md"
              fontWeight="700"
              color="white"
              zIndex={55555555}
            >
              Watch Video
            </Box>
          </HStack>
        </Box>
        <Spacer/>
        <Box ml={{ base: 0, md: 0 }} pos="relative" maxW={{base:"100%",md:"50%"}}>
        <Image
            w="100%"
            h="100%"
            minW={{ base:"100%", lg: '752px', md: '30rem' }}
            minH={{lg:'820px'}}
            objectFit="cover"
            src={vector}
            position="absolute"
            rounded="md"
            fallback={<Skeleton />}
          />
          <Image
            w="100%"
            h="100%"
            minW={{base:"100%", lg: '735px', md: '30rem' }}
            minH={{lg:'804px'}}
            objectFit="cover"
            src={heroim}
            rounded="md"
            borderRadius="2rem 2rem 3rem 10rem"
            fallback={<Skeleton />}
          />
             
        </Box>
      </Flex>
    </Container>
    </>
  )
}

export default Hero