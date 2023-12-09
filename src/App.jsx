import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Countries from "./components/Countries";
import {loader as countriesLoader} from "./pages/Home";
import Region, {loader as regionLoader} from "./pages/Region";
import Error from "./ui/Error";
import Country, {loader as countryLoader} from "./pages/Country";
import PerCountry, {loader as codeLoader} from "./pages/PerCountry";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: countriesLoader,
      },
      {
        path: "/region/:regionName",
        // element: <Home />,
        element: <Region />,
        loader: regionLoader,
      },
      {
        path: "/name/country",
        element: <Country />,
        loader: countryLoader,

        // element: <GameOver />,
      },
      {
        path: "/alpha/:col",
        element: <PerCountry />,
        loader: codeLoader,
      },

      {
        path: "/difficult",
        // element: <DifficultHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
