import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
export const prov = createContext();
const App = () => {
  const [category, setCategory] = useState(0);
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <prov.Provider value={{ category, setCategory }}>
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </prov.Provider>
    </div>
  );
};

export default App;
