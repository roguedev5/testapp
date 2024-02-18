import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Charts from "../components/Charts/Charts";
import ProductsTable from "../components/products/ProductsTable";

export default function ReportPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Charts />
          <ProductsTable />
        </Grid>
      </Grid>
    </Container>
  );
}
