import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Aboutus from "./routes/Aboutus";
import Allergy from "./routes/Allergy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/menu",
      element : <Menu />

    },
    {
      path: "/service",
      element: <Service />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/aboutus",
      element: <Aboutus />
    },
    {
      path: "/allergy",
      element: <Allergy />
    }
  ])
  
  return (
    <RouterProvider router={router}>
      <div className="app">
        hero
        
      </div>

    </RouterProvider>
  )
}

export default App;