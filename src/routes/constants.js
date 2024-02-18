import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import TrackOnMapPage from "../pages/TrackOnMapPage";
import ReportPage from "../pages/ReportsPage";
import DashboardPage from "../pages/DashboardPage";

export const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <DashboardIcon />,
    element: <DashboardPage />,
  },
  {
    path: "/trackonmap",
    name: "Track on Map",
    icon: <WhereToVoteIcon />,
    element: <TrackOnMapPage />,
  },
  {
    path: "/report",
    name: "Reports",
    icon: <BarChartIcon />,
    element: <ReportPage />,
  },
];
