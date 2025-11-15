import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/jobApi";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async (query = "") => {
    const data = await getJobs(query);
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <SearchBox onSearch={fetchJobs} />

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Home;
