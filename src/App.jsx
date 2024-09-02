import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Stores from "./pages/Stores";
import Items from "./pages/Items";
import Deliveries from "./pages/Items";
import Offers  from "./pages/Items";
import Users from "./pages/Users";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SlideContext from "./Context/SlidebarContext";


function App() {

  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState();
  const [openButton, setOpenButton] = useState(true)

  useEffect(() => {
    if (isTabletMid) {
      setOpenButton(false);
    } else {
      setOpenButton(true);
    }
  }, [isTabletMid]);

  return (
    <SlideContext.Provider value={{open, setOpen, isTabletMid, openButton, setOpenButton}}>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="stores" element={<Stores/>}/>
        <Route path="items" element={<Items/>}/>
        <Route path="deliveries" element={<Deliveries/>}/>
        <Route path="offers" element={<Offers/>}/>
        <Route path="Users" element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </SlideContext.Provider>
  );
}

export default App;
