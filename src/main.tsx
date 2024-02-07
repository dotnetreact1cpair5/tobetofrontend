import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import ProfilePage from "./pages/ProfilePage.js";
import Assessments from "./pages/AssesmentsPage.js";
import Catalogue from "./pages/CataloguePage.js";
import Calendar from "./pages/CalendarPage.js";
import Layout from "./layouts/Layout.jsx";
import CoursesPage from "./pages/CoursesPage.js";
import HomePage from "./pages/HomePage.js";
import { Provider } from "react-redux";
import { store } from "./store.js";
import PPage from "./pages/PPage.js";
import ProfileEdit from "./components/profileEdit/ProfileEdit.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/profilim" element={<PPage />} />
      <Route path="/degerlendirmeler" element={<Assessments />} />
      <Route path="/katalog" element={<Catalogue />} />
      <Route path="/takvim" element={<Calendar />} />
      <Route path="/egitimlerim" element={<CoursesPage />} />
      <Route path="/profilim/profilimi-duzenle/*" element={<ProfileEdit />} />
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
