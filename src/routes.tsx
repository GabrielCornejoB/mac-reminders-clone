import { createBrowserRouter } from "react-router-dom";
import { Tasks } from "./features";
import { AllTasks, CompletedTasks, ErrorPage, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AllTasks /> },
      { path: "completed", element: <CompletedTasks /> },
      { path: "tasks/:id", element: <Tasks /> },
    ],
  },
]);

export default router;
