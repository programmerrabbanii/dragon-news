import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";

const MainLayOut = () => {
    return (
        <div>
             <header className="w-11/12 mx-auto">
             <Header></Header>
             <LatesNews></LatesNews>
             </header>
             <nav>

             </nav>
             <main></main>
             <footer></footer>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;