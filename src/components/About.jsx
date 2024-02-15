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

import about from "../assets/about.jpg"

const About = () => {
  return (
  
    <Container maxW="100%" marginTop="15%" h="467px" background="linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
>

    <Flex direction={{ base: 'column', md: 'row' }} justify="center" gap={{lg:'125'}}>

        <Box display={{base:"none",md:"block"}} maxW="80%">
            <Image
            src={about}
           
            w="384px"
            h="468px"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            objectFit="cover"
            fallback={<Skeleton/>}
            />
        </Box>

        <Box maxW={{base:"100%",md:"30%"}} d="flex"direction="column" marginTop="3rem">

            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign={{base:"center",md:"left"}} color="#0E2368">
                About Us
            </chakra.h1>
            <Text color="#444957" textAlign={{base:"center",md:"left"}} lineHeight="27px" marginTop="2rem">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </Text>
            <Box
              bg="#E23744"
              d="flex"
              justifyContent="center"
          
              w={{ base: '40%', sm: 'auto' }}
              border="1px solid"
              borderColor="gray.300"
              textAlign="center"
              p="14px 34px 14px 34px"
              margin="0 auto"
              marginTop="5rem"
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
        </Box>
    </Flex>
    </Container>
    
  )
}

export default About