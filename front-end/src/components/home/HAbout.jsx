import React, { useContext, useEffect, useState } from "react";
import { coursesCard } from "../../dummydata";
import "../allroadmaps/roadmaps.css";
import Heading from "../common/heading/Heading";
import axios from "axios";
import { REST_API_BASE_URL } from "../../App";
import { Store } from "../../store";
import { useNavigate } from "react-router-dom";

const HAbout = () => {

  const navigate =useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [roadmaps, setRoadmaps] = useState([]);
  const handleCourseFetch = async () => {
    try {
      const response = await axios.get(`${REST_API_BASE_URL}/admin/roadmaps`);
      const roadmapData = response.data;
      setRoadmaps(roadmapData);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  console.log(roadmaps)
  useEffect(() => {
    handleCourseFetch();
  },[])


  const handleSelect = (val) =>{
    console.log(val.id)
    if(userInfo){
      alert(true)
    }else{
      alert(`Please Login To Access ${val.title} Roadmap`)
      navigate("login")
    }
  }
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="Developer Roadmaps"
            title="Learning path is a community effort to create roadmaps, guides and other
           educational content to help
           guide developers in picking up a path and guide their learnings."
          />
          <br />

          <div className=" justify-content-center align-items-center">
            <div className="text-center">
              <h2>Role Based</h2>
            </div>
          </div>

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {roadmaps.map((val) => (
                <div className="items">
                  <div className="content flex"></div>

                  <button className="outline-btn"  onClick={()=>handleSelect(val)}>{val.title}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="coursesCardd ">
            <div className="grid2">
              <div className="items ">
                <div className="content flex "></div>

                <button className="outline-btn">
                  + Create Your Own Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
