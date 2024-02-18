import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, SvgIcon } from "@mui/material";

export default function MultiActionAreaCard({ Component, color }) {
  return (
    <Card sx={{ borderRadius: "20px" }} variant="outlined">
      <CardContent sx={{ display: "flex", flexDirection: "row" }}>
        <Container>
          <SvgIcon component={Component} />
          <Typography sx={{ fontSize: 14 }} color={color} gutterBottom>
            70%
          </Typography>
        </Container>
        <Container>
          <Typography sx={{ fontSize: 14 }} color={color} gutterBottom>
            Moving
          </Typography>
          <Typography sx={{ fontSize: 20 }}>264</Typography>
        </Container>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">View Details</Button>
        <Button size="small">View on map</Button>
      </CardActions>
    </Card>
  );
}
