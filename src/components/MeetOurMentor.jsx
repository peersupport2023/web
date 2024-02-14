import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import AnimatedTitle from './AnimTitle';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { CardHeader, CardContent, Card, Image,CardDescription,Icon } from 'semantic-ui-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { CardData_3 } from './CardData_3';

const MeetOurMentor = () => {
  const dataArray = CardData_3;
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
       // You can use 'smooth' for smooth scrolling
    });
  }, []);

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
              type: "spring",
              stiffness: 80,
              delay: (index / 2) * 0.2 + 0.5,
            }}
          >
            <Card style={{ height: "20rem", width: "300px" }}>
              <Image
                src={item.image}
                ui={false}
                style={{ height: "75%", objectFit: "contain" }}
              />
              <CardContent style={{ height: "40%" }}>
                <CardHeader>{item && item.name}</CardHeader>
                <CardDescription
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.college}
                  <a
                    href={`https://www.linkedin.com/in/${item.linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="linkedin"
                      style={{ marginLeft: "auto", fontSize: "1.5rem" }}
                    />
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      


      <Footer />
    </>
  );
};

export default MeetOurMentor;
