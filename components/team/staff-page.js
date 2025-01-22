import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "./team-card";

const TEAM_DATA1 = [
  {
    extraClass: "content-bg-1",
    name: "Glen Tibbitts",
    designation: "Manager",
  },
  {
    extraClass: "content-bg-5",
    name: "Mary Young",
    designation: "Staff",
  },
  {
    extraClass: "content-bg-3",
    name: "Joanne Chang",
    designation: "Staff",
  },
];

// const TEAM_DATA2 = [
  // removed data but left in for later use
// ];

const TeamPage = () => {
  return (
    <section className="team-page pt-120 pb-120">
      <Container>
        <div className="team-3-col">
          {TEAM_DATA1.map(({ extraClass, name, designation, image }, index) => (
            <TeamCard
              key={index}
              extraClass={extraClass}
              name={name}
              designation={designation}
              image={image}
            />
          ))}
        </div>
        {/* <br/>
        <div className="team-3-col">
          {TEAM_DATA2.map(({ extraClass, name, designation, image }, index) => (
            <TeamCard
              key={index}
              extraClass={extraClass}
              name={name}
              designation={designation}
              image={image}
            />
          ))}
        </div> */}
      </Container>      
    </section>
  );
};

export default TeamPage;
