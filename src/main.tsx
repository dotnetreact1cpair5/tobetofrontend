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
import Profile from "./pages/ProfilePage.js";
import Assessments from "./pages/AssesmentsPage.js";
import Catalogue from "./pages/CataloguePage.js";
import Calendar from "./pages/CalendarPage.js";
import Layout from "./layouts/Layout.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
