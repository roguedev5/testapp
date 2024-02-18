import { useRoutes } from "react-router-dom";
import Root from "./Root";
import { routes } from "./constants";
import NotFoundPage from "../components/shared/NotFound";

export default function Routes() {
  const childRoutes = routes.map(({ path, element }) => ({ path, element }));
  const router = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: childRoutes,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return router;
}
