import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer class="footer-distributed">

      <div class="footer-left">

        <img id='footer-image'src="/images/favicon_1.png" alt="" />

        <p class="footer-links">
          <a href='/' class="link-1">Home</a>
          
          <a href = '/roadtomba'>Road To MBA</a>
        
          <a href = '/Meetmentors'>Meet Our Mentors</a>
        
          <a href='/webinars'>Webinar</a>
          
          <a href='/resources'>Resources</a>
          
          <a href='/'>Book A Mock Interview</a>
        </p>

        <p class="footer-company-name">Peer Support © 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>IIT Madras</span> </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91 7048931353</p>
          <i class="fa fa-phone"></i>
          <p>+91 9861669266</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:educationconsultationbypeers@gmail.com">educationconsultationbypeers@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Peer Support Is An Educational Consultation Platform To Connect Aspiring Students With Peers Currently Enrolled In Esteemed Colleges. Within Our User-Friendly Portal, Mentors From Diverse Backgrounds Come Together, Providing A Unique Opportunity For Aspirants To Connect And Engage In Meaningful Interactions.
        </p>

        <div class="footer-icons">

        <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaLinkedin /></a>
      <a href="#"><FaGithub /></a>

        </div>

      </div>

    </footer>
  )
}

export default Footer