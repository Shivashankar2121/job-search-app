import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../services/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const loadJob = async () => {
    const allJobs = await getJobs();
    const selectedJob = allJobs.find((j) => j.id == id);
    setJob(selectedJob);
  };

  useEffect(() => {
    loadJob();
  }, []);

  if (!job) return <p>Loading…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{job.title}</h1>
      <h3>{job.company_name}</h3>
      <p><b>Location:</b> {job.candidate_required_location}</p>

      <div dangerouslySetInnerHTML={{ __html: job.description }} />

      <a href={job.url} target="_blank" rel="noreferrer">
        <button>Apply Now</button>
      </a>
    </div>
  );
};

export default JobDetails;
