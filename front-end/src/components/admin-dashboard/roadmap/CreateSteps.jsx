import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Store } from "../../../store";

const CreateSteps = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const { id } = useParams();

  // State for fileTitle and fileDescription
  const [fileTitle, setFileTitle] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  // Function to handle file upload
  const handleFileUpload = () => {
    // Add your logic for handling file upload here
  };

  return (
    <div className="main">
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Create new Steps </h2>
            <Link to={`/instructor/my-courses/${userInfo.id}`} className="btn">
              Back To Courses
            </Link>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="fileTitle" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="fileTitle"
                value={fileTitle}
                onChange={(e) => setFileTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fileDescription" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="fileDescription"
                rows="3"
                value={fileDescription}
                onChange={(e) => setFileDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleFileUpload}
            >
              Create
            </button>
            {uploadMessage && (
              <div className="alert alert-success mt-3">{uploadMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSteps;
