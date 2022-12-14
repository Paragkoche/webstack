import "./App.css";
import Navbar from "./components/Navbar";
import NotFount from "./Page/NotFound/404"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Page/Home/Home";
import Footer from "./components/Footer";
import ContactUs from "./Page/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<NotFount/>
  },
  {
    path:"/contact",
    element:<ContactUs/>,
    errorElement:<NotFount/>
  }
]);
function App() {
  return <>
  <Navbar />
  <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<ContactUs/>}/>
  <Route path="/**" element={<NotFount/>}/>
    
  
  </Routes>
  {/* <RouterProvider router={router} /> */}
  <Footer/>
  </>
  ;
}

export default App;
