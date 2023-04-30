import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MainSchedule from "./pages/MainSchedule";
import DetailPage from "./pages/DetailPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import CancelPage from "./pages/CancelPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/:id", element: <MainSchedule /> },
  { path: "/detailpage/:detail", element: <DetailPage /> },
  { path: "/confirmationpage", element: <ConfirmationPage /> },
  { path: "/cancelpage", element: <CancelPage /> },
]);
