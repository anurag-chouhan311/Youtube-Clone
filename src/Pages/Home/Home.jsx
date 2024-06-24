import { useContext, useState } from "react";
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import { prov } from "../../App";

const Home = ({ sidebar }) => {
  // const [category, setCategory] = useState(0);
  const {category}= useContext(prov)
  const{setCategory}=useContext(prov)
  return (
    <>
    
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
