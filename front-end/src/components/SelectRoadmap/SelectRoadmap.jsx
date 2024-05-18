import React, { useEffect, useState } from "react";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { REST_API_BASE_URL } from "../../App";

const SelectRoadmap = () => {
  const { id } = useParams();
  console.log(id);

  const [roadmap, setRoadmap] = useState({});
  const handleFetchRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${REST_API_BASE_URL}/admin/roadmap/${id}`
      );
      const roadmapData = response.data;
      setRoadmap(roadmapData);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  console.log(roadmap.title);
  useEffect(() => {
    handleFetchRoadmaps();
  }, []);
  return (
    <>
      <Back title="RoadMap" />

      <div className="container">
        <Heading subtitle={roadmap.title} title={roadmap.description} />
        <br />
      </div>
    </>
  );
};

export default SelectRoadmap;
