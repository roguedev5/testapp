import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Map from "../components/Map/Map";

export default function TrackOnMapPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 800,
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <Map />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
