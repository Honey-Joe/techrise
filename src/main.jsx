import  ReactDOM  from "react-dom/client";
import "./index.css"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer.jsx/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventDetails from "./components/EventDetails/EventDetails";


const Applayout = ()=>{
  return(
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}
const  appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout></Applayout>
  },
  {
    path:"/event/:id",
    element:<EventDetails></EventDetails>
  }
  
 
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);