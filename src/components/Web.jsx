import React from "react";
import Webinars from "./Webinars";

function Web() {
  const webinarData = [
    {
      image: "/images/MBA in IIMs-Sambit.jpg",
      title: "Road to MBA by Sambit Mohanty",
      subHeading: " Key Takeaways:- ",
      description: [
        " Overview of CAT Discussion on other exams apart from CAT like XAT, IIFT, SNAP, etc.",
        " How to prepare for CAT and other exams",
        "CAT exam day strategies General procedure after CAT till any B-school",
        " GDPI and WAT process",
        "Probable GD and WAT topics",
        "Probable Interview questions",
        `Strategy to deal BLACKIS’ interviews`,
        "Life of a student in an MBA",
      ],
    },
    {
      image: "/images/MBA in IITs.jpg",
      title: "Road to MBA in IITs by Sandeep Kumar Singh",
      subHeading: " Key Takeaways:- ",
      description: [
        "Why MBA in IITs",
        "Cut-offs and eligibility of different IITs Individual presentation for each IIT (8 IITs covered)",
        "Fees and Package Discussion",
        "How to write SOP for IIT admission form",
        "GD and WAT topics one can expect",
        "Interview topics based on the Profile of the candidate",
        "Discussion on General Interview Topics and College-specific interview questions",
        "Life of a student in an MBA in IITs",
      ],
    },
    {
      image: "/images/Resume workshop.jpg",
      title: "Resume Workshop by Sandeep Kumar Singh",
      subHeading: " Key Takeaways:- ",
      description: [
        "What is a Resume and Why it is important",
        "Elements of an Industry Standard Resume",
        "Types of Resume",
        "Elements of a Resume",
        "Proper approach to fill the elements of a Resume",
        "Technical structure and formatting",
        "Brownie points to attract the interviewer’s attention",
        `DON’Ts- Errors to avoid in a resume`,
        "Final samples of Resume.",
      ],
    },
  ];
  return (
    <div>
      <Webinars webinars={webinarData} />
    </div>
  );
}

export default Web;
