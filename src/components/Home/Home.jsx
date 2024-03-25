import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-work-sans">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;