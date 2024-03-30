import React from "react";
import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MentorCard({ item, index }) {
  return (
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
      <Link to={`/services/item/${item._id}`}>
        <div className="card">
          <div className="profileImage">
            <img src={item.image} alt="" />
          </div>
          <div className="textContainer">
            <p className="name">{item.name}</p>
            <div className="flex justify-around">
              <p className="profile">{item.college}</p>
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default MentorCard;
