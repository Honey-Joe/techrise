import  ReactDOM  from "react-dom/client";
import "./index.css"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer.jsx/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventDetails from "./components/EventDetails/EventDetails";
import EventDeatailsCard from "./components/EventDetails/EventDeatailsCard";

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
    path:"/ev",
    element:<EventDeatailsCard></EventDeatailsCard>
  },
  
 
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);