import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "./team-card";

const TEAM_DATA = [
  {
    extraClass: "content-bg-1",
    name: "Dr Caroline Doyle",
    designation: "President",
  },
  {
    extraClass: "content-bg-2",
    name: "Dr Hugh Smith",
    designation: "Vice President (Administration)",
  },
  {
    extraClass: "content-bg-3",
    name: "Shobha Varkey",
    designation: "Vice President (Volunteers)",
  },
  {
    extraClass: "content-bg-8",
    name: "Himangi Ticku",
    designation: "Vice President (Interns)",
  },
  {
    extraClass: "content-bg-4",
    name: "Katherine Whitty",
    designation: "Secretary",
  },
  {
    extraClass: "content-bg-5",
    name: "Fiona Laverty",
    designation: "Treasurer",
  },
  {
    extraClass: "content-bg-6",
    name: "Dr Brian Turner",
    designation: "Management Committee Member",
  },
  {
    extraClass: "content-bg-7",
    name: "Seija Talviharju",
    designation: "Management Committee Member",
  },
];

const TeamPage = () => {
  return (
    <section className="team-page pt-120 pb-120">
      <Container>
        <div className="team-3-col">
          {TEAM_DATA.map(({ extraClass, name, designation, image }, index) => (
            <TeamCard
              key={index}
              extraClass={extraClass}
              name={name}
              designation={designation}
              image={image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamPage;
