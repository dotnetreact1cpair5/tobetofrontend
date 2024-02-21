import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Assessments from "./pages/AssesmentsPage.js";
import Catalogue from "./pages/CataloguePage.js";
import Calendar from "./pages/CalendarPage.js";
import Layout from "./layouts/Layout.jsx";
import CoursesPage from "./pages/CoursesPage.js";
import HomePage from "./pages/HomePage.js";
import ProfilePage from "./pages/ProfilePage.js";
import LoginPage from "./pages/LoginPage.js";
import PrivateRoutes from "./utils/PrivateRoutes.js";
import CourseDetailsPage from "./pages/CourseDetailsPage.js";

import { Provider } from "react-redux";
import { persistor, store } from "./store.js";
import { PersistGate } from "redux-persist/lib/integration/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profilim" element={<ProfilePage />} />
          <Route path="/degerlendirmeler" element={<Assessments />} />
          <Route path="/katalog" element={<Catalogue />} />
          <Route path="/takvim" element={<Calendar />} />
          <Route path="/egitimlerim" element={<CoursesPage />} />
          <Route
            path=":name/:courseid/coursedetails"
            element={<CourseDetailsPage />}
          />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
