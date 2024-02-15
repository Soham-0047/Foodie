import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './side.css'
import {Box, Container } from '@chakra-ui/react';
import jsonData from '../data.json'
import Card from './Card';
import { chakra } from '@chakra-ui/react';


const Sider = () => {
  return (
    <>
    <Container maxW="100%"marginTop="15%">
        <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign={{base:"center",md:"left"}} color="#0E2368">
                Latest Articles
            </chakra.h1>
    <Box marginTop="8%">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        {jsonData.map(item => (
          <SwiperSlide key={item.id}>
            {/* Pass props to the Card component */}
            <Card id={item.id} img={item.img} heading={item.heading} />
          </SwiperSlide>
        ))}
      </Swiper>  
    </Box>
    
    </Container>
   
    </>
  )
}

export default Sider