import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Tab, Tabs } from "@mui/material";
import { Job } from "@/entity";
import AcceptedJobCard from "./Accepted";
import InvitedJobCard from "./Invited";
import { useLocation, useNavigate } from "react-router-dom";

function Tradie() {
  const [invitedJobs, setInvitedJobs] = useState([]);
  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "0";

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    // Update the URL when the tab changes
    navigate(`/tradie?tab=${newValue}`);
    fetchJobs(newValue === 0 ? "new" : "accepted");
  };

  useEffect(() => {
    // If the 'tab' parameter is not present, set it to 0 in the URL
    if (!initialTab) {
      navigate(`/tradie?tab=0`);
    }
  }, [navigate, initialTab]);

  useEffect(() => {
    // Fetch jobs on component mount and whenever the tab changes
    fetchJobs(Number(initialTab) === 0 ? "new" : "accepted");
  }, [initialTab]);

  // Function to fetch jobs based on status
  const fetchJobs = async (status: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/jobs?status=${status}`
      );
      if (status === "new") {
        setInvitedJobs(response.data);
      } else {
        setAcceptedJobs(response.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Function to update status
  const updateJobStatus = async (jobId, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/api/jobs/${jobId}`, {
        status: newStatus,
      });
      // Refresh the jobs after the update
      fetchJobs("new");
    } catch (error) {
      console.error("Error updating job status:", error);
    }
  };

  return (
    <Stack gap={2} sx={{ width: "100%", padding: "16px 48px 32px 48px" }}>
      <Tabs
        value={Number(initialTab)}
        onChange={handleChange}
        sx={{ width: "100%" }}
      >
        <Tab label={"Invited"} value={0} sx={{ width: "50%" }} />
        <Tab label={"Accepted"} value={1} sx={{ width: "50%" }} />
      </Tabs>
      {Number(initialTab) === 0 &&
        invitedJobs.map((job: Job) => (
          <InvitedJobCard
            key={job.id}
            job={job}
            onStatusUpdate={updateJobStatus}
          />
        ))}
      {Number(initialTab) === 1 &&
        acceptedJobs.map((job: Job) => (
          <AcceptedJobCard key={job.id} job={job} />
        ))}
    </Stack>
  );
}

export default Tradie;
