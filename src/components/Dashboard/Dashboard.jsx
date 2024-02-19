import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Charts from "../Charts/Charts";
import MultiActionAreaCard from "../cards/Cards";
import { cards } from "../shared/cards";
import { Paper } from "@mui/material";
import Map from "../Map/Map";
import ColumnGroupingTable from "../Table/Table";
import ReportPage from "../../pages/ReportsPage";

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {cards.map((ele, index) => {
              return (
                <MultiActionAreaCard
                  Component={ele.component}
                  color={ele.color}
                  key={index + ele.color}
                />
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Map />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ReportPage />
        </Grid>
      </Grid>
    </Container>
  );
}
