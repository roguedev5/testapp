import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography variant="h1" component="div" color="textPrimary">
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Oops! Page Not Found.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
