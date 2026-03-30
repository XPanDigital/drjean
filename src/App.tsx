/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Especialidades } from "./pages/Especialidades";
import { Galeria } from "./pages/Galeria";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "especialidades",
        element: <Especialidades />,
      },
      {
        path: "galeria",
        element: <Galeria />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

