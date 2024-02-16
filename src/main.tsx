import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Assessments from "./pages/AssesmentsPage.js";
import Catalogue from "./pages/CataloguePage.js";
import Calendar from "./pages/CalendarPage.js";
import Layout from "./layouts/Layout.jsx";
import CoursesPage from "./pages/CoursesPage.js";
import HomePage from "./pages/HomePage.js";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./store.js";
import ProfilePage from "./pages/ProfilePage.js";
import LoginPage from "./pages/LoginPage.js";
import PrivateRoutes from "./utils/PrivateRoutes.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profilim" element={<ProfilePage />} />
          <Route path="/degerlendirmeler" element={<Assessments />} />
          <Route path="/katalog" element={<Catalogue />} />
          <Route path="/takvim" element={<Calendar />} />
          <Route path="/egitimlerim" element={<CoursesPage />} />
        </Route>
      </Route>
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
