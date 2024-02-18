import React from "react";
import useFetch from "../../customHooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function ProductsTable() {
  const { loading, data, error } = useFetch(
    " https://fakestoreapi.com/products"
  );
  console.log(data);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <Box>
        <div>Unexpected error ocurred!</div>
      </Box>
    );
  }

  return <div>ProductsTable</div>;
}
