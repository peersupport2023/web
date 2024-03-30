import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentProf from './MentProf';

function MentorProfile() {
    const [data, setData] = useState({
        image: "",
        name: "",
        college: "",
        linkedinUsername: "",
      });
      const params = useParams();
      const getSingleUserData = async () => {
        try {
          const response = await fetch(
            `https://backend-l7yw.onrender.com/ment/item/${params.id}`,
            {
              method: "GET",
            }
          );
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching service data:", error);
        }
      };
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    
        getSingleUserData();
      }, [params.id]);
    const mentorData = {
        image: [data.image],
        name: [data.name],
        college: [data.college],
        email: 'sandeep@example.com',
        linkedinUsername: [data.linkedinUsername],
        bio: 'Add a subheading',
      };
      
      const services = [
        { name: 'One-On-One Interaction', price: 'Rs. 99' },
        { name: 'One-On-One Interaction + Mock Interview + Feedback', price: 'Rs. 249' },
        { name: 'One-on-one interaction + Mock Interview + Analysis and Feedback + Re-Mock to analyze the progress', price: 'Rs. 499' },
        {name:'none'}
      ];
      
      const addOns = [
        { name: 'Resume and SOP review', price: 'Rs. 49' },
        { name: 'InterView Recording (Valid for 10 days)', price: 'Free' },
      ];

  return (
    <>
    <MentProf
    data={mentorData}
    services={services}
    addOns={addOns} 
    />
    </>
  )
}

export default MentorProfile