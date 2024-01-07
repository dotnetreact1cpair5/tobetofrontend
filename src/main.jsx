import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Assessments from "./pages/Assesments.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Calendar from "./pages/Calendar.jsx";
import Layout from "./layouts/Layout.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="/profilim" element={<Profile />} />
      <Route path="/degerlendirmeler" element={<Assessments />} />
      <Route path="/katalog" element={<Catalogue />} />
      <Route path="/takvim" element={<Calendar />} />
      <Route path="/egitimlerim" element={<CoursesPage />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App,
//   },
//   {
//     path: "/profilim",
//     Component: Profile,
//   },
//   {
//     path: "/degerlendirmeler",
//     Component: Assessments,
//   },
//   {
//     path: "/katalog",
//     Component: Catalogue,
//   },
//   {
//     path: "/takvim",
//     Component: Calendar,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
