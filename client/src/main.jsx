import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx'
import MainPage from './pages/MainPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HotelsPage from './pages/HotelsPage.jsx';
import DetailsCardPage from "./pages/DetailsCardPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/hotels",
        element: <HotelsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/hotels/:hotelId",
        element: <DetailsCardPage />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
