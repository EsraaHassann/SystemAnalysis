import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="Developer Roadmaps"
            title="roadmap.sh is a community effort to create roadmaps, guides and other
           educational content to help
           guide developers in picking up a path and guide their learnings."
          />
          <br />

        
  <div className=" justify-content-center align-items-center" >
    <div className="text-center">
      <h2>Role Based</h2>
    </div>
  </div>

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 7).map((val) => (
                <div className="items">
                  <div className="content flex"></div>

                  <button className="outline-btn">ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>

          <div className="coursesCardd ">
            <div className="grid2">
                <div className="items ">
                  <div className="content flex "></div>

                  <button className="outline-btn">+ Create Your Own Roadmap</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
