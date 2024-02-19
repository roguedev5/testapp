import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Charts from "../components/Charts/Charts";
import ColumnGroupingTable from "../components/Table/Table";
import { Box, CircularProgress, Paper } from "@mui/material";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

let rowsData = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function ReportPage() {
  const { loading, data, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [rows, setRows] = useState(rowsData);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  const handleDelete = (value) => {
    setRows(
      (prevState) =>
        prevState && prevState?.filter((item) => item.name !== value.name)
    );
  };

  const handleSelect = (value, index) => {
    setRows(
      (prevState) =>
        prevState &&
        prevState?.map((item) =>
          item.name === value.name
            ? {
                ...item,
                isSelected: item?.isSelected ? !item.isSelected : true,
              }
            : item
        )
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: 240,
            gap: "10px",
          }}
        >
          <ColumnGroupingTable
            rows={rows.filter((item) => item.isSelected)}
            isActionEnabled={false}
          />
          <Charts />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 6,
            mt: 2,
          }}
        >
          <ColumnGroupingTable
            isActionEnabled={true}
            rows={rows}
            setRows={setRows}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        </Paper>
      </Grid>
    </Container>
  );
}
