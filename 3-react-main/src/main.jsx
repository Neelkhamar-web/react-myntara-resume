import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import mystore from "./store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
