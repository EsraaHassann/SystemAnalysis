import {
    faEdit,
    faEye,
    faPencilAlt,
    faTrash
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link, useParams } from "react-router-dom";
  import { REST_API_BASE_URL } from "../../../App";
  
  const RoadmapByUser = () => {

    /// users create roadmaps and the admin wanted the check 
    /// and approved the roaad maps
    const { id } = useParams();
    const [roadmaps, setRoadmaps] = useState([]);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [alert, setAlert] = useState("");
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }, [successMessage]);
  
  
    const handleDelete = async (id,title) => {
      try {
        const response = await axios.delete(
          `${REST_API_BASE_URL}/admin/roadmap/${id}`
        );
  
        if (response.status == 200) {
          setAlert("alert alert-success")
          setSuccessMessage(`${title} Deleted Successfully`);
          console.log("roadmap deleted successfully");
         
        } else {
          console.error("Failed to delete item");
          setAlert("alert alert-danger")
          setSuccessMessage(`Before Delete (${title}) check all Steps and Resources Deleted`);
        }
      } catch (error) {
        console.error("Error deleting item:", error.message);
      }
    };
  
    const handleCourseFetch = async () => {
      try {
        const response = await axios.get(`${REST_API_BASE_URL}/admin/roadmaps`);
        const roadmapData = response.data;
        setRoadmaps(roadmapData);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
  
    useEffect(() => {
      handleCourseFetch();
    }, []);
  
    return (
      <div className={`main`}>
        <div className="topbar">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
  
          <div className="user">
            <img src="assets/imgs/customer01.jpg" alt="" />
          </div>
        </div>
  
        
        <div className="detailss ">
          <div className="recentOrderss">
            <div class="cardHeader">
              <h2>Users Created Roadmap</h2>
              
            </div>
            <div>
            
  
              <table className="table table-hover text-center">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col" > Description</th>
  
                    <th scope="col">Steps</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roadmaps.length === 0 ? (
                    <tr>
                      <td colSpan="5">No roadmaps found</td>
                    </tr>
                  ) : (
                    roadmaps.map((roadmap, index) => (
                      <tr key={roadmap.id}>
                        <td>{index + 1}</td>
                        <td> {roadmap.title}</td>
                        <td> {roadmap.user.fname}</td>
                        <td>{roadmap.description} </td>
                        <td>
                          <Link
                            to={`/admin/approved/roadmap/steps/${roadmap.id}`}
                            className="link-dark me-3"
                          >
                            {roadmap.steps.length}
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/admin/create-steps/${roadmap.id}`}
                            className="link-dark me-3"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </Link>
                          {/* <Link
                            to={`/admin/steps/${roadmap.id}`}
                            className="link-dark me-3"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>
                          <button
                            className="btn"
                            onClick={() => handleDelete(roadmap.id,roadmap.title)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button> */}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {successMessage && (
            <div className={alert}>{successMessage}</div>
          )}
          </div>
        </div>
      </div>
    );
  };
  export default RoadmapByUser