import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Card, CardContent, Tab, Tabs, Container, Box } from "@mui/material";

const generateDummyData = (numPoints) => {
  return Array.from({ length: numPoints }, () =>
    Math.floor(Math.random() * 500)
  );
};

const Charts = () => {
  const [selectedFilter, setSelectedFilter] = useState("Month");

  const handleChangeFilter = (event, newValue) => {
    setSelectedFilter(newValue);
  };

  const options = {
    grid: { top: 20, right: 40, bottom: 60, left: 40 },
    legend: {
      data: ["Lorem", "Ipsum"],
    },
    xAxis: {
      type: "category",
      data: ["April", "May", "June", "July"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Lorem",
        data: generateDummyData(4),
        type: "bar",
        smooth: true,
      },
      {
        name: "Ipsum",
        data: generateDummyData(4),
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tabs value={selectedFilter} onChange={handleChangeFilter}>
          <Tab label="Day" value="Day" />
          <Tab label="Week" value="Week" />
          <Tab label="Month" value="Month" />
        </Tabs>
      </Container>
      <ReactEcharts
        option={options}
        style={{ width: "100%", height: "300px" }}
        theme={"dark"}
      />
    </Box>
  );
};

export default Charts;
