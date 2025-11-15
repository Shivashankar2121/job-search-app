import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div style={{ padding: "20px", margin: "20px", border: "1px solid #ccc" }}>
      <h3>{job.title}</h3>
      <p><b>Company:</b> {job.company_name}</p>
      <p><b>Location:</b> {job.candidate_required_location}</p>

      <Link to={`/job/${job.id}`}>
        <button style={{ marginTop: "10px" }}>View Details</button>
      </Link>
    </div>
  );
};

export default JobCard;
