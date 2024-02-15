import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({heading,id,img}) => {
  return (
    <>
     <Flex borderWidth="1.37px"direction="column" borderRadius="20.94px" w="381px" h="554px" maxW="100%">
        <Box>
            <Image src={img} alt={`Image ${id}`} p="1rem" /> 
        </Box>
     

      <Box p="6">
        <Text fontWeight="bold" fontSize="lg" mb="2" color="#0E2368">
        {heading}
        </Text>
        <Text fontSize="sm" color="gray.500" textAlign="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate vitae beatae sequi at illo quaerat doloremque, laudantium consectetur odit architecto, rerum aut porro temporibus fuga autem obcaecati ipsa neque?
        </Text>

        <Button colorScheme='teal' variant='outline' padding="3px 26px 3px 26px" borderRadius="21px" m="1rem 2rem">
    Read More
  </Button>
      </Box>
    </Flex>
    </>
  )
}

export default Card