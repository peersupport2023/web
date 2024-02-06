import React from 'react'
import AnimatedTitle from './AnimTitle'
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import NavbarComponent from './NavbarComponent'
import Footer from './Footer'

function Webinars() {
  return (
    <>
    <NavbarComponent/>
    <div className='heading' id='about' ><AnimatedTitle name="Webinars"></AnimatedTitle></div>
            <Box sx={{ display: "flex", padding: "0 4rem", flexDrection: { xs: "column", sm: "row" } }}>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{ display: "inline-block" }}
                >
                    <Box
                        className="card"
                        sx={{
                            borderRadius: '0.5rem',
                            border: '0.1rem solid #0f1922',
                        }}
                    >

                        <Box className='image' sx={{
                            width: { xs: "20rem", md: "26rem" },
                            height: { xs: "28rem", md: "36rem" }, 
                            
                            
                        }}>
                            <img src="/images/IIM_Calcutta.jpg" alt="" style={{
                                backgroundSize:"cover",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center"
                            }}/>
                        </Box>


                    </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: "20%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, type: "spring", stiffness: 60, delay: 0.5 }}
                >
                    <Box sx={{ marginLeft: "2rem", fontSize: { xs: "1.6rem", md: "1.6rem" }, fontWeight: "400", textTransform: "capitalize", textAlign: "justify" }}>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime itaque molestiae a eligendi qui eius exercitationem aut voluptatem, dolorem placeat officiis? Animi, quod maiores excepturi adipisci veniam suscipit? Ipsam, quasi necessitatibus?
                    </Box>
                </motion.div>
            </Box>

    <Footer/>
</>
  )
}

export default Webinars