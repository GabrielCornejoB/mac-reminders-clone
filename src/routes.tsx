import { createBrowserRouter } from "react-router-dom";
import { AllTasks, CompletedTasks, ErrorPage, Layout, Tasks } from "./pages";

const router = createBrowserRouter([
  {
    path: "/mac-reminders-clone/",
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
