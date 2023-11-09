import React from "react";
import { Paper, Grid, Typography, Avatar } from "@mui/material";
import { LocationOn, Category, Phone, Email } from "@mui/icons-material";
import { Job } from "../entity";

interface AcceptedJobCardProps {
  job: Job;
}

const AcceptedJobCard: React.FC<AcceptedJobCardProps> = ({ job }) => {
  const firstLetter = job.contactName.charAt(0).toUpperCase();

  return (
    <Paper className="job-card" sx={{ width: "50%", padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container alignItems="center">
            <Avatar sx={{ bgcolor: "orange" }}>{firstLetter}</Avatar>
            <Typography variant="subtitle2" style={{ marginLeft: "15px" }}>
              {job.contactName}
            </Typography>
            <Typography variant="caption" style={{ marginLeft: "15px" }}>
              {new Date(job.updatedAt).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Grid container alignItems="center">
            <LocationOn fontSize="small" />
            <Typography variant="caption">{job.suburb.name}</Typography>
            <Category fontSize="small" style={{ marginLeft: "15px" }} />
            <Typography variant="caption">{job.category.name}</Typography>
            <Typography variant="body2" style={{ marginLeft: "15px" }}>
              ID: {job.id}
            </Typography>
            <Typography variant="body2" style={{ marginLeft: "15px" }}>
              ${job.price}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Grid container alignItems="center">
            <Phone fontSize="small" />
            <Typography variant="body2" style={{ marginRight: "15px" }}>
              {job.contactPhone}
            </Typography>
            <Email fontSize="small" />
            <Typography variant="body2">{job.contactEmail}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body2">{job.description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AcceptedJobCard;
