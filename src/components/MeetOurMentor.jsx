import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import AnimatedTitle from './AnimTitle';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { CardHeader, CardContent, Card, Image } from 'semantic-ui-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { CardData_3 } from './CardData_3';

const MeetOurMentor = () => {
  const dataArray = CardData_3;

  return (
    <>
      <NavbarComponent />
      <div className='m-[2rem]'>
        <AnimatedTitle name="Meet Our Mentors"></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '1.2rem',
          columnGap: '1rem',
          justifyContent: 'space-evenly',
        }}
      >
        {dataArray.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              type: 'spring',
              stiffness: 80,
              delay: (index / 2) * 0.2 + 0.5,
            }}
          >
            <Card>
              <Image src={item.image} ui={false} />
              <CardContent className='flex items-center'>
                <CardHeader>{item && item.header}</CardHeader>
                <Link to={item.linkedin} className='ml-auto'>
                  <LinkedInIcon
                    color="primary"
                    style={{ fontSize: 20 }}
                  />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Box
        sx={{
          padding: '1rem 5rem 1rem 5rem',
          rowGap: '1.2rem',
          columnGap: '1rem',
        }}
        className='flex flex-col sm:flex-row items-center justify-center sm:justify-between'
      >
        <button className='text-white my-2 sm:w-auto w-1/2 font-semibold bg-custom-blue rounded-md p-3 md:p-4 lg:p-3 text-center flex items-center justify-center cursor-pointer mx-auto sm:mx-0'>
          Book A Call
        </button>
        <button className='text-white my-2 sm:w-auto w-1/2 font-semibold bg-custom-blue rounded-md p-3 md:p-4 lg:p-3 text-center flex items-center justify-center cursor-pointer mx-auto sm:mx-0'>
          Meet all our mentors
        </button>
      </Box>


      <Footer />
    </>
  );
};

export default MeetOurMentor;
