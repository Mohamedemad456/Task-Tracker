import Features from "./Components/Features";
import SideBar from "./Components/SideBar";
import NavLayout from "./Layout/NavLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SideBarLayout from "./Layout/SideBarLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route path="/" element={<SideBarLayout/>}>
        <Route path="features" element={<Features/>} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
